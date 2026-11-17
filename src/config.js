// Edit this file to rebrand the whole site.
export const BRAND = {
  name: "X-High",
  tagline: "Clothes cut for how you actually live.",
  intro: "Browse the collection, add what you like, and send your order straight to us on WhatsApp.",
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || "2340000000000", // country code, no + or leading 0
  instagram: "https://instagram.com/xhigh",
  currency: "₦",
  location: "Lagos, Nigeria",
};
export const money = (n) => `${BRAND.currency}${Number(n).toLocaleString()}`;
