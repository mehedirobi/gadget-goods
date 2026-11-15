import { Link } from "react-router";
import {
  Smartphone,
  Laptop,
  Monitor,
  Gamepad2,
  Watch,
  Headphones,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    name: "Smartphones",
    icon: Smartphone,
    count: "120+ Products",
    slug: "smartphones",
    color: "blue",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    hoverBg: "group-hover:bg-blue-600",
  },
  {
    name: "Laptops",
    icon: Laptop,
    count: "85+ Products",
    slug: "laptops",
    color: "violet",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    hoverBg: "group-hover:bg-violet-600",
  },
  {
    name: "Desktop PCs",
    icon: Monitor,
    count: "60+ Products",
    slug: "desktop-pcs",
    color: "emerald",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    hoverBg: "group-hover:bg-emerald-600",
  },
  {
    name: "Gaming Gear",
    icon: Gamepad2,
    count: "90+ Products",
    slug: "gaming",
    color: "orange",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
    hoverBg: "group-hover:bg-orange-600",
  },
  {
    name: "Smart Watches",
    icon: Watch,
    count: "45+ Products",
    slug: "smartwatches",
    color: "pink",
    iconBg: "bg-pink-50",
    iconColor: "text-pink-600",
    hoverBg: "group-hover:bg-pink-600",
  },
  {
    name: "Accessories",
    icon: Headphones,
    count: "150+ Products",
    slug: "accessories",
    color: "cyan",
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
    hoverBg: "group-hover:bg-cyan-600",
  },
];

const FeaturedCategories = () => {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-blue-600">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              Explore Our Collection
            </div>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Shop by <span className="text-blue-600">Category</span>
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-500 sm:text-base">
              Discover the latest technology and find the perfect gadgets
              for your everyday lifestyle.
            </p>
          </div>

          {/* View All */}
          <Link
            to="/categories"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
          >
            View All Categories

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6 lg:gap-5">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.slug}
                to={`/shop?category=${category.slug}`}
                className="group relative flex min-h-[190px] flex-col items-center justify-center rounded-2xl border border-gray-100 bg-gray-50/70 p-5 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-gray-200 hover:bg-white hover:shadow-[0_12px_35px_rgba(15,23,42,0.07)] sm:min-h-[205px] sm:p-6"
              >
                {/* Icon */}
                <div
                  className={`flex h-[68px] w-[68px] items-center justify-center rounded-[22px] ${category.iconBg} ${category.iconColor} transition-all duration-300 ${category.hoverBg} group-hover:text-white group-hover:scale-110`}
                >
                  <Icon size={30} strokeWidth={1.8} />
                </div>

                {/* Category Name */}
                <h3 className="mt-5 text-sm font-bold text-gray-800 transition-colors duration-200 group-hover:text-blue-600 sm:text-base">
                  {category.name}
                </h3>

                {/* Product Count */}
                <p className="mt-2 text-xs font-medium text-gray-400">
                  {category.count}
                </p>

                {/* Hover Arrow */}
                <span className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-white text-gray-400 opacity-0 shadow-sm transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100">
                  <ArrowUpRight size={15} />
                </span>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex justify-center sm:hidden">
          <Link
            to="/categories"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600"
          >
            Explore All Categories
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FeaturedCategories;