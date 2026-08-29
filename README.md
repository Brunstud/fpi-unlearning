# FPI Unlearning project page

This repository hosts the static academic project page for **On the Recoverability of Private Information Unlearning in Large Language Models**.

## Local preview

From the repository root, run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/`.

## Deployment

The intended GitHub Pages project-site URL is:

`https://<USERNAME>.github.io/fpi-unlearning/`

Configure GitHub Pages to deploy from the `main` branch and repository root. The site uses relative paths and requires no build step.

Scientific figures and their web renders are under `assets/figures/`; the anonymous paper PDF is under `assets/paper/`. Author details and public code, dataset, and model URLs are intentionally omitted while double-blind constraints apply.

PDF figures were rendered for the web at 200 DPI while retaining the originals. To reproduce an individual render:

```bash
pdftoppm -r 200 -png -singlefile assets/figures/<figure>.pdf assets/figures/web/<figure>
```
