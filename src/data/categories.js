
import {
  Smartphone,
  Laptop,
  Monitor,
  Gamepad2,
  Watch,
  Headphones,
} from "lucide-react";

export const categories = [
  {
    name: "Smartphones",
    icon: Smartphone,
    description: "Explore the latest smartphones and mobile devices.",
    featured: ["Apple", "Samsung", "Xiaomi", "Google", "OnePlus"],
  },
  {
    name: "Laptops",
    icon: Laptop,
    description: "Powerful laptops for work, study and gaming.",
    featured: ["MacBook", "ASUS", "HP", "Dell", "Lenovo", "MSI"],
  },
  {
    name: "Desktop PCs",
    icon: Monitor,
    description: "Desktop computers and powerful workstations.",
    featured: ["Gaming PCs", "Custom PCs", "All-in-One PCs"],
  },
  {
    name: "Gaming",
    icon: Gamepad2,
    description: "Gaming gear and accessories for every gamer.",
    featured: ["Gaming Keyboards", "Gaming Mouse", "Gaming Headsets"],
  },
  {
    name: "Smart Watches",
    icon: Watch,
    description: "Smartwatches and wearable technology.",
    featured: ["Apple Watch", "Samsung Watch", "Fitness Bands"],
  },
  {
    name: "Accessories",
    icon: Headphones,
    description: "Headphones and everyday tech essentials.",
    featured: ["Headphones", "Cameras", "Keyboards", "Chargers", "Speakers"],
  },
];

export const shopCategories = categories;

export const getCategoryPath = (category) => {
  return `/shop?category=${encodeURIComponent(category)}`;
};
