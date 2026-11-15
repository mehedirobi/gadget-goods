
import { Link } from "react-router";
import {
  ArrowRight,
  ArrowUpRight,
  ShoppingCart,
  Heart,
  Star,
  Zap,
  Tag,
} from "lucide-react";

const deals = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    category: "Audio",
    price: 4500,
    oldPrice: 6000,
    discount: 25,
    rating: 4.8,
    reviews: 124,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=85",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Modern Smart Watch",
    category: "Wearables",
    price: 5200,
    oldPrice: 6500,
    discount: 20,
    rating: 4.7,
    reviews: 98,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=85",
    badge: "Popular",
  },
  {
    id: 3,
    name: "Mechanical Gaming Keyboard",
    category: "Gaming",
    price: 3800,
    oldPrice: 5000,
    discount: 24,
    rating: 4.9,
    reviews: 156,
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=85",
    badge: "Top Rated",
  },
  {
    id: 4,
    name: "Professional Camera",
    category: "Photography",
    price: 18500,
    oldPrice: 22000,
    discount: 16,
    rating: 4.8,
    reviews: 76,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=85",
    badge: "Special Deal",
  },
];

const formatPrice = (price) =>
  `৳${price.toLocaleString("en-BD")}`;

const ExclusiveDeals = () => {
  return (
    <section className="bg-gray-50 px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-orange-700">
              <Zap size={14} />
              Limited Time Offers
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
              Exclusive <span className="text-blue-600">Deals</span>
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
              Discover great deals on your favorite gadgets and
              upgrade your tech experience for less.
            </p>
          </div>

          <Link
            to="/shop?sort=discount"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-800 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
          >
            View All Deals
            <ArrowUpRight
              size={17}
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {deals.map((product) => (
            <article
              key={product.id}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md"
            >
              {/* Product Image */}
              <div className="relative bg-gray-50 p-3">
                <Link
                  to={`/product/${product.id}`}
                  aria-label={`View ${product.name}`}
                  className="block overflow-hidden rounded-xl"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </Link>

                {/* Discount Badge */}
                <span className="absolute left-5 top-5 inline-flex items-center gap-1 rounded-full bg-red-600 px-3 py-1.5 text-xs font-bold text-white">
                  <Tag size={12} />
                  -{product.discount}%
                </span>

                {/* Wishlist */}
                <button
                  type="button"
                  aria-label={`Add ${product.name} to wishlist`}
                  className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-gray-100 bg-white text-gray-600 transition-colors hover:bg-red-50 hover:text-red-600"
                >
                  <Heart size={18} strokeWidth={1.8} />
                </button>

                {/* Product Badge */}
                <span className="absolute bottom-5 left-5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-gray-700">
                  {product.badge}
                </span>
              </div>

              {/* Product Details */}
              <div className="flex flex-1 flex-col p-4 sm:p-5">

                {/* Category */}
                <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                  {product.category}
                </p>

                {/* Product Name */}
                <Link
                  to={`/product/${product.id}`}
                  className="mt-2"
                >
                  <h3 className="min-h-12 text-base font-bold leading-6 text-gray-900 transition-colors hover:text-blue-700">
                    {product.name}
                  </h3>
                </Link>

                {/* Rating */}
                <div className="mt-3 flex min-h-5 items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star
                      size={15}
                      fill="currentColor"
                      className="text-amber-500"
                    />
                    <span className="text-sm font-bold text-gray-900">
                      {product.rating}
                    </span>
                  </div>

                  <span className="text-xs font-medium text-gray-500">
                    ({product.reviews} reviews)
                  </span>
                </div>

                {/* Pricing */}
                <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="text-xl font-extrabold tracking-tight text-gray-950">
                    {formatPrice(product.price)}
                  </span>

                  <span className="text-sm font-medium text-gray-500 line-through">
                    {formatPrice(product.oldPrice)}
                  </span>
                </div>

                {/* Savings */}
                <p className="mt-1 text-xs font-semibold text-emerald-700">
                  You save {formatPrice(product.oldPrice - product.price)}
                </p>

                {/* Product Button */}
                <Link
                  to={`/product/${product.id}`}
                  className="group/button mt-auto mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                >
                  <ShoppingCart size={17} />
                  View Product
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-200 group-hover/button:translate-x-1"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Explore More Deals */}
        <div className="mt-10 flex justify-center">
          <Link
            to="/shop?sort=discount"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-blue-600 bg-blue-600 px-7 py-3 text-sm font-bold text-white transition-colors hover:border-blue-700 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            Explore More Deals
            <ArrowRight
              size={17}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ExclusiveDeals;
