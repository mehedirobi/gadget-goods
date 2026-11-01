
import { Link, NavLink } from "react-router";
import { ShoppingCart, Search, Menu, User, Heart } from "lucide-react";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Categories", path: "/categories" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-[#0b1120] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tight">
          Gadget<span className="text-blue-500">Goods</span>
          <span className="ml-1 text-blue-500">.</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-blue-400"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Search */}
        <div className="hidden max-w-xs flex-1 items-center rounded-lg border border-gray-700 bg-gray-900 px-3 lg:flex">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search gadgets..."
            className="w-full bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-gray-500"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link to="/wishlist" aria-label="Wishlist">
            <Heart size={21} className="transition hover:text-blue-400" />
          </Link>

          <Link to="/cart" aria-label="Shopping cart" className="relative">
            <ShoppingCart size={22} className="transition hover:text-blue-400" />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px]">
              0
            </span>
          </Link>

          <Link to="/login" aria-label="Login">
            <User size={21} className="transition hover:text-blue-400" />
          </Link>

          <button className="md:hidden" aria-label="Open menu">
            <Menu size={24} />
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;