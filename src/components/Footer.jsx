
import { Link } from "react-router";
import {
  Facebook,
  Instagram,
  Github,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-[#080d19] text-gray-400">

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div>
          <Link to="/" className="text-2xl font-bold text-white">
            Gadget<span className="text-blue-500">Goods</span>.
          </Link>

          <p className="mt-4 max-w-xs text-sm leading-7">
            Discover premium electronics and innovative gadgets.
            Upgrade your digital world with quality products and
            reliable service.
          </p>

          <div className="mt-6 flex gap-3">
            <a href="#" aria-label="Facebook" className="rounded-lg bg-gray-800 p-2 transition hover:bg-blue-600 hover:text-white">
              <Facebook size={18} />
            </a>

            <a href="#" aria-label="Instagram" className="rounded-lg bg-gray-800 p-2 transition hover:bg-blue-600 hover:text-white">
              <Instagram size={18} />
            </a>

            <a href="#" aria-label="GitHub" className="rounded-lg bg-gray-800 p-2 transition hover:bg-blue-600 hover:text-white">
              <Github size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="transition hover:text-blue-400">Home</Link></li>
            <li><Link to="/shop" className="transition hover:text-blue-400">Shop</Link></li>
            <li><Link to="/categories" className="transition hover:text-blue-400">Categories</Link></li>
            <li><Link to="/about" className="transition hover:text-blue-400">About Us</Link></li>
            <li><Link to="/contact" className="transition hover:text-blue-400">Contact</Link></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">
            Customer Support
          </h3>

          <ul className="space-y-3 text-sm">
            <li><Link to="/faq" className="transition hover:text-blue-400">FAQs</Link></li>
            <li><Link to="/shipping" className="transition hover:text-blue-400">Shipping Information</Link></li>
            <li><Link to="/returns" className="transition hover:text-blue-400">Returns & Refunds</Link></li>
            <li><Link to="/privacy" className="transition hover:text-blue-400">Privacy Policy</Link></li>
            <li><Link to="/terms" className="transition hover:text-blue-400">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">
            Contact Us
          </h3>

          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={19} className="mt-1 shrink-0 text-blue-500" />
              <span>Dhaka, Bangladesh</span>
            </li>

            <li className="flex items-center gap-3">
              <Phone size={18} className="shrink-0 text-blue-500" />
              <span>+880 1XXXXXXXXX</span>
            </li>

            <li className="flex items-center gap-3">
              <Mail size={18} className="shrink-0 text-blue-500" />
              <span>support@gadgetgoods.com</span>
            </li>
          </ul>

          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition hover:text-blue-300"
          >
            Get in touch <ArrowRight size={16} />
          </Link>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-center text-xs sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} Gadget Goods. All rights reserved.
          </p>

          <p>
            Upgrade Your Digital World.
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
