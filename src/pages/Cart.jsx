import { useState } from "react";
import {
  ShoppingBag,
  Trash2,
  Minus,
  Plus,
  ArrowRight,
  Tag,
  ShoppingCart,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";

const initialCart = [
  {
    id: 1,
    name: "Apple MacBook Air M3",
    category: "Laptops",
    price: 125000,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
  },
  {
    id: 2,
    name: "Sony WH-1000XM5",
    category: "Audio & Headphones",
    price: 32000,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400",
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCart);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [promoMessage, setPromoMessage] = useState("");

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = subtotal >= 5000 || subtotal === 0 ? 0 : 120;
  const total = subtotal + shipping - discount;

  const updateQuantity = (id, amount) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const applyPromo = () => {
    if (promoCode.trim().toUpperCase() === "WELCOME10") {
      setDiscount(Math.min(subtotal * 0.1, 2000));
      setPromoMessage("Promo code applied successfully!");
    } else {
      setDiscount(0);
      setPromoMessage("Invalid promo code. Please try again.");
    }
  };

  const formatPrice = (price) =>
    `৳${price.toLocaleString("en-BD")}`;

  return (
    <section className="min-h-screen bg-[#09090b] px-4 py-12 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10">
          <div className="mb-3 flex items-center gap-2 text-sm text-gray-400">
            <Link to="/" className="transition hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Your Cart</span>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Your Cart
              </h1>
              <p className="mt-2 text-sm text-gray-400">
                Review your selected products before checkout.
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-300">
              <ShoppingBag size={17} />
              {cartItems.reduce((sum, item) => sum + item.quantity, 0)} Items
            </div>
          </div>
        </div>

        {/* Empty Cart */}
        {cartItems.length === 0 ? (
          <div className="flex min-h-[450px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#111113] px-5 text-center">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/5 text-gray-400">
              <ShoppingCart size={36} />
            </div>

            <h2 className="text-2xl font-semibold">
              Your cart is empty
            </h2>

            <p className="mt-3 max-w-sm text-sm leading-6 text-gray-400">
              Looks like you haven't added anything to your cart yet.
              Explore our collection and find something you love.
            </p>

            <Link
              to="/shop"
              className="mt-7 flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
            >
              Start Shopping <ArrowRight size={17} />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">

            {/* Cart Products */}
            <div className="space-y-4 lg:col-span-2">
              <div className="hidden grid-cols-12 px-5 text-xs font-medium uppercase tracking-wider text-gray-500 sm:grid">
                <span className="col-span-6">Product</span>
                <span className="col-span-2 text-center">Price</span>
                <span className="col-span-2 text-center">Quantity</span>
                <span className="col-span-2 text-right">Total</span>
              </div>

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl border border-white/10 bg-[#111113] p-4 transition hover:border-white/20 sm:p-5"
                >
                  <div className="grid grid-cols-1 items-center gap-5 sm:grid-cols-12">

                    {/* Product Info */}
                    <div className="flex items-center gap-4 sm:col-span-6">
                      <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white/5 sm:h-28 sm:w-28">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="mb-1 text-xs text-gray-500">
                          {item.category}
                        </p>

                        <h3 className="line-clamp-2 text-sm font-semibold sm:text-base">
                          {item.name}
                        </h3>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="mt-3 flex items-center gap-1.5 text-xs text-red-400 transition hover:text-red-300"
                        >
                          <Trash2 size={14} />
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between sm:col-span-2 sm:justify-center">
                      <span className="text-xs text-gray-500 sm:hidden">
                        Price
                      </span>
                      <span className="text-sm font-medium">
                        {formatPrice(item.price)}
                      </span>
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center justify-between sm:col-span-2 sm:justify-center">
                      <span className="text-xs text-gray-500 sm:hidden">
                        Quantity
                      </span>

                      <div className="flex items-center gap-3 rounded-lg border border-white/10 px-2 py-1.5">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          disabled={item.quantity <= 1}
                          className="text-gray-400 transition hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                        >
                          <Minus size={14} />
                        </button>

                        <span className="min-w-4 text-center text-sm">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="text-gray-400 transition hover:text-white"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>

                    {/* Total */}
                    <div className="flex items-center justify-between sm:col-span-2 sm:justify-end">
                      <span className="text-xs text-gray-500 sm:hidden">
                        Subtotal
                      </span>
                      <span className="text-sm font-semibold text-white">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex flex-wrap items-center justify-between gap-4 pt-3">
                <Link
                  to="/shop"
                  className="flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
                >
                  <ArrowRight className="rotate-180" size={16} />
                  Continue Shopping
                </Link>

                <button
                  onClick={() => setCartItems([])}
                  className="text-xs text-gray-500 transition hover:text-red-400"
                >
                  Clear Cart
                </button>
              </div>
            </div>

            {/* Order Summary */}
            <aside className="rounded-xl border border-white/10 bg-[#111113] p-5 sm:p-6">
              <h2 className="mb-6 text-lg font-semibold">
                Order Summary
              </h2>

              <div className="space-y-4 border-b border-white/10 pb-5 text-sm">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span className="font-medium text-white">
                    {formatPrice(subtotal)}
                  </span>
                </div>

                <div className="flex justify-between text-gray-400">
                  <span>Shipping</span>
                  <span className="font-medium text-white">
                    {shipping === 0 ? "Free" : formatPrice(shipping)}
                  </span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-green-400">
                    <span>Discount</span>
                    <span>-{formatPrice(discount)}</span>
                  </div>
                )}
              </div>

              {/* Promo Code */}
              <div className="border-b border-white/10 py-5">
                <label className="mb-3 flex items-center gap-2 text-sm font-medium">
                  <Tag size={16} />
                  Promo Code
                </label>

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter code"
                    className="min-w-0 flex-1 rounded-lg border border-white/10 bg-[#09090b] px-3 py-2.5 text-sm outline-none transition placeholder:text-gray-600 focus:border-white/30"
                  />

                  <button
                    onClick={applyPromo}
                    className="rounded-lg bg-white px-4 text-sm font-semibold text-black transition hover:bg-gray-200"
                  >
                    Apply
                  </button>
                </div>

                {promoMessage && (
                  <p className={`mt-2 text-xs ${discount > 0 ? "text-green-400" : "text-red-400"}`}>
                    {promoMessage}
                  </p>
                )}

                <p className="mt-2 text-xs text-gray-500">
                  Try code: WELCOME10
                </p>
              </div>

              {/* Total */}
              <div className="flex items-center justify-between py-5">
                <span className="font-semibold">Total Amount</span>
                <span className="text-xl font-bold">
                  {formatPrice(total)}
                </span>
              </div>

              <button
                disabled={cartItems.length === 0}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-white py-3.5 text-sm font-semibold text-black transition hover:bg-gray-200"
              >
                Proceed to Checkout
                <ArrowRight size={17} />
              </button>

              {/* Trust Features */}
              <div className="mt-6 space-y-4 border-t border-white/10 pt-5">
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <Truck size={17} />
                  Free shipping on orders over ৳5,000
                </div>

                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <ShieldCheck size={17} />
                  Secure checkout & trusted payment
                </div>
              </div>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;