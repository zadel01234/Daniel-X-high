import { useCart } from "../context/CartContext";
import { money } from "../config";
import { buildOrderLink } from "../utils/whatsapp";

export default function CartDrawer() {
  const { items, open, setOpen, setQty, remove, total, clear } = useCart();
  return (
    <div className={`fixed inset-0 z-40 ${open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
      <div onClick={() => setOpen(false)} className={`absolute inset-0 bg-ink/50 transition-opacity ${open ? "opacity-100" : "opacity-0"}`} />
      <aside className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-xl transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between border-b border-line p-5">
          <h2 className="text-xl font-bold">Your order</h2>
          <button onClick={() => setOpen(false)} className="text-sm underline">Close</button>
        </div>
        <div className="flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            <p className="text-ink/70">Your cart is empty. Pick something from the shop and it will show up here.</p>
          ) : (
            <ul className="space-y-5">
              {items.map((i) => (
                <li key={`${i.id}${i.size}${i.color}`} className="flex justify-between gap-3 border-b border-line pb-5">
                  <div>
                    <p className="font-bold">{i.name}</p>
                    <p className="text-sm text-ink/60">{i.size} · {i.color}</p>
                    <div className="mt-2 flex items-center gap-3">
                      <button aria-label="Decrease quantity" onClick={() => setQty(i, i.qty - 1)} className="h-7 w-7 rounded border border-line">-</button>
                      <span>{i.qty}</span>
                      <button aria-label="Increase quantity" onClick={() => setQty(i, i.qty + 1)} className="h-7 w-7 rounded border border-line">+</button>
                      <button onClick={() => remove(i)} className="ml-3 text-sm text-ink/60 underline">Remove</button>
                    </div>
                  </div>
                  <p className="font-bold">{money(i.price * i.qty)}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
        {items.length > 0 && (
          <div className="border-t border-line p-5">
            <div className="mb-3 flex justify-between text-lg font-bold"><span>Total</span><span>{money(total)}</span></div>
            <p className="mb-4 text-sm text-ink/60">Final price and delivery fee are confirmed with us on WhatsApp. You can negotiate there.</p>
            <a href={buildOrderLink(items)} target="_blank" rel="noreferrer" onClick={() => setTimeout(clear, 500)}
              className="block rounded-full bg-[#25D366] py-3 text-center font-bold text-white">Send order on WhatsApp</a>
          </div>
        )}
      </aside>
    </div>
  );
}
