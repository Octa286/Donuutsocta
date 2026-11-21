# Project memory

## Product intent & audience

- Commercial website for **Donut's Octa**, an artisanal bakery specializing in donuts and flans (custards).
- Primary goal: showcase products and drive orders via WhatsApp.
- Site language: Spanish (all UI labels, hero text, page names, product names).
- Audience: local customers browsing on mobile and desktop.

## Brand personality & voice

- Artisanal, warm, inviting bakery tone.
- Spanish-language copy throughout: "Bienvenidos" hero greeting, "Pedido" button labels.
- Product names and prices are fixed — must not be altered.

## Visual design & UX direction

- **Hero/header**: sky-blue background, centered brand name "Donut's Octa", original logo placed on the right side. No alternative logo, no mountain/cascade/donut-cluster substitutes.
- **Product imagery**: realistic professional photography style — studio lighting, natural textures, appetizing colors. No illustrations, anime, kawaii, caricature, or vector-style art. Uniform visual style across all products. Ideal format: transparent-background PNG.
- **Catalog cards**: each card shows product image, price, and a "Pedido" button below them.
- **Order buttons**: all labeled exactly "Pedido"; consistent design across Donas and Flanes pages; open WhatsApp in a new tab with a pre-filled message identifying the selected product.
- **Responsive**: full commercial site, production-ready, fully featured.
- Framework constraints: Vite + React + Tailwind CSS + Lucide React icons; `@/` path alias for `src/`.

## Decisions, constraints & rationale

- WhatsApp link is fixed: `https://wa.me/qr/32IIIB3CSWALH1` — every order button uses this link.
- No button may lack functionality; each must pass the product name into the WhatsApp message.
- Original Donut's Octa logo must be respected as provided; no recreation or substitution.
- Product names and prices are locked — no renaming or repricing.
- Catalogs split into two pages: "Donas" (donuts) and "Flanes" (flans).

## Open questions & assumptions

- Pending: product images for additional products are not yet realistic PNG photographs — AI-generated realistic photography still needed.
- The exact original logo asset (file/source) must be supplied by the user; assumed available in `src/assets`.
- Specific product names, prices, and full catalog counts not yet enumerated in memory — infer from existing pages as built.