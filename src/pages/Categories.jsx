
import { Link } from "react-router";
import {
  ArrowRight,
  Smartphone,
  Laptop,
  Monitor,
  Cpu,
  Gamepad2,
  Watch,
  Headphones,
  Camera,
  Keyboard,
  Sparkles,
   ShoppingBag
} from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Smartphones",
    description: "Discover powerful smartphones for everyday life.",
    count: 24,
    icon: Smartphone,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=85",
    color: "from-blue-600/30 to-cyan-500/10",
  },
  {
    id: 2,
    name: "Laptops",
    description: "Performance machines for work, study and creativity.",
    count: 18,
    icon: Laptop,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=85",
    color: "from-purple-600/30 to-blue-500/10",
  },
  {
    id: 3,
    name: "Desktop PCs",
    description: "Powerful desktop setups built for productivity.",
    count: 12,
    icon: Monitor,
    image:
      "https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=900&q=85",
    color: "from-cyan-600/30 to-blue-500/10",
  },
  {
    id: 4,
    name: "PC Components",
    description: "Build and upgrade your ultimate PC setup.",
    count: 32,
    icon: Cpu,
    image:
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=900&q=85",
    color: "from-orange-600/30 to-red-500/10",
  },
  {
    id: 5,
    name: "Gaming",
    description: "Level up your gaming experience with premium gear.",
    count: 21,
    icon: Gamepad2,
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=900&q=85",
    color: "from-pink-600/30 to-purple-500/10",
  },
  {
    id: 6,
    name: "Smart Watches",
    description: "Stay connected, active and in control.",
    count: 15,
    icon: Watch,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",
    color: "from-emerald-600/30 to-cyan-500/10",
  },
  {
    id: 7,
    name: "Audio & Headphones",
    description: "Experience immersive sound wherever you go.",
    count: 19,
    icon: Headphones,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85",
    color: "from-indigo-600/30 to-blue-500/10",
  },
  {
    id: 8,
    name: "Cameras",
    description: "Capture moments with precision and creativity.",
    count: 11,
    icon: Camera,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=85",
    color: "from-amber-600/30 to-orange-500/10",
  },
  {
    id: 9,
    name: "Accessories",
    description: "Complete your setup with essential tech accessories.",
    count: 28,
    icon: Keyboard,
    image:
      "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=900&q=85",
    color: "from-teal-600/30 to-blue-500/10",
  },
];

const Categories = () => {
  return (
    <div className="min-h-screen bg-[#080d18] pb-20 text-white">

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-800/70">
        <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 text-center sm:px-8 lg:px-10 lg:py-28">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
            <Sparkles size={14} />
            Explore Our Collection
          </div>

          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Find Your Perfect
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Tech Category.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-gray-400 sm:text-base">
            Explore a wide range of electronics, smart devices,
            gaming essentials and accessories. Everything you need
            to upgrade your digital lifestyle.
          </p>

          <Link
            to="/shop"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Browse All Products
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* Category heading */}
      <section className="mx-auto max-w-7xl px-5 pt-16 sm:px-8 lg:px-10 lg:pt-20">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
              Browse By Category
            </span>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Explore All Categories
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400">
              Find exactly what you are looking for from our
              collection of technology products.
            </p>
          </div>

          <span className="text-sm text-gray-500">
            {categories.length} Categories
          </span>
        </div>

        {/* Category grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.id}
                to={`/shop?category=${encodeURIComponent(category.name)}`}
                className="group relative isolate min-h-[310px] overflow-hidden rounded-2xl border border-gray-800 bg-[#111827] transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-950/20"
              >
                {/* Image */}
                <img
                  src={category.image}
                  alt={category.name}
                  loading="lazy"
                  className="absolute inset-0 -z-20 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#080d18] via-[#080d18]/65 to-[#080d18]/10" />

                <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${category.color} opacity-40`} />

                {/* Top icon */}
                <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#080d18]/60 text-white backdrop-blur-md transition group-hover:bg-blue-600">
                  <Icon size={21} />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="mb-3 inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-medium text-gray-200 backdrop-blur-md">
                    {category.count} Products
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    {category.name}
                  </h3>

                  <p className="mt-2 max-w-xs text-xs leading-6 text-gray-300">
                    {category.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-blue-400 transition group-hover:gap-3 group-hover:text-cyan-300">
                    Explore Category
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            );
          })}

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-7xl px-5 pt-20 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-[#14254a] to-[#111827] px-7 py-12 text-center sm:px-12 sm:py-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
              <ShoppingBagIcon />
            </div>

            <h2 className="mt-6 text-2xl font-bold sm:text-3xl">
              Still Looking for Something?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400">
              Explore our complete product collection and discover
              technology that matches your needs.
            </p>

            <Link
              to="/shop"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Explore All Products
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

const ShoppingBagIcon = () => (
  <span className="text-xl">
    <ShoppingBag size={23} />
  </span>
);

export default Categories;
