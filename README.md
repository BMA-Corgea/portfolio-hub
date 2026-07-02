# Portfolio Hub

A single, zero-build static site that presents the shipped products (GIMS + GIMS Compliance
Relay) as case studies a hiring manager can point to. Deploys to Vercel with no toolchain.

## Structure

```
index.html            Landing — positioning + the two flagship products
gims.html             Case study: GIMS
compliance-relay.html Case study: GIMS Compliance Relay
roadmap.html          GEDS / GOMS / GONS + GUTS footnote
about.html            Bio, contact, GUTS footnote
resume.html           Resume (self-contained; from Resume Maker/Resume_Builder_B_3.html)
Evan-Brown-Resume.pdf Downloadable resume (from Resume Maker/Brown Resume B3.pdf)
gims-refactor-report.html              Deep-dive engineering report (copied from GIMS-Project/proposals/gims_refactor_full_report.html); linked from gims.html
compliance-relay-refactor-report.html  Deep-dive report authored from GIMS-Compliance-Relay/proposals/*.md; linked from compliance-relay.html
styles/main.css       Design system (all tokens live here)
js/main.js            Minimal enhancement (active nav, footer year)
proposals/            The proposal this was built from
```

No dependencies, no build step. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

## Deploy (Vercel)

It's a static site, so: `vercel` from this directory, or point a Vercel project at the repo with
**no framework preset** and an empty build command. Output directory is the repo root.

## Before it's ready to share — TODO

These are intentionally left for a human pass (search the code for the CAPS markers):

- **Name** — the builder handle "Evan" is used throughout. Swap in your real display name.
  Marked with `NAME NOTE` in `index.html`; also appears in each page's brand + footer.
- **Bio** — `about.html` has a `PERSONALIZE` comment; add real background.
- ~~Resume / LinkedIn~~ — done. Resume is `resume.html` + `Evan-Brown-Resume.pdf`; LinkedIn is wired into every footer + the About contact row. To refresh the resume, re-copy the latest from `../Resume Maker/`.
- **Screenshots** — the landing uses a styled placeholder frame instead of real demo
  screenshots. Capture GIFs/stills of both demos and drop them in for much stronger impact.
- **Honesty guardrail** — traction is stated as "$3k first client" (GIMS) and "active pharma
  pilot, ~$5k" (Relay). Keep it truthful; do not inflate to "in production at scale."

## Out of scope here

- `gims-oss` repo polish — handled separately.
- GUTS architecture site rework — blocked on the pending "mythos" GUTS proposal.
