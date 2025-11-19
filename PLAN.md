# Project Snapshot

A modular, modern website for a "creative liaison"—a hybrid of logistics fixer, tour/production wrangler, and creative mentor for musicians and adjacent artists. Built with Next.js + Vercel, styled with shadcn/ui, deploy-ready with AWS integrations for media, forms, and automations.

---

## 1) Positioning & Messaging (locked-in)

**Primary:** **A. Creative Liaison / Producer** → *From idea to encore — I handle the moving parts so you can make the music.*

**Pivot/Expansion (beyond music):**

* **Ops & Delivery for Creatives and Small Businesses**: logistics, project management, vendor wrangling, international execution
* **Growth & Visibility**: websites, SEO, PPC, performance tracking, light brand/EPK builds
* **Advisory & Mentorship**: systems, accountability, career/ops clarity

**One-liner:** *A fixer-producer for creators and lean teams—blending logistics, web + growth, and clear strategy.*

---

## 2) Services Architecture (updated)

Pick launch modules (★ = launch-now):

**Operations & Logistics**

* ★ Project/Tour/Event logistics (advancing, itineraries, vendors, budgets)
* International execution (visas, carnets, partners), production support

**Web & Growth**

* ★ Website build/refresh (Next.js on Vercel) with SEO foundations
* ★ SEO sprints (IA, on-page, schema, internal links, content briefs)
* ★ PPC setup/management (Google Ads, landing variants, conversion tracking)
* Analytics + reporting dashboard (GA4 + ads + CRM)

**Systems & Coaching**

* ★ Artist/Founder Systems Sprint (2–4 wks): CRM, SOPs, templates, automations
* Mentorship/coaching packages with accountability check-ins

**Add-ons**: Notion workspace, Airtable trackers, press kit/EPK refresh, grant/application review, simple finances template.

---

## 3) Site Strategy & Site Map (choice made)

**Chosen:** **Option 3 — Funnel-first** for PPC performance + create SEO-ready supporting pages. One-pagers underperform for SEO; funnels let us match ad intent precisely and still rank with topical pages.

**Structure**

* **Landing (PPC)**: tightly messaged pages per service/audience (e.g., "Creative Ops for Indie Teams", "Website + SEO Sprint", "Event Logistics")
* **Core Site**: Home / Services / Work (Case Studies) / About / Mentorship / Resources / Contact
* **Deep Modals/Overlays** on Home for quick skim; dedicated URLs for SEO depth

**Why this wins for SEO & PPC**

* Distinct URLs per intent → higher Quality Score, better CTR, easier A/B testing
* Topic clusters (Services ↔ Case Studies ↔ Articles) build relevance and internal link equity

---

## 4) Key CTAs (Google/AWS stack)

* **Book a Call** → Cal.com/Calendly embed + Google Calendar invite
* **Request a Quote** → Server Action → store in Postgres (Drizzle) → email via **AWS SES**
* **Apply for Mentorship** → Typeform or native form → Postgres + SES
* **Join the List** → ConvertKit or SES-powered list (via Amazon Pinpoint)
* **File Uploads (EPK/riders/briefs)** → AWS S3 (pre-signed URLs)
* **Spam/Trust** → Google reCAPTCHA Enterprise (or hCaptcha), DMARC/SPF/DKIM

---

## 5) Content Model

**People**: bio, role, headshot, socials
**Engagements**: title, role, sector (music/creative/smb), location, date, outcomes, media
**Services**: name, summary, deliverables, price bands, audience tags
**Testimonials**: quote, author, org/act, link
**Articles/Notes**: title, excerpt, tags, canonical, publish date
**Assets**: EPK/press kit, stage plot, rider, brand assets (for non-music clients too)

**DB (Drizzle + Postgres) tables**
`leads`, `inquiries`, `services`, `case_studies`, `testimonials`, `articles`, `uploads`, `events`, `newsletter_subs`.

---

## 6) Design Directions (expanded)

Pick 1–2 to art-direct, then we A/B variants.

**A. Minimal (Literary Modernism)**

* Palette: bone, carbon, paper; ample whitespace
* Type: Display Serif + Grotesk
* Motion: quiet fades, typographic reveals

**B. Maximal (Tour Poster Collage)**

* Palette: saturated primaries, riso/halftone
* Type: bold condensed + mono
* Motion: parallax strips, marquees

**C. Modern Ops (Neo-swiss)**

* Palette: grayscale + a single accent
* Type: Inter/Neue Haas Grotesk
* Motion: snappy micro-interactions, progress bars

**D. Editorial Poster (Big Type)**

* Palette: black/ivory with seasonal accent sets
* Type: oversize display + readable serif body
* Motion: section “page turns”, footnote-style meta

**E. Warm Studio (Textured Minimal)**

* Palette: warm neutrals, film-grain images
* Type: humanist sans + serif pull quotes
* Motion: soft scroll-linked animations

**Shared system**: grid layout, oversized pull-quotes, case-study cards, lucide icons, shadcn/ui primitives (Card, Accordion, Dialog, Sheet, Badge, Tooltip, Carousel).

---

## 7) Home Page Wireframe (Option 2 style)

1. **Hero**: Statement + secondary line, "Book a Call" + “See Work”
2. **Proof Bar**: past cities/venues/clients scroller
3. **What I Do**: three pillars (Logistics / Ops & Strategy / Mentorship)
4. **Recent Work**: 3 case tiles with outcomes
5. **Testimonials**: carousel
6. **Newsletter**: short value prop
7. **Footer**: contact, socials, EPK

---

## 8) Feature Checklist

* Cal.com/Calendly booking (with time-zone + buffer)
* Forms → Server Actions → Postgres (Drizzle) + SES email
* File uploads to S3, download links with signed URLs
* Newsletter: ConvertKit or Pinpoint list
* PPC: Google Ads conversion + Enhanced Conversions, Consent Mode v2
* SEO: schema.org (Organization, Service, Article, Review), XML sitemap, robots, canonical
* Analytics: GA4 + Plausible (dual-run)
* Accessibility: WCAG AA
* Performance: next/image, RSC streaming, cache hints, edge where helpful

---

## 9) Tech Stack (final)

* **App**: Next.js 14 (App Router, RSC), TypeScript
* **UI**: Tailwind + shadcn/ui + lucide-react
* **Content**: Contentlayer (Markdown) now → optional Sanity later
* **Data**: **Drizzle ORM + Postgres** (Vercel Postgres or RDS)
* **Forms/Email**: Server Actions + **AWS SES**
* **Storage**: AWS S3 (pre-signed)
* **Deploy**: Vercel
* **Auth (optional)**: next-auth if gating resources
* **Tracking**: GA4, Google Ads, Plausible; server-side events for key conversions

---

## 10) Package Menu (launch options)

**Starter (Funnel)**: 1–2 PPC landings + Home + Contact
**Standard (Site + Funnels)**: Home, Services, Work, About, Mentorship, 3–5 PPC landings
**Pro**: + CMS, client portal, gated templates, reporting dashboard

---

## 11) Copy Prompts (updated)

* **Tagline variants**: “10 concise lines for a creative liaison-producer who blends logistics, web/SEO/PPC, and mentoring; tones: modern, worldly, non-cliché; ≤8 words.”
* **Service blurbs**: “Write 80–100 words each: Logistics Ops, Website + SEO Sprint, PPC Funnel Build, Systems Sprint, Mentorship.”
* **Case study**: “Summarize a cross-border production project: constraints → actions → outcomes; add 1 quant metric + 1 testimonial line.”
* **Landing H1s**: “Generate 12 PPC H1s matching intent for [service]; include a variant for ‘near me’ queries.”

---

## 12) Quick Intake (answered/remaining)

**1)** Positioning: A (+ pivot to broader ops/web/growth) ✅
**2)** Primary audience (rank?): *You can add*
**3)** Launch services (≤4): Logistics Ops, Website + SEO Sprint, PPC Setup/Management, Systems Sprint (proposed)
**4)** Proof point: *Add one city/festival/org & outcome*
**5)** Design direction: *Pick from A–E above*
**6)** Reference sites (feel/structure): *Add 2*
**7)** Booking & newsletter: Google Calendar + Cal.com; ConvertKit or Pinpoint
**8)** CMS at launch: Markdown (Contentlayer)
**9)** Timeline/Budget: *Add*
**10)** Legal/visa/grant notes: *Add*

---

## 13) Next Steps

* Confirm design direction and audience ranking.
* I’ll generate: routes, file tree, shadcn/ui component list, DB schema (Drizzle), and a PPC-ready landing template.

## 14) Unified Positioning — **Combine It All**

**Category:** Fractional Launch & Ops Producer for Creatives and Lean Teams
**One-liner:** *We plan, build, and run the machine — logistics, websites, and growth — so you can focus on the work.*

**Value Pillars**

1. **Ops & Logistics** — planning, advancing, vendor wrangling, budgets, cross‑border execution.
2. **Web & Growth** — Next.js sites, SEO foundations, PPC funnels, analytics.
3. **Systems & Coaching** — SOPs, templates, cadences, accountability.

**Proof Types**: on‑time delivery %, lead conversion lift, cost per lead, cycle time ↓, testimonials.

---

## 15) Audience-Specific Messages

* **Musicians/Producers** → “From rehearsal to release — itineraries, stage plots, and a site that sells.”
* **Indie Studios/Agencies** → “A fixer PM who ships sites and funnels — and keeps ops tight.”
* **SMB Founders** → “A hands-on producer for launches: plan, site, ads, results.”

---

## 16) Offer Ladder (packages)

**Starter: ‘Ship the Essentials’ (2–3 wks)**

* IA + landing, contact/lead form to Postgres, GA4/Ads wiring
* Basic SEO (titles/meta/schema), 1 ad group + 3 variants
* Quick ops audit + a simple weekly cadence template

**Standard: ‘Run the Machine’ (4–6 wks)**

* Site (3–5 pages) + 2 PPC landings, conversion tracking + dashboards
* Logistics/production plan or project plan (quarterly)
* SOP pack (briefs, checklists), vendor roster
* Bi‑weekly coaching/check‑ins

**Pro: ‘Scale & Expand’ (custom)**

* Multi‑locale pages, content briefs, expanded SEO, full PPC structure
* International execution support (visas/carnets if relevant)
* Retainer for ops + growth + coaching

---

## 17) Funnel Map (SEO + PPC + Site)

**Core Pages (SEO)**: /services, /work, /about, /resources, /contact
**Funnel Pages (PPC)**: /logistics, /web-seo-sprint, /ppc-campaigns, /systems-sprint
**Retargeting**: case-study views → mentorship consult; pricing views → quote form
**Measurement**: `lead_submit`, `book_call`, `newsletter_sub`, `file_upload` (server-side events)

---

## 18) Hero & Subhead Variants (A/B/C)

**A (Ops-first):**
H1: *From idea to encore.*
Sub: *I handle logistics, vendors, and timelines so your work ships on time.*
CTA: Book a Call

**B (Web/Growth-first):**
H1: *Ship the site. Grow the pipeline.*
Sub: *Next.js builds, SEO foundations, and PPC funnels wired to measure.*
CTA: Get a Quote

**C (Unified):**
H1: *Plan, build, and run the machine.*
Sub: *Logistics, websites, and growth — one producer, accountable for outcomes.*
CTA: Start a Project

---

## 19) Section Stack for Home (Unified)

1. Proof bar (cities/clients)
2. Pillars (Ops • Web/Growth • Systems) with Dialog “more”
3. Case studies (1 ops, 1 web/growth, 1 systems)
4. Packages ladder
5. Testimonial carousel
6. Lead form + calendar embed
7. Newsletter + FAQs

---

## 20) PPC Ad Group Seeds

* Creative Ops Producer (keywords: creative operations, project logistics, producer for hire)
* Website + SEO Sprint (nextjs agency, seo sprint, ship website fast)
* PPC Funnels (landing page builder, google ads management for creatives)
* Systems & Coaching (creative coach, ops coaching, creator systems)

---

## 21) Booking Stack (Free-first)

* **Option 1:** Google Appointment Scheduling (free) → embed booking URL; low friction.
* **Option 2:** Cal.com (free individual) → nicer embeds + future room to grow.
* **Emails:** AWS SES (DKIM/SPF/DMARC), server actions for confirmations.
* **DB:** Drizzle + Postgres for leads & events.

---

## 22) Implementation Notes

* Start with **Hero A vs B** test on Home + corresponding PPC landings.
* Use **Contentlayer** for copy iterations; swap to Sanity if editing increases.
* Ship a minimal **reporting page** (server component) to display lead counts, CVR, and CPL pulled from Postgres + Ads API later.
