
import { Grid2X2, List, Search } from "lucide-react";

const ShopToolbar = ({
  search,
  setSearch,
  sortBy,
  setSortBy,
  productCount,
  viewMode,
  setViewMode,
}) => {
  return (
    <div className="mb-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Search */}
        <div className="relative w-full lg:max-w-sm">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search products..."
            aria-label="Search products"
            className="w-full rounded-xl border border-gray-800 bg-[#111827] py-3 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-blue-500"
          />
        </div>

        {/* Sort and view */}
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-gray-400">
            <span className="font-semibold text-white">
              {productCount}
            </span>{" "}
            products found
          </p>

          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            aria-label="Sort products"
            className="rounded-lg border border-gray-800 bg-[#111827] px-3 py-3 text-xs text-white outline-none focus:border-blue-500"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest First</option>
            <option value="rating">Top Rated</option>
          </select>

          <div className="hidden items-center gap-1 rounded-lg border border-gray-800 p-1 sm:flex">
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              aria-label="Grid view"
              aria-pressed={viewMode === "grid"}
              className={`rounded-md p-2 ${
                viewMode === "grid"
                  ? "bg-blue-600 text-white"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              <Grid2X2 size={17} />
            </button>

            <button
              type="button"
              onClick={() => setViewMode("list")}
              aria-label="List view"
              aria-pressed={viewMode === "list"}
              className={`rounded-md p-2 ${
                viewMode === "list"
                  ? "bg-blue-600 text-white"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              <List size={17} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopToolbar;
