
import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  ArrowRight,
  PackageSearch,
  ShoppingBag,
  SlidersHorizontal,
  X,
} from "lucide-react";

import {
  products,
  brands,
  categoryConfig,
  categoryFilters,
  filterOptions,
} from "../data/products";

import { categories } from "../data/categories";

import ProductCard from "../components/ProductCard";
import ShopSidebar from "../components/ShopSidebar";
import ShopToolbar from "../components/ShopToolbar";

const DEFAULT_CATEGORY = "All Products";
const DEFAULT_MAX_PRICE = 400000;

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // URL category validation
  const categoryParam = searchParams.get("category");

  const selectedCategory = categories.some(
    (category) => category.name === categoryParam
  )
    ? categoryParam
    : DEFAULT_CATEGORY;

  // States
  const [selectedFilters, setSelectedFilters] = useState({});
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(DEFAULT_MAX_PRICE);
  const [excludeOutOfStock, setExcludeOutOfStock] = useState(false);
  const [search, setSearch] = useState(
    searchParams.get("search") || ""
  );
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState("grid");

  // Sync Navbar search with Shop search.
  useEffect(() => {
    setSearch(searchParams.get("search") || "");
  }, [searchParams]);

  // Reset category-specific filters when category changes.
  useEffect(() => {
    setSelectedFilters({});
    setSelectedBrand([]);
  }, [selectedCategory]);

  // Category banner information.
  const categoryInfo =
    categoryConfig[selectedCategory] ||
    categoryConfig[DEFAULT_CATEGORY];

  // Category-specific available filters.
  const availableFilters =
    selectedCategory === DEFAULT_CATEGORY
      ? Object.keys(filterOptions)
      : categoryFilters[selectedCategory] || [];

  // Products belonging to selected category.
  const categoryProducts = useMemo(() => {
    if (selectedCategory === DEFAULT_CATEGORY) {
      return [...products];
    }

    return products.filter(
      (product) => product.category === selectedCategory
    );
  }, [selectedCategory]);

  // Available brands for selected category.
  const availableBrands = useMemo(() => {
    const categoryBrands = categoryProducts
      .map((product) => product.brand)
      .filter(Boolean);

    return [...new Set(categoryBrands)].sort();
  }, [categoryProducts]);

  // Product filtering and sorting.
  const filteredProducts = useMemo(() => {
    const searchText = search.trim().toLowerCase();

    const result = categoryProducts.filter((product) => {
      const specifications = product.specifications || {};

      const searchableText = [
        product.name,
        product.brand,
        product.category,
        product.description,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        !searchText || searchableText.includes(searchText);

      const matchesBrand =
        selectedBrand.length === 0 ||
        selectedBrand.includes(product.brand);

      const price = Number(product.price) || 0;

      const matchesPrice =
        price >= minPrice && price <= maxPrice;

      const matchesStock =
        !excludeOutOfStock || product.stock === "In Stock";

      const matchesSpecifications = Object.entries(
        selectedFilters
      ).every(([key, values]) => {
        if (!values?.length) return true;

        return values.includes(specifications[key]);
      });

      return (
        matchesSearch &&
        matchesBrand &&
        matchesPrice &&
        matchesStock &&
        matchesSpecifications
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
            new Date(b.createdAt || 0) -
            new Date(a.createdAt || 0)
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
    categoryProducts,
    selectedFilters,
    selectedBrand,
    minPrice,
    maxPrice,
    excludeOutOfStock,
    search,
    sortBy,
  ]);

  // Update category in URL.
  const setCategory = (category) => {
    const params = new URLSearchParams(searchParams);

    if (category === DEFAULT_CATEGORY) {
      params.delete("category");
    } else {
      params.set("category", category);
    }

    setSearchParams(params);
  };

  // Toggle specification filter.
  const toggleFilter = (filterKey, value) => {
    setSelectedFilters((previous) => {
      const currentValues = previous[filterKey] || [];

      const updatedValues = currentValues.includes(value)
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value];

      return {
        ...previous,
        [filterKey]: updatedValues,
      };
    });
  };

  // Clear filters.
  const clearFilters = () => {
    setSelectedFilters({});
    setSelectedBrand([]);
    setMinPrice(0);
    setMaxPrice(DEFAULT_MAX_PRICE);
    setExcludeOutOfStock(false);
    setSearch("");
    setSortBy("featured");

    const params = new URLSearchParams(searchParams);
    params.delete("search");

    setSearchParams(params);
  };

  // Active filters check.
  const hasActiveFilters =
    Object.values(selectedFilters).some(
      (values) => values.length > 0
    ) ||
    selectedBrand.length > 0 ||
    minPrice > 0 ||
    maxPrice < DEFAULT_MAX_PRICE ||
    excludeOutOfStock ||
    search.trim().length > 0;

  const removeSpecificationFilter = (key, value) => {
    toggleFilter(key, value);
  };

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-BD").format(price);

  return (
    <main className="min-h-screen bg-[#f8fafc] pb-20 text-slate-900">
      {/* Breadcrumb */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8 lg:px-10">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-medium"
          >
            <Link
              to="/"
              className="text-slate-500 transition hover:text-blue-600"
            >
              Home
            </Link>

            <ArrowRight size={13} className="text-slate-400" />

            <span className="text-slate-500">Shop</span>

            {selectedCategory !== DEFAULT_CATEGORY && (
              <>
                <ArrowRight size={13} className="text-slate-400" />

                <span className="font-semibold text-slate-900">
                  {selectedCategory}
                </span>
              </>
            )}
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 pt-7 sm:px-8 sm:pt-10 lg:px-10">
        {/* Dynamic Category Banner */}
        <section
          className="relative isolate mb-8 flex min-h-[240px] items-center overflow-hidden rounded-2xl bg-slate-900 bg-cover bg-center px-6 py-10 sm:min-h-[280px] sm:px-10 lg:px-14"
          style={{
            backgroundImage: categoryInfo?.image
              ? `url("${categoryInfo.image}")`
              : "none",
          }}
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/20" />

          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              GadgetGoods Collection
            </span>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {categoryInfo?.title ||
                (selectedCategory === DEFAULT_CATEGORY
                  ? "Explore All Products"
                  : selectedCategory)}
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              {categoryInfo?.description ||
                "Discover premium electronics, gadgets and accessories at GadgetGoods."}
            </p>

            <p className="mt-5 text-sm font-semibold text-white">
              {categoryProducts.length} products available
            </p>
          </div>
        </section>

        {/* Category Quick Navigation */}
        <section className="mb-8">
          <div className="mb-4">
            <h2 className="text-lg font-bold text-slate-900">
              Browse Categories
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              Find products by category
            </p>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2">
            {[DEFAULT_CATEGORY, ...categories.map((item) => item.name)].map(
              (category) => {
                const isActive = selectedCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setCategory(category)}
                    aria-pressed={isActive}
                    className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-semibold transition ${
                      isActive
                        ? "border-blue-600 bg-blue-600 text-white shadow-sm"
                        : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600"
                    }`}
                  >
                    {category}
                  </button>
                );
              }
            )}
          </div>
        </section>

        {/* Shop Layout */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[270px_minmax(0,1fr)]">
          {/* Sidebar */}
          <aside className="min-w-0 lg:sticky lg:top-24">
            <ShopSidebar
              availableFilters={availableFilters}
              selectedFilters={selectedFilters}
              toggleFilter={toggleFilter}
              availableBrands={availableBrands}
              selectedBrand={selectedBrand}
              setSelectedBrand={setSelectedBrand}
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
              excludeOutOfStock={excludeOutOfStock}
              setExcludeOutOfStock={setExcludeOutOfStock}
              clearFilters={clearFilters}
              filterOptions={filterOptions}
            />
          </aside>

          {/* Product Section */}
          <section className="min-w-0">
            {/* Toolbar */}
            <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
              <ShopToolbar
                search={search}
                setSearch={setSearch}
                sortBy={sortBy}
                setSortBy={setSortBy}
                productCount={filteredProducts.length}
                viewMode={viewMode}
                setViewMode={setViewMode}
              />
            </div>

            {/* Active Filters */}
            {hasActiveFilters && (
              <div className="my-5 flex flex-wrap items-center gap-2">
                <span className="mr-1 flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                  <SlidersHorizontal size={14} />
                  Active filters:
                </span>

                {selectedBrand.map((brand) => (
                  <button
                    key={brand}
                    type="button"
                    onClick={() =>
                      setSelectedBrand((previous) =>
                        previous.filter((item) => item !== brand)
                      )
                    }
                    className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700"
                  >
                    {brand}
                    <X size={13} />
                  </button>
                ))}

                {Object.entries(selectedFilters).flatMap(
                  ([key, values]) =>
                    values.map((value) => (
                      <button
                        key={`${key}-${value}`}
                        type="button"
                        onClick={() =>
                          removeSpecificationFilter(key, value)
                        }
                        className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700"
                      >
                        {value}
                        <X size={13} />
                      </button>
                    ))
                )}

                {(minPrice > 0 || maxPrice < DEFAULT_MAX_PRICE) && (
                  <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                    ৳{formatPrice(minPrice)} – ৳{formatPrice(maxPrice)}
                  </span>
                )}

                {excludeOutOfStock && (
                  <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                    In Stock Only
                  </span>
                )}

                {search.trim() && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700"
                  >
                    Search: {search}
                    <X size={13} />
                  </button>
                )}

                <button
                  type="button"
                  onClick={clearFilters}
                  className="ml-1 text-xs font-semibold text-red-500 hover:underline"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Result Information */}
            <div className="mb-5 mt-5 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-slate-500">
                Showing{" "}
                <span className="font-bold text-slate-900">
                  {filteredProducts.length}
                </span>{" "}
                of{" "}
                <span className="font-bold text-slate-900">
                  {categoryProducts.length}
                </span>{" "}
                products
              </p>

              <span className="text-xs font-medium text-slate-400">
                {selectedCategory}
              </span>
            </div>

            {/* Products */}
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
              <div className="flex min-h-[380px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <PackageSearch size={30} />
                </div>

                <h2 className="mt-5 text-xl font-bold text-slate-900">
                  No products found
                </h2>

                <p className="mt-2 max-w-sm text-sm leading-7 text-slate-500">
                  No products match your current search or filters.
                  Try changing your selection or clearing the filters.
                </p>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
                >
                  <ShoppingBag size={16} />
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
