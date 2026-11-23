
import { Link } from "react-router-dom";
import {
  Heart,
  Star,
  ArrowUpRight,
  Tag,
} from "lucide-react";

const formatPrice = (price) =>
  new Intl.NumberFormat("en-BD").format(price);

const ProductCard = ({ product }) => {
  if (!product) return null;

  const {
    id,
    name = "Unnamed Product",
    brand = "Gadget Goods",
    image,
    price = 0,
    oldPrice,
    rating,
    reviews,
    badge,
    stock,
  } = product;

  const hasDiscount =
    Number(oldPrice) > Number(price) && Number(price) >= 0;

  const discount = hasDiscount
    ? Math.round(((oldPrice - price) / oldPrice) * 100)
    : 0;

  const isOutOfStock =
    typeof stock === "number"
      ? stock <= 0
      : typeof stock === "string" &&
        /out of stock/i.test(stock);

  const stockLabel =
    typeof stock === "number"
      ? isOutOfStock
        ? "Out of Stock"
        : `${stock} in stock`
      : stock || "Stock available";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md">

      {/* Product Image */}
      <div className="relative overflow-hidden bg-gray-50 p-3">
        <Link
          to={`/product/${id}`}
          aria-label={`View ${name}`}
          className="block overflow-hidden rounded-xl"
        >
          <img
            src={image || "/images/product-placeholder.png"}
            alt={name}
            loading="lazy"
            className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </Link>

        {/* Product Badge */}
        {badge && (
          <span className="absolute left-5 top-5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-[11px] font-bold text-gray-700">
            {badge}
          </span>
        )}

        {/* Discount Badge */}
        {discount > 0 && (
          <span className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-red-600 px-3 py-1.5 text-[11px] font-bold text-white">
            <Tag size={12} />
            -{discount}%
          </span>
        )}

        {/* Wishlist Button */}
        <button
          type="button"
          aria-label={`Add ${name} to wishlist`}
          className="absolute bottom-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-colors duration-200 hover:border-red-200 hover:bg-red-50 hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
        >
          <Heart size={17} strokeWidth={1.8} />
        </button>
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">

        {/* Brand */}
        <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
          {brand}
        </p>

        {/* Product Name */}
        <Link
          to={`/product/${id}`}
          className="mt-2"
        >
          <h3 className="min-h-12 text-sm font-bold leading-6 text-gray-900 transition-colors group-hover:text-blue-700">
            {name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="mt-3 flex min-h-5 items-center gap-1.5">
          <Star
            size={15}
            fill="currentColor"
            className="shrink-0 text-amber-500"
          />

          <span className="text-sm font-bold text-gray-900">
            {Number.isFinite(Number(rating))
              ? Number(rating).toFixed(1)
              : "New"}
          </span>

          {reviews != null && (
            <span className="text-xs font-medium text-gray-500">
              ({reviews} reviews)
            </span>
          )}
        </div>

        {/* Price */}
        <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="text-lg font-extrabold tracking-tight text-gray-950">
            ৳{formatPrice(price)}
          </span>

          {hasDiscount && (
            <span className="text-xs font-medium text-gray-500 line-through">
              ৳{formatPrice(oldPrice)}
            </span>
          )}
        </div>

        {/* Stock and Product Link */}
        <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
          <span
            className={`flex items-center gap-1.5 text-[11px] font-semibold ${
              isOutOfStock
                ? "text-red-600"
                : "text-emerald-700"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                isOutOfStock
                  ? "bg-red-500"
                  : "bg-emerald-500"
              }`}
            />
            {stockLabel}
          </span>

          <Link
            to={`/product/${id}`}
            aria-label={`View ${name}`}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-700 transition-colors duration-200 hover:bg-blue-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
