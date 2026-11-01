import { Link } from "react-router";

import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
} from "react-icons/fa6";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Categories", path: "/categories" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const supportLinks = [
    { name: "FAQs", path: "/faq" },
    { name: "Shipping Information", path: "/shipping" },
    { name: "Returns & Refunds", path: "/returns" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms & Conditions", path: "/terms" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebookF,
      url: "https://facebook.com",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://instagram.com",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com",
    },
  ];

  return (
    <footer className="border-t border-gray-800 bg-[#080d19] text-gray-400">

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">

        {/* Brand Section */}
        <div>
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight text-white"
          >
            Gadget<span className="text-blue-500">Goods</span>.
          </Link>

          <p className="mt-4 max-w-xs text-sm leading-7">
            Discover premium electronics and innovative gadgets.
            Upgrade your digital world with quality products and
            reliable service.
          </p>

          {/* Social Links */}
          <div className="mt-6 flex gap-3">
            {socialLinks.map(({ name, icon: Icon, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="rounded-lg bg-gray-800 p-2.5 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="transition-colors duration-200 hover:text-blue-400"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">
            Customer Support
          </h3>

          <ul className="space-y-3 text-sm">
            {supportLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="transition-colors duration-200 hover:text-blue-400"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">
            Contact Us
          </h3>

          <ul className="space-y-4 text-sm">

            <li className="flex items-start gap-3">
              <MapPin
                size={19}
                className="mt-1 shrink-0 text-blue-500"
              />
              <span>Dhaka, Bangladesh</span>
            </li>

            <li className="flex items-center gap-3">
              <Phone
                size={18}
                className="shrink-0 text-blue-500"
              />
              <span>+8801336458100</span>
            </li>

            <li className="flex items-center gap-3">
              <Mail
                size={18}
                className="shrink-0 text-blue-500"
              />
              <span>support@gadgetgoods.com</span>
            </li>

          </ul>

          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
          >
            Get in touch
            <ArrowRight size={16} />
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
