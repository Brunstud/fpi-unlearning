# BUILD_WEBSITE.md — Detailed Codex Task Specification

## 0. Mission

Build a polished, single-page static academic website for:

**On the Recoverability of Private Information Unlearning in Large Language Models**

The website is a dedicated paper/project page, not the research code repository.

Target repository:
`https://github.com/<USERNAME>/fpi-unlearning`

Target GitHub Pages URL:
`https://<USERNAME>.github.io/fpi-unlearning/`

The site's central message should be immediately understandable:

> **Forgotten ≠ Erased.**

The page should make a researcher understand, in order:

1. why PI unlearning is a distinct and important setting,
2. why ordinary output-based evaluation can be insufficient,
3. what white-box auditing asks,
4. how FPI enables controlled evaluation,
5. how RIG/RG probe recoverability,
6. what the main experiments show.

The site should feel like a strong academic project page in the same family as TOFU:
clean, centered, content-first, figure-driven, restrained, and easy to navigate.

Do not copy TOFU's source code or text. Learn from its academic structure and simplicity.

---

## 1. Inspect before implementing

Before writing code:

1. Read `AGENTS.md`.
2. Read this file fully.
3. Recursively inspect `assets/`.
4. Read the paper PDF:
   `assets/paper/LLM_Unlearning___COLM_2026_Conference_Submission.pdf`
5. Extract/inspect the paper text as needed.
6. Inspect every figure and determine what it actually contains.
7. Inspect all icons/logos.
8. Build an internal content map from:
   - paper section,
   - scientific claim,
   - relevant figure,
   - intended website section.

Do not rely only on filenames.

### Known supplied assets

Paper:
- `assets/paper/LLM_Unlearning___COLM_2026_Conference_Submission.pdf`

Dataset figure:
- `assets/figures/FPI.png`
- `assets/figures/FPI.pdf`

Core results:
- `assets/figures/unlearning_overview_horizontal.pdf`
- `assets/figures/unlearning_overview_horizontal-Qwen.pdf`
- `assets/figures/unlearning_blood_type.pdf`

Unlearning / recovery trajectories:
- `assets/figures/combined_trajectory.pdf`
- `assets/figures/GD-blood type-IBS-traj.pdf`
- `assets/figures/GD-postcode-IBS-traj.pdf`
- `assets/figures/GD-social insurance number-IBS-traj.pdf`
- `assets/figures/GD-year of birth-RIG-traj.pdf`

Beam / alternative auditing:
- `assets/figures/beam_traj.pdf`
- `assets/figures/beam_traj_pcd.pdf`
- `assets/figures/beam_traj_sin.pdf`

Learning-rate ablations:
- `assets/figures/lr_blood.pdf`
- `assets/figures/lr_postcode.pdf`
- `assets/figures/lr_sin.pdf`
- `assets/figures/lr_year.pdf`

Icons:
- `assets/icons/paper.png`
- `assets/icons/code.png`
- `assets/icons/dataset.png`
- `assets/icons/model.png`
- `assets/icons/bibtex.png`
- `assets/icons/privacy.png`
- `assets/icons/audit.png`
- `assets/icons/recovery.png`
- `assets/icons/fpi.png`

Branding:
- `assets/logos/fpi-logo.png`
- `assets/logos/favicon-128.png`
- `assets/logos/favicon-32.png`
- `assets/logos/favicon-16.png`

Reference sheet:
- `assets/reference/fpi-icon-logo-sheet.png`

### Asset rule

The paper figures are the scientific content. The decorative icon sheet is secondary.

Do not alter the scientific meaning of figures.

If browsers cannot display PDF figures conveniently:
- retain every original PDF,
- derive web-display PNG/WebP copies under e.g. `assets/figures/web/`,
- use a reproducible local conversion command if available,
- do not crop away axes, legends, annotations, or labels,
- preserve aspect ratio,
- use sufficient resolution for retina/HiDPI displays.

Prefer the supplied `FPI.png` directly rather than re-rendering `FPI.pdf` unless quality requires otherwise.

---

## 2. Scientific framing

The page must preserve the paper's actual framing.

The paper studies **private information (PI) unlearning** and whether information that appears forgotten has actually been erased.

Key concepts to explain accurately:

### 2.1 Motivation
LLMs may memorize sensitive/private information. Machine unlearning aims to selectively remove target information while preserving useful model capabilities.

The important evaluation problem is not merely:
"Does the model stop saying the answer under ordinary decoding?"

The stronger question is:
"Has the target information actually become irrecoverable?"

### 2.2 PI unlearning
The paper distinguishes PI unlearning from broader knowledge unlearning.

Private attributes are often:
- structured,
- uniquely defined,
- amenable to attribute-specific evaluation.

Examples in FPI include:
- year of birth,
- blood type,
- postcode,
- social insurance number (SIN).

Do not turn this section into a generic machine-unlearning survey.

### 2.3 White-box auditing
The auditor is given the unlearned model and knowledge defined by the paper's white-box setting. The goal is to test whether information intended to be erased remains recoverable.

Describe the threat/audit model exactly as the paper defines it. If uncertainty exists, quote/paraphrase conservatively from the paper rather than guessing.

### 2.4 FPI
The paper introduces the **Fake Private Information (FPI)** dataset because releasing real private information is inappropriate.

Verify the current paper before displaying numerical statistics.

Likely verified headline statistics include:
- 400 synthetic profiles,
- 6,400 QA pairs,
- four PI attributes.

Do not display a number unless verified.

### 2.5 Recovery
The paper's key auditing strategy is **Restricted Inverse Greedy (RIG)**.

Explain RIG intuitively:
- ordinary greedy decoding chooses high-probability tokens,
- some unlearning procedures can suppress target tokens into low-probability regions,
- RIG restricts the candidate space to attribute-relevant tokens,
- then probes low-likelihood tokens to test whether the target can be reconstructed.

The paper also uses **Restricted Greedy (RG)** in the appropriate setting, particularly for Preference Optimization behavior.

Do not say RIG and RG are interchangeable.

### 2.6 Results
The main result is not:
"RIG is a better decoder."

The scientific point is:
**high apparent forget quality under standard generation can coexist with substantial recoverability under white-box auditing.**

When presenting retraining from scratch, describe it according to the paper as the reference/gold-standard comparison.

Do not overclaim universal failure of every conceivable unlearning method.

---

## 3. Content hierarchy

The website should be one primary scrolling page.

Recommended order:

1. Header / compact navigation
2. Hero
3. The question: "Forgotten or merely hidden?"
4. FPI dataset
5. White-box auditing
6. RIG / RG recovery
7. Main results
8. What the results mean
9. Additional analyses
10. Resources
11. Citation
12. Footer

The reader should understand the contribution before reaching Additional Analyses.

---

## 4. Header / navigation

Create a compact academic navigation header.

Suggested anchor items:
- Overview
- FPI
- Auditing
- Recovery
- Results
- Resources

Behavior:
- subtle sticky header is acceptable if it improves navigation,
- do not make it visually heavy,
- use smooth scrolling only if `prefers-reduced-motion` is respected,
- active section highlighting is optional,
- mobile navigation must be simple and reliable.

Potential left-side brand:
small FPI mark + `FPI Unlearning`

Do not use the large FPI logo in a way that makes the page look like a commercial product.

---

## 5. Hero section

The hero must be academically restrained.

### Required content

Paper title:
**On the Recoverability of Private Information Unlearning in Large Language Models**

Short research statement:
**Forgotten ≠ Erased.**

Then 1–2 concise sentences that accurately summarize the paper.

A good direction, to be verified/rephrased against the paper:

"We study whether private information targeted by LLM unlearning is genuinely removed or merely suppressed under standard generation. Under white-box auditing, supposedly forgotten information can remain recoverable from output logits."

Do not use hype words like:
- groundbreaking,
- revolutionary,
- first-ever (unless the paper explicitly claims and it is appropriate),
- state-of-the-art without evidence,
- completely broken,
- guarantees.

### Author block
The paper is double-blind.

Therefore:
- do not infer authors,
- do not add institution names,
- either omit the author line entirely or render a subtle "Anonymous — under double-blind review" status only if scientifically/publicly appropriate,
- design the HTML so authors can later be added easily.

### Resource buttons
Use the supplied icons:
- Paper → `paper.png`
- Code → `code.png`
- Dataset → `dataset.png`
- Models → `model.png`
- BibTeX → `bibtex.png`

Buttons should look like academic project-page links:
- compact,
- rounded but not pill-heavy,
- subtle border,
- icon + label,
- natural hover/focus state.

Never invent URLs.

Suggested behavior:
- `Paper`: only link to the local PDF if intended for public use; otherwise show "Paper (coming soon)".
- `Code`: placeholder unless a verified public code URL exists.
- `Dataset`: if the repository or user-provided material contains the verified Hugging Face URL, use it; otherwise TODO.
- `Models`: hide or mark coming soon if not verified.
- `BibTeX`: scroll to citation if a verified citation exists; otherwise to citation placeholder.

Do not make disabled buttons look clickable.

---

## 6. Hero visual strategy

There is currently no dedicated overview figure.

Do NOT invent a complex fake scientific overview.

Instead, choose one of these tasteful approaches:

Preferred:
- use a clean editorial composition with the paper title, tagline, and a small restrained FPI logo,
- include a subtle two-column "Standard generation vs. white-box audit" conceptual card made only from text + icons, without fabricating model outputs.

Alternative:
- use `assets/figures/FPI.png` partially lower on the first viewport / immediately after hero, if it improves flow.

Do not put the dense four-panel main-results figure directly behind or beside the title.

The hero should breathe.

---

## 7. "Forgotten or merely hidden?" section

This is the conceptual bridge from motivation to auditing.

Use the supplied:
- `privacy.png`
- `audit.png`
- `recovery.png`

Possible visual pattern:
three small steps/cards:
1. Unlearn target PI
2. Standard decoding appears to forget
3. Audit internal logits for recoverability

Keep it minimal.

Do not fabricate a specific recovered SIN or example unless the paper explicitly provides it and you cite/label it as an example.

A highlighted research-question callout is appropriate:

**Does unlearning erase private information, or merely suppress it under standard decoding?**

This sentence should be prominent but not oversized.

---

## 8. FPI section

Anchor: `#fpi`

Use:
- `assets/icons/fpi.png`
- `assets/figures/FPI.png`

This section should be visually clear and relatively light.

### Include
- what FPI is,
- why synthetic PI is used,
- the four attributes,
- verified headline statistics.

Suggested compact stats row:
- 400 Synthetic Profiles
- 6,400 QA Pairs
- 4 PI Attributes
- 5 Evaluated Unlearning Methods (only if verified and contextually appropriate)

Use clean stat blocks, not glossy product cards.

### Attribute chips/cards
Year of Birth
Blood Type
Postcode
Social Insurance Number

Use text more than decoration.

### Figure
Place `FPI.png` as the central dataset-construction visual.

Make it:
- responsive,
- centered,
- max-width appropriate,
- with a concise caption based on the paper,
- clickable to view larger if useful.

Do not crop the image.

---

## 9. White-box auditing section

Anchor: `#auditing`

Use `audit.png` as a small section icon.

This section should answer:
- what access does the auditor have?
- what is being tested?
- why black-box output behavior is not sufficient for the paper's question?

If the paper includes a compact mathematical definition useful for readers, include at most one equation.

If MathJax is used:
- load it from a reputable CDN,
- keep page functional without it except equations,
- avoid introducing a framework.

Prefer prose + one concise threat-model panel.

A tasteful panel might list:
**Given**
- unlearned model,
- unlearning algorithm knowledge,
- relevant audit information specified in the paper.

**Goal**
- recover as much target PI as possible,
- distinguish suppression from actual removal.

Verify each item against the paper.

---

## 10. Recovery section

Anchor: `#recovery`

Use `recovery.png`.

Explain:
- standard greedy,
- restricted candidate space,
- RIG,
- RG,
- when each is used.

### Visual explanation
Create a lightweight HTML/CSS conceptual visualization rather than a new scientific figure:

Candidate tokens:
`1975  1976  ...  1987  ...  2005`

Then visually distinguish:
- greedy → high-probability candidate,
- inverse greedy → low-probability candidate inside the valid attribute space.

This must be clearly labeled as an **illustration**, not an experimental result.

Do not display fake probabilities.

If the paper's exact RIG equation is short and helps precision, add it below the intuition.

The visual style should match the supplied navy/blue/orange palette.

---

## 11. Main results section

Anchor: `#results`

This is the scientific centerpiece.

Primary asset:
`assets/figures/unlearning_overview_horizontal.pdf`

Convert to a web image if required, preserving all content.

Display it at generous width.

The figure contains four attribute panels and compares standard/original forget quality against audited results (RIG/RG) and the retrain reference. Verify the latest caption and interpretation against the paper.

### Headline
Use a neutral scientific headline such as:

**High apparent forget quality can mask substantial recoverability.**

Then a concise explanation.

Do not make the prose merely repeat the chart.

Explain:
- what the red bars represent,
- what RIG/RG bars represent,
- why downward audited forget quality matters,
- why retrain-from-scratch is informative.

### Numerical callout
At most one or two memorable numeric callouts may be used, only if verified from the latest paper.

Do not scatter many numbers around the page.

### Figure interaction
Optional:
- click to enlarge in a simple lightbox/dialog,
- keyboard accessible,
- escape closes,
- no carousel library.

---

## 12. "What this means" section

Immediately after main results, include a short interpretation box.

Possible core message:

**Successful suppression under standard generation is not sufficient evidence of information erasure.**

Use restrained emphasis.

Then 2–3 bullets or short statements:
- evaluation should include recoverability-oriented auditing,
- PI unlearning requires stronger evidence than refusal/wrong-answer behavior,
- retraining provides an important reference point.

Every point must be supported by the paper.

---

## 13. Additional analyses

This section should be secondary and optionally collapsible or organized into a clean grid.

Do not dump every figure at full width.

### Suggested groups

#### Cross-model replication
Use:
`unlearning_overview_horizontal-Qwen.pdf`

Explain that the main experiment is reproduced on Qwen3-8B if verified.

#### Unlearning dynamics
Use:
`combined_trajectory.pdf`

Potentially supplement with the GD attribute-specific trajectory PDFs only if they add information not already visible.

#### Learning-rate tradeoff
Use the four:
- `lr_blood.pdf`
- `lr_year.pdf`
- `lr_postcode.pdf`
- `lr_sin.pdf`

Display as a responsive 2×2 desktop grid / 1-column mobile layout.

Use one shared explanatory paragraph.

#### Alternative auditing / beam
Use:
- `beam_traj.pdf`
- `beam_traj_pcd.pdf`
- `beam_traj_sin.pdf`

Only include if the paper treats them as meaningful supporting evidence and the section does not become cluttered.

### Selection principle
The homepage should remain focused.

If there are too many figures:
- show 2–4 strongest additional analyses,
- create a "More analyses" disclosure or gallery below,
- do not let appendices overwhelm the main narrative.

---

## 14. Figure visual treatment

All paper figures should:
- sit on a clean white or very lightly tinted surface,
- have enough padding,
- not receive heavy shadows,
- use a hairline border only if it helps separation,
- include short captions,
- support high-DPI display.

For wide figures:
- allow the content column to expand to approximately 1200–1400 px,
- while keeping paragraph text closer to 720–850 px.

This distinction is important:
text should not become too wide merely because scientific figures are wide.

On mobile:
- never force unreadably tiny figures if avoidable,
- allow tap-to-enlarge,
- never introduce page-level horizontal scrolling.

---

## 15. Visual system

Use the supplied asset palette as inspiration, but make the website slightly more muted than the icon sheet.

Suggested CSS tokens derived from the assets:
- primary navy: `#163A78`
- accent blue: `#3B82F6`
- warm highlight: `#F59E0B`
- green: `#10B981`
- purple: `#8B5CF6`
- very light blue: `#EEF4FF`
- text: near-black slate
- page background: white / very subtle cool off-white

### Important
Do not use all accent colors everywhere.

Recommended:
- navy = structure/headings/links,
- blue = interactive accent,
- orange = selective emphasis for recovery / "not erased",
- green/purple = rare supporting accents,
- white/off-white = dominant surfaces.

### Typography
Prioritize natural academic readability.

Use:
- a strong system sans stack or a small, high-quality web-font dependency if necessary,
- no decorative futuristic font,
- no monospace body text.

Suggested scale:
- body: 17–18px desktop,
- body line-height: ~1.65–1.75,
- h1 responsive roughly 42–60px,
- section h2 roughly 30–38px,
- captions 14–15px.

Use `clamp()` for responsive type if appropriate.

### Spacing
Generous but not extravagant:
- desktop section vertical padding roughly 72–110px,
- mobile roughly 48–72px.

Align all sections to a consistent grid.

---

## 16. Naturalness / anti-template rules

The page MUST NOT look like an auto-generated SaaS landing page.

Avoid:
- repeated rounded card grids for every section,
- huge gradient hero blobs,
- floating glass panels,
- generic "AI" neural-network backgrounds,
- excessive emoji,
- dramatic shadows,
- call-to-action marketing phrases,
- testimonial-like components,
- fake logos,
- animated counters,
- scroll-jacking,
- parallax,
- automatic carousels.

Use cards only where they have semantic value:
- resource links,
- dataset stats,
- conceptual steps.

Prefer normal academic prose + figures.

---

## 17. Icons and logo

Use the supplied icons rather than third-party icon libraries where reasonable.

### Top resource icons
- `paper.png`
- `code.png`
- `dataset.png`
- `model.png`
- `bibtex.png`

### Scientific section icons
- `privacy.png`
- `audit.png`
- `recovery.png`
- `fpi.png`

### Logo
- `fpi-logo.png`

Use the full logo sparingly:
- hero corner/brand lockup OR footer,
- not both at giant scale.

Use favicon:
- `favicon-32.png` or appropriate PNG.

Do not place institution logos because none are supplied and double-blind constraints apply.

---

## 18. Resource links

Never invent links.

Create a single clearly editable resource configuration in the HTML or JS comments, e.g.:

Paper: local/placeholder
Code: TODO
Dataset: TODO unless verified
Models: TODO
Citation: TODO

If unavailable, render:
"Coming soon"
or omit the button.

Do not use `href="#"` for disabled resources because it feels broken.

---

## 19. Citation

The paper is currently under review and anonymous.

If there is no verified public BibTeX:
show:

**Citation**
"BibTeX will be added after the public paper release."

Do not fabricate author names or venue status.

If the paper itself contains a self-citation BibTeX for this work, still ensure it is appropriate under double-blind review before exposing it.

---

## 20. Footer

Minimal.

Potential content:
- `FPI Unlearning`
- short phrase: `Private-information unlearning under white-box auditing`
- optional "Academic project page"

Do not include personal names or affiliation.

Avoid clutter.

---

## 21. Required files

Build at least:

- `index.html`
- `style.css`
- `script.js` only if useful
- `.nojekyll`
- `README.md`

Retain:
- `assets/`
- `.codex/`
- `AGENTS.md`

Do not create unnecessary framework files.

---

## 22. README.md for this website repo

The README should be short and operational.

Include:
- this repo hosts the static project page,
- local preview:
  `python -m http.server 8000`
- deployment target:
  `https://<USERNAME>.github.io/fpi-unlearning/`
- figures are under `assets/figures/`,
- paper content is under `assets/paper/`,
- GitHub Pages deploys from `main` root,
- note that authors/resource URLs are intentionally omitted/TODO while double-blind constraints apply.

Do not duplicate the full scientific content in README.

---

## 23. GitHub Pages constraints

The site is a **project site**, so it runs under a path prefix:

`/fpi-unlearning/`

Use relative paths:
`assets/icons/paper.png`

Do NOT use root-absolute paths:
`/assets/icons/paper.png`

Verify:
- favicon,
- CSS,
- JS,
- figures,
- local paper link,
all work under a subpath.

No build step should be required.

---

## 24. Accessibility

Required:
- semantic landmarks,
- one h1,
- hierarchical headings,
- meaningful alt text,
- keyboard focus indicators,
- accessible link/button semantics,
- sufficient contrast,
- `prefers-reduced-motion`,
- dialog/lightbox keyboard behavior if implemented,
- no information conveyed by color alone.

Figure alt text should summarize the scientific role, not simply say "Figure 1".

---

## 25. Performance

Keep the site lightweight.

- lazy-load below-fold figure images,
- reserve image dimensions/aspect ratios where possible to reduce layout shift,
- no heavy JS,
- no framework bundle,
- optimize derived web images without destroying labels,
- use SVG/PNG favicon locally,
- no unnecessary tracking/analytics.

---

## 26. Metadata

Add:
- `<title>` = paper title,
- concise meta description,
- viewport,
- theme-color,
- Open Graph title/description,
- favicon.

If no suitable OG image exists, use a simple local scientific/brand image only if it previews well. Do not invent a social-card image unless needed.

Do not add author metadata during double-blind review.

---

## 27. Responsive QA

Test at least:
- 1440×900
- 1024×768
- 768×1024
- 390×844
- 375×667

Check:
- no horizontal overflow,
- hero title wraps naturally,
- buttons wrap,
- nav is usable,
- FPI figure is readable,
- main-results figure does not break layout,
- 2×2 analysis grids collapse cleanly,
- captions stay attached to figures,
- section spacing is not excessive on mobile.

If Playwright/browser tooling is available, take screenshots and inspect them before finishing.

---

## 28. Scientific QA checklist

Before finishing, verify against the paper:

- exact title,
- PI terminology,
- FPI expansion,
- four attributes,
- dataset statistics,
- number of evaluated unlearning methods,
- RIG definition,
- RG usage,
- white-box audit assumptions,
- DeepSeek/Qwen model names,
- interpretation of forget quality,
- interpretation of retrain-from-scratch,
- any numeric result displayed.

If unsure:
remove the number or phrase more conservatively.

---

## 29. Visual QA checklist

Ask yourself:

- Does this look like an academic research page, not a startup homepage?
- Is the first viewport calm and legible?
- Is "Forgotten ≠ Erased" memorable without being sensational?
- Are the FPI icons supportive rather than childish/oversized?
- Is the scientific figure the visual centerpiece of Results?
- Are text widths comfortable?
- Is there enough whitespace?
- Are repeated cards becoming monotonous?
- Are accent colors restrained?
- Does every section have a clear reason to exist?
- Can a reader understand the paper without reading every paragraph?

Refine until yes.

---

## 30. Implementation workflow

Perform the task in this order:

### Phase A — inspect
- inspect tree,
- inspect paper,
- inspect every asset,
- map figures to sections.

### Phase B — content plan
Before implementation, write a short plan to yourself:
- section order,
- figure mapping,
- resource TODOs,
- anonymity-sensitive omissions.

### Phase C — first implementation
Build:
- semantic HTML,
- core CSS,
- minimal JS.

### Phase D — asset preparation
Convert necessary PDFs to web images while preserving originals.

### Phase E — local preview
Run:
`python -m http.server 8000`

### Phase F — browser review
If available:
- inspect desktop,
- inspect mobile,
- inspect main-results figure,
- inspect navigation and lightbox.

### Phase G — refine
Fix:
- typography,
- vertical rhythm,
- visual hierarchy,
- figure scale,
- mobile behavior,
- accessibility.

### Phase H — validate
Check:
- local links,
- relative paths,
- no identity leaks,
- no invented claims,
- no console errors,
- no broken images.

---

## 31. Final response to user

When the build is complete, report concisely:

1. files created/modified,
2. final section order,
3. figure-to-section mapping,
4. resource links that remain TODO,
5. double-blind-sensitive content omitted,
6. validation performed,
7. exact GitHub Pages deployment steps.

Do not dump all source code into the response.
The implementation should live in the repository.
