
import { Link } from "react-router";
import { ArrowRight, ShoppingCart, Heart, Star } from "lucide-react";

const deals = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    category: "Audio",
    price: 4500,
    oldPrice: 6000,
    discount: 25,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 2,
    name: "Modern Smart Watch",
    category: "Wearables",
    price: 5200,
    oldPrice: 6500,
    discount: 20,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 3,
    name: "Mechanical Gaming Keyboard",
    category: "Gaming",
    price: 3800,
    oldPrice: 5000,
    discount: 24,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 4,
    name: "Professional Camera",
    category: "Photography",
    price: 18500,
    oldPrice: 22000,
    discount: 16,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=85",
  },
];

const ExclusiveDeals = () => {
  return (
    <section className="bg-[#080d19] px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Limited Time Offers
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Exclusive Deals
            </h2>

            <p className="mt-3 text-gray-400">
              Get your favorite gadgets at special prices.
            </p>
          </div>

          <Link
            to="/shop?sort=discount"
            className="hidden items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 sm:flex"
          >
            All Deals <ArrowRight size={17} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {deals.map((product) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-2xl border border-gray-800 bg-[#111827] transition duration-300 hover:-translate-y-2 hover:border-blue-500/50"
            >
              <div className="relative overflow-hidden bg-gray-900">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <span className="absolute left-4 top-4 rounded-md bg-red-500 px-3 py-1 text-xs font-bold text-white">
                  -{product.discount}%
                </span>

                <button
                  type="button"
                  aria-label={`Add ${product.name} to wishlist`}
                  className="absolute right-4 top-4 rounded-full bg-black/60 p-2 text-white transition hover:bg-blue-600"
                >
                  <Heart size={18} />
                </button>
              </div>

              <div className="p-5">
                <p className="text-xs text-blue-400">{product.category}</p>

                <h3 className="mt-2 min-h-12 font-semibold text-white">
                  {product.name}
                </h3>

                <div className="mt-3 flex items-center gap-1 text-sm text-yellow-400">
                  <Star size={15} fill="currentColor" />
                  <span>{product.rating}</span>
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <span className="text-xl font-bold text-white">
                    ৳{product.price.toLocaleString("en-BD")}
                  </span>

                  <span className="text-sm text-gray-500 line-through">
                    ৳{product.oldPrice.toLocaleString("en-BD")}
                  </span>
                </div>

                <Link
                  to={`/product/${product.id}`}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  <ShoppingCart size={17} />
                  View Product
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExclusiveDeals;
