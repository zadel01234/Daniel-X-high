import { Link } from "react-router-dom";
import { money } from "../config";

export function Photo({ product, className = "" }) {
  return product.image ? (
    <img src={product.image} alt={product.name} loading="lazy" className={`h-full w-full object-cover ${className}`} />
  ) : (
    <div className={`flex h-full w-full items-center justify-center bg-indigo/10 font-display text-5xl font-extrabold text-indigo/40 ${className}`}>
      {product.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
    </div>
  );
}

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="aspect-[4/5] overflow-hidden rounded-sm bg-white">
        <Photo product={product} className="transition-transform duration-300 group-hover:scale-105" />
      </div>
      <div className="mt-3 flex items-baseline justify-between gap-3">
        <h3 className="font-bold">{product.name}</h3>
        <span className="text-ink/80">{money(product.price)}</span>
      </div>
      <p className="text-sm text-ink/60">{product.category}</p>
    </Link>
  );
}
