# Portfolio Hub — Proposal

## What This Is

A single portfolio website that a hiring manager can open, understand in 60 seconds, and point to when advocating for the candidate. It leads with the concrete products that have earned real money — **GIMS** and **GIMS Compliance Relay** — frames each as a case study, and links out to the live demos and source that prove the work is real. Two supporting deliverables ship alongside the hub: a polish pass on the `gims-oss` GitHub repository (the code a technical reviewer will actually read), and an update to the `guts-architecture` site to match a forthcoming "mythos" GUTS proposal. The GUTS "seven organs" vision is deliberately demoted to footnote-level backstory — present for the curious, never the headline.

The target reader is a hiring manager or technical interviewer evaluating the candidate for **solutions architect, AI engineer, or adjacent roles**. The portfolio's job is to show someone who ships end-to-end, thinks in systems, and has already put products in front of paying customers.

---

## Context

Existing assets, as they stand today:

| Asset | URL | State |
|---|---|---|
| GIMS demo | https://gims-demo.vercel.app/ | Live, interactive walkthrough. Grammar/schema-driven info management (nouns/verbs/adjectives). |
| Compliance Relay demo | https://gims-compliance-relay-demo.vercel.app/ | Live. Immutable 21 CFR Part 11 audit trail, HMAC-sealed exports, e-signatures. |
| GUTS architecture site | https://guts-architecture.vercel.app/ | Live but **outdated** — describes seven "organs" (GONS/GEDS/GAMS/GOMS/GIMS/GEMS/GRAMS). Needs rework per the pending mythos proposal. |
| `gims-oss` repo | https://github.com/BMA-Corgea/gims-oss | Python/FastAPI + JS. Comprehensive docs but **not yet updated** for the recent refactor. 4 commits, reads as inactive. |
| Refactor reports | (local, to be located) | Engineering writeups of the GIMS and Compliance Relay rebuilds. Raw material for case-study "how it works" sections. |

**Traction (the honest version).** These products are *not* shipped in the full sense, but they have real early paid validation:
- **GIMS** — one client paid **$3k** to start the project.
- **Compliance Relay** — a **~$5k pharma deal is one phone call away**.

This is the framing the whole site must respect: *real money, real customers, early stage, actively pursued.* No claims of "in production at scale," no invented metrics, no revenue theater. "First paying client" and "active pharma pilot" are true and strong on their own.

**Roadmap products.** GEDS, GOMS, GONS are not built yet. They appear on the hub as a roadmap to show the products connect into one coherent system rather than being scattered one-offs.

**External dependency.** The GUTS site rework depends on a separate **"mythos" GUTS proposal** that reshapes how GUTS is described. That proposal is not yet in hand. The GUTS-site phase is blocked until it exists.

---

## Design

### Deliverable 1 — The Hub Site

**Purpose:** one URL to share. Framing and narrative, not rebuilding — the live demos are the proof, the hub points at them.

**Information architecture:**

```
/                     Landing — who I am, one-line thesis, two flagship products
/gims                 Case study: GIMS
/compliance-relay     Case study: GIMS Compliance Relay
/roadmap              GEDS / GOMS / GONS — the system this grows into
/about                Short bio, contact, links (GitHub, email, resume)
  └─ GUTS backstory   Footnote-level section: "the bigger system these belong to"
```

**Landing page (above the fold):**
- Name + one-sentence positioning ("I build systems that put structure around messy operational work — and get people to pay for them").
- The two flagship products as cards, each with a one-line problem statement, a "live demo" button, and a traction tag ("First paying client — $3k" / "Active pharma pilot").
- Quiet secondary links: GitHub, resume, contact.

**Case-study page template** (used for both GIMS and Relay):

```
1. The problem        Concrete pain, in the customer's language.
2. What I built       The product, one paragraph + a hero screenshot/GIF.
3. How it works       Architecture — the interesting technical decisions.
                      (Pull from the refactor reports.)
4. Live demo + code   Prominent buttons: try it / read the source.
5. Traction & status  Honest: who paid, what stage, where it's headed.
```

- **GIMS page** emphasizes the schema/grammar engine — nouns/verbs/adjectives, domain-agnostic (LIMS today, HR onboarding tomorrow), configured via JSON not hard-coded modules. This is the "systems thinker" signal for a solutions-architect reader.
- **Relay page** emphasizes regulated-industry credibility — 21 CFR Part 11 §11.200, immutable audit trail, HMAC-sealed offline-verifiable exports, e-signature re-auth. This is the "I can build for compliance-heavy enterprise" signal.

**Roadmap page:** GEDS / GOMS / GONS as "coming" cards with a one-liner each, framed as the system GIMS + Relay are the first organs of. Sets up the GUTS backstory without leading with it.

**Tech approach:** static site, deployed to Vercel to match the existing demos. Framework chosen during Phase 1 (lean toward a lightweight static/React setup — Astro or Next static export — for fast load and easy Vercel deploy). House style TBD via the `frontend-style` skill; must read as clean, technical, and confident, not startup-pitch loud.

### Deliverable 2 — `gims-oss` Repo Polish

The repo is what a technical interviewer opens after the hub convinces them. It must reflect the refactor and read as intentional.

- Update `README.md` + `READMETLDR.md` to match the refactored codebase.
- Add a top-of-README "what this is / try the live demo / see the case study" block linking back to the hub.
- Screenshots or a short GIF in the README.
- Verify the demo credentials, quickstart, and run instructions actually work from a clean clone.
- Tidy structure/labels so `/api`, `/core`, `/gui`, `/projects`, `/tools`, `/modules`, `/tests` are self-explanatory.
- Do **not** rewrite the software. This is a documentation and presentation pass, not a refactor.

### Deliverable 3 — GUTS Architecture Site Update

**Blocked on the mythos GUTS proposal.** Once available:
- Rework `guts-architecture` content to match the new mythos framing.
- Ensure it's consistent with how the hub footnotes GUTS (they must not contradict each other).
- Keep it as a "learn more" destination, not a front door.

---

## What This Is Not

- **Not a rebuild of GIMS, Relay, or the demos.** The live demos stay as-is; the hub links to them. Any product bugs found are logged separately, not fixed here.
- **Not a revenue/metrics dashboard.** No fabricated user counts, MRR, or "trusted by" logos. Traction is stated in plain, true terms.
- **Not the GUTS mythos proposal itself.** That is separate work (a different chat). This proposal only *consumes* its output for Deliverable 3.
- **Not a sales/GTM plan.** Pursuing the pharma deal and going further commercially is explicitly out of scope and handled elsewhere.
- **Not a resume/CV rewrite.** The hub links to a resume; it does not replace one.
- **Not GEDS/GOMS/GONS product work.** They appear as roadmap only; nothing is built.

---

## Testing

Verification is mostly manual (it's a content/presentation site), but must be rigorous about honesty and links.

- **Link integrity:** every demo link, repo link, resume link, and cross-link (hub↔repo↔GUTS site) resolves and lands on the right page. Automate with a link-checker in CI if the framework supports it.
- **Claim audit:** a dedicated pass reading every factual claim on the site against the "honest framing" rule. No claim of production/scale; traction stated as "$3k first client" / "active pharma pilot" only. This is the single most important check.
- **Responsive/mobile:** landing + both case studies render correctly on mobile and desktop (hiring managers open links on phones).
- **Performance:** Lighthouse pass — landing loads fast, images/GIFs optimized.
- **Clean-clone test (repo):** clone `gims-oss` fresh, follow the README quickstart, confirm the app runs and demo credentials work.
- **Cross-consistency:** hub's GUTS footnote and the updated GUTS site tell the same story; product names/positioning are identical across hub, repo READMEs, and demos.
- **Cold-read test:** one person unfamiliar with the projects reads the landing page and can state, in their words, what each product does and that it has paying interest — within ~60 seconds.

---

## Implementation Phases

### Phase 1 — Foundation & content spine
- [x] Choose framework + scaffold the site in `portfolio-hub/` (zero-build static HTML/CSS/JS, Vercel-ready).
- [~] ~~Locate and read the GIMS + Compliance Relay refactor reports~~ — **skipped per user**; "how it works" written from the products themselves.
- [x] Draft final copy for: landing, GIMS case study, Relay case study (honest traction framing throughout).
- [x] Decide positioning one-liner and page structure.

### Phase 2 — Design & build
- [x] House style: self-authored clean/technical dark "engineering" aesthetic (design system in `styles/main.css`). `frontend-style` skill skipped (user AFK, best-judgment call).
- [x] Build landing + both case-study pages + roadmap + about/contact.
- [ ] Capture screenshots/GIFs of both demos for hero images. **← main remaining item** (styled placeholder frame in place for now).
- [x] Wire all outbound links (demos, repo, contact). Verified: all internal links resolve, all pages serve HTTP 200.

### Phase 3 — Repo polish  *(handled by a separate instance — out of scope here)*
- [x] `gims-oss` open-core work done in a parallel session (see `proposals/gims_oss_open_core_sync.md`).

### Phase 4 — GUTS site update (blocked on mythos proposal)
- [ ] Obtain the mythos GUTS proposal.
- [ ] Rework `guts-architecture` content to match it.
- [ ] Reconcile with the hub's GUTS footnote for consistency.

### Phase 5 — Verify & ship
- [ ] Run the full Testing checklist (esp. claim audit + link integrity + cold-read test).
- [ ] Deploy hub to Vercel; confirm custom domain if desired.
- [ ] Final cross-consistency pass across hub, repo, demos, GUTS site.

---

## Notes for Future Sessions

- **Most important file:** this proposal. The case-study copy drafts (once written) live under `portfolio-hub/` — treat them as the source of truth for positioning.
- **The non-negotiable constraint:** honest traction framing. GIMS = one $3k client; Relay = ~$5k pharma deal one call away. Nothing is "shipped at scale." Do not let marketing language creep in — the claim audit exists to catch this.
- **GUTS is a footnote, not a headline.** The user explicitly wants it demoted; it won't move the needle unless a reader is already curious. Phase 4 is blocked on a separate "mythos" GUTS proposal that does not exist yet — do not invent its contents.
- **Audience:** solutions architect / AI engineer / adjacent. Lead with GIMS's schema-engine (systems thinking) and Relay's compliance depth (enterprise credibility).
- **Don't rebuild anything.** Demos and the GIMS software stay as-is; this is framing + presentation + repo docs.
- **Next immediate task if interrupted:** Phase 1 — pick the framework and locate the refactor reports.
- **Related, separate work (other chats):** the GUTS mythos proposal, and the commercial/GTM push on the pharma deal.

---

## Session Log

| Date | Notes |
|---|---|
| 2026-07-01 | Proposal written. Scope: hub site + `gims-oss` polish + GUTS site update. Answers captured: real early paid traction (not shipped); audience = solutions architect / AI eng; GUTS = footnote backstory; format = hub + repo + GUTS-site update. |
| 2026-07-01 | Hub site built end-to-end (5 pages + design system + JS), served & verified (all pages 200, all links resolve). Refactor-report material skipped per user; repo polish handled by a parallel instance. Remaining: real demo screenshots, name/bio/resume personalization (see README TODO), Phase 4 GUTS site (blocked on mythos proposal). |
