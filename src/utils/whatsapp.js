import { BRAND, money } from "../config";

const open = (text) => `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(text)}`;

const line = (i) => `• ${i.name} (${i.size}, ${i.color}) x${i.qty} - ${money(i.price * i.qty)}`;

export function buildOrderLink(items) {
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  return open(
    ["Hello, I'd like to place an order:", "", ...items.map(line), "", `Total: ${money(total)}`, "", "Please confirm availability, final price and delivery."].join("\n")
  );
}

export const buildEnquiryLink = () => open("Hello, I have a question about your clothes.");
