
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  ShoppingCart,
  Heart,
  Star,
  Zap,
  Tag,
  BadgePercent,
} from "lucide-react";

const MIN_DEAL_DISCOUNT = 15;

const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    category: "Audio",
    price: 4500,
    oldPrice: 6000,
    rating: 4.8,
    reviews: 124,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=85",
    badge: "Hot Deal",
  },
  {
    id: 2,
    name: "Modern Smart Watch",
    category: "Wearables",
    price: 3900,
    oldPrice: 6500,
    rating: 4.7,
    reviews: 98,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=85",
    badge: "Big Saving",
  },
  {
    id: 3,
    name: "Mechanical Gaming Keyboard",
    category: "Gaming",
    price: 3000,
    oldPrice: 5000,
    rating: 4.9,
    reviews: 156,
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=85",
    badge: "Best Deal",
  },
  {
    id: 4,
    name: "Professional Digital Camera",
    category: "Photography",
    price: 15400,
    oldPrice: 22000,
    rating: 4.8,
    reviews: 76,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=85",
    badge: "Limited Offer",
  },
];

const formatPrice = (price) =>
  `৳${Number(price).toLocaleString("en-BD")}`;

const ExclusiveDeals = () => {
  // Keep only products with genuine and significant discounts.
  const discountedProducts = products
    .filter((product) => {
      const price = Number(product.price);
      const oldPrice = Number(product.oldPrice);

      if (
        !Number.isFinite(price) ||
        !Number.isFinite(oldPrice) ||
        price <= 0 ||
        oldPrice <= price
      ) {
        return false;
      }

      const discount = ((oldPrice - price) / oldPrice) * 100;

      return discount >= MIN_DEAL_DISCOUNT;
    })
    .map((product) => ({
      ...product,
      discount: Math.round(
        ((product.oldPrice - product.price) / product.oldPrice) * 100
      ),
      savings: product.oldPrice - product.price,
    }))
    .sort((a, b) => b.discount - a.discount);

  return (
    <section className="bg-gray-50 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-9 flex flex-col justify-between gap-5 sm:mb-10 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-red-600">
              <Zap size={14} fill="currentColor" />
              Special Price Drops
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
              Exclusive <span className="text-blue-600">Deals</span>
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
              Discover exceptional savings on selected electronics
              and gadgets. Get more value from every purchase.
            </p>
          </div>

          <Link
            to="/shop?sort=discount"
            className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
          >
            View All Deals
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Discounted Products */}
        {discountedProducts.length > 0 ? (
          <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {discountedProducts.map((product) => (
              <article
                key={product.id}
                className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-gray-200/60"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden bg-gray-50">
                  <Link
                    to={`/product/${product.id}`}
                    aria-label={`View ${product.name}`}
                    className="block"
                  >
                    <div className="flex aspect-square items-center justify-center overflow-hidden p-5 sm:p-6">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </Link>

                  {/* Discount Badge */}
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-lg bg-red-600 px-3 py-1.5 text-xs font-extrabold text-white shadow-sm">
                    <Tag size={13} />
                    {product.discount}% OFF
                  </span>

                  {/* Wishlist */}
                  <button
                    type="button"
                    aria-label={`Add ${product.name} to wishlist`}
                    className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-all duration-300 hover:border-red-100 hover:bg-red-50 hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                  >
                    <Heart size={17} strokeWidth={1.8} />
                  </button>

                  {/* Product Badge */}
                  <span className="absolute bottom-4 left-4 rounded-lg border border-gray-200 bg-white/95 px-3 py-1.5 text-[11px] font-bold text-gray-700 shadow-sm">
                    {product.badge}
                  </span>
                </div>

                {/* Product Details */}
                <div className="flex flex-1 flex-col p-4 sm:p-5">

                  {/* Category */}
                  <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-blue-600">
                    {product.category}
                  </span>

                  {/* Product Name */}
                  <Link
                    to={`/product/${product.id}`}
                    className="mt-2"
                  >
                    <h3 className="line-clamp-2 min-h-12 text-base font-bold leading-6 text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
                      {product.name}
                    </h3>
                  </Link>

                  {/* Rating */}
                  <div className="mt-3 flex min-h-5 items-center gap-2">
                    <div className="inline-flex items-center gap-1">
                      <Star
                        size={14}
                        fill="currentColor"
                        className="text-amber-500"
                      />
                      <span className="text-sm font-bold text-gray-800">
                        {product.rating}
                      </span>
                    </div>

                    <span className="text-xs text-gray-400">
                      ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Pricing */}
                  <div className="mt-4 min-h-[100px] border-t border-gray-100 pt-4">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <span className="text-xl font-extrabold tracking-tight text-gray-950">
                        {formatPrice(product.price)}
                      </span>

                      <span className="text-sm font-medium text-gray-400 line-through">
                        {formatPrice(product.oldPrice)}
                      </span>
                    </div>

                    <div className="mt-2 inline-flex items-center gap-1.5 rounded-md bg-emerald-50 px-2.5 py-1.5 text-xs font-bold text-emerald-700">
                      <BadgePercent size={14} />
                      Save {formatPrice(product.savings)}
                    </div>
                  </div>

                  {/* Product Button */}
                  <Link
                    to={`/product/${product.id}`}
                    className="group/button mt-auto inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                  >
                    <ShoppingCart size={17} />
                    View Product
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover/button:translate-x-1"
                    />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-5 py-14 text-center">
            <Tag size={32} className="mx-auto text-gray-400" />

            <h3 className="mt-4 text-lg font-bold text-gray-900">
              No Exclusive Deals Right Now
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Check back later for special discounts and offers.
            </p>

            <Link
              to="/shop"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition-colors duration-300 hover:text-blue-700"
            >
              Explore Products
              <ArrowRight size={16} />
            </Link>
          </div>
        )}

        {/* Explore All Deals */}
        <div className="mt-10 flex justify-center">
          <Link
            to="/shop?sort=discount"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:bg-blue-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            Explore All Deals
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ExclusiveDeals;
