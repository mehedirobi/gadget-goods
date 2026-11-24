
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";

import {
  shopCategories,
  getCategoryPath,
} from "../data/categories";

const FeaturedCategories = () => {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 flex items-end justify-between gap-4 sm:mb-10">
          <div className="max-w-xl">
            <span className="mb-2 inline-block text-xs font-bold uppercase tracking-[0.18em] text-primary sm:text-sm">
              Explore Our Collection
            </span>

            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
              Shop by Category
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500 sm:text-base">
              Discover premium electronics, computers, gaming gear
              and everyday tech essentials.
            </p>
          </div>

          <Link
            to="/shop"
            className="hidden shrink-0 items-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-700 transition-all duration-200 hover:border-primary hover:bg-primary hover:text-white sm:inline-flex"
          >
            View All
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6">
          {shopCategories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.name}
                to={getCategoryPath(category.name)}
                aria-label={`Explore ${category.name}`}
                className="group relative flex min-h-[170px] flex-col rounded-xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-gray-200/70 sm:min-h-[185px] sm:rounded-2xl sm:p-5"
              >
                {/* Icon */}
                <div className="mb-5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-700 transition-all duration-300 group-hover:bg-primary group-hover:text-white sm:h-12 sm:w-12">
                  <Icon size={23} strokeWidth={1.8} />
                </div>

                {/* Category Info */}
                <div className="flex flex-1 flex-col">
                  <h3 className="text-sm font-bold leading-snug text-gray-900 transition-colors group-hover:text-primary sm:text-base">
                    {category.name}
                  </h3>

                  <p className="mt-1.5 text-xs leading-relaxed text-gray-500">
                    {category.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="mt-3 flex items-center justify-end">
                  <ChevronRight
                    size={17}
                    className="text-gray-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary"
                  />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Mobile View All */}
        <div className="mt-7 flex justify-center sm:hidden">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-primary hover:text-primary"
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
