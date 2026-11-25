
import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  Heart,
  Minus,
  Package,
  Plus,
  ShieldCheck,
  ShoppingCart,
  Star,
  Truck,
  X,
} from "lucide-react";

import { products } from "../data/products";

const formatPrice = (price) =>
  new Intl.NumberFormat("en-BD").format(Number(price) || 0);

const getDiscount = (price, oldPrice) => {
  if (!oldPrice || oldPrice <= price) return 0;

  return Math.round(((oldPrice - price) / oldPrice) * 100);
};

const formatSpecificationLabel = (value) =>
  value
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (letter) => letter.toUpperCase());

const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find(
    (item) => String(item.id) === String(id)
  );

  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState("description");
  const [isWishlisted, setIsWishlisted] = useState(false);

  const images = useMemo(
    () => (product?.image ? [product.image] : []),
    [product]
  );

  const relatedProducts = useMemo(() => {
    if (!product) return [];

    return products
      .filter(
        (item) =>
          item.id !== product.id &&
          (item.category === product.category ||
            item.brand === product.brand)
      )
      .slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-5">
        <div className="max-w-md text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
            <Package size={36} />
          </div>

          <h1 className="mt-6 text-2xl font-bold text-slate-900">
            Product Not Found
          </h1>

          <p className="mt-3 text-sm leading-7 text-slate-500">
            This product may have been removed or the product link
            may be incorrect.
          </p>

          <Link
            to="/shop"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            <ArrowLeft size={17} />
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  const discount = getDiscount(product.price, product.oldPrice);

  const specifications = Object.entries(
    product.specifications || {}
  );

  const handleQuantity = (type) => {
    setQuantity((current) => {
      if (type === "decrease") {
        return Math.max(1, current - 1);
      }

      return Math.min(10, current + 1);
    });
  };

  const handleWishlist = () => {
    setIsWishlisted((previous) => !previous);
  };

  const stockAvailable = product.stock === "In Stock";

  return (
    <main className="min-h-screen bg-[#f8fafc] pb-20 text-slate-900">
      {/* Breadcrumb */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8 lg:px-10">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs font-medium"
          >
            <Link
              to="/"
              className="text-slate-500 transition hover:text-blue-600"
            >
              Home
            </Link>

            <ChevronRight size={14} className="text-slate-400" />

            <Link
              to="/shop"
              className="text-slate-500 transition hover:text-blue-600"
            >
              Shop
            </Link>

            <ChevronRight size={14} className="text-slate-400" />

            <Link
              to={`/shop?category=${encodeURIComponent(
                product.category
              )}`}
              className="text-slate-500 transition hover:text-blue-600"
            >
              {product.category}
            </Link>

            <ChevronRight size={14} className="text-slate-400" />

            <span className="max-w-[180px] truncate font-semibold text-slate-900">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10 lg:py-12">
        {/* Back to Shop */}
        <Link
          to="/shop"
          className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-blue-600"
        >
          <ArrowLeft size={16} />
          Continue Shopping
        </Link>

        {/* Product Overview */}
        <section className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Product Image */}
          <div>
            <div className="relative flex min-h-[350px] items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 sm:min-h-[480px] sm:p-10">
              {discount > 0 && (
                <span className="absolute left-5 top-5 z-10 rounded-full bg-red-500 px-3 py-1.5 text-xs font-bold text-white">
                  {discount}% OFF
                </span>
              )}

              {product.badge && (
                <span className="absolute right-5 top-5 z-10 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">
                  {product.badge}
                </span>
              )}

              {images[activeImage] ? (
                <img
                  src={images[activeImage]}
                  alt={product.name}
                  className="h-[320px] w-full object-contain transition duration-500 sm:h-[420px]"
                />
              ) : (
                <Package size={70} className="text-slate-300" />
              )}
            </div>

            {/* Image Thumbnails */}
            <div className="mt-4 flex gap-3">
              {images.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  aria-label={`View product image ${index + 1}`}
                  className={`flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl border bg-white p-2 transition ${
                    activeImage === index
                      ? "border-blue-600 ring-2 ring-blue-100"
                      : "border-slate-200 hover:border-blue-300"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} thumbnail`}
                    className="h-full w-full object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="flex flex-col">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">
                {product.category}
              </span>

              {product.brand && (
                <span className="text-xs font-semibold text-slate-500">
                  Brand: {product.brand}
                </span>
              )}
            </div>

            <h1 className="mt-5 text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1">
                <Star
                  size={17}
                  className="fill-amber-400 text-amber-400"
                />

                <span className="text-sm font-bold text-slate-900">
                  {Number(product.rating || 0).toFixed(1)}
                </span>
              </div>

              <span className="text-xs text-slate-400">|</span>

              <span className="text-sm text-slate-500">
                {product.reviews || 0} Reviews
              </span>
            </div>

            {/* Price */}
            <div className="mt-7 border-y border-slate-200 py-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  ৳{formatPrice(product.price)}
                </span>

                {product.oldPrice > product.price && (
                  <span className="text-lg font-medium text-slate-400 line-through">
                    ৳{formatPrice(product.oldPrice)}
                  </span>
                )}
              </div>

              {discount > 0 && (
                <p className="mt-2 text-sm font-semibold text-green-600">
                  You save ৳
                  {formatPrice(product.oldPrice - product.price)}
                </p>
              )}
            </div>

            {/* Description */}
            <div className="mt-6">
              <h2 className="text-sm font-bold text-slate-900">
                Product Description
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                {product.description ||
                  "Explore this product and discover its features."}
              </p>
            </div>

            {/* Stock Status */}
            <div className="mt-6 flex items-center gap-2">
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-full ${
                  stockAvailable
                    ? "bg-green-50 text-green-600"
                    : "bg-red-50 text-red-500"
                }`}
              >
                {stockAvailable ? (
                  <Check size={15} />
                ) : (
                  <X size={15} />
                )}
              </span>

              <span
                className={`text-sm font-bold ${
                  stockAvailable
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {product.stock || "Availability unknown"}
              </span>
            </div>

            {/* Quantity */}
            <div className="mt-7">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                Quantity
              </p>

              <div className="flex h-12 w-fit items-center overflow-hidden rounded-xl border border-slate-200 bg-white">
                <button
                  type="button"
                  onClick={() => handleQuantity("decrease")}
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                  className="flex h-full w-12 items-center justify-center text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Minus size={16} />
                </button>

                <span className="flex h-full min-w-12 items-center justify-center border-x border-slate-200 text-sm font-bold">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={() => handleQuantity("increase")}
                  disabled={quantity >= 10}
                  aria-label="Increase quantity"
                  className="flex h-full w-12 items-center justify-center text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Plus size={16} />
                </button>
              </div>

              <p className="mt-2 text-[11px] text-slate-400">
                Maximum 10 units per selection.
              </p>
            </div>

            {/* Actions */}
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/cart"
                state={{
                  productId: product.id,
                  quantity,
                }}
                className={`inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl px-5 text-sm font-bold transition ${
                  stockAvailable
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700"
                    : "pointer-events-none bg-slate-200 text-slate-400"
                }`}
                aria-disabled={!stockAvailable}
              >
                <ShoppingCart size={18} />
                Go to Cart
              </Link>

              <button
                type="button"
                onClick={handleWishlist}
                aria-label={
                  isWishlisted
                    ? "Remove from wishlist"
                    : "Add to wishlist"
                }
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition ${
                  isWishlisted
                    ? "border-red-200 bg-red-50 text-red-500"
                    : "border-slate-200 bg-white text-slate-600 hover:border-red-200 hover:text-red-500"
                }`}
              >
                <Heart
                  size={20}
                  className={isWishlisted ? "fill-current" : ""}
                />
              </button>
            </div>

            {/* Service Benefits */}
            <div className="mt-8 grid grid-cols-1 gap-4 border-t border-slate-200 pt-6 sm:grid-cols-3">
              <div className="flex items-center gap-3">
                <Truck size={22} className="shrink-0 text-blue-600" />

                <div>
                  <p className="text-xs font-bold text-slate-800">
                    Fast Delivery
                  </p>
                  <p className="mt-1 text-[10px] text-slate-400">
                    Reliable shipping
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <ShieldCheck
                  size={22}
                  className="shrink-0 text-blue-600"
                />

                <div>
                  <p className="text-xs font-bold text-slate-800">
                    Quality Product
                  </p>
                  <p className="mt-1 text-[10px] text-slate-400">
                    Quality checked
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Package
                  size={22}
                  className="shrink-0 text-blue-600"
                />

                <div>
                  <p className="text-xs font-bold text-slate-800">
                    Secure Packaging
                  </p>
                  <p className="mt-1 text-[10px] text-slate-400">
                    Carefully packed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Information Tabs */}
        <section className="mt-14 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="flex gap-6 overflow-x-auto border-b border-slate-200 px-5 sm:px-8">
            {[
              ["description", "Description"],
              ["specifications", "Specifications"],
            ].map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => setActiveTab(key)}
                className={`relative shrink-0 py-5 text-sm font-bold transition ${
                  activeTab === key
                    ? "text-blue-600"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {label}

                {activeTab === key && (
                  <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-blue-600" />
                )}
              </button>
            ))}
          </div>

          <div className="p-5 sm:p-8">
            {activeTab === "description" && (
              <div className="max-w-3xl">
                <h3 className="text-lg font-bold text-slate-900">
                  About {product.name}
                </h3>

                <p className="mt-4 text-sm leading-8 text-slate-500">
                  {product.description ||
                    "Product information will be available soon."}
                </p>

                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-xs text-slate-400">
                      Product Brand
                    </p>
                    <p className="mt-1 text-sm font-bold text-slate-800">
                      {product.brand || "Not specified"}
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-xs text-slate-400">
                      Product Category
                    </p>
                    <p className="mt-1 text-sm font-bold text-slate-800">
                      {product.category}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "specifications" && (
              <div>
                <h3 className="mb-5 text-lg font-bold text-slate-900">
                  Technical Specifications
                </h3>

                {specifications.length > 0 ? (
                  <div className="overflow-hidden rounded-xl border border-slate-200">
                    {specifications.map(([key, value], index) => (
                      <div
                        key={key}
                        className={`grid grid-cols-1 gap-2 px-4 py-4 sm:grid-cols-2 sm:gap-5 ${
                          index % 2 === 0 ? "bg-slate-50" : "bg-white"
                        }`}
                      >
                        <span className="text-xs font-semibold text-slate-500">
                          {formatSpecificationLabel(key)}
                        </span>

                        <span className="text-sm font-bold text-slate-800">
                          {String(value)}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-slate-500">
                    Specifications are not available for this product yet.
                  </p>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                  You may also like
                </span>

                <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900">
                  Related Products
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Discover more products from this collection.
                </p>
              </div>

              <Link
                to="/shop"
                className="hidden items-center gap-2 text-xs font-bold text-blue-600 transition hover:text-blue-700 sm:flex"
              >
                View All
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((item) => (
                <Link
                  key={item.id}
                  to={`/product/${item.id}`}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60"
                >
                  <div className="flex h-52 items-center justify-center bg-slate-50 p-5">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-4">
                    <p className="text-[11px] font-semibold text-blue-600">
                      {item.brand}
                    </p>

                    <h3 className="mt-2 line-clamp-2 min-h-10 text-sm font-bold leading-5 text-slate-800 transition group-hover:text-blue-600">
                      {item.name}
                    </h3>

                    <div className="mt-4 flex items-center justify-between gap-2">
                      <span className="text-base font-extrabold text-slate-900">
                        ৳{formatPrice(item.price)}
                      </span>

                      <span className="flex items-center gap-1 text-xs font-semibold text-slate-500">
                        <Star
                          size={13}
                          className="fill-amber-400 text-amber-400"
                        />
                        {Number(item.rating || 0).toFixed(1)}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default ProductDetails;
