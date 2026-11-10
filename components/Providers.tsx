"use client";

import { CartProvider } from "@/components/cart/CartContext";
import CartSheet from "@/components/cart/CartSheet";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      {children}
      <CartSheet />
    </CartProvider>
  );
}
