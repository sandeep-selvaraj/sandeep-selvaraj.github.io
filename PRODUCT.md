# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, both confirmed:

- **Hiring managers and recruiters**, mainly German/EU teams hiring for Machine Learning, Applied-AI / LLM and MLOps engineer roles. They usually arrive from a CV, cover letter or LinkedIn profile and want to quickly judge depth, range and fit.
- **The owner's personal home on the web.** It holds side projects, writing (e.g. F1/sports posts) and hobbies. Some visitors are peers, friends or people who find the open-source projects.

## Product Purpose

The personal site of Sandeep Selvaraj, a Machine Learning Engineer based in Dresden, Germany. It should show both his skills and his personality: what he builds and how, plus who he is outside work. Success means a hiring manager leaves convinced of his technical range and has a sense of the person behind it, and the site still feels like his own place, not a generic CV page.

## Positioning

**Ships ML end to end.** One engineer covers the whole path:
- low-level model work (PyTorch, Transformers, custom document-extraction models, LoRA/quantization on limited hardware)
- orchestration and MLOps (Dagster, DVC, MLflow)
- deployed microservices and self-hosted LLMs (vLLM)

The experience entries and open-source tools (Fuse, Pascal, Hafermilch) are the evidence for this claim. Document AI and the robotics research are supporting depth, not the headline.

## Operating Context

- Visitors usually come from an application (CV, cover letter) or LinkedIn and scan quickly, often on a laptop during screening.
- Content lives in `public/content.json` (hero, about, education, experience, projects, blog, socials). The repo also has a content editor at `public/s3lvaraj-edit.html`.
- Project pages for Hafermilch, Pascal and Fuse live at their own `sandeep-selvaraj.github.io/<project>/` subpaths.

## Capabilities and Constraints

- **Static only:** Astro 5, deployed to GitHub Pages via `.github/workflows/deploy.yml`. The public site has no server runtime.
- **Job-search tooling stays private.** The job tracker (`scripts/job-tracker-server.js`, `public/job-tracker.html`, `jobs.db`), the CV and cover-letter generators, `applications/`, `config/` and the German assessment page are personal tools. They must never be linked from or surfaced as public site features.
- Sections today: Hero, About (with Experience and Education), Projects, Blog, Connect, Footer.
- Undecided: whether the blog grows into full posts (the only post is currently a "WIP" stub).

## Evidence on Hand

- Experience at elevait GmbH (ML Engineer, 2024–present; Werkstudent, 2022–2024) and Cognizant (SDE, 2020–2022), all in `public/content.json`.
- Education: M.Sc. Computational Modelling and Simulation, TU Dresden (thesis OmniGrasp). Paper: *Learning to Play Piano in the Real World* (arXiv 2503.15481). B.E. Mechatronics, VTU.
- Open-source projects: Hafermilch, Pascal (Rust), Fuse, Smart-bomberman.
- Resume source: `applications/sandeep-resume.md` / `.pdf`.
- Absent, so never fabricate: testimonials, employer endorsements, metrics or impact numbers not in content.json, client logos, press.

## Product Principles

1. **Proof over adjectives.** Show the end-to-end claim through real roles, stacks and projects, not self-description.
2. **A person, not a résumé.** Personality (sports, guitar, robotics, humour) is part of the product, not filler.
3. **Fast to scan for a screener.** A hiring manager should get role, range and contact within seconds.
4. **Public site, private tools.** Job-search tooling never leaks into the public surface.
