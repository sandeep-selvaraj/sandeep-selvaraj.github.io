---
name: Sandeep Selvaraj
description: A life read as a race weekend's live timing. Dark broadcast graphics, one start-light red.
colors:
  asphalt: "#121316"
  asphalt-2: "#1a1c20"
  asphalt-3: "#24272d"
  kerb: "#30343b"
  ink: "#f1f1ee"
  muted: "#b3b6bc"
  faint: "#9a9ea6"
  signal-white: "#ffffff"
  red: "#e3121b"
  red-deep: "#b80d15"
  red-lit: "#ff2a2f"
  purple: "#b98cff"
  green: "#36d873"
  yellow: "#ffd23f"
typography:
  display:
    fontFamily: "Saira, 'Arial Narrow', Arial, sans-serif"
    fontSize: "clamp(3.6rem, 0.4rem + 12.6vw, 12.5rem)"
    fontWeight: 800
    lineHeight: 0.84
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 58"
  headline:
    fontFamily: "Saira, 'Arial Narrow', Arial, sans-serif"
    fontSize: "clamp(2.4rem, 1.7rem + 3.4vw, 4.8rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 62"
  title:
    fontFamily: "Saira, 'Arial Narrow', Arial, sans-serif"
    fontSize: "clamp(1.6rem, 1.3rem + 1.4vw, 2.6rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 62"
  timing:
    fontFamily: "Saira, 'Arial Narrow', Arial, sans-serif"
    fontSize: "clamp(1.2rem, 1.08rem + 0.55vw, 1.55rem)"
    fontWeight: 800
    lineHeight: 1.2
    fontVariation: "'wdth' 62"
  lead:
    fontFamily: "Saira, 'Arial Narrow', Arial, sans-serif"
    fontSize: "clamp(1.2rem, 1.08rem + 0.55vw, 1.55rem)"
    fontWeight: 600
    lineHeight: 1.35
    fontVariation: "'wdth' 100"
  body:
    fontFamily: "Saira, 'Arial Narrow', Arial, sans-serif"
    fontSize: "clamp(1.02rem, 0.97rem + 0.25vw, 1.15rem)"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "'tnum' 1"
    fontVariation: "'wdth' 100"
  label:
    fontFamily: "Saira, 'Arial Narrow', Arial, sans-serif"
    fontSize: "clamp(0.84rem, 0.8rem + 0.18vw, 0.95rem)"
    fontWeight: 700
    letterSpacing: "0.08em"
    fontVariation: "'wdth' 100"
rounded:
  none: "0px"
  gantry: "6px"
spacing:
  gutter: "clamp(1rem, 0.6rem + 2vw, 2.5rem)"
  section: "clamp(4.5rem, 10vw, 8rem)"
  stint: "clamp(1.75rem, 3.5vw, 2.5rem)"
  slant: "10px"
  nav-height: "60px"
  container: "1360px"
components:
  button-primary:
    backgroundColor: "{colors.red}"
    textColor: "{colors.signal-white}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1.6rem 0.7rem 1.35rem"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.red-lit}"
    textColor: "{colors.signal-white}"
  channel:
    backgroundColor: "{colors.signal-white}"
    textColor: "{colors.asphalt}"
    rounded: "{rounded.none}"
    padding: "0.8rem 1.8rem 0.8rem 1.5rem"
    height: "56px"
  channel-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.asphalt}"
  code-block:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.asphalt}"
    rounded: "{rounded.none}"
    padding: "0.12em 0.55em 0.08em 0.45em"
  tower-row:
    backgroundColor: "{colors.asphalt-2}"
    textColor: "{colors.ink}"
    padding: "0.55rem 1rem 0.55rem 0"
  tower-row-hover:
    backgroundColor: "{colors.asphalt-3}"
  tower-position:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.asphalt}"
    typography: "{typography.timing}"
    width: "2.6rem"
  tower-position-current:
    backgroundColor: "{colors.purple}"
    textColor: "{colors.asphalt}"
  pill:
    backgroundColor: "{colors.asphalt-3}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.2rem 0.85rem 0.2rem 0.7rem"
  term:
    backgroundColor: "{colors.asphalt-3}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.25rem 0.9rem 0.25rem 0.75rem"
    height: "36px"
  term-hover:
    backgroundColor: "{colors.kerb}"
  term-pressed:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.asphalt}"
  radio-tag:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.asphalt}"
    typography: "{typography.label}"
    padding: "0.5rem 0.9rem 0.5rem 0.75rem"
  contact-field:
    backgroundColor: "{colors.red-deep}"
    textColor: "{colors.signal-white}"
    padding: "clamp(4.5rem, 10vw, 8rem) 0"
  nav-link:
    textColor: "{colors.muted}"
    typography: "{typography.label}"
    padding: "0.5rem 0.8rem"
  nav-link-active:
    textColor: "{colors.ink}"
---

# Design System: Sandeep Selvaraj

## Overview

**Creative North Star: "Lights Out"**

The site is a personal home read as a race weekend's live timing screen. Career is a timing tower of stints, education is the academy, projects are machines in the garage, writing is paddock notes, and the close is a red team-radio field over a chequered line. The world is flat broadcast graphics on asphalt: square plates, forward-leaning parallelogram cuts, condensed italic numerals and hard rules. Nothing glows, nothing floats, nothing casts a shadow.

Density follows a timing sheet. Rows are tight, separated by 1px kerb lines, and headed by a 3px top rule. Display type is very loud (the name runs at up to 12.5rem in extra-condensed italic). Body copy is calm, normal-width and muted, so the loud voice only lands on names, positions and times. Colour carries meaning instead of decoration: the timing-screen sector colours mean what they mean on a real screen, and start-light red is kept for the action and the radio.

The site is dark-only. It has no light theme or theme toggle (`color-scheme: dark`, `theme-color` #121316). No team, F1 or FOM marks, liveries or logos appear anywhere; the world borrows the broadcast grammar, not anyone's brand.

**Key Characteristics:**
- Asphalt ground with timing-white ink and three tonal plates. Kerb-line dividers, no shadows.
- One typeface, Saira, used across its width axis: 58-62% italic for the display voice, 100% upright for reading.
- Forward-leaning slanted cuts on every plate that is a tag, position or action.
- Sector colours as semantics: purple = current or personal best, green = shipped, yellow = in progress.
- Start-light red for the primary action, live timing rules and the contact field.
- One authored motion: the lights-out launch.

## Colors

The palette is a night broadcast: near-black asphalt, warm off-white timing ink, and saturated signal colours used only where they carry meaning.

### Primary
- **Start-Light Red** (`red`): The primary action ("Radio in"), the surname in the hero, the lit lamps of the gantry, the 3px top rule on live timing data (hero tower, career stints), the skewed active-nav underline, the underline of text links and toggles, the `›` arrows in the end-to-end claim, and text selection.
- **Radio Red** (`red-deep`): The full-bleed contact field. It is a deeper red so a large field holds white text at reading size.
- **Lit Red** (`red-lit`): Hover state of the primary button and the text caret. It is a state colour only.

### Secondary (sector colours)
- **Personal-Best Purple** (`purple`): Current or best. It marks the current stint's tower position plate, its time and its P-number on the career sheet. On the source data, a stint is current when its years read "present" or "now".
- **Shipped Green** (`green`): Done or shipped. It is reserved for the completed status mark (a skewed bar plus an uppercase label). No content currently uses it; the rule exists in the stylesheet for when a post or project ships.
- **In-Progress Yellow** (`yellow`): In progress (the "In progress" status on draft writing). It also serves as the keyboard focus ring (3px outline, 3px offset) and the skip-link plate. Those are utility roles, not decoration.

### Neutral
- **Asphalt** (`asphalt`): Page ground, nav bar, mobile menu and the dark squares of the chequered flag.
- **Pit Wall** (`asphalt-2`): The first raised plate: timing tower body and the radio greeting strip.
- **Garage Floor** (`asphalt-3`): The second plate. It is used for pills, terms, tower-row hover and the dividers inside the tower and menu.
- **Kerb** (`kerb`): 1px section and row dividers, the nav border, term hover, bullet ticks and the scrollbar thumb.
- **Timing White** (`ink`): Primary text, the inverted plates (SEL code, tower position, radio tag), the 3px top rule on reference sheets (profile spec, garage, notes) and the chequered flag.
- **Muted** (`muted`): Body prose, roles, descriptions and inactive nav links.
- **Faint** (`faint`): Uppercase labels and metadata: spec terms, stack label, section meta and non-current career positions.
- **Signal White** (`signal-white`): Pure white is used only on red: button text, contact-field text and the contact channel plates.

### Named Rules
**The Sector Meaning Rule.** Purple, green and yellow are semantic, never decorative. Purple means current or personal best, green means shipped, and yellow means in progress (or focus). If an element has no such status, it gets none of them.

**The Start-Light Rule.** Red belongs to the start light: the one primary action, live timing rules, link underlines and the radio field. Red never marks an error or a sector status, and no second accent hue competes with it.

## Typography

**Display Font:** Saira variable (wdth 50-125, wght 100-900, roman and italic files, self-hosted, OFL), falling back to Arial Narrow, then Arial.
**Body Font:** Saira at normal width (100%).

**Character:** One family split by its width axis. Extra-condensed heavy italic is the broadcast voice for names, positions and team names. Normal-width upright Saira is the voice of the person for reading. Tabular numerals are on site-wide so times align like a timing screen.

### Hierarchy
- **Display** (800 italic, 58% width, up to 12.5rem fluid, 0.84 line-height, uppercase): Used only for the hero name and the contact title "Radio in." The surname runs in red.
- **Headline** (800 italic, 62% width, 2.4-4.8rem, 0.9, uppercase): Section titles (About, Career, Projects, Writing) and career P-numbers. Project machine names use the same voice at 2.6-6rem.
- **Title** (800 italic, 62% width, 1.6-2.6rem, 0.9, uppercase): Stint roles, the Academy heading, note titles and mobile menu links.
- **Timing** (800 italic, 62% width, 1.2-1.55rem, uppercase): Team names and position numbers in the timing tower, the SEL code block and button labels (at 70-75% width).
- **Lead** (600, 100% width, 1.2-1.55rem, 1.35): The hero role line, the radio greeting (500 italic) and the profile headline (at step 2).
- **Body** (400, 100% width, 1.02-1.15rem, 1.6, tabular nums): Prose in muted, at 64-72ch maximum. `text-wrap: pretty` is applied to paragraphs, list items and definitions.
- **Label** (600-700, 0.84-0.95rem, 0.06-0.1em tracking, uppercase): Nav links, tower head, spec terms, stack label, section meta and status labels.

### Named Rules
**The Width Axis Rule.** Hierarchy is set by width, weight and slant, not by adding typefaces. Condensed italic (58-62%) is for things a timing screen would print: names, positions, teams, titles. Reading text stays at 100% width and upright. Never set a paragraph in the display voice.

**The Tabular Rule.** Numerals are tabular everywhere (`font-variant-numeric: tabular-nums` on the body) so years and positions line up in columns.

## Layout

The page is a single column of full-width bands inside a centred container (1360px max, fluid gutter). Each section opens with a heading row: the condensed title on the left, with optional uppercase meta pushed right on the same baseline. Content sits below a 3px top rule (red for live timing, ink for reference sheets). Sections are separated by a 1px kerb line and fluid vertical padding (4.5-8rem).

- **Hero:** Full viewport height (100svh) on a 7fr / 5fr grid. The start gantry spans the top. Below it, the name block with the SEL code sits on the left, and the timing tower sits on the right.
- **Profile:** 7fr prose and 5fr spec sheet (definition rows with an 8.5rem term column).
- **Stints and degrees:** A 5.5rem position/time column beside the content. Note rows use a 9rem meta column.
- **Garage:** Project rows at 5fr name and 7fr description.
- **Nav:** A fixed 60px bar. Anchor scrolling is offset by the nav height plus 1rem.

### Breakpoints
- **1000px and below:** The hero, profile and garage grids collapse to one column. The hero loses its full-viewport height. The tower drops below the name block (34rem max, 2.5rem above).
- **760px and below:** Inline nav links hide and the bordered "Menu" toggle appears (44px minimum). It opens a full-width drop panel of title-voice links with zero-padded faint numerals (01-05). Stint, degree and note rows stack to one column. The stint P-number steps down to title size. The spec term column narrows to 6.5rem. Note meta goes horizontal.
- **420px and below:** The nav keeps only the SEL code (the name text hides). In the hero, the SEL code stacks above the name.

## Elevation & Depth

The system is completely flat. It has no box-shadows, glows, blurs or gradients, apart from the chequered flag's conic pattern and the launch's transient motion blur. Depth comes only from tonal plates (asphalt, then pit wall, then garage floor), 1px kerb dividers and 3px top rules that cap a data block.

### Named Rules
**The Broadcast Flat Rule.** Surfaces never lift. A plate is distinguished by tone or by a hard rule, never by a shadow or glow. Hover changes tone or nudges position sideways. It never raises anything.

**The Top Rule Rule.** A data block opens with a 3px rule. It is red when the data is live timing (hero tower, career stints) and timing white when it is a reference sheet (profile spec, garage, notes).

## Shapes

Corners are square (0 radius) everywhere except the start gantry. The gantry is physical hardware, so its housing (6px) and lamp columns (4px) are softly rounded and the lamps are circles.

The signature shape is the **forward-leaning slanted cut**, a parallelogram made with `clip-path` that leans the same way as the italic:
- Full parallelogram, cut at both ends: primary button and contact channels (10px slant), the SEL code block (0.4em slant), pills and stack terms (6px slant).
- Trailing edge only: the radio tag (10px) and the tower position plate (8px), so they butt square against the row's left edge.
- Skewed bars (`skewX(-20deg)`): the 3px active-nav underline and the 4px status bar.

The chequered flag is a 28px conic checker of timing white and asphalt, 28px tall, full-bleed, between the contact field and the footer.

### Named Rules
**The Forward Lean Rule.** Every cut and skew leans forward, matching the italic. The top edge sits further right than the bottom. Never mirror a cut or mix lean directions.

## Components

### Buttons
Tactile like a pit-board, with a forward cut.
- **Primary ("Radio in"):** A red slanted parallelogram (10px cut), 48px minimum height, with signal-white 800 italic uppercase text at 75% width and 0.06em tracking. A square-capped arrow SVG trails the label. There is one per page.
- **Hover:** The plate turns lit red and slides 3px right (0.25s, expo-out).
- **Text link (secondary):** Ink, 600 weight, with a 2px red underline offset 0.3em. On hover, the underline turns ink.
- **Focus (all interactive elements):** 3px yellow outline at a 3px offset.

### Chips (pills and stack terms)
- **Pill (static):** A garage-floor plate with a 6px both-ends cut, label size and 600 weight. Used for focus areas and project tags.
- **Term (toggle button):** The same plate at a 36px minimum height. Hover turns it kerb. When pressed (`aria-pressed="true"`), it inverts to an ink plate with asphalt text.
- **Driver-select behaviour:** Selecting a term presses every term with that name on the sheet. It also lights every matching mention in the stint bullets by inverting the mention to an ink plate with asphalt text, like picking a driver on a timing screen. Unlit mentions are ink at 500 weight inside muted prose. They have no background and never use the browser's default mark yellow.

### Timing Tower
The hero's career-at-a-glance card. It is a pit-wall plate under a red 3px top rule, with an uppercase label head ("Classification" / "Career") above a kerb line. Each row is a link on a three-column grid: a 2.6rem position plate (timing-white, trailing 8px cut, condensed italic numeral), team in the timing voice over role in muted label size, and a right-aligned bold tabular time. The current stint's plate and time are purple. Rows are divided by garage-floor lines and turn garage-floor on hover.

### Stint and Degree Rows
The full timing sheet under a red top rule. Each **stint** has a 5.5rem column holding a "P1"-style position in the headline voice (faint, or purple for the current stint). Beside it are the role in the title voice, the time right-aligned (purple if current), and the team as a kerb-underlined link that turns red on hover. Then come muted bullets with 0.7rem × 2px kerb ticks (72ch max) and a "Stack" row of terms. **Degree** rows under "Academy" reuse the 5.5rem column for years. They carry the degree name (lead), school (muted) and fact lines with faint uppercase keys (Thesis, Paper, Result).

### Radio Line
The hero greeting is a team-radio strip. It is a pit-wall bar (34rem max) led by a timing-white tag that holds an inline antenna SVG and the uppercase word "Radio", squared on the left and cut on the right. The quoted greeting follows in 500 italic at lead size.

### Contact Radio Field
A full-bleed radio-red band. "Radio in." is set in the display voice in signal white, followed by a short lead and the channel plates. A channel is a signal-white slanted parallelogram (10px cut, 56px minimum height) with asphalt 800 italic uppercase text at 70% width and an inline brand SVG. On hover, it turns timing white and slides 4px right.

### Navigation
A fixed 60px asphalt bar with a kerb bottom line. The brand is the SEL code block plus the name in uppercase at 80% width. Links are uppercase labels in muted that turn ink on hover. The active section (scrollspy at the upper third, with Contact forced at page bottom) turns ink and gains a red 3px underline skewed -20deg. Below 760px, the links become the Menu toggle and drop panel (see Layout). The toggle inverts to an ink plate when expanded and closes on Escape.

### Start Gantry and Lights-Out Launch
Five lamp columns of two lamps each, in a near-black housing. Lamps are dark red when off and start-light red when on, switching in 0.06s, linear. This gantry is the page's only authored motion:
- **Sequence:** The lamps light one column at a time, 380ms apart, starting at 250ms. They hold for an unpredictable 350-800ms, then all go out together. As they go out, the name and SEL code launch in (0.9s, expo-out, from 0.12 opacity, -0.35em left, -6deg skew and a 10px blur that clears through 2px). The radio line, role, claim and actions settle up 10px (0.7s, 0.35s delay). Tower rows slide in from 28px right with a 70ms stagger, starting at 0.2s.
- **Skip:** Any keydown, pointerdown, wheel or touchmove jumps straight to lights out.
- **Once:** The launch runs once per session (`sessionStorage` key `sel-launched`).
- **Reduced motion:** The launch never arms. The page renders in its final state, and a global rule clamps every remaining animation and transition to 0.01ms.
- **Failsafe and no-JS:** Only an inline head script can hide content (via a `prelaunch` class), and that script removes the class after 4.5s even if the launch script never runs. Without JavaScript, everything is visible at rest.

### Status Mark
An uppercase label led by a skewed 1.4rem × 4px bar, both in the sector colour: yellow for in progress, green for shipped.

## Do's and Don'ts

### Do:
- **Do** set names, positions, team names and section titles in the condensed italic display voice (58-62% width, 800, uppercase), and keep all reading text at 100% width and upright.
- **Do** cut tags, positions and actions with the forward-leaning parallelogram (6px for chips, 8-10px for plates and buttons, 0.4em for the code block).
- **Do** use purple only for current or personal best, green only for shipped and yellow only for in progress or focus.
- **Do** open every data block with a 3px top rule: red for live timing, timing white for reference sheets.
- **Do** separate rows with 1px kerb lines and express depth with the asphalt plate steps only.
- **Do** keep the lights-out launch as the single authored motion, with its skip-on-input, once-per-session, reduced-motion and 4.5s failsafe rules intact.
- **Do** keep pure white on red only, and keep text on the asphalt plates in timing white, muted or faint.

### Don't:
- **Don't** add a light theme or a theme toggle. The site is dark-only.
- **Don't** add shadows, glows, blurs or gradients to surfaces. The only gradient is the chequered flag.
- **Don't** round corners outside the start gantry hardware.
- **Don't** use sector colours or red decoratively, or add a second accent hue.
- **Don't** add a second authored motion, scroll-triggered reveals or looping animation. Hover states stay limited to tone changes and short sideways nudges.
- **Don't** use team, F1 or FOM logos, liveries or marks.
- **Don't** add eyebrow or kicker labels above section titles. Section meta sits on the title's baseline, to the right.
- **Don't** mirror the slant or mix lean directions.
