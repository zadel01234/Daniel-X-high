import { useMemo, useState } from "react";
import { CATEGORIES, products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("new");

  const list = useMemo(() => {
    let r = products.filter((p) => (cat === "All" || p.category === cat) && p.name.toLowerCase().includes(q.toLowerCase()));
    if (sort === "low") r = [...r].sort((a, b) => a.price - b.price);
    if (sort === "high") r = [...r].sort((a, b) => b.price - a.price);
    return r;
  }, [cat, q, sort]);

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <h1 className="text-4xl font-extrabold">Shop</h1>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        {["All", ...CATEGORIES].map((c) => (
          <button key={c} onClick={() => setCat(c)}
            className={`rounded-full border px-4 py-1.5 text-sm ${cat === c ? "border-indigo bg-indigo text-white" : "border-line bg-white"}`}>{c}</button>
        ))}
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search clothes" aria-label="Search clothes"
          className="ml-auto rounded-full border border-line bg-white px-4 py-1.5 text-sm" />
        <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort" className="rounded-full border border-line bg-white px-3 py-1.5 text-sm">
          <option value="new">Newest</option>
          <option value="low">Price: low to high</option>
          <option value="high">Price: high to low</option>
        </select>
      </div>
      {list.length === 0 ? (
        <p className="mt-12 text-ink/70">Nothing matches that search. Try another name or clear the category.</p>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4">
          {list.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </div>
  );
}
