

# AI Directory Tool Card — Implementation Plan

## Overview
A clean, minimal tool card component with progressive disclosure, showing essential info at a glance and revealing compliance/detailed metrics on hover or interaction. Medium hybrid layout suitable for 2-3 cards per row in a grid.

## Card Structure

### Always Visible (Card Face)
**Header Row:**
- Tool logo/image (rounded, left-aligned)
- Tool name + verified checkmark (inline)
- Publisher/company name (subtle text below name)
- Highlight badge ("Most Popular", "Editor's Pick", etc.) as a colored pill in the top-right corner

**Description Area:**
- Short description (2-line clamp)
- Category icon + category name as a subtle chip

**Metrics Bar (compact inline row):**
- 5-star visual rating + review count
- Weekly trend delta (green ▲ or red ▼ percentage)
- Price/pricing model tag (e.g., "Free", "$20/mo", "Enterprise")

**Feature Tags:**
- Up to 3 small pills/chips showing key features

**Action Buttons (bottom of card):**
- "Save to Neural Vault" button (bookmark icon)
- "Quantum Compare" button (compare icon)

---

### Revealed on Hover / Expand (Progressive Disclosure)
A smooth expand or overlay section that slides down showing:

**Compliance & Governance Section:**
- EU AI Act Risk Tier badge (color-coded: green/yellow/orange/red)
- GDPR Compliance badge (checkmark or shield icon)
- Data Training Warning badge (⚠️ icon if tool trains on user data)
- Compliance Score (circular progress or numeric score)
- Data Governance Grade (GDVR) — letter grade badge
- Transparency Index (TI) — numeric with small bar indicator

**Social Links Row:**
- Twitter, GitHub, LinkedIn, Discord — icon-only buttons in a row

**Full Description:**
- Expanded tool description (no line clamp)

---

## Design Details
- **Style:** White card, subtle border/shadow, clean typography, rounded corners
- **Colors:** Neutral base with semantic accent colors for badges (green for compliant, amber for warnings, red for high risk)
- **Hover state:** Subtle elevation increase + expanded section slides in
- **Responsive:** Cards stack single-column on mobile

## Deliverables
1. TypeScript types/interfaces for tool card data
2. `ToolCard` component with progressive disclosure
3. Badge sub-components (risk tier, GDPR, highlight, etc.)
4. Mock data for 4-6 sample AI tools
5. Listing page with responsive grid layout displaying the cards

