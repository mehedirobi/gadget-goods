import { useState } from "react";
import { Link, NavLink } from "react-router";
import {
  ShoppingCart,
  Search,
  Menu,
  X,
  UserRound,
  Heart,
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Categories", path: "/categories" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const navLinkClass = ({ isActive }) =>
    `whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
      isActive
        ? "bg-blue-50 text-blue-600"
        : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          className="shrink-0 text-2xl font-extrabold tracking-tight text-gray-900"
          aria-label="Gadget Goods Home"
        >
          Gadget<span className="text-blue-600">Goods</span>
          <span className="text-blue-600">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={navLinkClass}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Search Bar */}
        <form
          role="search"
          onSubmit={(e) => e.preventDefault()}
          className="hidden w-full max-w-[260px] items-center rounded-full border border-gray-200 bg-gray-50 px-4 transition-all duration-200 focus-within:border-blue-300 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-50 xl:flex"
        >
          <Search size={17} className="shrink-0 text-gray-400" />

          <input
            type="search"
            placeholder="Search gadgets..."
            aria-label="Search gadgets"
            className="w-full bg-transparent px-3 py-2.5 text-sm text-gray-700 outline-none placeholder:text-gray-400"
          />

          <kbd className="hidden rounded border border-gray-200 bg-white px-1.5 py-0.5 text-[10px] text-gray-400 2xl:inline">
            /
          </kbd>
        </form>

        {/* Action Icons */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">

          {/* Search - Mobile/Tablet */}
          <button
            type="button"
            aria-label="Search"
            className="rounded-full p-2.5 text-gray-600 transition hover:bg-gray-100 hover:text-blue-600 xl:hidden"
          >
            <Search size={20} strokeWidth={1.8} />
          </button>

          {/* Wishlist */}
          <Link
            to="/wishlist"
            aria-label="Wishlist"
            className="rounded-full p-2.5 text-gray-600 transition hover:bg-blue-50 hover:text-blue-600"
          >
            <Heart size={20} strokeWidth={1.8} />
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            aria-label="Shopping cart"
            className="relative rounded-full p-2.5 text-gray-600 transition hover:bg-blue-50 hover:text-blue-600"
          >
            <ShoppingCart size={21} strokeWidth={1.8} />

            <span className="absolute right-0.5 top-0.5 flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] font-semibold text-white">
              0
            </span>
          </Link>

          {/* Account */}
          <Link
            to="/login"
            aria-label="My account"
            className="hidden rounded-full border border-gray-200 p-2.5 text-gray-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 sm:flex"
          >
            <UserRound size={19} strokeWidth={1.8} />
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

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-4 py-4 shadow-lg lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;