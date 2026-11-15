
import { categories, brands } from "../data/products";
import { SlidersHorizontal } from "lucide-react";

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
  const isBrandSelected = selectedBrand !== "All Brands";

  return (
    <aside
      aria-label="Product filters"
      className="h-fit rounded-2xl border border-gray-800 bg-[#111827] p-5"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 font-semibold text-white">
          <SlidersHorizontal size={18} aria-hidden="true" />
          Filters
        </h2>

        <button
          type="button"
          onClick={clearFilters}
          className="text-xs font-medium text-blue-400 transition-colors hover:text-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
        >
          Clear all
        </button>
      </div>

      {/* Categories */}
      <fieldset className="mt-7">
        <legend className="mb-4 text-sm font-semibold text-white">
          Categories
        </legend>

        <div className="space-y-3">
          {categories.map((category) => (
            <label
              key={category}
              className="flex cursor-pointer items-center gap-3 text-sm text-gray-400 transition-colors hover:text-white"
            >
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={() => setSelectedCategory(category)}
                className="size-4 cursor-pointer accent-blue-500"
              />

              <span>{category}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="my-6 border-t border-gray-800" />

      {/* Brands */}
      <fieldset>
        <legend className="mb-4 text-sm font-semibold text-white">
          Brands
        </legend>

        <div className="space-y-3">
          {brands.map((brand) => (
            <label
              key={brand}
              className="flex cursor-pointer items-center gap-3 text-sm text-gray-400 transition-colors hover:text-white"
            >
              <input
                type="radio"
                name="brand"
                value={brand}
                checked={selectedBrand === brand}
                onChange={() => setSelectedBrand(brand)}
                className="size-4 cursor-pointer accent-blue-500"
              />

              <span>{brand}</span>
            </label>
          ))}
        </div>

        {isBrandSelected && (
          <button
            type="button"
            onClick={() => setSelectedBrand("All Brands")}
            className="mt-3 rounded text-xs font-medium text-blue-400 transition-colors hover:text-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Clear brand
          </button>
        )}
      </fieldset>

      <div className="my-6 border-t border-gray-800" />

      {/* Price Range */}
      <div>
        <div className="mb-4 flex items-center justify-between gap-2">
          <h3 className="text-sm font-semibold text-white">
            Maximum Price
          </h3>

          <output
            htmlFor="max-price"
            className="text-xs font-semibold text-blue-400"
          >
            ৳{formatPrice(maxPrice)}
          </output>
        </div>

        <input
          id="max-price"
          type="range"
          min={1000}
          max={250000}
          step={1000}
          value={maxPrice}
          onChange={(event) =>
            setMaxPrice(Number(event.target.value))
          }
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
