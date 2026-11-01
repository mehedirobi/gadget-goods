
import { Link } from "react-router";
import { ArrowRight, Star } from "lucide-react";

const products = [
  {
    id: 5,
    name: "Apple MacBook Pro",
    category: "Laptop",
    price: 185000,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 6,
    name: "Premium Smartphone",
    category: "Smartphone",
    price: 89900,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 7,
    name: "Wireless Gaming Headset",
    category: "Gaming",
    price: 7500,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 8,
    name: "Professional Camera",
    category: "Camera",
    price: 65000,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=85",
  },
];

const BestSellers = () => {
  return (
    <section className="bg-[#0b1120] px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Customer Favorites
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Best Selling Products
            </h2>

            <p className="mt-3 text-gray-400">
              Popular technology selected by our customers.
            </p>
          </div>

          <Link
            to="/shop"
            className="hidden items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 sm:flex"
          >
            Explore Shop <ArrowRight size={17} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group overflow-hidden rounded-2xl border border-gray-800 bg-[#111827] transition hover:-translate-y-2 hover:border-blue-500/50"
            >
              <div className="overflow-hidden bg-gray-900">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-5">
                <p className="text-xs text-blue-400">{product.category}</p>

                <h3 className="mt-2 font-semibold text-white">
                  {product.name}
                </h3>

                <div className="mt-3 flex items-center gap-1 text-sm text-yellow-400">
                  <Star size={15} fill="currentColor" />
                  {product.rating}
                </div>

                <p className="mt-4 text-xl font-bold text-white">
                  ৳{product.price.toLocaleString("en-BD")}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BestSellers;
