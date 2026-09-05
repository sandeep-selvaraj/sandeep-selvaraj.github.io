#!/usr/bin/env node
/*
 * Encrypt an HTML file into a self-contained password-gated page.
 *
 *   node scripts/encrypt-page.js <source.html> <output/index.html> [--pass <passphrase>]
 *
 * If --pass is omitted, PASSPHRASE env var is used, else you are prompted.
 * The output file contains only AES-256-GCM ciphertext + an inline WebCrypto
 * decryptor. The passphrase is never written anywhere.
 */
const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

const ITER = 250000;

function arg(name) {
  const i = process.argv.indexOf(name);
  return i !== -1 ? process.argv[i + 1] : undefined;
}

const src = process.argv[2];
const out = process.argv[3];
if (!src || !out) {
  console.error('usage: node scripts/encrypt-page.js <source.html> <output/index.html> [--pass <passphrase>]');
  process.exit(1);
}

let pass = arg('--pass') || process.env.PASSPHRASE;
if (!pass) {
  try {
    pass = fs.readFileSync('/dev/stdin', 'utf8').trim();
  } catch (_) {}
}
if (!pass) {
  console.error('No passphrase given (--pass, PASSPHRASE env, or stdin).');
  process.exit(1);
}

const plaintext = fs.readFileSync(src);
const salt = crypto.randomBytes(16);
const iv = crypto.randomBytes(12);
const key = crypto.pbkdf2Sync(pass, salt, ITER, 32, 'sha256');
const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
const enc = Buffer.concat([cipher.update(plaintext), cipher.final()]);
const tag = cipher.getAuthTag();

// layout: salt(16) | iv(12) | ciphertext | tag(16)  -> WebCrypto expects ciphertext||tag
const payload = Buffer.concat([salt, iv, enc, tag]).toString('base64');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex,nofollow">
<title>Protected</title>
<style>
  body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;
    font:400 15px/1.5 -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;background:#f5f4f2;color:#1a1a1a}
  form{display:flex;flex-direction:column;gap:12px;width:min(320px,86vw)}
  h1{font-size:15px;font-weight:600;margin:0 0 4px}
  input{padding:10px 12px;border:1px solid #bbb;border-radius:6px;font-size:15px}
  button{padding:10px 12px;border:0;border-radius:6px;background:#1a1a1a;color:#fff;font-size:15px;cursor:pointer}
  .err{color:#b00020;font-size:13px;min-height:16px}
</style>
</head>
<body>
<form id="f">
  <h1>This page is protected</h1>
  <input id="p" type="password" autocomplete="current-password" placeholder="Passphrase" autofocus>
  <button type="submit">Unlock</button>
  <div class="err" id="e"></div>
</form>
<script>
const PAYLOAD = "${payload}";
const ITER = ${ITER};
const b2u = s => Uint8Array.from(atob(s), c => c.charCodeAt(0));
document.getElementById('f').addEventListener('submit', async ev => {
  ev.preventDefault();
  const e = document.getElementById('e');
  e.textContent = 'Decrypting…';
  try {
    const raw = b2u(PAYLOAD);
    const salt = raw.slice(0, 16), iv = raw.slice(16, 28), data = raw.slice(28);
    const base = await crypto.subtle.importKey('raw', new TextEncoder().encode(document.getElementById('p').value),
      'PBKDF2', false, ['deriveKey']);
    const key = await crypto.subtle.deriveKey(
      { name: 'PBKDF2', salt, iterations: ITER, hash: 'SHA-256' },
      base, { name: 'AES-GCM', length: 256 }, false, ['decrypt']);
    const buf = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, data);
    const doc = new TextDecoder().decode(buf);
    document.open(); document.write(doc); document.close();
  } catch (_) {
    e.textContent = 'Wrong passphrase.';
  }
});
</script>
</body>
</html>
`;

fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, html);
console.log('wrote', out, '(' + html.length + ' bytes,', ITER, 'PBKDF2 iters)');
