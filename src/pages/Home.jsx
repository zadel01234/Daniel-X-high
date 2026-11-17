import { Link } from "react-router-dom";
import { BRAND } from "../config";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const steps = [
  ["Pick your pieces", "Choose size and color, then add to your cart."],
  ["Send your order", "One tap opens WhatsApp with your order already written."],
  ["Confirm with us", "We confirm stock, agree the price and arrange delivery."],
];

export default function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-10 pt-16 md:grid-cols-[1.3fr_1fr] md:items-end md:pt-24">
        <h1 className="text-5xl font-extrabold leading-[1.02] tracking-tight md:text-7xl">{BRAND.tagline}</h1>
        <div>
          <p className="max-w-sm text-lg text-ink/75">{BRAND.intro}</p>
          <Link to="/shop" className="mt-6 inline-block rounded-full bg-indigo px-7 py-3 font-bold text-white">Shop the collection</Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-10">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-3xl font-bold">New in</h2>
          <Link to="/shop" className="underline">See all</Link>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4">
          {products.slice(0, 4).map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-5">
        <h2 className="text-3xl font-bold">How ordering works</h2>
        <ol className="mt-6 grid gap-6 md:grid-cols-3">
          {steps.map(([t, d], idx) => (
            <li key={t} className="border-t-2 border-kola pt-4">
              <p className="text-sm text-ink/60">Step {idx + 1}</p>
              <p className="mt-1 text-xl font-bold">{t}</p>
              <p className="mt-1 text-ink/70">{d}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
