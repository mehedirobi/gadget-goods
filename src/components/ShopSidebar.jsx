
import { categories, brands } from "../data/products";
import { SlidersHorizontal } from "lucide-react";

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
    <aside className="rounded-2xl border border-gray-800 bg-[#111827] p-5">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 font-semibold text-white">
          <SlidersHorizontal size={18} />
          Filters
        </h2>

        <button
          type="button"
          onClick={clearFilters}
          className="text-xs font-medium text-blue-400 hover:text-blue-300"
        >
          Clear all
        </button>
      </div>

      {/* Categories */}
      <div className="mt-7">
        <h3 className="mb-4 text-sm font-semibold text-white">
          Categories
        </h3>

        <div className="space-y-3">
          {categories.map((category) => (
            <label
              key={category}
              className="flex cursor-pointer items-center gap-3 text-sm text-gray-400 hover:text-white"
            >
              <input
                type="radio"
                name="category"
                checked={selectedCategory === category}
                onChange={() => setSelectedCategory(category)}
                className="accent-blue-500"
              />
              {category}
            </label>
          ))}
        </div>
      </div>

      <div className="my-6 border-t border-gray-800" />

      {/* Brands */}
      <div>
        <h3 className="mb-4 text-sm font-semibold text-white">
          Brands
        </h3>

        <div className="space-y-3">
          {brands.map((brand) => (
            <label
              key={brand}
              className="flex cursor-pointer items-center gap-3 text-sm text-gray-400 hover:text-white"
            >
              <input
                type="radio"
                name="brand"
                checked={selectedBrand === brand}
                onChange={() => setSelectedBrand(brand)}
                className="accent-blue-500"
              />
              {brand}
            </label>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setSelectedBrand("All Brands")}
          className="mt-3 text-xs text-blue-400 hover:text-blue-300"
        >
          Clear brand
        </button>
      </div>

      <div className="my-6 border-t border-gray-800" />

      {/* Price */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-white">
            Maximum Price
          </h3>
          <span className="text-xs font-semibold text-blue-400">
            ৳{new Intl.NumberFormat("en-BD").format(maxPrice)}
          </span>
        </div>

        <input
          type="range"
          min="1000"
          max="250000"
          step="1000"
          value={maxPrice}
          onChange={(event) => setMaxPrice(Number(event.target.value))}
          className="w-full cursor-pointer accent-blue-500"
          aria-label="Maximum product price"
        />

        <div className="mt-2 flex justify-between text-xs text-gray-500">
          <span>৳1,000</span>
          <span>৳250,000</span>
        </div>
      </div>
    </aside>
  );
};

export default ShopSidebar;
