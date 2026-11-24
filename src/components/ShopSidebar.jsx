
import { useEffect, useState } from "react";
import {
  SlidersHorizontal,
  BadgeDollarSign,
  RotateCcw,
  ChevronDown,
  Search,
  Check,
  Tag,
  PackageX,
} from "lucide-react";

const formatPrice = (price) =>
  new Intl.NumberFormat("en-BD").format(price);

const FilterSection = ({
  title,
  options = [],
  selectedValues = [],
  onToggle,
  searchable = false,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [search, setSearch] = useState("");

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="border-b border-slate-100 py-4 last:border-0">
      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-3 text-left"
      >
        <span className="text-sm font-bold text-slate-800">
          {title}
          {selectedValues.length > 0 && (
            <span className="ml-2 rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-bold text-blue-600">
              {selectedValues.length}
            </span>
          )}
        </span>

        <ChevronDown
          size={17}
          className={`shrink-0 text-slate-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="mt-3">
          {searchable && options.length > 5 && (
            <div className="relative mb-2">
              <Search
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder={`Search ${title}`}
                className="h-9 w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 text-xs outline-none transition focus:border-blue-400 focus:bg-white"
              />
            </div>
          )}

          <div className="max-h-52 space-y-1 overflow-y-auto pr-1">
            {filteredOptions.map((option) => {
              const checked = selectedValues.includes(option);

              return (
                <label
                  key={option}
                  className={`group flex cursor-pointer items-center justify-between gap-3 rounded-lg px-2.5 py-2 text-xs transition ${
                    checked
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <span className="flex min-w-0 items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => onToggle(option)}
                      className="sr-only"
                    />

                    <span
                      className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border transition ${
                        checked
                          ? "border-blue-600 bg-blue-600 text-white"
                          : "border-slate-300 bg-white group-hover:border-blue-400"
                      }`}
                    >
                      {checked && <Check size={11} />}
                    </span>

                    <span className="truncate font-medium">
                      {option}
                    </span>
                  </span>
                </label>
              );
            })}

            {filteredOptions.length === 0 && (
              <p className="py-3 text-center text-xs text-slate-400">
                No options found
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

const ShopSidebar = ({
  availableFilters,
  selectedFilters,
  toggleFilter,
  availableBrands,
  selectedBrand,
  setSelectedBrand,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  excludeOutOfStock,
  setExcludeOutOfStock,
  clearFilters,
  filterOptions,
}) => {
  const [draftMinPrice, setDraftMinPrice] = useState(minPrice);
  const [draftMaxPrice, setDraftMaxPrice] = useState(maxPrice);
  const [brandSearch, setBrandSearch] = useState("");

  useEffect(() => {
    setDraftMinPrice(minPrice);
    setDraftMaxPrice(maxPrice);
  }, [minPrice, maxPrice]);

  const hasActiveFilters =
    Object.values(selectedFilters).some(
      (values) => values.length > 0
    ) ||
    selectedBrand.length > 0 ||
    minPrice > 0 ||
    maxPrice < 400000 ||
    excludeOutOfStock;

  const handlePriceApply = () => {
    const min = Math.max(
      0,
      Math.min(Number(draftMinPrice) || 0, 400000)
    );

    const max = Math.max(
      0,
      Math.min(Number(draftMaxPrice) || 0, 400000)
    );

    if (min > max) return;

    setMinPrice(min);
    setMaxPrice(max);
  };

  const filteredBrands = availableBrands.filter((brand) =>
    brand.toLowerCase().includes(brandSearch.toLowerCase())
  );

  return (
    <aside
      aria-label="Product filters"
      className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 px-4 py-5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <SlidersHorizontal size={18} />
          </div>

          <div>
            <h2 className="text-sm font-bold text-slate-900">
              Filters
            </h2>
            <p className="mt-0.5 text-[11px] text-slate-500">
              Refine your products
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={clearFilters}
          disabled={!hasActiveFilters}
          className="text-xs font-semibold text-blue-600 transition hover:text-blue-800 disabled:cursor-not-allowed disabled:text-slate-300"
        >
          Clear all
        </button>
      </div>

      <div className="px-4">
        {/* Price Range */}
        <section className="border-b border-slate-100 py-5">
          <h3 className="mb-4 flex items-center gap-2 text-sm font-bold text-slate-800">
            <BadgeDollarSign size={17} className="text-blue-600" />
            Price Range
          </h3>

          <div className="grid grid-cols-[1fr_auto_1fr] items-end gap-2">
            <label className="min-w-0">
              <span className="mb-1.5 block text-[11px] font-medium text-slate-500">
                Min Price
              </span>

              <input
                type="number"
                min="0"
                max="400000"
                value={draftMinPrice}
                onChange={(event) =>
                  setDraftMinPrice(event.target.value)
                }
                className="h-10 w-full min-w-0 rounded-lg border border-slate-200 px-2 text-xs font-semibold outline-none focus:border-blue-500"
              />
            </label>

            <span className="pb-3 text-xs text-slate-400">–</span>

            <label className="min-w-0">
              <span className="mb-1.5 block text-[11px] font-medium text-slate-500">
                Max Price
              </span>

              <input
                type="number"
                min="0"
                max="400000"
                value={draftMaxPrice}
                onChange={(event) =>
                  setDraftMaxPrice(event.target.value)
                }
                className="h-10 w-full min-w-0 rounded-lg border border-slate-200 px-2 text-xs font-semibold outline-none focus:border-blue-500"
              />
            </label>
          </div>

          <button
            type="button"
            onClick={handlePriceApply}
            disabled={
              Number(draftMinPrice) > Number(draftMaxPrice) ||
              Number(draftMinPrice) < 0 ||
              Number(draftMaxPrice) > 400000
            }
            className="mt-3 w-full rounded-lg bg-blue-600 py-2.5 text-xs font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Apply Price
          </button>

          <div className="mt-3 flex justify-between text-[10px] font-medium text-slate-400">
            <span>৳{formatPrice(minPrice)}</span>
            <span>৳{formatPrice(maxPrice)}</span>
          </div>
        </section>

        {/* Stock Availability */}
        <section className="border-b border-slate-100 py-4">
          <label className="flex cursor-pointer items-center justify-between gap-3">
            <span className="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <PackageX size={16} className="text-slate-400" />
              Exclude Out of Stock
            </span>

            <input
              type="checkbox"
              checked={excludeOutOfStock}
              onChange={(event) =>
                setExcludeOutOfStock(event.target.checked)
              }
              className="h-4 w-4 cursor-pointer rounded accent-blue-600"
            />
          </label>
        </section>

        {/* Dynamic Specification Filters */}
        {availableFilters.map((filterKey) => {
          const filter = filterOptions[filterKey];

          if (!filter) return null;

          return (
            <FilterSection
              key={filterKey}
              title={filter.label}
              options={filter.options}
              selectedValues={selectedFilters[filterKey] || []}
              onToggle={(value) =>
                toggleFilter(filterKey, value)
              }
              searchable
            />
          );
        })}

        {/* Brands */}
        <FilterSection
          title="Brands"
          options={filteredBrands}
          selectedValues={selectedBrand}
          onToggle={(brand) => {
            setSelectedBrand((previous) =>
              previous.includes(brand)
                ? previous.filter((item) => item !== brand)
                : [...previous, brand]
            );
          }}
          searchable={false}
        />

        {/* Search brands separately */}
        {availableBrands.length > 5 && (
          <div className="border-t border-slate-100 pb-4 pt-3">
            <div className="relative">
              <Search
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="search"
                value={brandSearch}
                onChange={(event) =>
                  setBrandSearch(event.target.value)
                }
                placeholder="Search brands"
                className="h-9 w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 text-xs outline-none focus:border-blue-400 focus:bg-white"
              />
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      {hasActiveFilters && (
        <div className="border-t border-slate-100 bg-slate-50 px-4 py-3">
          <button
            type="button"
            onClick={clearFilters}
            className="flex w-full items-center justify-center gap-2 text-xs font-semibold text-slate-600 transition hover:text-red-600"
          >
            <RotateCcw size={13} />
            Reset all filters
          </button>
        </div>
      )}
    </aside>
  );
};

export default ShopSidebar;
