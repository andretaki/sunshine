# Current Copy & Content - Clear Light Creative

**Last Updated:** 2025-01-XX
**This file documents the ACTUAL copy currently in the codebase**

---

## Homepage Copy

### Hero (app/page.tsx)
**Headline:** "From idea to encore."
**Subheadline:** "We handle logistics, build modern websites, and streamline your operationsso you can focus on the creative work that matters."
**Primary CTA:** Book a Call ’ /contact
**Secondary CTA:** View Our Work ’ /work

---

## Services Section (Pillars)

### Section Header
**H2:** "What We Do"
**Description:** "Three core services to handle the logistics, growth, and systems that keep creative work moving."

### Service 1: Flawless Project & Event Production
**Promise:** "For when you have a million moving parts."
**Link:** /services/logistics

**Highlights:**
- Mapping out your entire project, from start to finish
- Coordinating with venues, agents, and other partners
- Managing budgets to keep you on track
- Handling the nitty-gritty of touring and events

### Service 2: A Beautiful Website That Wins You Clients
**Promise:** "Your digital home base, built to perform."
**Link:** /services/web-seo-sprint

**Highlights:**
- A gorgeous, fast website that reflects your unique brand
- Guidance on what to write so people find you on Google
- A clear way for visitors to hire you or buy from you
- Simple analytics so you can see what's working

### Service 3: Smart Growth & Automation
**Promise:** "Ready to grow, but hate the admin work?"
**Link:** /services/ppc-campaigns

**Highlights:**
- Targeted ad campaigns that reach the right people
- Automating repetitive tasks to free up your schedule
- Clear, easy-to-read reports on your growth
- Creating simple templates and guides for your team

---

## Work Highlights (Homepage)

### Section Header
**H2:** "Recent Work"
**Description:** "Real results for creative professionals and lean teams."

### Case Study 1: Cross-Border Tour Production
**Metric:** "12 cities, zero delays"
**Link:** /work/tour-production

### Case Study 2: Next.js Site + SEO Sprint
**Metric:** "+300% organic traffic in 60 days"
**Link:** /work/seo-sprint

### Case Study 3: Systems Overhaul
**Metric:** "40% reduction in admin time"
**Link:** /work/systems-overhaul

---

## Final CTA (Homepage)

**H2:** "Ready to bring your project to light?"
**Description:** "Whether it's tour logistics, a website rebuild, or streamlining your systemslet's have a conversation about how we can help."
**CTA Button:** "Book a Free Call" ’ /contact

---

## Navigation (components/navigation.tsx)

**Logo:** Clear Light Creative (with logo image)
**Nav Links:**
- How We Help ’ /services
- Our Work ’ /work
- About ’ /about

**CTA Button:** "Let's Chat" ’ /contact
**Theme Toggle:** Dark/Light mode switcher

---

## Contact Page (app/contact/page.tsx)

### Header
**H1:** "Let's work together."
**Description:** "Fill out the form below and we'll get back to you within 24 hours. We're excited to learn about your project and discuss how we can help bring your vision to life."

### Form Fields
1. **Name** (text input)
   - Placeholder: "Your full name"
   - Validation: Min 2 characters

2. **Email** (email input)
   - Placeholder: "you@example.com"
   - Validation: Valid email format

3. **Project Type** (select dropdown)
   - Placeholder: "Select a project type"
   - Options:
     - Logistics & Production
     - Website + SEO Sprint
     - PPC Campaigns
     - Systems Sprint
     - Other

4. **Message** (textarea)
   - Placeholder: "Tell us about your project, timeline, and what you're hoping to accomplish..."
   - Validation: Min 10 characters

**Submit Button:** "Send Message" (disabled state: "Sending...")

### Info Cards (below form)
1. **Response Time** - "Typically within 24 hours"
2. **Free Discovery Call** - "Let's discuss your needs"
3. **No Obligation** - "Just a friendly conversation"

### Success Screen
**H1:** "Thank you for reaching out!"
**Message:** "We've received your message and will get back to you within 24 hours. In the meantime, feel free to explore our work or learn more about how we can help."
**CTAs:**
- "Send Another Message" (outline button)
- "View Our Work" (primary button) ’ /work

---

## Footer (app/layout.tsx)

### Column 1: Branding
**Name:** Clear Light Creative
**Tagline:** "Your creative vision, brought to light."

### Column 2: Quick Links
- Services ’ /services
- Work ’ /work
- About ’ /about
- Contact ’ /contact

### Column 3: Get in Touch
**Text:** "Ready to start your project?"
**Link:** "Book a call ’" ’ /contact

### Bottom Bar
**Copyright:** © [Year] Clear Light Creative. All rights reserved.
**Links:**
- Privacy (placeholder #)
- Terms (placeholder #)

---

## About Page Copy

**H1:** "We're here to help."
**Intro:** "Clear Light Creative is a team of creative producers and operational specialists dedicated to helping artists, founders, and lean teams make their mark on the world."

### Story Section (4 paragraphs)
1. "We know what it's like to have a brilliant vision and feel completely overwhelmed by the logistics, tech, and admin work standing between you and bringing it to life."

2. "That's where our team comes in. We handle the operational chaostour logistics, website builds, marketing systems, project timelinesso you can focus on what you do best: creating."

3. "We've worked with touring artists, independent labels, creative studios, and solopreneurs who are tired of wearing all the hats and just want experienced partners to take the reins on the stuff that drains their energy."

4. "Our approach is simple: listen deeply, plan thoroughly, execute flawlessly, and communicate clearly every step of the way. No jargon, no surprises, just real support from a team that genuinely cares about your success."

### What We Believe (4 beliefs)
1. **Your Time is Sacred**
   "Every hour you spend on admin is an hour you could be creating. We protect your creative time fiercely."

2. **Clear Beats Complicated**
   "The best systems are simple, repeatable, and don't require a PhD to understand. We build solutions that just work."

3. **Details Define Success**
   "The difference between good and great is in the follow-through. We obsess over the little things so you don't have to."

4. **Partnership Over Transactions**
   "We're not here to check boxeswe're here to help you build something meaningful. Your wins are our wins."

### Final CTA
**H2:** "Let's work together."
**Description:** "If you're ready to stop juggling everything alone and bring in a team that truly gets it, we'd love to chat."
**CTAs:**
- "Start Your Project" ’ /contact
- "View Our Work" ’ /work

---

## Voice & Tone Guidelines

### Current Voice
- **We-focused** (team-oriented, collaborative)
- **Direct & human** (no buzzwords or jargon)
- **Warm but professional** (approachable expert)
- **Action-oriented** (verbs over adjectives)

### Copywriting Principles (from FRONTEND.md)
- Typography leads, not graphics
- Lots of air between elements
- Direct, human, zero buzzword salad
- Verbs over adjectives: plan, build, ship, measure
- Small moments of warmth (e.g., "we'll handle the messy bits")

---

## Brand Consistency Notes

### DO:
 Use "we/our" throughout (team voice)
 Lead with benefits, not features
 Focus on outcomes and results
 Use specific, concrete language
 Include proof (metrics, testimonials)

### DON'T:
L Mix "I" and "we" voices
L Use buzzwords or jargon
L Make vague promises
L Hide CTAs or make them complicated
L Overwhelm with too many choices

---

## Files Containing Copy

### Primary Content Files
- `app/page.tsx` - Homepage structure
- `components/sections/hero.tsx` - Hero component
- `components/sections/pillars.tsx` - Services copy  (ORIGINAL)
- `components/sections/proof-bar.tsx` - Social proof
- `app/about/page.tsx` - About page copy
- `app/contact/page.tsx` - Contact form copy
- `app/layout.tsx` - Footer copy

### Service Pages (Detail Pages)
- `app/services/page.tsx` - Services overview
- `app/services/logistics/page.tsx` - Logistics service
- `app/services/web-seo-sprint/page.tsx` - Web/SEO service
- `app/services/ppc-campaigns/page.tsx` - PPC service
- `app/services/systems-sprint/page.tsx` - Systems service

### Case Study Pages
- `app/work/page.tsx` - Work overview
- `app/work/tour-production/page.tsx` - Tour case study
- `app/work/seo-sprint/page.tsx` - SEO case study
- `app/work/systems-overhaul/page.tsx` - Systems case study

---

## Copy Variants to Test (from PLAN.md)

### Hero A/B/C Options
**A (Ops-first):**
- H1: "From idea to encore."
- Sub: "I handle logistics, vendors, and timelines so your work ships on time."

**B (Web/Growth-first):**
- H1: "Ship the site. Grow the pipeline."
- Sub: "Next.js builds, SEO foundations, and PPC funnels wired to measure."

**C (Unified):**
- H1: "Plan, build, and run the machine."
- Sub: "Logistics, websites, and growth  one producer, accountable for outcomes."

**Currently using:** Variant A with "we" voice

---

## Next Copy Tasks

1.  Unified "we" voice across all pages
2.   Homepage hero/subhead may need original copy restored
3. =Ý Add ProofBar actual content (cities/clients)
4. =Ý Review service detail pages for consistency
5. =Ý Add testimonials carousel to homepage
6. =Ý Consider A/B testing hero variants
