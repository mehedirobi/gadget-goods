
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Star,
  TrendingUp,
  Award,
} from "lucide-react";

const products = [
  {
    id: 5,
    name: "Apple MacBook Pro",
    category: "Laptops",
    price: 185000,
    rating: 4.9,
    reviews: 128,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=700&q=85",
    badge: "Top Rated",
  },
  {
    id: 6,
    name: "Premium Smartphone",
    category: "Smartphones",
    price: 89900,
    rating: 4.8,
    reviews: 96,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=85",
    badge: "Popular",
  },
  {
    id: 7,
    name: "Wireless Gaming Headset",
    category: "Gaming",
    price: 7500,
    rating: 4.7,
    reviews: 84,
    image:
      "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=700&q=85",
    badge: "Best Seller",
  },
  {
    id: 8,
    name: "Professional Digital Camera",
    category: "Cameras",
    price: 65000,
    rating: 4.9,
    reviews: 72,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=85",
    badge: "Top Rated",
  },
];

const formatPrice = (price) =>
  `৳${Number(price).toLocaleString("en-BD")}`;

const BestSelling = () => {
  return (
    <section className="bg-gray-50 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-9 flex flex-col justify-between gap-5 sm:mb-10 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-blue-700">
              <TrendingUp size={14} />
              Customer Favorites
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
              Best Selling{" "}
              <span className="text-blue-600">Products</span>
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
              Discover our most popular electronics and gadgets,
              selected for their quality, performance, and customer satisfaction.
            </p>
          </div>

          <Link
            to="/shop"
            className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
          >
            Explore Shop
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Product Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {products.map((product) => (
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

                  {/* Product Badge */}
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white/95 px-3 py-1.5 text-[11px] font-bold text-gray-700 shadow-sm">
                    <Award size={13} className="text-blue-600" />
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
                    <p className="text-xs font-medium text-gray-500">
                      Current Price
                    </p>

                    <p className="mt-1 text-xl font-extrabold tracking-tight text-gray-950">
                      {formatPrice(product.price)}
                    </p>
                  </div>

                  {/* Product CTA */}
                  <Link
                    to={`/product/${product.id}`}
                    className="group/button mt-auto inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                  >
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
          /* Empty State */
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-5 py-14 text-center">
            <Award
              size={32}
              className="mx-auto text-gray-400"
            />

            <h3 className="mt-4 text-lg font-bold text-gray-900">
              No Products Available
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Check back later to discover our popular products.
            </p>
          </div>
        )}

        {/* Explore All Products */}
        <div className="mt-10 flex justify-center">
          <Link
            to="/shop"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:bg-blue-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            Explore All Products
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

export default BestSelling;
