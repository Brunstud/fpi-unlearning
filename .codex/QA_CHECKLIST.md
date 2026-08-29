# QA_CHECKLIST.md

Use this after the first build.

## Content
- [ ] Exact paper title matches PDF
- [ ] No author identity inferred
- [ ] No institution/lab identity inferred
- [ ] FPI description matches paper
- [ ] Dataset statistics verified
- [ ] RIG and RG descriptions verified
- [ ] Main result interpretation verified
- [ ] No unverified numeric callouts
- [ ] No invented resource URL

## Assets
- [ ] FPI.png used appropriately
- [ ] Main results figure displayed legibly
- [ ] Qwen figure is secondary, not the hero
- [ ] PDF-derived images preserve full axes/legends
- [ ] Icons are used sparingly
- [ ] FPI logo is not oversized
- [ ] Favicon works

## Design
- [ ] Academic, not SaaS-like
- [ ] Calm first viewport
- [ ] Strong hierarchy
- [ ] Comfortable text width
- [ ] Consistent spacing
- [ ] Accent colors restrained
- [ ] Scientific figures dominate results sections
- [ ] No gratuitous animation

## Responsive
- [ ] 1440px looks polished
- [ ] 1024px works
- [ ] 768px works
- [ ] 390px works
- [ ] 375px works
- [ ] No horizontal page overflow
- [ ] Wide figures can be enlarged

## Accessibility
- [ ] Semantic HTML
- [ ] One h1
- [ ] Alt text
- [ ] Keyboard focus visible
- [ ] Reduced-motion respected
- [ ] Lightbox/dialog keyboard accessible
- [ ] Contrast is sufficient

## GitHub Pages
- [ ] Relative paths only
- [ ] CSS loads under /fpi-unlearning/
- [ ] JS loads under /fpi-unlearning/
- [ ] Images load under /fpi-unlearning/
- [ ] .nojekyll included
- [ ] No build step required

## Final
- [ ] Local server tested
- [ ] Browser screenshots inspected if tooling available
- [ ] No console errors
- [ ] No broken links
- [ ] No sensitive local paths or email addresses
