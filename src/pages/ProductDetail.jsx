import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";
import { money } from "../config";
import { useCart } from "../context/CartContext";
import { Photo } from "../components/ProductCard";
import { buildOrderLink } from "../utils/whatsapp";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { add } = useCart();
  const [size, setSize] = useState(product?.sizes[0]);
  const [color, setColor] = useState(product?.colors[0]);
  const [qty, setQty] = useState(1);

  if (!product) return <p className="mx-auto max-w-6xl px-5 py-24">We couldn't find that product. <Link to="/shop" className="underline">Back to the shop</Link></p>;

  const item = { id: product.id, name: product.name, price: product.price, size, color };
  const chip = (active) => `rounded border px-4 py-2 text-sm ${active ? "border-indigo bg-indigo text-white" : "border-line bg-white"}`;

  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-2">
      <div className="aspect-[4/5] overflow-hidden rounded-sm bg-white"><Photo product={product} /></div>
      <div>
        <Link to="/shop" className="text-sm underline">All clothes</Link>
        <h1 className="mt-3 text-4xl font-extrabold">{product.name}</h1>
        <p className="mt-2 text-2xl">{money(product.price)}</p>
        <p className="mt-4 max-w-md text-ink/75">{product.description}</p>

        <p className="mt-8 font-bold">Size</p>
        <div className="mt-2 flex flex-wrap gap-2">{product.sizes.map((s) => <button key={s} onClick={() => setSize(s)} className={chip(s === size)}>{s}</button>)}</div>
        <p className="mt-6 font-bold">Colour</p>
        <div className="mt-2 flex flex-wrap gap-2">{product.colors.map((c) => <button key={c} onClick={() => setColor(c)} className={chip(c === color)}>{c}</button>)}</div>

        <p className="mt-6 font-bold">Quantity</p>
        <div className="mt-2 flex items-center gap-3">
          <button aria-label="Decrease quantity" onClick={() => setQty(Math.max(1, qty - 1))} className="h-9 w-9 rounded border border-line bg-white">-</button>
          <span className="w-6 text-center">{qty}</span>
          <button aria-label="Increase quantity" onClick={() => setQty(qty + 1)} className="h-9 w-9 rounded border border-line bg-white">+</button>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button onClick={() => add(item, qty)} className="rounded-full bg-indigo px-7 py-3 font-bold text-white">Add to cart</button>
          <a href={buildOrderLink([{ ...item, qty }])} target="_blank" rel="noreferrer" className="rounded-full bg-[#25D366] px-7 py-3 font-bold text-white">Order on WhatsApp</a>
        </div>
        <p className="mt-4 text-sm text-ink/60">Price and delivery are confirmed with us on WhatsApp.</p>
      </div>
    </div>
  );
}
