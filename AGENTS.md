# AGENTS.md — FPI Unlearning Project Website

## Scope
These instructions apply to the entire repository.

## Goal
This repository is a static academic project page for the paper:

**On the Recoverability of Private Information Unlearning in Large Language Models**

The website should communicate the paper's core research question and results clearly, accurately, and with the restrained visual language of a strong ML/NLP academic project page.

The detailed build specification is in:

`.codex/BUILD_WEBSITE.md`

Before changing files, read that file in full and inspect every asset under `assets/`.

## Scientific accuracy
- Treat `assets/paper/LLM_Unlearning___COLM_2026_Conference_Submission.pdf` as the authoritative scientific source.
- Do not invent results, numbers, method descriptions, dataset statistics, citations, author identities, affiliations, URLs, or claims.
- Preserve the paper's terminology: private information (PI) unlearning, Fake Private Information (FPI), white-box auditing, Restricted Inverse Greedy (RIG), Restricted Greedy (RG), and the evaluated unlearning methods.
- If the paper and an asset filename appear inconsistent, trust the paper content, not the filename.
- Distinguish standard forget quality from audited/recovered forget quality precisely.
- Do not imply that apparent forgetting proves erasure.

## Double-blind / privacy constraints
- The supplied paper is under double-blind review.
- Do not infer or add author names, affiliations, personal homepages, emails, lab names, institutional logos, or personal social links.
- Do not expose local paths, usernames, cluster accounts, or metadata.
- Do not add a public-facing identity association that is not explicitly present in approved content.
- Keep identity/resource placeholders easy to update after review.
- Do not alter the scientific paper PDF.

## Technology
- Build a static GitHub Pages site.
- Prefer plain HTML + CSS + minimal vanilla JavaScript.
- No React, Vue, Next.js, npm build chain, backend, database, or large UI framework.
- No runtime dependency is required for production.
- Use relative asset paths so deployment works at `https://<USERNAME>.github.io/fpi-unlearning/`.
- An empty `.nojekyll` is acceptable.
- Keep JavaScript optional and progressive-enhancement only.

## Design
- Learn from the *genre* and information hierarchy of the TOFU project page, but do not copy its code, text, layout pixel-for-pixel, or branding.
- Academic, understated, natural, readable, and research-first.
- Avoid startup/marketing aesthetics, excessive gradients, glassmorphism, neon, giant cards, animated particles, decorative AI art, and unnecessary motion.
- Strong typography, generous whitespace, consistent content width, polished figure presentation, subtle accent colors.
- Reuse the supplied FPI icon/logo palette naturally; do not let icons dominate the scientific page.
- The visual emphasis should remain on the scientific figures and the core finding.

## Quality bar
The page must be:
- attractive at first glance,
- readable in 30 seconds,
- scientifically faithful,
- responsive on desktop/tablet/mobile,
- accessible,
- lightweight,
- free of broken anchors/assets/links,
- suitable to show next to project pages from strong NeurIPS/ICML/ICLR/COLM papers.

## Verification
Before finishing:
- inspect the final page with a local HTTP server,
- if browser/Playwright tools are available, render at desktop and mobile sizes and inspect screenshots,
- fix obvious spacing, overflow, typography, figure scaling, anchor, and contrast issues,
- verify all linked local files exist,
- verify every numeric scientific claim against the paper,
- report any unresolved TODOs.

Do not commit or push unless the user explicitly asks.
