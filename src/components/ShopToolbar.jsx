
import { categories, brands } from "../data/products";
import {
  SlidersHorizontal,
  Layers3,
  Tag,
  BadgeDollarSign,
  RotateCcw,
} from "lucide-react";

const formatPrice = (price) =>
  new Intl.NumberFormat("en-BD").format(price);

const ShopSidebar = ({
  selectedCategory,
  setSelectedCategory,
  selectedBrand,
  setSelectedBrand,
  maxPrice,
  setMaxPrice,
  clearFilters,
}) => {
  return (
    <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-5">
        <div className="flex items-center gap-2.5">
          <SlidersHorizontal
            size={19}
            className="text-blue-600"
          />
          <h2 className="text-base font-bold text-gray-900">
            Filters
          </h2>
        </div>

        <button
          type="button"
          onClick={clearFilters}
          className="text-xs font-semibold text-blue-600 transition-colors hover:text-blue-700"
        >
          Clear all
        </button>
      </div>

      {/* Categories */}
      <section className="py-5">
        <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-gray-900">
          <Layers3 size={16} className="text-gray-500" />
          Categories
        </h3>

        <div className="space-y-3">
          {categories.map((category) => (
            <label
              key={category}
              className="group flex cursor-pointer items-center gap-3 text-sm text-gray-600 transition-colors hover:text-blue-600"
            >
              <input
                type="radio"
                name="category"
                checked={selectedCategory === category}
                onChange={() => setSelectedCategory(category)}
                className="h-4 w-4 cursor-pointer accent-blue-600"
              />

              <span
                className={
                  selectedCategory === category
                    ? "font-semibold text-blue-600"
                    : ""
                }
              >
                {category}
              </span>
            </label>
          ))}
        </div>
      </section>

      <div className="border-t border-gray-100" />

      {/* Brands */}
      <section className="py-5">
        <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-gray-900">
          <Tag size={16} className="text-gray-500" />
          Brands
        </h3>

        <div className="space-y-3">
          {brands.map((brand) => (
            <label
              key={brand}
              className="flex cursor-pointer items-center gap-3 text-sm text-gray-600 transition-colors hover:text-blue-600"
            >
              <input
                type="radio"
                name="brand"
                checked={selectedBrand === brand}
                onChange={() => setSelectedBrand(brand)}
                className="h-4 w-4 cursor-pointer accent-blue-600"
              />

              <span
                className={
                  selectedBrand === brand
                    ? "font-semibold text-blue-600"
                    : ""
                }
              >
                {brand}
              </span>
            </label>
          ))}
        </div>

        {selectedBrand !== "All Brands" && (
          <button
            type="button"
            onClick={() => setSelectedBrand("All Brands")}
            className="mt-4 flex items-center gap-1.5 text-xs font-medium text-blue-600 transition-colors hover:text-blue-700"
          >
            <RotateCcw size={12} />
            Clear brand
          </button>
        )}
      </section>

      <div className="border-t border-gray-100" />

      {/* Price */}
      <section className="pt-5">
        <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-gray-900">
          <BadgeDollarSign size={17} className="text-gray-500" />
          Maximum Price
        </h3>

        <div className="mb-4 flex items-center justify-between">
          <span className="text-xs text-gray-500">
            Your price limit
          </span>

          <span className="rounded-lg bg-blue-50 px-2.5 py-1 text-sm font-bold text-blue-600">
            ৳{formatPrice(maxPrice)}
          </span>
        </div>

        <input
          type="range"
          min="1000"
          max="250000"
          step="1000"
          value={maxPrice}
          onChange={(event) =>
            setMaxPrice(Number(event.target.value))
          }
          className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-gray-200 accent-blue-600"
          aria-label="Maximum product price"
        />

        <div className="mt-3 flex justify-between text-xs font-medium text-gray-500">
          <span>৳1,000</span>
          <span>৳250,000</span>
        </div>
      </section>
    </aside>
  );
};

export default ShopSidebar;
