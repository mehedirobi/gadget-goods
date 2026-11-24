
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  ShoppingCart,
  Trash2,
  ArrowRight,
  Star,
  ShoppingBag,
  PackageCheck,
  SlidersHorizontal,
  Check,
  X,
  ArrowUpDown,
} from "lucide-react";

const WISHLIST_KEY = "gadgetgoods-wishlist";
const CART_KEY = "gadgetgoods-cart";

// Demo products - replace with your actual product data later.
const demoProducts = [
  {
    id: "1",
    name: "Apple iPhone 16 Pro Max",
    category: "Smartphones",
    price: 164999,
    oldPrice: 179999,
    rating: 4.9,
    reviews: 128,
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=700&q=85",
    stock: true,
    badge: "Best Seller",
  },
  {
    id: "2",
    name: "MacBook Air M3",
    category: "Laptops",
    price: 139999,
    oldPrice: 154999,
    rating: 4.8,
    reviews: 96,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=700&q=85",
    stock: true,
    badge: "Popular",
  },
  {
    id: "3",
    name: "Sony WH-1000XM5",
    category: "Headphones",
    price: 34999,
    oldPrice: 39999,
    rating: 4.9,
    reviews: 84,
    image:
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=700&q=85",
    stock: true,
    badge: "Top Rated",
  },
  {
    id: "4",
    name: "Apple Watch Series 10",
    category: "Smartwatches",
    price: 52999,
    oldPrice: 59999,
    rating: 4.7,
    reviews: 72,
    image:
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=700&q=85",
    stock: false,
    badge: "Limited",
  },
  {
    id: "5",
    name: "Logitech MX Master 3S",
    category: "Accessories",
    price: 12999,
    oldPrice: 14999,
    rating: 4.8,
    reviews: 54,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=700&q=85",
    stock: true,
    badge: "Popular",
  },
  {
    id: "6",
    name: "Samsung Galaxy Tab S9",
    category: "Tablets",
    price: 74999,
    oldPrice: 84999,
    rating: 4.8,
    reviews: 63,
    image:
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=700&q=85",
    stock: true,
    badge: "New Arrival",
  },
];

const formatPrice = (price) =>
  `৳${Number(price).toLocaleString("en-US")}`;

const getStoredItems = () => {
  try {
    const stored = localStorage.getItem(WISHLIST_KEY);

    if (stored !== null) {
      const parsed = JSON.parse(stored);
      return Array.isArray(parsed) ? parsed : [];
    }

    // Initial demo wishlist for first-time visitors.
    return demoProducts.slice(0, 4);
  } catch {
    return demoProducts.slice(0, 4);
  }
};

const Wishlist = () => {
  const [wishlist, setWishlist] = useState(getStoredItems);
  const [sortBy, setSortBy] = useState("recent");
  const [activeCategory, setActiveCategory] = useState("All");
  const [notification, setNotification] = useState(null);

  // Persist wishlist.
  useEffect(() => {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  }, [wishlist]);

  // Auto-dismiss notification.
  useEffect(() => {
    if (!notification) return;

    const timer = setTimeout(() => {
      setNotification(null);
    }, 2500);

    return () => clearTimeout(timer);
  }, [notification]);

  const categories = useMemo(
    () => [
      "All",
      ...new Set(wishlist.map((product) => product.category)),
    ],
    [wishlist]
  );

  const filteredProducts = useMemo(() => {
    let products = [...wishlist];

    if (activeCategory !== "All") {
      products = products.filter(
        (product) => product.category === activeCategory
      );
    }

    switch (sortBy) {
      case "low":
        products.sort((a, b) => a.price - b.price);
        break;

      case "high":
        products.sort((a, b) => b.price - a.price);
        break;

      case "name":
        products.sort((a, b) => a.name.localeCompare(b.name));
        break;

      default:
        break;
    }

    return products;
  }, [wishlist, activeCategory, sortBy]);

  const removeFromWishlist = (productId) => {
    setWishlist((prev) =>
      prev.filter((product) => String(product.id) !== String(productId))
    );

    setNotification({
      type: "success",
      message: "Product removed from your wishlist.",
    });
  };

  const addToCart = (product) => {
    if (!product.stock) {
      setNotification({
        type: "error",
        message: "This product is currently out of stock.",
      });
      return;
    }

    try {
      const storedCart = JSON.parse(
        localStorage.getItem(CART_KEY) || "[]"
      );

      const cart = Array.isArray(storedCart) ? storedCart : [];

      const existingProduct = cart.find(
        (item) => String(item.id) === String(product.id)
      );

      let updatedCart;

      if (existingProduct) {
        updatedCart = cart.map((item) =>
          String(item.id) === String(product.id)
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        updatedCart = [
          ...cart,
          {
            ...product,
            quantity: 1,
          },
        ];
      }

      localStorage.setItem(CART_KEY, JSON.stringify(updatedCart));

      setNotification({
        type: "success",
        message: "Product added to your cart!",
      });
    } catch {
      setNotification({
        type: "error",
        message: "Unable to update your cart.",
      });
    }
  };

  const moveAllToCart = () => {
    const availableProducts = wishlist.filter((product) => product.stock);

    if (!availableProducts.length) {
      setNotification({
        type: "error",
        message: "No available products to add.",
      });
      return;
    }

    try {
      const storedCart = JSON.parse(
        localStorage.getItem(CART_KEY) || "[]"
      );

      const cart = Array.isArray(storedCart) ? storedCart : [];
      const updatedCart = [...cart];

      availableProducts.forEach((product) => {
        const existingIndex = updatedCart.findIndex(
          (item) => String(item.id) === String(product.id)
        );

        if (existingIndex !== -1) {
          updatedCart[existingIndex] = {
            ...updatedCart[existingIndex],
            quantity: (updatedCart[existingIndex].quantity || 1) + 1,
          };
        } else {
          updatedCart.push({
            ...product,
            quantity: 1,
          });
        }
      });

      localStorage.setItem(CART_KEY, JSON.stringify(updatedCart));

      setNotification({
        type: "success",
        message: `${availableProducts.length} products added to cart!`,
      });
    } catch {
      setNotification({
        type: "error",
        message: "Unable to update your cart.",
      });
    }
  };

  const clearWishlist = () => {
    setWishlist([]);
    setActiveCategory("All");

    setNotification({
      type: "success",
      message: "Your wishlist has been cleared.",
    });
  };

  return (
    <div className="min-h-screen bg-[#f8f9fb] pb-20">
      {/* Notification */}
      {notification && (
        <div
          className={`fixed right-4 top-24 z-50 flex max-w-sm items-center gap-3 rounded-xl border bg-white px-4 py-3 shadow-xl ${
            notification.type === "error"
              ? "border-red-200"
              : "border-green-200"
          }`}
        >
          {notification.type === "error" ? (
            <X className="h-5 w-5 shrink-0 text-red-500" />
          ) : (
            <Check className="h-5 w-5 shrink-0 text-green-600" />
          )}

          <p className="text-sm font-medium text-gray-700">
            {notification.message}
          </p>

          <button
            onClick={() => setNotification(null)}
            className="ml-auto text-gray-400 hover:text-gray-700"
            aria-label="Close notification"
          >
            <X size={17} />
          </button>
        </div>
      )}

      {/* Hero */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-red-500">
                <Heart size={14} fill="currentColor" />
                Your Personal Collection
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                My Wishlist
                <span className="ml-3 text-red-500">.</span>
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
                Keep your favorite tech products in one place.
                Your next favorite gadget is just a click away.
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm text-gray-600">
                <Heart size={17} className="text-red-500" />
                <span>
                  <strong className="font-bold text-gray-900">
                    {wishlist.length}
                  </strong>{" "}
                  {wishlist.length === 1 ? "Product" : "Products"} Saved
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:border-gray-400 hover:bg-gray-50"
              >
                Continue Shopping
                <ArrowRight size={17} />
              </Link>

              {wishlist.length > 0 && (
                <button
                  onClick={moveAllToCart}
                  className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
                >
                  <ShoppingCart size={17} />
                  Move All to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {wishlist.length > 0 ? (
          <>
            {/* Toolbar */}
            <div className="mb-7 flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Saved Products
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Products you have saved for later.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2.5">
                  <ArrowUpDown size={16} className="text-gray-400" />

                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-transparent text-sm font-medium text-gray-700 outline-none"
                    aria-label="Sort wishlist products"
                  >
                    <option value="recent">Recently Added</option>
                    <option value="low">Price: Low to High</option>
                    <option value="high">Price: High to Low</option>
                    <option value="name">Name: A to Z</option>
                  </select>
                </div>

                <button
                  onClick={clearWishlist}
                  className="inline-flex items-center gap-2 rounded-xl border border-red-100 bg-white px-3 py-2.5 text-sm font-medium text-red-500 transition hover:bg-red-50"
                >
                  <Trash2 size={15} />
                  Clear All
                </button>
              </div>
            </div>

            {/* Category Filters */}
            {categories.length > 2 && (
              <div className="mb-7 flex items-center gap-2 overflow-x-auto pb-2">
                <SlidersHorizontal
                  size={17}
                  className="mr-1 shrink-0 text-gray-400"
                />

                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition ${
                      activeCategory === category
                        ? "bg-gray-900 text-white"
                        : "border border-gray-200 bg-white text-gray-600 hover:border-gray-400"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredProducts.map((product) => {
                  const discount =
                    product.oldPrice > product.price
                      ? Math.round(
                          ((product.oldPrice - product.price) /
                            product.oldPrice) *
                            100
                        )
                      : 0;

                  return (
                    <article
                      key={product.id}
                      className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl hover:shadow-gray-200/60"
                    >
                      {/* Product Image */}
                      <div className="relative flex h-60 items-center justify-center overflow-hidden bg-[#f5f6f8] p-5">
                        <img
                          src={product.image}
                          alt={product.name}
                          loading="lazy"
                          className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                        />

                        {product.badge && (
                          <span className="absolute left-4 top-4 rounded-md bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-700 shadow-sm">
                            {product.badge}
                          </span>
                        )}

                        {discount > 0 && (
                          <span className="absolute right-4 top-4 rounded-md bg-red-500 px-2 py-1 text-xs font-bold text-white">
                            -{discount}%
                          </span>
                        )}

                        <button
                          onClick={() => removeFromWishlist(product.id)}
                          className="absolute right-4 bottom-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-500 shadow-md transition hover:bg-red-500 hover:text-white"
                          aria-label={`Remove ${product.name} from wishlist`}
                          title="Remove from wishlist"
                        >
                          <Heart size={18} fill="currentColor" />
                        </button>
                      </div>

                      {/* Product Information */}
                      <div className="p-5">
                        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">
                          {product.category}
                        </p>

                        <h3 className="line-clamp-2 min-h-12 text-base font-bold text-gray-900 transition group-hover:text-red-500">
                          {product.name}
                        </h3>

                        <div className="mt-3 flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Star
                              size={14}
                              fill="#FBBF24"
                              className="text-yellow-400"
                            />
                            <span className="text-sm font-semibold text-gray-700">
                              {product.rating}
                            </span>
                          </div>

                          <span className="text-xs text-gray-400">
                            ({product.reviews} reviews)
                          </span>
                        </div>

                        <div className="mt-4 flex items-center gap-2">
                          <span className="text-lg font-bold text-gray-900">
                            {formatPrice(product.price)}
                          </span>

                          {product.oldPrice > product.price && (
                            <span className="text-sm text-gray-400 line-through">
                              {formatPrice(product.oldPrice)}
                            </span>
                          )}
                        </div>

                        <div className="mt-4 flex items-center gap-2">
                          <span
                            className={`h-2 w-2 rounded-full ${
                              product.stock ? "bg-green-500" : "bg-red-500"
                            }`}
                          />

                          <span
                            className={`text-xs font-medium ${
                              product.stock
                                ? "text-green-600"
                                : "text-red-500"
                            }`}
                          >
                            {product.stock ? "In Stock" : "Out of Stock"}
                          </span>
                        </div>

                        <button
                          onClick={() => addToCart(product)}
                          disabled={!product.stock}
                          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
                        >
                          <ShoppingCart size={17} />
                          {product.stock ? "Add to Cart" : "Out of Stock"}
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-2xl border border-gray-200 bg-white py-16 text-center">
                <PackageCheck
                  size={42}
                  className="mx-auto text-gray-300"
                />
                <h3 className="mt-4 text-lg font-bold text-gray-900">
                  No products in this category
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Try selecting another category.
                </p>
                <button
                  onClick={() => setActiveCategory("All")}
                  className="mt-5 text-sm font-semibold text-red-500 hover:text-red-600"
                >
                  View All Products
                </button>
              </div>
            )}
          </>
        ) : (
          /* Empty Wishlist */
          <div className="rounded-3xl border border-gray-200 bg-white px-5 py-16 text-center sm:py-24">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-50">
              <Heart
                size={42}
                strokeWidth={1.5}
                className="text-red-400"
              />
            </div>

            <h2 className="mt-7 text-2xl font-bold text-gray-900 sm:text-3xl">
              Your Wishlist is Empty
            </h2>

            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-gray-500">
              Looks like you haven't saved any products yet. Explore our
              collection and save your favorite gadgets for later.
            </p>

            <Link
              to="/shop"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gray-900 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-red-600"
            >
              <ShoppingBag size={18} />
              Explore Products
              <ArrowRight size={17} />
            </Link>
          </div>
        )}

        {/* Bottom Benefits */}
        {wishlist.length > 0 && (
          <div className="mt-12 grid grid-cols-1 gap-4 rounded-2xl border border-gray-200 bg-white p-6 sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">
                <PackageCheck size={21} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">
                  Quality Products
                </h4>
                <p className="mt-1 text-xs text-gray-500">
                  Carefully selected gadgets.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <ShoppingCart size={21} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">
                  Easy Shopping
                </h4>
                <p className="mt-1 text-xs text-gray-500">
                  Add your favorites to cart.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-500">
                <Heart size={21} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">
                  Saved Locally
                </h4>
                <p className="mt-1 text-xs text-gray-500">
                  Your wishlist stays in this browser.
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Wishlist;
