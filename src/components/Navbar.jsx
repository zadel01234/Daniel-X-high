import { Link, NavLink } from "react-router-dom";
import { BRAND } from "../config";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { count, setOpen } = useCart();
  const link = ({ isActive }) => (isActive ? "font-bold" : "text-ink/70 hover:text-ink");
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-fog/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="font-display text-xl font-extrabold tracking-tight">{BRAND.name}</Link>
        <nav className="flex items-center gap-6 text-sm">
          <NavLink to="/" end className={link}>Home</NavLink>
          <NavLink to="/shop" className={link}>Shop</NavLink>
          <button onClick={() => setOpen(true)} className="rounded-full bg-indigo px-4 py-2 font-bold text-white">
            Cart ({count})
          </button>
        </nav>
      </div>
    </header>
  );
}
