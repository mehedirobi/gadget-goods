
import { Link } from "react-router";
import {
  ArrowRight,
  Star,
  TrendingUp,
} from "lucide-react";

const products = [
  {
    id: 5,
    name: "Apple MacBook Pro",
    category: "Laptop",
    price: 185000,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=700&q=85",
    badge: "Top Rated",
  },
  {
    id: 6,
    name: "Premium Smartphone",
    category: "Smartphone",
    price: 89900,
    rating: 4.8,
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
    image:
      "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=700&q=85",
    badge: "Best Seller",
  },
  {
    id: 8,
    name: "Professional Camera",
    category: "Camera",
    price: 65000,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=85",
    badge: "Top Rated",
  },
];

const formatPrice = (price) =>
  `৳${price.toLocaleString("en-BD")}`;

const BestSellers = () => {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-blue-700">
              <TrendingUp size={14} />
              Customer Favorites
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
              Best Selling <span className="text-blue-600">Products</span>
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
              Explore our most popular gadgets, loved and trusted
              by customers.
            </p>
          </div>

          <Link
            to="/shop"
            className="group hidden w-fit items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-800 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 sm:inline-flex"
          >
            Explore Shop
            <ArrowRight
              size={17}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              aria-label={`View ${product.name}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden bg-gray-50 p-3">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-52 w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

                {/* Product Badge */}
                <span className="absolute left-5 top-5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-[11px] font-bold text-gray-700">
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
                <h3 className="mt-2 min-h-12 text-base font-bold leading-6 text-gray-900 transition-colors group-hover:text-blue-700">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="mt-3 flex min-h-5 items-center gap-1.5">
                  <Star
                    size={15}
                    fill="currentColor"
                    className="text-amber-500"
                  />

                  <span className="text-sm font-bold text-gray-900">
                    {product.rating}
                  </span>

                  <span className="text-xs font-medium text-gray-500">
                    Customer Rating
                  </span>
                </div>

                {/* Price */}
                <div className="mt-4 border-t border-gray-100 pt-4">
                  <p className="text-xs font-medium text-gray-500">
                    Price
                  </p>

                  <p className="mt-1 text-xl font-extrabold tracking-tight text-gray-950">
                    {formatPrice(product.price)}
                  </p>
                </div>

                {/* View Product */}
                <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-sm font-semibold text-blue-700 transition-colors group-hover:text-blue-800">
                    View Details
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Explore All Products */}
        <div className="mt-10 flex justify-center">
          <Link
            to="/shop"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-blue-600 bg-blue-600 px-7 py-3 text-sm font-bold text-white transition-colors hover:border-blue-700 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            Explore All Products
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

export default BestSellers;
