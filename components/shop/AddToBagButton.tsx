"use client";

import { PiHandbagSimpleLight } from "react-icons/pi";
import { useCart } from "@/components/cart/CartContext";
import { products } from "@/lib/products";

type AddToBagButtonProps = {
  productId: string;
  productName: string;
};

export default function AddToBagButton({
  productId,
  productName,
}: AddToBagButtonProps) {
  const { addItem } = useCart();
  const product = products.find((entry) => entry.id === productId);
  if (!product || product.stock <= 0) return null;

  return (
    <button
      type="button"
      aria-label={`Add ${productName} to bag`}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        addItem(productId);
      }}
      className="absolute bottom-2 right-2 z-10 grid size-9 place-items-center bg-pearl text-cocoa opacity-100 transition-all duration-300 sm:bottom-3 sm:right-3 sm:size-11 sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
    >
      <PiHandbagSimpleLight size={18} />
    </button>
  );
}
