
import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  LogOut,
  LoaderCircle,
} from "lucide-react";

import { products } from "../data/products";
import { useAuth } from "../contexts/AuthContext";
import { useToast } from "../contexts/ToastContext";

const CART_KEY = "gadgetgoods-cart";

// =============================================
// CATEGORY DATA
// =============================================

const categories = [
  {
    name: "Phones",
    icon: Smartphone,
    path: "/shop?category=phones",
    featured: [
      "iPhone", "Samsung", "Google", "Xiaomi", "OnePlus",
      "Nothing", "Realme", "OPPO", "Vivo", "Motorola",
    ],
  },
  {
    name: "Tablets",
    icon: Tablet,
    path: "/shop?category=tablets",
    featured: [
      "iPad", "Samsung", "Xiaomi", "Lenovo",
      "Android Tablets", "Drawing Tablets",
    ],
  },
  {
    name: "Laptops",
    icon: Laptop,
    path: "/shop?category=laptops",
    featured: [
      "Apple MacBook", "ASUS", "HP", "Dell",
      "Lenovo", "Acer", "MSI", "Gaming Laptops",
    ],
  },
  {
    name: "Desktops",
    icon: Monitor,
    path: "/shop?category=desktops",
    featured: [
      "Desktop PCs", "All-in-One PCs", "Mini PCs",
      "Workstations", "Branded PCs", "Custom PCs",
    ],
  },
  {
    name: "Gadgets",
    icon: Headphones,
    path: "/shop?category=gadgets",
    featured: [
      "Earbuds", "Headphones", "Speakers", "Power Banks",
      "Chargers", "Smart Watches", "Bluetooth Gadgets", "Smart Home",
    ],
  },
  {
    name: "PC Components",
    icon: Monitor,
    path: "/shop?category=pc-components",
    featured: [
      "Processors", "Graphics Cards", "Motherboards", "RAM",
      "SSD & HDD", "Power Supplies", "PC Cases", "Cooling Systems",
    ],
  },
  {
    name: "Accessories",
    icon: Package,
    path: "/shop?category=accessories",
    featured: [
      "Keyboards", "Mouse", "Mouse Pads", "Monitors",
      "USB Hubs", "Cables & Adapters", "Laptop Stands", "Webcams",
    ],
  },
  {
    name: "Gaming",
    icon: Gamepad2,
    path: "/shop?category=gaming",
    featured: [
      "Gaming Consoles", "PlayStation", "Xbox", "Nintendo",
      "Gaming Controllers", "Gaming Headsets",
      "Gaming Chairs", "Gaming Accessories",
    ],
  },
  {
    name: "Smartwatches",
    icon: Watch,
    path: "/shop?category=smartwatches",
    featured: [
      "Apple Watch", "Samsung Watch", "Xiaomi Watch",
      "Amazfit", "Fitness Bands", "Smart Bands",
    ],
  },
  {
    name: "Cameras",
    icon: Camera,
    path: "/shop?category=cameras",
    featured: [
      "DSLR Cameras", "Mirrorless Cameras", "Action Cameras",
      "Digital Cameras", "Camera Lenses", "Camera Accessories",
    ],
  },
  {
    name: "Networking",
    icon: Wifi,
    path: "/shop?category=networking",
    featured: [
      "WiFi Routers", "Mesh Routers", "Network Switches",
      "Access Points", "WiFi Adapters", "Network Accessories",
    ],
  },
  {
    name: "Appliances",
    icon: Home,
    path: "/shop?category=appliances",
    featured: [
      "Air Conditioners", "Refrigerators", "Air Purifiers",
      "Kitchen Appliances", "Home Appliances", "Smart Home Devices",
    ],
  },
];

const quickLinks = [
  { name: "Blog", path: "/blog", icon: BookOpen },
  { name: "Pre-orders", path: "/preorders", icon: Package },
  { name: "Offers", path: "/offers", icon: Tag },
];

// =============================================
// HELPERS
// =============================================

const getCartCount = () => {
  try {
    const cart = JSON.parse(localStorage.getItem(CART_KEY) || "[]");

    if (!Array.isArray(cart)) return 0;

    return cart.reduce(
      (total, item) =>
        total + Math.max(0, Number(item.quantity) || 0),
      0
    );
  } catch {
    return 0;
  }
};

const getUserName = (user) =>
  user?.displayName ||
  user?.email?.split("@")[0] ||
  "My Account";

const getUserInitials = (user) => {
  const name = getUserName(user);

  return (
    name
      .split(/[\s._-]+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join("") || "U"
  );
};

// =============================================
// BRAND LOGO
// =============================================

const BrandLogo = ({ onClick }) => (
  <Link
    to="/"
    onClick={onClick}
    aria-label="GadgetGoods Home"
    className="flex shrink-0 items-center gap-2"
  >
    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm shadow-blue-200">
      <Smartphone size={21} strokeWidth={2.2} />
    </div>

    <span className="text-[20px] font-extrabold tracking-tight text-gray-900 sm:text-[22px]">
      Gadget<span className="text-blue-600">Goods</span>
    </span>
  </Link>
);

// =============================================
// USER AVATAR
// =============================================

const UserAvatar = ({ user, size = "normal" }) => {
  const [imageError, setImageError] = useState(false);

  const photoURL = user?.photoURL;

  const sizeClass =
    size === "large"
      ? "h-11 w-11 text-sm"
      : "h-9 w-9 text-xs";

  useEffect(() => {
    setImageError(false);
  }, [photoURL]);

  if (photoURL && !imageError) {
    return (
      <img
        src={photoURL}
        alt={`${getUserName(user)} profile`}
        referrerPolicy="no-referrer"
        onError={() => setImageError(true)}
        className={`${sizeClass} shrink-0 rounded-full border border-gray-200 object-cover`}
      />
    );
  }

  return (
    <div
      aria-label={`${getUserName(user)} avatar`}
      className={`${sizeClass} flex shrink-0 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700`}
    >
      {getUserInitials(user)}
    </div>
  );
};

// =============================================
// CART BUTTON
// =============================================

const CartButton = ({ count, onClick, mobile = false }) => (
  <Link
    to="/cart"
    onClick={onClick}
    aria-label={`Shopping cart, ${count} items`}
    title="Shopping Cart"
    className={`relative flex shrink-0 items-center justify-center rounded-full text-gray-600 transition hover:bg-blue-50 hover:text-blue-600 ${
      mobile ? "h-11 w-11" : "h-10 w-10"
    }`}
  >
    <ShoppingCart size={21} strokeWidth={1.8} />

    {count > 0 && (
      <span className="absolute -right-0.5 -top-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full border-2 border-white bg-blue-600 px-1 text-[9px] font-bold leading-none text-white">
        {count > 99 ? "99+" : count}
      </span>
    )}
  </Link>
);

// =============================================
// USER ACCOUNT DROPDOWN
// =============================================

const UserAccount = ({ user, onLogout, loggingOut }) => {
  const [isOpen, setIsOpen] = useState(false);
  const accountRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        accountRef.current &&
        !accountRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div ref={accountRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-label="Open account menu"
        aria-expanded={isOpen}
        className="flex items-center gap-2 rounded-full p-1 transition hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        <UserAvatar user={user} />

        <div className="hidden max-w-[105px] text-left xl:block">
          <p className="truncate text-xs font-bold text-gray-800">
            {getUserName(user)}
          </p>

          <p className="text-[10px] text-gray-400">
            My Account
          </p>
        </div>

        <ChevronDown
          size={14}
          className={`hidden text-gray-400 transition-transform xl:block ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-[110] mt-3 w-[270px] overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_15px_45px_rgba(0,0,0,0.14)]">
          <div className="border-b border-gray-100 bg-gray-50 p-4">
            <div className="flex items-center gap-3">
              <UserAvatar user={user} size="large" />

              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-gray-900">
                  {getUserName(user)}
                </p>

                <p className="truncate text-xs text-gray-500">
                  {user?.email || "Signed in"}
                </p>
              </div>
            </div>
          </div>

          <div className="p-2">
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                onLogout();
              }}
              disabled={loggingOut}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loggingOut ? (
                <LoaderCircle size={17} className="animate-spin" />
              ) : (
                <LogOut size={17} />
              )}

              {loggingOut ? "Signing out..." : "Logout"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// =============================================
// SEARCH BOX
// =============================================

const SearchBox = ({
  mobile = false,
  query,
  setQuery,
  onSearch,
}) => {
  const searchRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const searchResults = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) return [];

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

        return searchableText.includes(normalizedQuery);
      })
      .slice(0, 6);
  }, [query]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedQuery = query.trim();

    if (!trimmedQuery) return;

    setIsOpen(false);
    onSearch(trimmedQuery);
  };

  const handleProductSelect = (product) => {
    setQuery(product.name);
    setIsOpen(false);
    onSearch(product.name);
  };

  return (
    <div ref={searchRef} className="relative w-full">
      <form
        role="search"
        onSubmit={handleSubmit}
        className={`flex h-11 w-full items-center rounded-full border bg-white px-4 transition-all ${
          isOpen
            ? "border-blue-500 shadow-sm shadow-blue-100"
            : "border-gray-200 hover:border-gray-300"
        }`}
      >
        <Search size={19} className="shrink-0 text-gray-400" />

        <input
          type="search"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder={
            mobile
              ? "Search products..."
              : "Search phones, laptops, gadgets..."
          }
          aria-label="Search products"
          autoComplete="off"
          className="h-full min-w-0 flex-1 bg-transparent px-3 text-sm font-medium text-gray-900 outline-none placeholder:font-normal placeholder:text-gray-400"
        />

        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setIsOpen(false);
            }}
            aria-label="Clear search"
            className="mr-2 rounded-full p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
          >
            <X size={16} />
          </button>
        )}

        {!mobile && (
          <button
            type="submit"
            disabled={!query.trim()}
            className="shrink-0 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Search
          </button>
        )}
      </form>

      {isOpen && query.trim() && (
        <div className="absolute left-0 top-full z-[100] mt-2 w-full overflow-hidden rounded-xl border border-gray-100 bg-white shadow-[0_12px_35px_rgba(0,0,0,0.13)]">
          <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
            <span className="text-xs font-bold text-gray-700">
              Search Suggestions
            </span>

            <span className="text-[11px] text-gray-400">
              {searchResults.length} products
            </span>
          </div>

          {searchResults.length > 0 ? (
            <div className="max-h-[320px] overflow-y-auto p-2">
              {searchResults.map((product) => (
                <button
                  key={product.id ?? product._id ?? product.name}
                  type="button"
                  onClick={() => handleProductSelect(product)}
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

                  {Number.isFinite(Number(product.price)) && (
                    <span className="shrink-0 text-xs font-bold text-gray-800">
                      ৳{Number(product.price).toLocaleString("en-BD")}
                    </span>
                  )}
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
            onClick={() => {
              setIsOpen(false);
              onSearch(query.trim());
            }}
            className="flex w-full items-center justify-center gap-2 border-t border-gray-100 py-3 text-xs font-bold text-blue-600 transition hover:bg-blue-50"
          >
            View all search results
            <ArrowRight size={14} />
          </button>
        </div>
      )}
    </div>
  );
};

// =============================================
// CATEGORY DROPDOWN
// =============================================

const CategoryDropdown = ({ category, onClose }) => {
  const Icon = category.icon;

  return (
    <div className="absolute left-0 top-full z-50 w-[245px] pt-1.5">
      <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-[0_15px_40px_rgba(0,0,0,0.12)]">
        <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50 px-4 py-3">
          <div className="flex items-center gap-2">
            <Icon size={17} className="text-blue-600" />

            <span className="text-sm font-bold text-gray-900">
              {category.name}
            </span>
          </div>

          <Link
            to={category.path}
            onClick={onClose}
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
              onClick={onClose}
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

// =============================================
// MAIN NAVBAR
// =============================================

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { showToast } = useToast();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [navWidth, setNavWidth] = useState(0);
  const [cartCount, setCartCount] = useState(getCartCount);
  const [loggingOut, setLoggingOut] = useState(false);

  const navRef = useRef(null);

  // =============================================
  // CART COUNT SYNCHRONIZATION
  // =============================================

  useEffect(() => {
    const syncCartCount = (event) => {
      if (
        event.type === "cart-updated" &&
        Array.isArray(event.detail)
      ) {
        const count = event.detail.reduce(
          (total, item) =>
            total + Math.max(0, Number(item.quantity) || 0),
          0
        );

        setCartCount(count);
        return;
      }

      setCartCount(getCartCount());
    };

    window.addEventListener("cart-updated", syncCartCount);
    window.addEventListener("storage", syncCartCount);
    window.addEventListener("focus", syncCartCount);

    return () => {
      window.removeEventListener("cart-updated", syncCartCount);
      window.removeEventListener("storage", syncCartCount);
      window.removeEventListener("focus", syncCartCount);
    };
  }, []);

  // =============================================
  // RESPONSIVE CATEGORY WIDTH
  // =============================================

  useEffect(() => {
    const navElement = navRef.current;

    if (!navElement) return;

    const updateWidth = () => {
      setNavWidth(navElement.clientWidth);
    };

    updateWidth();

    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", updateWidth);

      return () => {
        window.removeEventListener("resize", updateWidth);
      };
    }

    const observer = new ResizeObserver(updateWidth);

    observer.observe(navElement);

    return () => observer.disconnect();
  }, []);

  const visibleCount = useMemo(() => {
    if (!navWidth) return 6;

    const estimatedWidths = categories.map(
      (category) => category.name.length * 6.3 + 48
    );

    const availableWidth = navWidth - 75;

    let usedWidth = 0;
    let count = 0;

    for (const width of estimatedWidths) {
      if (usedWidth + width > availableWidth) break;

      usedWidth += width;
      count++;
    }

    return Math.max(1, Math.min(count, categories.length));
  }, [navWidth]);

  const visibleCategories = categories.slice(0, visibleCount);
  const moreCategories = categories.slice(visibleCount);

  // =============================================
  // NAVIGATION HELPERS
  // =============================================

  const closeMenus = () => {
    setIsMenuOpen(false);
    setActiveCategory(null);
    setShowMore(false);
  };

  const handleSearch = (query) => {
    const trimmedQuery = query.trim();

    if (!trimmedQuery) return;

    closeMenus();

    navigate(
      `/shop?search=${encodeURIComponent(trimmedQuery)}`
    );
  };

  const toggleCategory = (name) => {
    setActiveCategory((current) =>
      current === name ? null : name
    );

    setShowMore(false);
  };

  const handleCategoryHover = (name) => {
    setActiveCategory(name);
    setShowMore(false);
  };

  // =============================================
  // LOGOUT WITH TOAST NOTIFICATION
  // =============================================

  const handleLogout = async () => {
    if (loggingOut) return;

    setLoggingOut(true);
    closeMenus();

    try {
      await logout();

      showToast("Logged out successfully!", "success");

      navigate("/", { replace: true });
    } catch (error) {
      console.error("Logout failed:", error);

      showToast(
        error?.message || "Logout failed. Please try again.",
        "error"
      );
    } finally {
      setLoggingOut(false);
    }
  };

  // =============================================
  // ESCAPE KEY
  // =============================================

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMenus();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // =============================================
  // RENDER
  // =============================================

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* TOP NAVBAR */}
      <div className="border-b border-gray-100">
        <div className="mx-auto flex h-[68px] max-w-[1440px] items-center gap-3 px-4 sm:px-6 lg:gap-5 lg:px-7">
          <BrandLogo onClick={closeMenus} />

          {/* Desktop Search */}
          <div className="mx-auto hidden w-full max-w-[570px] lg:block">
            <SearchBox
              query={searchQuery}
              setQuery={setSearchQuery}
              onSearch={handleSearch}
            />
          </div>

          {/* Quick Links */}
          <div className="hidden shrink-0 items-center gap-3 xl:flex">
            {quickLinks.map(({ name, path }) => (
              <Link
                key={path}
                to={path}
                className="whitespace-nowrap text-xs font-semibold text-gray-600 transition hover:text-blue-600"
              >
                {name}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="ml-auto flex shrink-0 items-center gap-0.5 lg:ml-0">
            <Link
              to="/wishlist"
              aria-label="Wishlist"
              title="Wishlist"
              className="flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition hover:bg-blue-50 hover:text-blue-600"
            >
              <Heart size={20} strokeWidth={1.8} />
            </Link>

            <CartButton count={cartCount} />

            {/* Account */}
            {user ? (
              <UserAccount
                user={user}
                onLogout={handleLogout}
                loggingOut={loggingOut}
              />
            ) : (
              <Link
                to="/login"
                aria-label="Sign in"
                title="Sign in"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
              >
                <UserRound size={19} strokeWidth={1.8} />
              </Link>
            )}

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setIsMenuOpen((previous) => !previous)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              className="flex h-10 w-10 items-center justify-center rounded-full text-gray-700 transition hover:bg-gray-100 lg:hidden"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="px-4 pb-3 lg:hidden">
          <SearchBox
            mobile
            query={searchQuery}
            setQuery={setSearchQuery}
            onSearch={handleSearch}
          />
        </div>
      </div>

      {/* DESKTOP CATEGORY NAVIGATION */}
      <div
        className="relative hidden border-b border-gray-100 bg-white lg:block"
        onMouseLeave={() => {
          setActiveCategory(null);
          setShowMore(false);
        }}
      >
        <nav
          ref={navRef}
          aria-label="Product categories"
          className="mx-auto flex h-[42px] max-w-[1440px] items-center justify-between gap-0 px-4 sm:px-6 lg:px-7"
        >
          <div className="flex h-full min-w-0 items-center gap-0">
            {visibleCategories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.name;

              return (
                <div
                  key={category.name}
                  className="relative flex h-full shrink-0 items-center"
                  onMouseEnter={() =>
                    handleCategoryHover(category.name)
                  }
                >
                  <Link
                    to={category.path}
                    onFocus={() =>
                      handleCategoryHover(category.name)
                    }
                    aria-expanded={isActive}
                    className={`flex h-full items-center gap-1 whitespace-nowrap border-b-2 px-2 text-[11px] font-semibold transition xl:px-2.5 xl:text-xs ${
                      isActive
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    <Icon size={14} strokeWidth={1.9} />

                    {category.name}

                    <ChevronDown
                      size={11}
                      className={`transition-transform duration-200 ${
                        isActive ? "rotate-180" : ""
                      }`}
                    />
                  </Link>

                  {isActive && (
                    <CategoryDropdown
                      category={category}
                      onClose={closeMenus}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* More Categories */}
          {moreCategories.length > 0 && (
            <div
              className="relative flex h-full shrink-0 items-center"
              onMouseEnter={() => {
                setActiveCategory(null);
                setShowMore(true);
              }}
            >
              <button
                type="button"
                onClick={() =>
                  setShowMore((previous) => !previous)
                }
                onFocus={() => {
                  setActiveCategory(null);
                  setShowMore(true);
                }}
                aria-expanded={showMore}
                className={`flex h-full items-center gap-1 border-b-2 px-2 text-xs font-semibold transition ${
                  showMore
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-600 hover:text-blue-600"
                }`}
              >
                <MoreHorizontal size={16} />
                More

                <ChevronDown
                  size={11}
                  className={`transition-transform duration-200 ${
                    showMore ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showMore && (
                <div className="absolute right-0 top-full z-50 w-[225px] pt-1.5">
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
          )}
        </nav>
      </div>

      {/* MOBILE NAVIGATION */}
      {isMenuOpen && (
        <div className="max-h-[calc(100dvh-125px)] overflow-y-auto border-t border-gray-100 bg-white shadow-xl lg:hidden">
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

          {/* MOBILE ACCOUNT */}
          <div className="border-t border-gray-100 p-4">
            {user ? (
              <>
                {/* User Information */}
                <div className="mb-3 flex items-center gap-3 rounded-xl bg-gray-50 p-3">
                  <UserAvatar user={user} size="large" />

                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-gray-900">
                      {getUserName(user)}
                    </p>

                    <p className="truncate text-xs text-gray-500">
                      {user.email || "Signed in"}
                    </p>
                  </div>
                </div>

                {/* Logout */}
                <button
                  type="button"
                  onClick={handleLogout}
                  disabled={loggingOut}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loggingOut ? (
                    <LoaderCircle
                      size={18}
                      className="animate-spin"
                    />
                  ) : (
                    <LogOut size={18} />
                  )}

                  {loggingOut ? "Signing out..." : "Logout"}
                </button>
              </>
            ) : (
              <Link
                to="/login"
                onClick={closeMenus}
                className="mb-2 flex items-center gap-3 rounded-xl bg-gray-900 px-3 py-3 text-sm font-semibold text-white transition hover:bg-black"
              >
                <UserRound size={19} />
                Sign In / Login
              </Link>
            )}

            {/* Wishlist */}
            <Link
              to="/wishlist"
              onClick={closeMenus}
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
            >
              <Heart size={19} />
              My Wishlist
            </Link>

            {/* Shopping Cart */}
            <Link
              to="/cart"
              onClick={closeMenus}
              className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
            >
              <span className="flex items-center gap-3">
                <ShoppingCart size={19} />
                Shopping Cart
              </span>

              {cartCount > 0 && (
                <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-blue-600 px-2 text-xs font-bold text-white">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
