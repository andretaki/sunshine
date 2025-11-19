the overall feel

calm confidence with a “we’ve got this” energy. typography leads, not graphics. lots of air between elements. when we want punch (for ads/landings), we dial up big type and a few bold accents — but never clutter. it should feel like a competent producer’s desk: neat piles, labeled tabs, everything reachable.

navigation & header

a slim, sticky header that fades in a soft shadow as you scroll.

left: simple wordmark. center: minimal nav (Home, Services, Work, About). right: a quiet “Book a Call” button.

on mobile: a clean sheet/drawer with the same links, plus a prominent “Book a Call.”

hero (first screen)

a large, readable headline that we A/B:

ops-first: “From idea to encore.”

growth-first: “Ship the site. Grow the pipeline.”

unified: “Plan, build, and run the machine.”

one calm sentence underneath that explains the blend: logistics + websites + growth, so founders can focus on the work.

two primary CTAs: “Book a Call” (solid button) and “Get a Quote” (outline). both feel trustworthy and direct.

a thin “proof bar” just below: a subtle horizontal scroller of cities/clients/outcomes — tastefully understated.

the three pillars section

three cards side-by-side (stacking on mobile):

Ops & Logistics — what gets planned and delivered.

Web & SEO — what gets built and how it’s found.

PPC & Systems — what gets measured and improved.

each card has a one-line promise, 3 bullet highlights, and a “learn more” link that either opens a dialog (on Home) or goes to a dedicated page (for SEO depth).

case studies (“work”)

a grid of big, elegant tiles: project name, a crisp line about constraints, and a single outcome metric (e.g., “launched in 21 days”, “CPL ↓ 32%”).

clicking opens a clean story: Problem → Constraints → Actions → Outcomes → “What we’d do next.” include one short testimonial pull-quote on each.

photos are mostly black-and-white with rare, strategic color to keep things coherent.

testimonials

a simple carousel with oversized quotation marks and short, credible blurbs. author name + org; if music-adjacent, we keep it neutral to support the pivot beyond music.

pricing/offer ladder (optional on Home; always on landings)

three tidy cards: Starter, Standard, Pro.

each card focuses on outcomes, not features. a small “what’s included” list for scannability.

a gentle note: custom quotes for unusual logistics/international scope.

lead capture & booking

forms are short and welcoming: name, email, website, what you need, region (TX/CA), timeframe.

submit brings a friendly “thank you” screen with a calendar embed right there — no inbox hunting required.

every field has clear micro-copy; errors are human (“mind giving us your email so we can reply?”).

resources / notes

a lightweight stream of helpful notes: checklists, timelines, mini-playbooks.

each card is easy to skim, showing practical authority without jargon.

footer

small, neat: contact, social, a subtle newsletter subscribe, and a single-line privacy statement.

it feels like a signature, not a second header.

landing pages for PPC

they look like the site, but stripped down: no top nav (or reduced), a matched headline specific to the ad group, a short benefit stack, a proof metric, a tiny FAQ, and the form above the fold.

the main CTA repeats every ~1.5 screens. no dead ends; the thank-you page offers booking immediately.

motion & interaction

soft, subtle: cards lift a hair, links underline from center, section headings fade upward.

dialogs slide smoothly; no bouncing, no flashy spins.

loading states show a tidy progress bar or skeletons — never blank.

color & type

base is warm white + carbon gray.

one accent color we can tune per campaign (e.g., teal for growth landings, rust for ops stories).

type pairing: a confident display serif (for headlines) and a modern grotesk for body. consistent sizes; generous line height.

accessibility & responsiveness

touch targets are large; focus rings are visible and tasteful.

everything stacks gracefully under 768px. no hidden content, no “mystery meat” nav.

copy remains readable even at larger zoom levels.

voice & microcopy

direct, human, zero buzzword salad.

verbs over adjectives: plan, build, ship, measure.

small moments of warmth (e.g., “we’ll handle the messy bits”).

performance

images are crisp but light; next/image everywhere.

no heavy hero videos by default; if we use motion, it’s subtle SVG or css.

fast first paint; nothing fights the main CTA.

how this maps to components (quietly under the hood)

shadcn/ui Cards, Dialog, Sheet, Button, Badge, Accordion, Tooltip, Carousel.

forms with React Hook Form + Zod validations, with inline help and clear errors.

Section components you can reuse: Hero, ProofBar, Pillars, CaseGrid, TestimonialRail, OfferLadder, LeadForm, FAQ, Newsletter.

if you want, pick one visual direction to start:

A. minimal/literary (quieter, more white space, editorial feel), or

B. modern ops (clean swiss grid, one bold accent, slightly more “product” vibe).

Option B — Standard SEO + PPC (≈ 12–16 pages)

Home

Services (overview)

4× Service details
(Logistics Ops, Website+SEO Sprint, PPC Campaigns, Systems Sprint)

Work (index) + 3 case studies

About

Resources/Notes (index) + 2 articles

Contact (booking embed)

3× PPC landings (one per main service)