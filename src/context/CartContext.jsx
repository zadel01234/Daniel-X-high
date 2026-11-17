import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);
export const useCart = () => useContext(CartContext);
const KEY = "brand-cart-v1";
const keyOf = (i) => `${i.id}|${i.size}|${i.color}`;

function load() {
  try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch { return []; }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(load);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify(items)); } catch { /* storage unavailable */ }
  }, [items]);

  const add = (item, qty = 1) => {
    setItems((prev) => {
      const k = keyOf(item);
      const found = prev.find((p) => keyOf(p) === k);
      return found ? prev.map((p) => (keyOf(p) === k ? { ...p, qty: p.qty + qty } : p)) : [...prev, { ...item, qty }];
    });
    setOpen(true);
  };
  const setQty = (item, qty) =>
    setItems((prev) => prev.map((p) => (keyOf(p) === keyOf(item) ? { ...p, qty: Math.max(1, qty) } : p)));
  const remove = (item) => setItems((prev) => prev.filter((p) => keyOf(p) !== keyOf(item)));
  const clear = () => setItems([]);

  const value = useMemo(() => ({
    items, open, setOpen, add, setQty, remove, clear,
    count: items.reduce((s, i) => s + i.qty, 0),
    total: items.reduce((s, i) => s + i.qty * i.price, 0),
  }), [items, open]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
