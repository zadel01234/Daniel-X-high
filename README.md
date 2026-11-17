# Clothing brand site (React + Vite + Tailwind)

Catalogue site where checkout = a pre-filled WhatsApp message to the company.

## Run
    npm install
    cp .env.example .env     # set VITE_WHATSAPP_NUMBER (e.g. 2348012345678)
    npm run dev

## Customise
- `src/config.js`: brand name, tagline, WhatsApp number, Instagram, currency
- `src/data/products.js`: products. Put images in `public/products/` and set `image: "/products/x.jpg"`
- `src/index.css`: colour tokens and fonts

## Deploy
`npm run build`, then upload `dist/` to Vercel or Netlify (rewrite files included for SPA routing).
