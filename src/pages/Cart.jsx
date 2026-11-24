import { useEffect, useMemo, useState } from "react";
import {
  ShoppingBag,
  Trash2,
  Minus,
  Plus,
  ArrowRight,
  Tag,
  Truck,
  ShieldCheck,
  ShoppingCart,
  ArrowLeft,
  X,
  CheckCircle2,
  PackageCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const CART_KEY = "gadgetgoods-cart";

const initialCart = [
  {
    id: 1,
    name: "Apple MacBook Air M3",
    category: "Laptop",
    price: 125000,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
  },
  {
    id: 2,
    name: "Sony WH-1000XM5",
    category: "Headphones",
    price: 32000,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500",
  },
];

const formatPrice = (price) =>
  `৳${Number(price).toLocaleString("en-BD")}`;

const getInitialCart = () => {
  try {
    const savedCart = localStorage.getItem(CART_KEY);

    if (savedCart !== null) {
      const parsed = JSON.parse(savedCart);
      return Array.isArray(parsed) ? parsed : [];
    }

    // Initial demo products
    localStorage.setItem(CART_KEY, JSON.stringify(initialCart));
    return initialCart;
  } catch {
    return [];
  }
};

const Cart = () => {
  const [cartItems, setCartItems] = useState(getInitialCart);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoMessage, setPromoMessage] = useState("");

  // Sync cart with Navbar and localStorage
  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cartItems));

    window.dispatchEvent(
      new CustomEvent("cart-updated", {
        detail: cartItems,
      })
    );
  }, [cartItems]);

  const itemCount = cartItems.reduce(
    (total, item) => total + Number(item.quantity || 0),
    0
  );

  const subtotal = useMemo(
    () =>
      cartItems.reduce(
        (total, item) =>
          total + Number(item.price) * Number(item.quantity),
        0
      ),
    [cartItems]
  );

  const shipping = subtotal === 0 || subtotal >= 5000 ? 0 : 120;

  const discount = promoApplied
    ? Math.min(subtotal * 0.1, 2000)
    : 0;

  const total = subtotal + shipping - discount;

  // Update quantity
  const updateQuantity = (id, amount) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, Number(item.quantity) + amount),
            }
          : item
      )
    );
  };

  // Remove product
  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
    setPromoApplied(false);
    setPromoCode("");
    setPromoMessage("");
  };

  // Apply promo code
  const applyPromo = () => {
    if (!promoCode.trim()) {
      setPromoMessage("Please enter a promo code.");
      return;
    }

    if (promoCode.trim().toUpperCase() === "WELCOME10") {
      setPromoApplied(true);
      setPromoMessage("10% discount applied successfully!");
    } else {
      setPromoApplied(false);
      setPromoMessage("Invalid promo code. Try again.");
    }
  };

  return (
    <main className="min-h-screen bg-[#f8f9fb] px-4 py-10 text-gray-900 sm:px-6 lg:px-10 lg:py-14">
      <div className="mx-auto max-w-7xl">

        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="transition hover:text-black">
            Home
          </Link>
          <span>/</span>
          <span className="font-medium text-gray-900">Shopping Cart</span>
        </div>

        {/* Page Header */}
        <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
              Your Shopping Bag
            </span>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Shopping Cart
              <span className="ml-3 text-lg font-medium text-gray-400">
                ({itemCount})
              </span>
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Manage your selected products and proceed to checkout.
            </p>
          </div>

          {cartItems.length > 0 && (
            <button
              onClick={clearCart}
              className="flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-red-500"
            >
              <Trash2 size={16} />
              Clear Cart
            </button>
          )}
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart */
          <div className="flex min-h-[430px] flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white px-5 text-center shadow-sm">
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gray-50">
              <ShoppingBag size={42} className="text-gray-400" />
            </div>

            <h2 className="text-2xl font-bold">
              Your cart is empty
            </h2>

            <p className="mt-3 max-w-sm text-sm leading-6 text-gray-500">
              You haven't added any products yet. Explore our collection
              and find something that matches your needs.
            </p>

            <Link
              to="/shop"
              className="mt-7 flex items-center gap-2 rounded-xl bg-gray-900 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-black"
            >
              Explore Products
              <ArrowRight size={17} />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-3">

            {/* Cart Items */}
            <section className="space-y-4 lg:col-span-2">

              {/* Items Header */}
              <div className="hidden grid-cols-12 px-5 text-xs font-semibold uppercase tracking-wider text-gray-400 sm:grid">
                <span className="col-span-6">Product Details</span>
                <span className="col-span-2 text-center">Price</span>
                <span className="col-span-2 text-center">Quantity</span>
                <span className="col-span-2 text-right">Total</span>
              </div>

              {cartItems.map((item) => (
                <article
                  key={item.id}
                  className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-gray-300 sm:p-5"
                >
                  <div className="grid grid-cols-1 items-center gap-5 sm:grid-cols-12">

                    {/* Product */}
                    <div className="flex min-w-0 items-center gap-4 sm:col-span-6">
                      <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gray-50 sm:h-28 sm:w-28">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-contain p-2"
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="mb-1 text-xs font-medium text-gray-400">
                          {item.category}
                        </p>

                        <h3 className="line-clamp-2 text-sm font-semibold leading-6 text-gray-900 sm:text-base">
                          {item.name}
                        </h3>

                        <p className="mt-1 text-xs text-green-600">
                          In Stock
                        </p>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="mt-3 flex items-center gap-1.5 text-xs font-medium text-gray-400 transition hover:text-red-500"
                        >
                          <Trash2 size={14} />
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between sm:col-span-2 sm:justify-center">
                      <span className="text-xs text-gray-400 sm:hidden">
                        Unit Price
                      </span>

                      <span className="text-sm font-medium">
                        {formatPrice(item.price)}
                      </span>
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center justify-between sm:col-span-2 sm:justify-center">
                      <span className="text-xs text-gray-400 sm:hidden">
                        Quantity
                      </span>

                      <div className="flex items-center gap-3 rounded-lg border border-gray-200 px-2.5 py-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          disabled={item.quantity <= 1}
                          aria-label="Decrease quantity"
                          className="text-gray-500 transition hover:text-black disabled:opacity-30"
                        >
                          <Minus size={14} />
                        </button>

                        <span className="min-w-4 text-center text-sm font-semibold">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          aria-label="Increase quantity"
                          className="text-gray-500 transition hover:text-black"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>

                    {/* Item Total */}
                    <div className="flex items-center justify-between sm:col-span-2 sm:justify-end">
                      <span className="text-xs text-gray-400 sm:hidden">
                        Item Total
                      </span>

                      <span className="text-sm font-bold text-gray-900">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </article>
              ))}

              {/* Continue Shopping */}
              <div className="pt-3">
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition hover:text-black"
                >
                  <ArrowLeft size={17} />
                  Continue Shopping
                </Link>
              </div>
            </section>

            {/* Order Summary */}
            <aside className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6 lg:sticky lg:top-24">
              <h2 className="text-lg font-bold">
                Order Summary
              </h2>

              <p className="mt-1 text-xs text-gray-400">
                {itemCount} items in your shopping bag
              </p>

              {/* Promo Code */}
              <div className="mt-6">
                <label className="mb-3 flex items-center gap-2 text-sm font-semibold">
                  <Tag size={16} />
                  Apply Promo Code
                </label>

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") applyPromo();
                    }}
                    placeholder="Enter promo code"
                    className="min-w-0 flex-1 rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-gray-400 focus:bg-white"
                  />

                  <button
                    onClick={applyPromo}
                    className="rounded-lg bg-gray-900 px-4 text-sm font-semibold text-white transition hover:bg-black"
                  >
                    Apply
                  </button>
                </div>

                {promoMessage && (
                  <p className={`mt-2 text-xs ${promoApplied ? "text-green-600" : "text-red-500"}`}>
                    {promoMessage}
                  </p>
                )}

                <p className="mt-2 text-xs text-gray-400">
                  Try WELCOME10 for 10% off.
                </p>
              </div>

              {/* Price Breakdown */}
              <div className="mt-6 space-y-4 border-t border-gray-100 pt-5">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="font-semibold">
                    {formatPrice(subtotal)}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Shipping Fee</span>
                  <span className="font-semibold text-green-600">
                    {shipping === 0 ? "FREE" : formatPrice(shipping)}
                  </span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Discount</span>
                    <span className="font-semibold text-green-600">
                      -{formatPrice(discount)}
                    </span>
                  </div>
                )}
              </div>

              {/* Free Shipping Progress */}
              {subtotal < 5000 && (
                <div className="mt-5 rounded-xl bg-gray-50 p-3">
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <Truck size={16} />
                    Add {formatPrice(5000 - subtotal)} more for free shipping.
                  </div>

                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="h-full rounded-full bg-gray-900 transition-all"
                      style={{
                        width: `${Math.min((subtotal / 5000) * 100, 100)}%`,
                      }}
                    />
                  </div>
                </div>
              )}

              {/* Grand Total */}
              <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-5">
                <span className="text-base font-bold">
                  Total
                </span>

                <span className="text-2xl font-bold tracking-tight">
                  {formatPrice(total)}
                </span>
              </div>

              {/* Checkout */}
              <button
                onClick={() => {
                  // Connect your checkout route here
                }}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 py-4 text-sm font-semibold text-white transition hover:bg-black"
              >
                Proceed to Checkout
                <ArrowRight size={17} />
              </button>

              <div className="mt-5 space-y-3 border-t border-gray-100 pt-5">
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <ShieldCheck size={17} className="shrink-0 text-green-600" />
                  Secure and safe checkout
                </div>

                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <PackageCheck size={17} className="shrink-0 text-green-600" />
                  Quality guaranteed products
                </div>

                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <Truck size={17} className="shrink-0 text-green-600" />
                  Fast and reliable delivery
                </div>
              </div>
            </aside>
          </div>
        )}

        {/* Bottom Trust Section */}
        <div className="mt-12 grid grid-cols-1 gap-4 border-t border-gray-200 pt-8 sm:grid-cols-3">
          <div className="flex items-center justify-center gap-3 text-sm text-gray-500">
            <ShieldCheck size={20} className="text-gray-700" />
            Secure Shopping Experience
          </div>

          <div className="flex items-center justify-center gap-3 text-sm text-gray-500">
            <Truck size={20} className="text-gray-700" />
            Reliable Delivery Service
          </div>

          <div className="flex items-center justify-center gap-3 text-sm text-gray-500">
            <CheckCircle2 size={20} className="text-gray-700" />
            Quality Products
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;