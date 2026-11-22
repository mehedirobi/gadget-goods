
import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  ShoppingCart,
  Search,
  Menu,
  X,
  UserRound,
  Heart,
  ChevronDown,
  Smartphone,
  Tablet,
  Laptop,
  Monitor,
  Headphones,
  Watch,
  Gamepad2,
  Camera,
  Wifi,
  Home,
  Tag,
  BookOpen,
  Package,
  MoreHorizontal,
  ArrowRight,
  Command,
} from "lucide-react";

import {products} from "../data/products";

const Navbar = () => {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Product Categories
  const categories = [
    {
      name: "Phones",
      icon: Smartphone,
      path: "/category/phones",
      featured: [
        "iPhone",
        "Samsung",
        "Google",
        "Xiaomi",
        "OnePlus",
        "Nothing",
        "Realme",
        "OPPO",
        "Vivo",
        "Motorola",
      ],
    },
    {
      name: "Tablets",
      icon: Tablet,
      path: "/category/tablets",
      featured: [
        "iPad",
        "Samsung",
        "Xiaomi",
        "Lenovo",
        "Android Tablets",
        "Drawing Tablets",
      ],
    },
    {
      name: "Laptops",
      icon: Laptop,
      path: "/category/laptops",
      featured: [
        "Apple MacBook",
        "ASUS",
        "HP",
        "Dell",
        "Lenovo",
        "Acer",
        "MSI",
        "Gaming Laptops",
      ],
    },
    {
      name: "Desktops",
      icon: Monitor,
      path: "/category/desktops",
      featured: [
        "Desktop PCs",
        "All-in-One PCs",
        "Mini PCs",
        "Workstations",
        "Branded PCs",
        "Custom PCs",
      ],
    },
    {
      name: "Gadgets",
      icon: Headphones,
      path: "/category/gadgets",
      featured: [
        "Earbuds",
        "Headphones",
        "Speakers",
        "Power Banks",
        "Chargers",
        "Smart Watches",
        "Bluetooth Gadgets",
        "Smart Home",
      ],
    },
    {
      name: "PC Components",
      icon: Monitor,
      path: "/category/pc-components",
      featured: [
        "Processors",
        "Graphics Cards",
        "Motherboards",
        "RAM",
        "SSD & HDD",
        "Power Supplies",
        "PC Cases",
        "Cooling Systems",
      ],
    },
    {
      name: "Accessories",
      icon: Package,
      path: "/category/accessories",
      featured: [
        "Keyboards",
        "Mouse",
        "Mouse Pads",
        "Monitors",
        "USB Hubs",
        "Cables & Adapters",
        "Laptop Stands",
        "Webcams",
      ],
    },
    {
      name: "Gaming",
      icon: Gamepad2,
      path: "/category/gaming",
      featured: [
        "Gaming Consoles",
        "PlayStation",
        "Xbox",
        "Nintendo",
        "Gaming Controllers",
        "Gaming Headsets",
        "Gaming Chairs",
        "Gaming Accessories",
      ],
    },
    {
      name: "Smartwatches",
      icon: Watch,
      path: "/category/smartwatches",
      featured: [
        "Apple Watch",
        "Samsung Watch",
        "Xiaomi Watch",
        "Amazfit",
        "Fitness Bands",
        "Smart Bands",
      ],
    },
    {
      name: "Cameras",
      icon: Camera,
      path: "/category/cameras",
      featured: [
        "DSLR Cameras",
        "Mirrorless Cameras",
        "Action Cameras",
        "Digital Cameras",
        "Camera Lenses",
        "Camera Accessories",
      ],
    },
    {
      name: "Networking",
      icon: Wifi,
      path: "/category/networking",
      featured: [
        "WiFi Routers",
        "Mesh Routers",
        "Network Switches",
        "Access Points",
        "WiFi Adapters",
        "Network Accessories",
      ],
    },
    {
      name: "Appliances",
      icon: Home,
      path: "/category/appliances",
      featured: [
        "Air Conditioners",
        "Refrigerators",
        "Air Purifiers",
        "Kitchen Appliances",
        "Home Appliances",
        "Smart Home Devices",
      ],
    },
  ];

  const quickLinks = [
    { name: "Blog", path: "/blog", icon: BookOpen },
    { name: "Pre-orders", path: "/preorders", icon: Package },
    { name: "Offers", path: "/offers", icon: Tag },
  ];

  // Primary categories displayed directly in the navbar.
  // All remaining categories are automatically placed inside More.
  const primaryCategoryNames = [
    "Phones",
    "Tablets",
    "Laptops",
    "Desktops",
    "Gadgets",
    "PC Components",
    "Gaming",
  ];

  const visibleCategories = categories.filter((category) =>
    primaryCategoryNames.includes(category.name)
  );

  const moreCategories = categories.filter(
    (category) => !primaryCategoryNames.includes(category.name)
  );

  // Live product search
  const searchResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) return [];

    return products
      .filter((product) => {
        const searchableText = [
          product.name,
          product.brand,
          product.category,
          product.description,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        return searchableText.includes(query);
      })
      .slice(0, 6);
  }, [searchQuery]);

  const closeMenus = () => {
    setIsMenuOpen(false);
    setActiveCategory(null);
    setShowMore(false);
    setIsSearchFocused(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const query = searchQuery.trim();

    if (!query) return;

    closeMenus();
    navigate(`/shop?search=${encodeURIComponent(query)}`);
  };

  const handleProductSearch = () => {
    const query = searchQuery.trim();

    if (!query) return;

    closeMenus();
    navigate(`/shop?search=${encodeURIComponent(query)}`);
  };

  const toggleCategory = (name) => {
    setActiveCategory((current) =>
      current === name ? null : name
    );

    setShowMore(false);
  };

  // Reusable search component
  const SearchBox = ({ mobile = false }) => (
    <div className="relative w-full">
      <form
        role="search"
        onSubmit={handleSearch}
        className={`flex items-center rounded-full border bg-white transition-all duration-200 ${
          isSearchFocused
            ? "border-blue-500 shadow-md shadow-blue-100/60"
            : "border-gray-200 hover:border-gray-300"
        } ${
          mobile ? "h-11 px-4" : "h-[46px] px-5"
        }`}
      >
        <Search
          size={mobile ? 18 : 19}
          className="shrink-0 text-gray-500"
        />

        <input
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => {
            // Allow clicking suggestions before closing.
            setTimeout(() => setIsSearchFocused(false), 180);
          }}
          placeholder={
            mobile
              ? "Search products..."
              : "Search phones, laptops, gadgets..."
          }
          aria-label="Search products"
          autoComplete="off"
          className="h-full min-w-0 w-full bg-transparent px-3 text-sm font-medium text-gray-900 caret-blue-600 outline-none placeholder:font-normal placeholder:text-gray-400 [color-scheme:light]"
        />

        {searchQuery && (
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => setSearchQuery("")}
            aria-label="Clear search"
            className="shrink-0 rounded-full p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
          >
            <X size={16} />
          </button>
        )}

        {!mobile && (
          <button
            type="submit"
            className="shrink-0 rounded-full bg-blue-600 px-5 py-2 text-xs font-semibold text-white transition hover:bg-blue-700"
          >
            Search
          </button>
        )}
      </form>

      {/* Live Search Suggestions */}
      {isSearchFocused && searchQuery.trim() && (
        <div className="absolute left-0 top-full z-[100] mt-2 w-full overflow-hidden rounded-xl border border-gray-100 bg-white shadow-[0_12px_35px_rgba(0,0,0,0.13)]">

          <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
            <span className="text-xs font-bold text-gray-700">
              Search Results
            </span>

            <span className="text-[11px] text-gray-400">
              {searchResults.length} matching products
            </span>
          </div>

          {searchResults.length > 0 ? (
            <div className="p-2">
              {searchResults.map((product) => (
                <button
                  key={product.id}
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={handleProductSearch}
                  className="flex w-full items-center justify-between gap-3 rounded-lg px-3 py-3 text-left transition hover:bg-blue-50"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-500">
                      <Package size={17} />
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-gray-800">
                        {product.name}
                      </p>

                      <p className="mt-0.5 text-[11px] text-gray-500">
                        {product.brand || product.category}
                      </p>
                    </div>
                  </div>

                  <span className="shrink-0 text-xs font-bold text-gray-800">
                    ৳{Number(product.price).toLocaleString("en-BD")}
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <div className="px-5 py-8 text-center">
              <Search
                size={25}
                className="mx-auto mb-2 text-gray-300"
              />

              <p className="text-sm font-semibold text-gray-700">
                No products found
              </p>

              <p className="mt-1 text-xs text-gray-400">
                Try another product name or brand.
              </p>
            </div>
          )}

          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={handleProductSearch}
            className="flex w-full items-center justify-center gap-2 border-t border-gray-100 py-3 text-xs font-bold text-blue-600 transition hover:bg-blue-50"
          >
            View all search results
            <ArrowRight size={14} />
          </button>
        </div>
      )}
    </div>
  );

  // Compact category dropdown
  const CategoryDropdown = ({ category }) => {
    const Icon = category.icon;

    return (
      <div className="absolute left-0 top-full z-50 w-[250px] pt-1.5">
        <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl">

          <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50 px-4 py-3">
            <div className="flex items-center gap-2">
              <Icon size={16} className="text-blue-600" />

              <span className="text-sm font-bold text-gray-900">
                {category.name}
              </span>
            </div>

            <Link
              to={category.path}
              onClick={closeMenus}
              className="text-[11px] font-semibold text-blue-600 hover:text-blue-700"
            >
              View All
            </Link>
          </div>

          <div className="max-h-[300px] overflow-y-auto p-2">
            {category.featured.map((item) => (
              <Link
                key={item}
                to={category.path}
                onClick={closeMenus}
                className="flex items-center justify-between rounded-lg px-3 py-2.5 text-[13px] font-medium text-gray-600 transition hover:bg-blue-50 hover:text-blue-600"
              >
                {item}
                <ArrowRight size={13} className="text-gray-300" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-white">

      {/* ================= TOP NAVBAR ================= */}
      <div className="border-b border-gray-100">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center gap-4 px-4 sm:px-6 lg:gap-6 lg:px-8">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenus}
            className="flex shrink-0 items-center gap-2"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
              <Smartphone size={22} strokeWidth={2.2} />
            </div>

            <h1 className="text-[21px] font-extrabold tracking-tight text-gray-900 sm:text-[23px]">
              Gadget<span className="text-blue-600">Goods</span>
            </h1>
          </Link>

          {/* Desktop Search */}
          <div className="mx-auto hidden w-full max-w-[600px] lg:block">
            <SearchBox />
          </div>

          {/* Quick Links */}
          <div className="hidden shrink-0 items-center gap-3 xl:flex">
            {quickLinks.map(({ name, path }) => (
              <Link
                key={path}
                to={path}
                className="whitespace-nowrap text-[12px] font-semibold text-gray-600 transition hover:text-blue-600"
              >
                {name}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="ml-auto flex shrink-0 items-center gap-1 lg:ml-0">

            {/* Wishlist */}
            <Link
              to="/wishlist"
              aria-label="Wishlist"
              title="Wishlist"
              className="rounded-full p-2.5 text-gray-600 transition hover:bg-blue-50 hover:text-blue-600"
            >
              <Heart size={21} strokeWidth={1.8} />
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              aria-label="Shopping cart"
              title="Shopping cart"
              className="relative rounded-full p-2.5 text-gray-600 transition hover:bg-blue-50 hover:text-blue-600"
            >
              <ShoppingCart size={21} strokeWidth={1.8} />

              <span className="absolute right-0 top-0 flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] font-bold text-white">
                0
              </span>
            </Link>

            {/* Account Icon */}
            <Link
              to="/login"
              aria-label="Sign in"
              title="Sign in"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
            >
              <UserRound size={20} strokeWidth={1.8} />
            </Link>

            {/* Mobile Menu */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              className="rounded-full p-2.5 text-gray-700 transition hover:bg-gray-100 lg:hidden"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Search */}
        <div className="px-4 pb-3 lg:hidden">
          <SearchBox mobile />
        </div>
      </div>

      {/* ================= CATEGORY NAVBAR ================= */}
      <div
        className="relative hidden border-b border-gray-100 bg-white lg:block"
        onMouseLeave={() => {
          setActiveCategory(null);
          setShowMore(false);
        }}
      >
        <div className="mx-auto flex h-[46px] max-w-[1440px] items-center px-4 sm:px-6 lg:px-8">

          <nav className="flex h-full w-full items-center justify-between gap-1">

            {/* Primary Categories */}
            {visibleCategories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.name;

              return (
                <div
                  key={category.name}
                  className="relative flex h-full shrink-0 items-center"
                  onMouseEnter={() => {
                    setActiveCategory(category.name);
                    setShowMore(false);
                  }}
                >
                  <Link
                    to={category.path}
                    onFocus={() => setActiveCategory(category.name)}
                    className={`flex h-full items-center gap-1 whitespace-nowrap border-b-2 px-2 text-[11px] font-semibold transition xl:px-2.5 xl:text-[12px] ${
                      isActive
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    <Icon size={15} strokeWidth={1.9} />

                    {category.name}

                    <ChevronDown
                      size={12}
                      className={`transition-transform duration-200 ${
                        isActive ? "rotate-180" : ""
                      }`}
                    />
                  </Link>

                  {isActive && (
                    <CategoryDropdown category={category} />
                  )}
                </div>
              );
            })}

            {/* More Categories */}
            <div
              className="relative flex h-full shrink-0 items-center"
              onMouseEnter={() => {
                setActiveCategory(null);
                setShowMore(true);
              }}
            >
              <button
                type="button"
                onClick={() => setShowMore((prev) => !prev)}
                aria-expanded={showMore}
                className={`flex h-full items-center gap-1 border-b-2 px-2 text-[12px] font-semibold transition ${
                  showMore
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-600 hover:text-blue-600"
                }`}
              >
                <MoreHorizontal size={17} />
                More

                <ChevronDown
                  size={12}
                  className={`transition-transform duration-200 ${
                    showMore ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showMore && (
                <div className="absolute right-0 top-full z-50 w-[235px] pt-1.5">
                  <div className="overflow-hidden rounded-xl border border-gray-100 bg-white p-2 shadow-xl">

                    <p className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-gray-400">
                      More Categories
                    </p>

                    {moreCategories.map((category) => {
                      const Icon = category.icon;

                      return (
                        <Link
                          key={category.name}
                          to={category.path}
                          onClick={closeMenus}
                          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium text-gray-600 transition hover:bg-blue-50 hover:text-blue-600"
                        >
                          <Icon size={16} />
                          {category.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>

      {/* ================= MOBILE NAVIGATION ================= */}
      {isMenuOpen && (
        <div className="max-h-[calc(100vh-130px)] overflow-y-auto border-t border-gray-100 bg-white shadow-xl lg:hidden">

          {/* Quick Links */}
          <div className="grid grid-cols-3 gap-2 border-b border-gray-100 p-4">
            {quickLinks.map(({ name, path, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                onClick={closeMenus}
                className="flex flex-col items-center gap-2 rounded-xl bg-gray-50 p-3 text-xs font-semibold text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
              >
                <Icon size={20} />
                {name}
              </Link>
            ))}
          </div>

          {/* Categories */}
          <div className="p-4">
            <p className="mb-3 px-2 text-[11px] font-bold uppercase tracking-wider text-gray-400">
              Shop By Category
            </p>

            <div className="space-y-1">
              {categories.map((category) => {
                const Icon = category.icon;
                const isActive = activeCategory === category.name;

                return (
                  <div key={category.name}>
                    <button
                      type="button"
                      onClick={() => toggleCategory(category.name)}
                      aria-expanded={isActive}
                      className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold transition ${
                        isActive
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <Icon size={18} />
                        {category.name}
                      </span>

                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          isActive ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isActive && (
                      <div className="grid grid-cols-2 gap-1 px-3 py-2">
                        {category.featured.map((item) => (
                          <Link
                            key={item}
                            to={category.path}
                            onClick={closeMenus}
                            className="rounded-lg px-3 py-2 text-xs text-gray-500 transition hover:bg-blue-50 hover:text-blue-600"
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Account, Wishlist & Cart */}
          <div className="border-t border-gray-100 p-4">
            <Link
              to="/login"
              onClick={closeMenus}
              className="mb-2 flex items-center gap-3 rounded-xl bg-gray-900 px-3 py-3 text-sm font-semibold text-white"
            >
              <UserRound size={19} />
              Sign In / Login
            </Link>

            <Link
              to="/wishlist"
              onClick={closeMenus}
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-50"
            >
              <Heart size={19} />
              My Wishlist
            </Link>

            <Link
              to="/cart"
              onClick={closeMenus}
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-50"
            >
              <ShoppingCart size={19} />
              Shopping Cart
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
