
import { Link } from "react-router";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ArrowUpRight,
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
    <footer className="border-t border-gray-200 bg-white text-gray-600">

      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:gap-12 lg:px-8 lg:py-16">

        {/* Brand Section */}
        <div>
          <Link
            to="/"
            aria-label="Gadget Goods home"
            className="inline-flex text-2xl font-extrabold tracking-tight text-gray-950"
          >
            Gadget<span className="text-blue-600">Goods</span>
            <span className="text-blue-600">.</span>
          </Link>

          <p className="mt-4 max-w-xs text-sm leading-7 text-gray-600">
            Discover quality electronics and innovative gadgets.
            Find the right technology to upgrade your everyday life.
          </p>

          {/* Social Links */}
          <div className="mt-6 flex items-center gap-3">
            {socialLinks.map(({ name, icon: Icon, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit Gadget Goods on ${name}`}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-600 transition-colors duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-gray-950">
            Quick Links
          </h3>

          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="inline-flex text-sm text-gray-600 transition-colors duration-200 hover:text-blue-700"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-gray-950">
            Customer Support
          </h3>

          <ul className="space-y-3">
            {supportLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="inline-flex text-sm text-gray-600 transition-colors duration-200 hover:text-blue-700"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-gray-950">
            Contact Us
          </h3>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin
                size={18}
                className="mt-0.5 shrink-0 text-blue-600"
              />
              <span className="text-sm leading-6 text-gray-600">
                Dhaka, Bangladesh
              </span>
            </li>

            <li className="flex items-center gap-3">
              <Phone
                size={17}
                className="shrink-0 text-blue-600"
              />
              <a
                href="tel:+8801336458100"
                className="text-sm text-gray-600 transition-colors hover:text-blue-700"
              >
                +8801336458100
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Mail
                size={17}
                className="shrink-0 text-blue-600"
              />
              <a
                href="mailto:support@gadgetgoods.com"
                className="break-all text-sm text-gray-600 transition-colors hover:text-blue-700"
              >
                support@gadgetgoods.com
              </a>
            </li>
          </ul>

          <Link
            to="/contact"
            className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-700 transition-colors hover:text-blue-800"
          >
            Get in touch
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-center sm:flex-row sm:px-6 sm:text-left lg:px-8">

          <p className="text-xs font-medium text-gray-500">
            © {new Date().getFullYear()} Gadget Goods. All rights reserved.
          </p>

          <p className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500">
            Upgrade Your Digital World.
            <ArrowUpRight size={13} className="text-blue-600" />
          </p>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
