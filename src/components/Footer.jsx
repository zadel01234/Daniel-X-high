import { BRAND } from "../config";

export default function Footer() {
  return (
    <footer className="mt-24 bg-ink text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-12 md:flex-row md:justify-between">
        <div>
          <p className="font-display text-2xl font-extrabold">{BRAND.name}</p>
          <p className="mt-1 text-white/70">{BRAND.location}</p>
        </div>
        <div className="flex gap-6 text-white/80">
          <a href={BRAND.instagram} target="_blank" rel="noreferrer" className="hover:text-white">Instagram</a>
          <a href={`https://wa.me/${BRAND.whatsapp}`} target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp</a>
        </div>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-xs text-white/50">© {new Date().getFullYear()} {BRAND.name}</p>
    </footer>
  );
}
