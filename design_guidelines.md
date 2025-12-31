# Design Guidelines: "NotSlop.ai" - AI Stigma Shield Service

## Design Approach

**Reference-Based: Corporate Parody Aesthetic**
Drawing inspiration from overly-polished SaaS landing pages (Stripe, Vercel) but with intentionally absurd copy. The visual polish contrasts with the ridiculous premise for maximum comedic effect. Clean, professional design makes the satire land harder.

## Core Design Elements

### Typography
- **Primary Font**: Inter or DM Sans (Google Fonts) - that "trustworthy SaaS" look
- **Headline**: 48-64px, bold weight, tight line-height for impact
- **Subheadline**: 20-24px, medium weight
- **Body**: 16-18px, regular weight
- **Accent/Labels**: 12-14px, uppercase, tracked spacing for "premium" feel

### Layout System
**Spacing**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 (p-4, gap-8, py-20, etc.)
**Container**: max-w-7xl centered with px-6 responsive padding
**Vertical Rhythm**: py-20 to py-32 for sections (py-12 on mobile)

## Component Library

### Navigation
- Sticky header with logo left, nav links center, "Get Protected" CTA button right
- Include subtle "As Seen On: [Fake Publications]" ticker beneath nav

### Hero Section
- Split layout: Left - bold headline + subheadline + dual CTA buttons
- Right - Mockup image showing "Certificate of Human Authenticity"
- Background: Subtle gradient or mesh gradient
- Headline example tone: "Your AI Secret is Safe With Us™"

### Artist Showcase Section
- Grid of 3-4 "artist" profile cards (satirical bios)
- Each card: Portrait placeholder, fake artist name, humorous specialty ("Prompt Engineer Pretender", "Midjourney Denier")
- Pricing tier badge on each card
- Cards use rounded-lg, shadow-sm, hover:shadow-lg

### Pricing Tiers
- Three columns: "Plausible Deniability", "Total Alibis", "Deep Cover"
- Each tier includes satirical features list
- Exaggerated pricing ($4.99 to $99.99 per signature)
- Highlight middle tier with border-2 and scale-105

### How It Works
- 4-step horizontal timeline with icons (Heroicons)
- Steps: Upload → Choose Artist → Receive Certificate → Post Guilt-Free
- Use connecting line between steps

### Social Proof Section
- Fake testimonials in 2-column grid
- Include ridiculous quotes with made-up customer names
- Star ratings (all 5 stars, obviously)

### FAQ Section
- Accordion-style questions with humorous answers
- Questions address "ethical concerns" sarcastically

### Footer
- Standard layout but include absurd legal disclaimers
- Links: "Terms of Deception", "Privacy (LOL)", "Refund Policy (None)"
- Newsletter signup: "Join our newsletter to learn more ways to hide your shame"

## Images

**Hero Image**: 
- Certificate mockup showing ornate "Certificate of Authentic Human Creation" with wax seal, signatures, baroque borders
- Should look official and ridiculous

**Artist Portraits**: 
- Stock photos of people looking artsy (berets, paint-stained clothes, pretentious poses)
- Or illustrated avatars in various "artistic" styles

**Process Icons**:
- Simple line icons from Heroicons for the workflow steps

**Background Elements**:
- Subtle watermark patterns of "100% HUMAN MADE" or artist palette icons scattered throughout

## Interaction Patterns

- Buttons: Rounded-lg with generous padding (px-8 py-4)
- Primary CTA: Bold background with subtle blur when over images
- Hover states: Smooth scale or shadow transitions (transition-all duration-200)
- Cards: Subtle lift on hover (transform hover:-translate-y-1)
- No distracting animations - keep it professional-looking for ironic contrast

## Key Design Principle

The entire site should look like a legitimate, polished SaaS product. The comedy comes from the contrast between professional presentation and absurd content. Think "Stripe meets The Onion" - impeccable design showcasing ridiculous services.