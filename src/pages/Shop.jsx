
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
  categoryConfig,
  categoryFilters,
  filterOptions,
} from "../data/products";

import ProductCard from "../components/ProductCard";
import ShopSidebar from "../components/ShopSidebar";

const DEFAULT_CATEGORY = "All Products";
const DEFAULT_MAX_PRICE = 400000;

// Navbar category name -> existing product category name.
const CATEGORY_ALIASES = {
  phones: ["Smartphones"],
  smartphones: ["Smartphones"],

  tablets: ["Tablets"],

  laptops: ["Laptops"],

  desktops: ["Desktop PCs", "Desktops"],
  "desktop-pcs": ["Desktop PCs", "Desktops"],

  gadgets: ["Accessories", "Smart Watches", "Smartwatches"],

  "pc-components": ["PC Components"],

  accessories: ["Accessories"],

  gaming: ["Gaming"],

  smartwatches: ["Smart Watches", "Smartwatches"],
  "smart-watches": ["Smart Watches", "Smartwatches"],

  cameras: ["Cameras"],
  networking: ["Networking"],
  appliances: ["Appliances"],
};

const CATEGORY_LABELS = {
  phones: "Phones",
  smartphones: "Phones",
  tablets: "Tablets",
  laptops: "Laptops",
  desktops: "Desktops",
  "desktop-pcs": "Desktops",
  gadgets: "Gadgets",
  "pc-components": "PC Components",
  accessories: "Accessories",
  gaming: "Gaming",
  smartwatches: "Smartwatches",
  "smart-watches": "Smartwatches",
  cameras: "Cameras",
  networking: "Networking",
  appliances: "Appliances",
};

const SHOP_CATEGORIES = [
  "Phones",
  "Tablets",
  "Laptops",
  "Desktops",
  "Gadgets",
  "PC Components",
  "Accessories",
  "Gaming",
  "Smartwatches",
  "Cameras",
  "Networking",
  "Appliances",
];

const normalize = (value = "") =>
  String(value).trim().toLowerCase().replace(/[\s_-]+/g, "");

const getCategoryKey = (value = "") =>
  String(value).trim().toLowerCase().replace(/\s+/g, "-");

const getSelectedCategory = (categoryParam) => {
  if (!categoryParam) return DEFAULT_CATEGORY;

  const key = getCategoryKey(categoryParam);

  return (
    CATEGORY_LABELS[key] ||
    SHOP_CATEGORIES.find(
      (category) => normalize(category) === normalize(categoryParam)
    ) ||
    categoryParam
  );
};

const getCategoryValues = (category) => {
  const key = getCategoryKey(category);

  return (
    CATEGORY_ALIASES[key] ||
    [category]
  );
};

const getProductSearchText = (product) => {
  const specifications = product.specifications || {};

  return [
    product.name,
    product.brand,
    product.category,
    product.description,
    ...Object.values(specifications),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
};

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryParam = searchParams.get("category");
  const selectedCategory = getSelectedCategory(categoryParam);

  // Filters and UI states.
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

  // Keep search input synchronized with URL.
  useEffect(() => {
    setSearch(searchParams.get("search") || "");
  }, [searchParams]);

  // Reset category-specific filters when category changes.
  useEffect(() => {
    setSelectedFilters({});
    setSelectedBrand([]);
    setMinPrice(0);
    setMaxPrice(DEFAULT_MAX_PRICE);
    setExcludeOutOfStock(false);
  }, [selectedCategory]);

  // Resolve actual product categories.
  const matchedCategories = useMemo(
    () => getCategoryValues(selectedCategory),
    [selectedCategory]
  );

  // Products belonging to selected category.
  const categoryProducts = useMemo(() => {
    if (selectedCategory === DEFAULT_CATEGORY) {
      return [...products];
    }

    const allowedCategories = matchedCategories.map(normalize);

    return products.filter((product) =>
      allowedCategories.includes(normalize(product.category))
    );
  }, [selectedCategory, matchedCategories]);

  // Category banner information.
  const categoryInfo = useMemo(() => {
    if (selectedCategory === DEFAULT_CATEGORY) {
      return categoryConfig[DEFAULT_CATEGORY];
    }

    const matchedConfig = matchedCategories
      .map((category) => categoryConfig[category])
      .find(Boolean);

    return matchedConfig || {
      title: selectedCategory,
      description:
        "Explore our collection of premium electronics and technology products.",
      image: categoryConfig[DEFAULT_CATEGORY]?.image,
    };
  }, [selectedCategory, matchedCategories]);

  // Category-specific filters.
  const availableFilters = useMemo(() => {
    if (selectedCategory === DEFAULT_CATEGORY) {
      return Object.keys(filterOptions);
    }

    const filters = matchedCategories.flatMap(
      (category) => categoryFilters[category] || []
    );

    return [...new Set(filters)];
  }, [selectedCategory, matchedCategories]);

  // Available brands for current category.
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

      const searchableText = getProductSearchText(product);

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

        return values.some(
          (value) =>
            normalize(specifications[key]) === normalize(value)
        );
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
        result.sort(
          (a, b) => Number(a.price) - Number(b.price)
        );
        break;

      case "price-high":
        result.sort(
          (a, b) => Number(b.price) - Number(a.price)
        );
        break;

      case "newest":
        result.sort(
          (a, b) =>
            new Date(b.createdAt || 0) -
            new Date(a.createdAt || 0)
        );
        break;

      case "rating":
        result.sort(
          (a, b) =>
            Number(b.rating || 0) - Number(a.rating || 0)
        );
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
      params.set("category", getCategoryKey(category));
    }

    // Clear previous category search and filters.
    params.delete("search");

    setSearch("");
    setSelectedFilters({});
    setSelectedBrand([]);
    setMinPrice(0);
    setMaxPrice(DEFAULT_MAX_PRICE);
    setExcludeOutOfStock(false);

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

  // Update search and URL together.
  const updateSearch = (value) => {
    setSearch(value);

    const params = new URLSearchParams(searchParams);

    if (value.trim()) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    setSearchParams(params, { replace: true });
  };

  // Clear filters without removing the selected category.
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

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-BD").format(price);

  const hasActiveFilters =
    Object.values(selectedFilters).some(
      (values) => values.length > 0
    ) ||
    selectedBrand.length > 0 ||
    minPrice > 0 ||
    maxPrice < DEFAULT_MAX_PRICE ||
    excludeOutOfStock ||
    search.trim().length > 0;

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

            <Link
              to="/shop"
              className="text-slate-500 transition hover:text-blue-600"
            >
              Shop
            </Link>

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
        {/* Category Banner */}
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
            {[DEFAULT_CATEGORY, ...SHOP_CATEGORIES].map(
              (category) => {
                const isActive =
                  selectedCategory === category;

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
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div>
                <h2 className="text-sm font-bold text-slate-900">
                  {selectedCategory === DEFAULT_CATEGORY
                    ? "All Products"
                    : selectedCategory}
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Find the right product for your needs.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <select
                  value={sortBy}
                  onChange={(event) =>
                    setSortBy(event.target.value)
                  }
                  aria-label="Sort products"
                  className="h-10 rounded-lg border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-700 outline-none focus:border-blue-500"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">
                    Price: Low to High
                  </option>
                  <option value="price-high">
                    Price: High to Low
                  </option>
                  <option value="rating">Top Rated</option>
                </select>

                <button
                  type="button"
                  onClick={() =>
                    setViewMode((current) =>
                      current === "grid" ? "list" : "grid"
                    )
                  }
                  className="h-10 rounded-lg border border-slate-200 px-3 text-xs font-semibold text-slate-700 transition hover:border-blue-400 hover:text-blue-600"
                >
                  {viewMode === "grid" ? "List View" : "Grid View"}
                </button>
              </div>
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
                        onClick={() => toggleFilter(key, value)}
                        className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700"
                      >
                        {value}
                        <X size={13} />
                      </button>
                    ))
                )}

                {(minPrice > 0 ||
                  maxPrice < DEFAULT_MAX_PRICE) && (
                  <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                    ৳{formatPrice(minPrice)} – ৳
                    {formatPrice(maxPrice)}
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
                    onClick={() => updateSearch("")}
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
                  {categoryProducts.length === 0
                    ? `There are currently no products available in ${selectedCategory}.`
                    : "No products match your current search or filters. Try changing your selection or clearing the filters."}
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
