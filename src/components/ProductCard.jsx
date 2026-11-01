
import { Link } from "react-router";
import { Heart, ShoppingCart, Star, ArrowUpRight } from "lucide-react";

const formatPrice = (price) =>
  new Intl.NumberFormat("en-BD").format(price);

const ProductCard = ({ product }) => {
  const discount = Math.round(
    ((product.oldPrice - product.price) / product.oldPrice) * 100
  );

  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-800 bg-[#111827] transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-950/20">
      {/* Image */}
      <div className="relative overflow-hidden bg-[#182235]">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </Link>

        <span className="absolute left-3 top-3 rounded-md bg-blue-600 px-2.5 py-1 text-[10px] font-bold text-white">
          {product.badge}
        </span>

        {discount > 0 && (
          <span className="absolute right-3 top-3 rounded-md bg-red-500 px-2 py-1 text-[10px] font-bold text-white">
            -{discount}%
          </span>
        )}

        <button
          type="button"
          aria-label={`Add ${product.name} to wishlist`}
          className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#080d18]/85 text-white backdrop-blur transition hover:bg-red-500"
        >
          <Heart size={17} />
        </button>
      </div>

      {/* Product details */}
      <div className="p-4">
        <p className="text-xs font-medium text-blue-400">
          {product.brand}
        </p>

        <Link to={`/product/${product.id}`}>
          <h3 className="mt-2 line-clamp-2 min-h-11 text-sm font-semibold text-white transition hover:text-blue-400">
            {product.name}
          </h3>
        </Link>

        <div className="mt-3 flex items-center gap-1.5">
          <Star size={14} className="fill-amber-400 text-amber-400" />
          <span className="text-xs font-semibold text-white">
            {product.rating}
          </span>
          <span className="text-xs text-gray-500">
            ({product.reviews} reviews)
          </span>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-base font-bold text-white">
            ৳{formatPrice(product.price)}
          </span>

          {product.oldPrice && (
            <span className="text-xs text-gray-500 line-through">
              ৳{formatPrice(product.oldPrice)}
            </span>
          )}
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-[11px] text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {product.stock}
          </span>

          <Link
            to={`/product/${product.id}`}
            aria-label={`View ${product.name}`}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white transition hover:bg-blue-500"
          >
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
