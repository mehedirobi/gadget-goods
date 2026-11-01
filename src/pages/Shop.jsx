
import { useMemo, useState } from "react";
import { Link } from "react-router";
import { ArrowRight, PackageSearch } from "lucide-react";

import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import ShopSidebar from "../components/ShopSidebar";
import ShopToolbar from "../components/ShopToolbar";

const INITIAL_FILTERS = {
  category: "All Products",
  brand: "All Brands",
  maxPrice: 250000,
  search: "",
  sortBy: "featured",
};

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    INITIAL_FILTERS.category
  );

  const [selectedBrand, setSelectedBrand] = useState(
    INITIAL_FILTERS.brand
  );

  const [maxPrice, setMaxPrice] = useState(
    INITIAL_FILTERS.maxPrice
  );

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState("grid");

  const clearFilters = () => {
    setSelectedCategory(INITIAL_FILTERS.category);
    setSelectedBrand(INITIAL_FILTERS.brand);
    setMaxPrice(INITIAL_FILTERS.maxPrice);
    setSearch(INITIAL_FILTERS.search);
    setSortBy(INITIAL_FILTERS.sortBy);
  };

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All Products" ||
        product.category === selectedCategory;

      const matchesBrand =
        selectedBrand === "All Brands" ||
        product.brand === selectedBrand;

      const matchesPrice = product.price <= maxPrice;

      const searchText = search.trim().toLowerCase();

      const matchesSearch =
        !searchText ||
        `${product.name} ${product.brand} ${product.category}`
          .toLowerCase()
          .includes(searchText);

      return (
        matchesCategory &&
        matchesBrand &&
        matchesPrice &&
        matchesSearch
      );
    });

    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;

      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;

      case "newest":
        result.sort(
          (a, b) =>
            new Date(b.createdAt) - new Date(a.createdAt)
        );
        break;

      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;

      default:
        break;
    }

    return result;
  }, [
    selectedCategory,
    selectedBrand,
    maxPrice,
    search,
    sortBy,
  ]);

  return (
    <main className="min-h-screen bg-[#080d18] pb-20 pt-10 text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Breadcrumb */}
        <div className="mb-7 flex items-center gap-2 text-xs text-gray-500">
          <Link to="/" className="transition hover:text-blue-400">
            Home
          </Link>
          <ArrowRight size={13} />
          <span className="text-gray-300">Shop</span>
        </div>

        {/* Page heading */}
        <div className="mb-9">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
            Discover Our Collection
          </span>

          <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Explore All Products
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-7 text-gray-400">
            Discover premium electronics, innovative gadgets, and
            accessories designed to upgrade your digital lifestyle.
          </p>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-[250px_minmax(0,1fr)]">

          {/* Sidebar */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ShopSidebar
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedBrand={selectedBrand}
              setSelectedBrand={setSelectedBrand}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
              clearFilters={clearFilters}
            />
          </div>

          {/* Products */}
          <section>
            <ShopToolbar
              search={search}
              setSearch={setSearch}
              sortBy={sortBy}
              setSortBy={setSortBy}
              productCount={filteredProducts.length}
              viewMode={viewMode}
              setViewMode={setViewMode}
            />

            {/* Active filters */}
            <div className="mb-5 flex flex-wrap items-center gap-2">
              {selectedCategory !== "All Products" && (
                <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 text-xs text-blue-300">
                  {selectedCategory}
                </span>
              )}

              {selectedBrand !== "All Brands" && (
                <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 text-xs text-blue-300">
                  {selectedBrand}
                </span>
              )}

              {(selectedCategory !== "All Products" ||
                selectedBrand !== "All Brands" ||
                maxPrice !== 250000 ||
                search) && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-xs font-medium text-gray-400 hover:text-white"
                >
                  Clear filters
                </button>
              )}
            </div>

            {filteredProducts.length > 0 ? (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"
                    : "grid grid-cols-1 gap-4"
                }
              >
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>
            ) : (
              <div className="flex min-h-[350px] flex-col items-center justify-center rounded-2xl border border-gray-800 bg-[#111827] px-5 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                  <PackageSearch size={30} />
                </div>

                <h2 className="mt-5 text-xl font-bold text-white">
                  No products found
                </h2>

                <p className="mt-2 max-w-sm text-sm leading-6 text-gray-400">
                  We couldn't find products matching your filters.
                  Try changing your search or filter options.
                </p>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-6 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
};

export default Shop;
