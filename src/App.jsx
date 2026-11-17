import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import { buildEnquiryLink } from "./utils/whatsapp";

function ScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollTop />
      <Navbar />
      <main className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="*" element={<p className="mx-auto max-w-6xl px-5 py-24">That page doesn't exist. Head back to the shop.</p>} />
        </Routes>
      </main>
      <Footer />
      <CartDrawer />
      <a href={buildEnquiryLink()} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
        className="fixed bottom-5 left-5 z-30 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-lg">
        Chat with us
      </a>
    </>
  );
}
