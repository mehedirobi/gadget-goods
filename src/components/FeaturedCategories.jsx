
import { Link } from "react-router";
import {
  Smartphone,
  Laptop,
  Monitor,
  Gamepad2,
  Watch,
  Headphones,
  ArrowUpRight,
} from "lucide-react";

const categories = [
  { name: "Smartphones", icon: Smartphone, count: "120+ Products", slug: "smartphones" },
  { name: "Laptops", icon: Laptop, count: "85+ Products", slug: "laptops" },
  { name: "Desktop PCs", icon: Monitor, count: "60+ Products", slug: "desktop-pcs" },
  { name: "Gaming Gear", icon: Gamepad2, count: "90+ Products", slug: "gaming" },
  { name: "Smart Watches", icon: Watch, count: "45+ Products", slug: "smartwatches" },
  { name: "Accessories", icon: Headphones, count: "150+ Products", slug: "accessories" },
];

const FeaturedCategories = () => {
  return (
    <section className="bg-[#0b1120] px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Browse Collection
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Featured Categories
            </h2>
            <p className="mt-3 text-gray-400">
              Explore technology for every part of your life.
            </p>
          </div>

          <Link
            to="/categories"
            className="hidden items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 sm:flex"
          >
            View All <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {categories.map(({ name, icon: Icon, count, slug }) => (
            <Link
              key={slug}
              to={`/shop?category=${slug}`}
              className="group rounded-2xl border border-gray-800 bg-[#111827] p-6 text-center transition duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:bg-[#172238]"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 transition group-hover:bg-blue-600 group-hover:text-white">
                <Icon size={29} strokeWidth={1.7} />
              </div>

              <h3 className="mt-5 font-semibold text-white">
                {name}
              </h3>

              <p className="mt-2 text-xs text-gray-500">{count}</p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedCategories;
