
import { categoryNames } from "./categories";

// --------------------------------------------------
// IMAGE HELPER
// --------------------------------------------------

const imageUrl = (photoId) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=900&q=85`;

// --------------------------------------------------
// PRODUCT FACTORY
// --------------------------------------------------

const createProduct = ({
  id,
  name,
  brand,
  category,
  price,
  oldPrice,
  rating = 4.5,
  reviews = 20,
  badge = "",
  photo,
  gallery = [],
  description,
  specifications = {},
  features = [],
  stock = "In Stock",
  stockQuantity = 15,
  featured = false,
  isNew = false,
}) => {
  const image = imageUrl(photo);

  return {
    id,
    slug: name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, ""),

    name,
    brand,
    category,

    price,
    oldPrice,
    discount: oldPrice
      ? Math.round(((oldPrice - price) / oldPrice) * 100)
      : 0,

    rating,
    reviews,
    badge,

    stock,
    stockQuantity,

    image,
    images: [
      image,
      ...gallery.map(imageUrl),
    ],

    description,
    specifications,
    features,

    featured,
    isNew,

    createdAt: "2026-11-01",
  };
};

// --------------------------------------------------
// PRODUCT CATALOG
// 9 Categories | 72 Products
// --------------------------------------------------

export const products = [

  // ==================================================
  // SMARTPHONES (8)
  // ==================================================

  createProduct({
    id: "gadget-001",
    name: "Apple iPhone 16 Pro Max",
    brand: "Apple",
    category: "Smartphones",
    price: 189000,
    oldPrice: 205000,
    rating: 4.9,
    reviews: 184,
    badge: "Best Seller",
    photo: "photo-1592750475338-74b7b21085ab",
    description: "Experience next-level performance with the iPhone 16 Pro Max, featuring an advanced camera system, powerful Apple silicon and premium titanium design.",
    specifications: {
      display: "6.9-inch Super Retina XDR",
      processor: "Apple A18 Pro",
      ram: "8GB",
      storageCapacity: "256GB",
      operatingSystem: "iOS",
      camera: "48MP Triple Camera",
      battery: "4685mAh",
      connectivity: "5G",
    },
    features: ["Titanium Design", "Advanced Camera Control", "4K Video Recording", "Face ID"],
    featured: true,
  }),

  createProduct({
    id: "gadget-002",
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    category: "Smartphones",
    price: 118000,
    oldPrice: 135000,
    rating: 4.8,
    reviews: 142,
    badge: "Popular",
    photo: "photo-1511707171634-5f897ff02aa9",
    description: "A premium Android flagship with an immersive AMOLED display, S Pen support and professional-grade camera technology.",
    specifications: {
      display: "6.8-inch Dynamic AMOLED 2X",
      processor: "Snapdragon 8 Gen 3",
      ram: "12GB",
      storageCapacity: "256GB",
      operatingSystem: "Android",
      camera: "200MP Quad Camera",
      battery: "5000mAh",
      connectivity: "5G",
    },
    features: ["S Pen Support", "Galaxy AI", "120Hz Display", "Titanium Frame"],
  }),

  createProduct({
    id: "gadget-003",
    name: "Google Pixel 9 Pro",
    brand: "Google",
    category: "Smartphones",
    price: 125000,
    oldPrice: 139000,
    rating: 4.8,
    reviews: 87,
    badge: "New Arrival",
    photo: "photo-1512499617640-c74ae3a79d37",
    description: "A smart flagship smartphone with Google's advanced AI features and excellent computational photography.",
    specifications: {
      display: "6.3-inch LTPO OLED",
      processor: "Google Tensor G4",
      ram: "16GB",
      storageCapacity: "256GB",
      operatingSystem: "Android",
      camera: "50MP Triple Camera",
      battery: "4700mAh",
      connectivity: "5G",
    },
    features: ["Google AI", "Night Sight", "Titan M2 Security", "Fast Charging"],
    isNew: true,
  }),

  createProduct({
    id: "gadget-004",
    name: "Xiaomi 14 Ultra",
    brand: "Xiaomi",
    category: "Smartphones",
    price: 112000,
    oldPrice: 125000,
    rating: 4.7,
    reviews: 76,
    badge: "Hot Deal",
    photo: "photo-1598327105666-5b89351aff97",
    description: "A photography-focused flagship with Leica camera technology and powerful Snapdragon performance.",
    specifications: {
      display: "6.73-inch AMOLED",
      processor: "Snapdragon 8 Gen 3",
      ram: "16GB",
      storageCapacity: "512GB",
      operatingSystem: "Android",
      camera: "50MP Leica Quad Camera",
      battery: "5000mAh",
      connectivity: "5G",
    },
    features: ["Leica Optics", "120Hz Display", "90W Charging", "IP68 Protection"],
  }),

  createProduct({
    id: "gadget-005",
    name: "OnePlus 12",
    brand: "OnePlus",
    category: "Smartphones",
    price: 82000,
    oldPrice: 92000,
    rating: 4.7,
    reviews: 69,
    photo: "photo-1592899677977-9c10ca588bbd",
    description: "A high-performance smartphone designed for smooth multitasking, gaming and everyday productivity.",
    specifications: {
      display: "6.82-inch AMOLED",
      processor: "Snapdragon 8 Gen 3",
      ram: "16GB",
      storageCapacity: "512GB",
      operatingSystem: "Android",
      camera: "50MP Triple Camera",
      battery: "5400mAh",
      connectivity: "5G",
    },
    features: ["120Hz Display", "100W SUPERVOOC", "Hasselblad Camera", "Fast Performance"],
  }),

  createProduct({
    id: "gadget-006",
    name: "Samsung Galaxy A55",
    brand: "Samsung",
    category: "Smartphones",
    price: 46000,
    oldPrice: 52000,
    rating: 4.6,
    reviews: 93,
    photo: "photo-1605236453806-6ff36851218e",
    description: "A stylish mid-range smartphone offering a vibrant display, dependable performance and versatile cameras.",
    specifications: {
      display: "6.6-inch Super AMOLED",
      processor: "Exynos 1480",
      ram: "8GB",
      storageCapacity: "256GB",
      operatingSystem: "Android",
      camera: "50MP Triple Camera",
      battery: "5000mAh",
      connectivity: "5G",
    },
    features: ["120Hz Display", "IP67 Protection", "OIS Camera", "Expandable Storage"],
  }),

  createProduct({
    id: "gadget-007",
    name: "Nothing Phone 2",
    brand: "Nothing",
    category: "Smartphones",
    price: 58000,
    oldPrice: 65000,
    rating: 4.6,
    reviews: 54,
    photo: "photo-1598327105666-5b89351aff97",
    description: "A distinctive smartphone featuring a transparent-inspired design, Glyph Interface and smooth Android experience.",
    specifications: {
      display: "6.7-inch LTPO OLED",
      processor: "Snapdragon 8+ Gen 1",
      ram: "12GB",
      storageCapacity: "256GB",
      operatingSystem: "Android",
      camera: "50MP Dual Camera",
      battery: "4700mAh",
      connectivity: "5G",
    },
    features: ["Glyph Interface", "120Hz Display", "Wireless Charging", "Clean UI"],
  }),

  createProduct({
    id: "gadget-008",
    name: "Redmi Note 13 Pro Plus",
    brand: "Xiaomi",
    category: "Smartphones",
    price: 39000,
    oldPrice: 44000,
    rating: 4.5,
    reviews: 112,
    badge: "Value Pick",
    photo: "photo-1511707171634-5f897ff02aa9",
    description: "A feature-packed smartphone with a high-resolution camera, curved AMOLED display and fast charging.",
    specifications: {
      display: "6.67-inch AMOLED",
      processor: "Dimensity 7200 Ultra",
      ram: "12GB",
      storageCapacity: "256GB",
      operatingSystem: "Android",
      camera: "200MP Camera",
      battery: "5000mAh",
      connectivity: "5G",
    },
    features: ["200MP Camera", "120Hz Display", "120W Charging", "IP68 Protection"],
  }),

  // ==================================================
  // TABLETS (8)
  // ==================================================

  createProduct({
    id: "gadget-009",
    name: "Apple iPad Pro M4",
    brand: "Apple",
    category: "Tablets",
    price: 145000,
    oldPrice: 158000,
    rating: 4.9,
    reviews: 86,
    badge: "Premium",
    photo: "photo-1544244015-0df4b3ffc6b0",
    description: "A powerful professional tablet with an Ultra Retina XDR display and next-generation Apple silicon.",
    specifications: {
      display: "13-inch Ultra Retina XDR",
      processor: "Apple M4",
      ram: "16GB",
      storageCapacity: "512GB",
      operatingSystem: "iPadOS",
      connectivity: "Wi-Fi",
    },
    features: ["OLED Display", "Apple Pencil Pro Support", "Face ID", "Pro Performance"],
    featured: true,
  }),

  createProduct({
    id: "gadget-010",
    name: "Apple iPad Air M2",
    brand: "Apple",
    category: "Tablets",
    price: 92000,
    oldPrice: 105000,
    rating: 4.8,
    reviews: 65,
    photo: "photo-1561154464-82e9adf32764",
    description: "A versatile tablet for creativity, entertainment and productivity powered by Apple M2.",
    specifications: {
      display: "11-inch Liquid Retina",
      processor: "Apple M2",
      ram: "8GB",
      storageCapacity: "256GB",
      operatingSystem: "iPadOS",
      connectivity: "Wi-Fi",
    },
    features: ["Apple Pencil Support", "Touch ID", "Landscape Camera", "USB-C"],
  }),

  createProduct({
    id: "gadget-011",
    name: "Samsung Galaxy Tab S9 Ultra",
    brand: "Samsung",
    category: "Tablets",
    price: 135000,
    oldPrice: 149000,
    rating: 4.9,
    reviews: 58,
    photo: "photo-1589739900243-4b52cd9dd8df",
    description: "A premium Android tablet featuring a massive AMOLED display and included S Pen.",
    specifications: {
      display: "14.6-inch Dynamic AMOLED 2X",
      processor: "Snapdragon 8 Gen 2",
      ram: "12GB",
      storageCapacity: "256GB",
      operatingSystem: "Android",
      connectivity: "Wi-Fi",
    },
    features: ["S Pen Included", "120Hz Display", "IP68 Protection", "DeX Mode"],
  }),

  createProduct({
    id: "gadget-012",
    name: "Samsung Galaxy Tab S9 FE",
    brand: "Samsung",
    category: "Tablets",
    price: 52000,
    oldPrice: 59000,
    rating: 4.6,
    reviews: 42,
    photo: "photo-1561154464-82e9adf32764",
    description: "A practical tablet for students and everyday users with S Pen support.",
    specifications: {
      display: "10.9-inch LCD",
      processor: "Exynos 1380",
      ram: "8GB",
      storageCapacity: "128GB",
      operatingSystem: "Android",
      connectivity: "Wi-Fi",
    },
    features: ["S Pen Support", "IP68 Protection", "Expandable Storage", "Long Battery Life"],
  }),

  createProduct({
    id: "gadget-013",
    name: "Xiaomi Pad 6",
    brand: "Xiaomi",
    category: "Tablets",
    price: 39000,
    oldPrice: 45000,
    rating: 4.6,
    reviews: 71,
    photo: "photo-1544244015-0df4b3ffc6b0",
    description: "An entertainment-focused tablet with a smooth display and powerful Snapdragon chipset.",
    specifications: {
      display: "11-inch LCD",
      processor: "Snapdragon 870",
      ram: "8GB",
      storageCapacity: "256GB",
      operatingSystem: "Android",
      connectivity: "Wi-Fi",
    },
    features: ["144Hz Display", "Quad Speakers", "Dolby Vision", "Fast Charging"],
  }),

  createProduct({
    id: "gadget-014",
    name: "Lenovo Tab P12",
    brand: "Lenovo",
    category: "Tablets",
    price: 42000,
    oldPrice: 48000,
    rating: 4.5,
    reviews: 36,
    photo: "photo-1589739900243-4b52cd9dd8df",
    description: "A large-screen tablet built for learning, streaming and everyday productivity.",
    specifications: {
      display: "12.7-inch LCD",
      processor: "Dimensity 7050",
      ram: "8GB",
      storageCapacity: "256GB",
      operatingSystem: "Android",
      connectivity: "Wi-Fi",
    },
    features: ["Large Display", "Quad JBL Speakers", "Stylus Support", "Multitasking"],
  }),

  createProduct({
    id: "gadget-015",
    name: "Apple iPad 10th Generation",
    brand: "Apple",
    category: "Tablets",
    price: 49000,
    oldPrice: 56000,
    rating: 4.7,
    reviews: 91,
    photo: "photo-1561154464-82e9adf32764",
    description: "A versatile everyday iPad for browsing, studying, note-taking and entertainment.",
    specifications: {
      display: "10.9-inch Liquid Retina",
      processor: "Apple A14 Bionic",
      ram: "4GB",
      storageCapacity: "64GB",
      operatingSystem: "iPadOS",
      connectivity: "Wi-Fi",
    },
    features: ["Touch ID", "USB-C", "Apple Pencil Support", "Stereo Speakers"],
  }),

  createProduct({
    id: "gadget-016",
    name: "Amazon Fire Max 11",
    brand: "Amazon",
    category: "Tablets",
    price: 28000,
    oldPrice: 32000,
    rating: 4.4,
    reviews: 28,
    photo: "photo-1544244015-0df4b3ffc6b0",
    description: "An affordable large-screen tablet for streaming, reading and everyday entertainment.",
    specifications: {
      display: "11-inch LCD",
      processor: "Octa-Core",
      ram: "4GB",
      storageCapacity: "128GB",
      operatingSystem: "Fire OS",
      connectivity: "Wi-Fi",
    },
    features: ["Metal Body", "Stylus Support", "Expandable Storage", "Long Battery Life"],
  }),

  // ==================================================
  // LAPTOPS (8)
  // ==================================================

  createProduct({
    id: "gadget-017",
    name: "Apple MacBook Pro 14 M4",
    brand: "Apple",
    category: "Laptops",
    price: 225000,
    oldPrice: 245000,
    rating: 4.9,
    reviews: 126,
    badge: "Best Seller",
    photo: "photo-1517336714731-489689fd1ca8",
    description: "A professional laptop with outstanding performance, a Liquid Retina XDR display and exceptional battery life.",
    specifications: {
      display: "14.2-inch Liquid Retina XDR",
      processor: "Apple M4",
      ram: "16GB",
      storageType: "SSD",
      storageCapacity: "512GB",
      operatingSystem: "macOS",
      graphicsType: "Integrated",
      gpuBrand: "Apple",
      screenSize: "14.1 - 15",
    },
    features: ["Apple M4 Chip", "Thunderbolt Ports", "ProMotion Display", "All-Day Battery"],
    featured: true,
  }),

  createProduct({
    id: "gadget-018",
    name: "MacBook Air 13 M3",
    brand: "Apple",
    category: "Laptops",
    price: 145000,
    oldPrice: 158000,
    rating: 4.8,
    reviews: 98,
    photo: "photo-1496181133206-80ce9b88a853",
    description: "A thin and lightweight laptop for developers, students and creative professionals.",
    specifications: {
      display: "13.6-inch Liquid Retina",
      processor: "Apple M3",
      ram: "8GB",
      storageType: "SSD",
      storageCapacity: "256GB",
      operatingSystem: "macOS",
      graphicsType: "Integrated",
      gpuBrand: "Apple",
      screenSize: "13.1 - 14",
    },
    features: ["Fanless Design", "MagSafe Charging", "1080p Camera", "Lightweight"],
  }),

  createProduct({
    id: "gadget-019",
    name: "ASUS ROG Strix G16",
    brand: "ASUS",
    category: "Laptops",
    price: 185000,
    oldPrice: 199000,
    rating: 4.9,
    reviews: 76,
    badge: "Gaming",
    photo: "photo-1593642702821-c8da6771f0c6",
    description: "A high-performance gaming laptop engineered for demanding games and professional workloads.",
    specifications: {
      display: "16-inch 165Hz IPS",
      processor: "Intel Core i7",
      processorBrand: "Intel",
      processorSeries: "Intel Core i7",
      ram: "16GB",
      storageType: "SSD",
      storageCapacity: "1TB",
      operatingSystem: "Windows",
      graphicsType: "Dedicated",
      gpuBrand: "NVIDIA",
      screenSize: "16.1 - 17",
    },
    features: ["RTX Graphics", "RGB Keyboard", "Advanced Cooling", "165Hz Display"],
  }),

  createProduct({
    id: "gadget-020",
    name: "Dell XPS 15",
    brand: "Dell",
    category: "Laptops",
    price: 178000,
    oldPrice: 192000,
    rating: 4.8,
    reviews: 53,
    photo: "photo-1496181133206-80ce9b88a853",
    description: "A premium laptop designed for professional productivity, creative applications and everyday computing.",
    specifications: {
      display: "15.6-inch OLED",
      processor: "Intel Core i7",
      processorBrand: "Intel",
      processorSeries: "Intel Core i7",
      ram: "16GB",
      storageType: "SSD",
      storageCapacity: "512GB",
      operatingSystem: "Windows",
      graphicsType: "Dedicated",
      gpuBrand: "NVIDIA",
      screenSize: "15.1 - 16",
    },
    features: ["Premium Aluminum Body", "OLED Display", "Thunderbolt", "Backlit Keyboard"],
  }),

  createProduct({
    id: "gadget-021",
    name: "HP Pavilion 15",
    brand: "HP",
    category: "Laptops",
    price: 72000,
    oldPrice: 79000,
    rating: 4.5,
    reviews: 68,
    photo: "photo-1588872657578-7efd1f1555ed",
    description: "A dependable everyday laptop for office work, online classes and productivity.",
    specifications: {
      display: "15.6-inch FHD",
      processor: "Intel Core i5",
      processorBrand: "Intel",
      processorSeries: "Intel Core i5",
      ram: "8GB",
      storageType: "SSD",
      storageCapacity: "512GB",
      operatingSystem: "Windows",
      graphicsType: "Integrated",
      gpuBrand: "Intel",
      screenSize: "15.1 - 16",
    },
    features: ["Full HD Display", "Fast SSD", "Wi-Fi 6", "Backlit Keyboard"],
  }),

  createProduct({
    id: "gadget-022",
    name: "Lenovo Legion 5",
    brand: "Lenovo",
    category: "Laptops",
    price: 155000,
    oldPrice: 169000,
    rating: 4.8,
    reviews: 61,
    badge: "Popular",
    photo: "photo-1593642702821-c8da6771f0c6",
    description: "A balanced gaming laptop offering powerful graphics, efficient cooling and smooth gameplay.",
    specifications: {
      display: "16-inch 165Hz",
      processor: "AMD Ryzen 7",
      processorBrand: "AMD",
      processorSeries: "AMD Ryzen 7",
      ram: "16GB",
      storageType: "SSD",
      storageCapacity: "1TB",
      operatingSystem: "Windows",
      graphicsType: "Dedicated",
      gpuBrand: "NVIDIA",
      screenSize: "16.1 - 17",
    },
    features: ["RTX GPU", "165Hz Display", "Legion Cooling", "RGB Keyboard"],
  }),

  createProduct({
    id: "gadget-023",
    name: "ASUS Zenbook 14 OLED",
    brand: "ASUS",
    category: "Laptops",
    price: 118000,
    oldPrice: 129000,
    rating: 4.7,
    reviews: 44,
    photo: "photo-1588872657578-7efd1f1555ed",
    description: "A lightweight premium laptop with a beautiful OLED screen and modern performance.",
    specifications: {
      display: "14-inch OLED",
      processor: "Intel Core Ultra 7",
      processorBrand: "Intel",
      processorSeries: "Intel Core Ultra 7",
      ram: "16GB",
      storageType: "SSD",
      storageCapacity: "512GB",
      operatingSystem: "Windows",
      graphicsType: "Integrated",
      gpuBrand: "Intel",
      screenSize: "13.1 - 14",
    },
    features: ["OLED Display", "Lightweight Design", "AI Performance", "Long Battery Life"],
  }),

  createProduct({
    id: "gadget-024",
    name: "MSI Katana 15",
    brand: "MSI",
    category: "Laptops",
    price: 142000,
    oldPrice: 155000,
    rating: 4.6,
    reviews: 39,
    photo: "photo-1593642702821-c8da6771f0c6",
    description: "A gaming-focused laptop with dedicated graphics and performance-oriented hardware.",
    specifications: {
      display: "15.6-inch 144Hz",
      processor: "Intel Core i7",
      processorBrand: "Intel",
      processorSeries: "Intel Core i7",
      ram: "16GB",
      storageType: "SSD",
      storageCapacity: "1TB",
      operatingSystem: "Windows",
      graphicsType: "Dedicated",
      gpuBrand: "NVIDIA",
      screenSize: "15.1 - 16",
    },
    features: ["144Hz Display", "Dedicated RTX Graphics", "Cooler Boost", "Gaming Keyboard"],
  }),

  // ==================================================
  // DESKTOP PCs (8)
  // ==================================================

  createProduct({
    id: "gadget-025",
    name: "Custom Gaming PC RTX 4070",
    brand: "Custom PC",
    category: "Desktop PCs",
    price: 195000,
    oldPrice: 215000,
    rating: 4.9,
    reviews: 47,
    badge: "Best Seller",
    photo: "photo-1587202372775-e229f172b9d7",
    description: "A powerful custom-built gaming desktop for high-resolution gaming, streaming and demanding applications.",
    specifications: {
      processor: "AMD Ryzen 7 7800X3D",
      processorBrand: "AMD",
      processorSeries: "AMD Ryzen 7",
      ram: "32GB",
      storageType: "SSD",
      storageCapacity: "1TB",
      graphicsType: "Dedicated",
      gpuBrand: "NVIDIA",
      operatingSystem: "Windows",
    },
    features: ["RTX 4070", "32GB DDR5", "Liquid Cooling", "RGB Case"],
    featured: true,
  }),

  createProduct({
    id: "gadget-026",
    name: "HP Pavilion Desktop",
    brand: "HP",
    category: "Desktop PCs",
    price: 78000,
    oldPrice: 85000,
    rating: 4.5,
    reviews: 32,
    photo: "photo-1593640408182-31c70c8268f5",
    description: "A reliable desktop computer for office productivity, home computing and everyday tasks.",
    specifications: {
      processor: "Intel Core i5",
      processorBrand: "Intel",
      processorSeries: "Intel Core i5",
      ram: "16GB",
      storageType: "SSD",
      storageCapacity: "512GB",
      graphicsType: "Integrated",
      gpuBrand: "Intel",
      operatingSystem: "Windows",
    },
    features: ["Compact Tower", "Fast SSD", "Multiple USB Ports", "Office Ready"],
  }),

  createProduct({
    id: "gadget-027",
    name: "Dell OptiPlex 7010",
    brand: "Dell",
    category: "Desktop PCs",
    price: 85000,
    oldPrice: 94000,
    rating: 4.6,
    reviews: 29,
    photo: "photo-1587202372634-32705e3bf49c",
    description: "A business-oriented desktop system designed for reliable office and professional workloads.",
    specifications: {
      processor: "Intel Core i7",
      processorBrand: "Intel",
      processorSeries: "Intel Core i7",
      ram: "16GB",
      storageType: "SSD",
      storageCapacity: "512GB",
      graphicsType: "Integrated",
      gpuBrand: "Intel",
      operatingSystem: "Windows",
    },
    features: ["Business Performance", "Security Features", "Compact Design", "Upgradeable"],
  }),

  createProduct({
    id: "gadget-028",
    name: "Lenovo IdeaCentre 5",
    brand: "Lenovo",
    category: "Desktop PCs",
    price: 69000,
    oldPrice: 76000,
    rating: 4.5,
    reviews: 25,
    photo: "photo-1593640408182-31c70c8268f5",
    description: "A versatile home desktop suitable for productivity, browsing and multimedia.",
    specifications: {
      processor: "AMD Ryzen 5",
      processorBrand: "AMD",
      processorSeries: "AMD Ryzen 5",
      ram: "8GB",
      storageType: "SSD",
      storageCapacity: "512GB",
      graphicsType: "Integrated",
      gpuBrand: "AMD Radeon",
      operatingSystem: "Windows",
    },
    features: ["Modern Tower", "Expandable RAM", "Fast Storage", "Multiple Connectivity Options"],
  }),

  createProduct({
    id: "gadget-029",
    name: "Custom Workstation Ryzen 9",
    brand: "Custom PC",
    category: "Desktop PCs",
    price: 225000,
    oldPrice: 245000,
    rating: 4.9,
    reviews: 18,
    badge: "Professional",
    photo: "photo-1587202372775-e229f172b9d7",
    description: "A high-end workstation designed for rendering, development, video editing and demanding professional applications.",
    specifications: {
      processor: "AMD Ryzen 9 7950X",
      processorBrand: "AMD",
      processorSeries: "AMD Ryzen 9",
      ram: "64GB",
      storageType: "SSD",
      storageCapacity: "2TB",
      graphicsType: "Dedicated",
      gpuBrand: "NVIDIA",
      operatingSystem: "Windows",
    },
    features: ["High-Core CPU", "64GB RAM", "Professional GPU", "Advanced Cooling"],
  }),

  createProduct({
    id: "gadget-030",
    name: "ASUS ROG Gaming Desktop",
    brand: "ASUS",
    category: "Desktop PCs",
    price: 185000,
    oldPrice: 202000,
    rating: 4.8,
    reviews: 34,
    photo: "photo-1587202372634-32705e3bf49c",
    description: "A gaming desktop featuring powerful processing, dedicated graphics and an aggressive gaming design.",
    specifications: {
      processor: "Intel Core i7",
      processorBrand: "Intel",
      processorSeries: "Intel Core i7",
      ram: "32GB",
      storageType: "SSD",
      storageCapacity: "1TB",
      graphicsType: "Dedicated",
      gpuBrand: "NVIDIA",
      operatingSystem: "Windows",
    },
    features: ["RTX Graphics", "RGB Lighting", "High-Airflow Case", "Gaming Performance"],
  }),

  createProduct({
    id: "gadget-031",
    name: "Apple Mac Studio M2 Max",
    brand: "Apple",
    category: "Desktop PCs",
    price: 245000,
    oldPrice: 265000,
    rating: 4.9,
    reviews: 21,
    photo: "photo-1593640408182-31c70c8268f5",
    description: "A compact professional desktop delivering impressive performance for creative and technical workflows.",
    specifications: {
      processor: "Apple M2 Max",
      processorBrand: "Apple",
      processorSeries: "Apple M2",
      ram: "32GB",
      storageType: "SSD",
      storageCapacity: "512GB",
      graphicsType: "Integrated",
      gpuBrand: "Apple",
      operatingSystem: "macOS",
    },
    features: ["Apple Silicon", "Compact Design", "Thunderbolt", "Professional Performance"],
  }),

  createProduct({
    id: "gadget-032",
    name: "Acer Nitro Gaming Desktop",
    brand: "Acer",
    category: "Desktop PCs",
    price: 128000,
    oldPrice: 140000,
    rating: 4.6,
    reviews: 27,
    photo: "photo-1587202372775-e229f172b9d7",
    description: "A gaming desktop for users looking for dedicated graphics and dependable gaming performance.",
    specifications: {
      processor: "Intel Core i5",
      processorBrand: "Intel",
      processorSeries: "Intel Core i5",
      ram: "16GB",
      storageType: "SSD",
      storageCapacity: "1TB",
      graphicsType: "Dedicated",
      gpuBrand: "NVIDIA",
      operatingSystem: "Windows",
    },
    features: ["Dedicated Graphics", "Gaming Chassis", "SSD Storage", "Upgradeable"],
  }),

  // ==================================================
  // PC COMPONENTS (8)
  // ==================================================

  createProduct({
    id: "gadget-033",
    name: "Intel Core i7 14700K",
    brand: "Intel",
    category: "PC Components",
    price: 52000,
    oldPrice: 57000,
    rating: 4.8,
    reviews: 45,
    badge: "Popular",
    photo: "photo-1555617981-dac3880eac6e",
    description: "A high-performance desktop processor designed for gaming, productivity and demanding multitasking.",
    specifications: {
      processorBrand: "Intel",
      processorSeries: "Intel Core i7",
      cores: "20 Cores",
      socket: "LGA1700",
      generation: "14th Gen",
    },
    features: ["High Clock Speed", "Multitasking", "Unlocked Processor", "Gaming Performance"],
  }),

  createProduct({
    id: "gadget-034",
    name: "AMD Ryzen 7 7800X3D",
    brand: "AMD",
    category: "PC Components",
    price: 49000,
    oldPrice: 54000,
    rating: 4.9,
    reviews: 63,
    photo: "photo-1591799264318-7e6ef8ddb7ea",
    description: "A gaming-focused desktop processor with AMD 3D V-Cache technology.",
    specifications: {
      processorBrand: "AMD",
      processorSeries: "AMD Ryzen 7",
      cores: "8 Cores",
      socket: "AM5",
      generation: "Ryzen 7000",
    },
    features: ["3D V-Cache", "Gaming Optimized", "AM5 Platform", "Efficient Performance"],
  }),

  createProduct({
    id: "gadget-035",
    name: "NVIDIA GeForce RTX 4070 Super",
    brand: "NVIDIA",
    category: "PC Components",
    price: 95000,
    oldPrice: 105000,
    rating: 4.9,
    reviews: 51,
    badge: "Best Seller",
    photo: "photo-1591488320449-011701bb6704",
    description: "A powerful graphics card for modern gaming, ray tracing and creative applications.",
    specifications: {
      gpuBrand: "NVIDIA",
      graphicsType: "Dedicated",
      memory: "12GB GDDR6X",
      interface: "PCIe 4.0",
    },
    features: ["DLSS 3", "Ray Tracing", "12GB VRAM", "High-Resolution Gaming"],
  }),

  createProduct({
    id: "gadget-036",
    name: "Corsair Vengeance DDR5 32GB",
    brand: "Corsair",
    category: "PC Components",
    price: 14500,
    oldPrice: 16500,
    rating: 4.7,
    reviews: 39,
    photo: "photo-1562976540-1502c2145186",
    description: "High-speed DDR5 memory designed for modern gaming and performance desktop systems.",
    specifications: {
      ram: "32GB",
      memoryType: "DDR5",
      speed: "6000MHz",
      capacity: "2 x 16GB",
    },
    features: ["DDR5 Technology", "High-Speed Memory", "Intel XMP", "AMD EXPO"],
  }),

  createProduct({
    id: "gadget-037",
    name: "Samsung 990 PRO 1TB SSD",
    brand: "Samsung",
    category: "PC Components",
    price: 18500,
    oldPrice: 21000,
    rating: 4.8,
    reviews: 72,
    photo: "photo-1597872200969-2b65d56bd16b",
    description: "A premium NVMe SSD delivering fast read and write performance for gaming and professional workloads.",
    specifications: {
      storageType: "SSD",
      storageCapacity: "1TB",
      interface: "PCIe 4.0 NVMe",
      formFactor: "M.2 2280",
    },
    features: ["High-Speed NVMe", "Advanced Thermal Control", "Reliable Storage", "Gaming Ready"],
  }),

  createProduct({
    id: "gadget-038",
    name: "ASUS ROG Strix B650 Motherboard",
    brand: "ASUS",
    category: "PC Components",
    price: 38000,
    oldPrice: 42000,
    rating: 4.7,
    reviews: 28,
    photo: "photo-1518770660439-4636190af475",
    description: "A feature-rich AM5 motherboard built for modern Ryzen processors and gaming systems.",
    specifications: {
      socket: "AM5",
      chipset: "AMD B650",
      memoryType: "DDR5",
      formFactor: "ATX",
      processorBrand: "AMD",
    },
    features: ["DDR5 Support", "PCIe 5.0", "Wi-Fi", "Advanced Cooling"],
  }),

  createProduct({
    id: "gadget-039",
    name: "Corsair RM850e 850W PSU",
    brand: "Corsair",
    category: "PC Components",
    price: 19500,
    oldPrice: 22000,
    rating: 4.7,
    reviews: 31,
    photo: "photo-1587202372775-e229f172b9d7",
    description: "A reliable power supply designed to support modern high-performance PC components.",
    specifications: {
      wattage: "850W",
      efficiency: "80 Plus Gold",
      modular: "Fully Modular",
      standard: "ATX",
    },
    features: ["80 Plus Gold", "Fully Modular", "Quiet Fan", "Reliable Power Delivery"],
  }),

  createProduct({
    id: "gadget-040",
    name: "NZXT H6 Flow PC Case",
    brand: "NZXT",
    category: "PC Components",
    price: 16000,
    oldPrice: 18500,
    rating: 4.6,
    reviews: 24,
    photo: "photo-1587202372634-32705e3bf49c",
    description: "A modern dual-chamber PC case designed for airflow, cable management and premium builds.",
    specifications: {
      formFactor: "Mid Tower",
      motherboardSupport: "ATX / Micro-ATX / Mini-ITX",
      cooling: "Multiple Fan Support",
      material: "Steel and Tempered Glass",
    },
    features: ["Panoramic Glass", "High Airflow", "Cable Management", "Modern Design"],
  }),

  // ==================================================
  // GAMING (8)
  // ==================================================

  createProduct({
    id: "gadget-041",
    name: "Logitech G Pro X Superlight 2",
    brand: "Logitech",
    category: "Gaming",
    price: 14500,
    oldPrice: 16500,
    rating: 4.9,
    reviews: 89,
    badge: "Best Seller",
    photo: "photo-1527814050087-3793815479db",
    description: "An ultra-lightweight wireless gaming mouse designed for competitive gaming and precision.",
    specifications: {
      productType: "Gaming Mouse",
      connectivity: "Wireless",
      dpi: "32000 DPI",
      compatibility: "PC",
      sensor: "HERO 2",
    },
    features: ["Ultra Lightweight", "Wireless Technology", "High Precision Sensor", "Long Battery Life"],
  }),

  createProduct({
    id: "gadget-042",
    name: "Razer BlackWidow V4",
    brand: "Razer",
    category: "Gaming",
    price: 18500,
    oldPrice: 21000,
    rating: 4.8,
    reviews: 62,
    photo: "photo-1595225476474-87563907a212",
    description: "A premium mechanical gaming keyboard with customizable RGB lighting and responsive switches.",
    specifications: {
      productType: "Gaming Keyboard",
      connectivity: "Wired",
      switchType: "Mechanical",
      compatibility: "PC",
    },
    features: ["Mechanical Switches", "RGB Chroma", "Programmable Keys", "Dedicated Media Controls"],
  }),

  createProduct({
    id: "gadget-043",
    name: "Sony PlayStation 5 Slim",
    brand: "Sony",
    category: "Gaming",
    price: 79000,
    oldPrice: 85000,
    rating: 4.9,
    reviews: 137,
    badge: "Popular",
    photo: "photo-1606813907291-d86efa9b94db",
    description: "Experience next-generation gaming with fast loading, immersive graphics and a redesigned console.",
    specifications: {
      productType: "Gaming Console",
      storageCapacity: "1TB",
      resolution: "4K",
      compatibility: "PlayStation",
      connectivity: "Wi-Fi",
    },
    features: ["4K Gaming", "Ray Tracing", "DualSense Controller", "Fast SSD"],
  }),

  createProduct({
    id: "gadget-044",
    name: "Xbox Series X",
    brand: "Microsoft",
    category: "Gaming",
    price: 76000,
    oldPrice: 83000,
    rating: 4.8,
    reviews: 98,
    photo: "photo-1621259182978-fbf93132d53d",
    description: "A powerful gaming console offering high-performance gameplay and access to a huge game library.",
    specifications: {
      productType: "Gaming Console",
      storageCapacity: "1TB",
      resolution: "4K",
      compatibility: "Xbox",
      connectivity: "Wi-Fi",
    },
    features: ["4K Gaming", "Quick Resume", "Game Pass Support", "Fast Loading"],
  }),

  createProduct({
    id: "gadget-045",
    name: "SteelSeries Arctis Nova 7",
    brand: "SteelSeries",
    category: "Gaming",
    price: 23500,
    oldPrice: 26000,
    rating: 4.8,
    reviews: 45,
    photo: "photo-1599669454699-248893623440",
    description: "A premium wireless gaming headset with immersive audio and a comfortable design.",
    specifications: {
      productType: "Gaming Headset",
      connectivity: "Wireless",
      compatibility: "PC",
      audio: "Spatial Audio",
      microphone: "Noise Cancelling",
    },
    features: ["Wireless Audio", "Spatial Sound", "Clear Microphone", "Comfortable Fit"],
  }),

  createProduct({
    id: "gadget-046",
    name: "Logitech G29 Racing Wheel",
    brand: "Logitech",
    category: "Gaming",
    price: 39000,
    oldPrice: 43000,
    rating: 4.7,
    reviews: 41,
    photo: "photo-1593305841991-05c297ba4575",
    description: "A racing simulation steering wheel with force feedback for an immersive driving experience.",
    specifications: {
      productType: "Racing Wheel",
      connectivity: "Wired",
      compatibility: "PC",
      feedback: "Dual Motor Force Feedback",
    },
    features: ["Force Feedback", "Pedal Set", "Leather Steering Wheel", "Realistic Driving"],
  }),

  createProduct({
    id: "gadget-047",
    name: "HyperX Cloud III Gaming Headset",
    brand: "HyperX",
    category: "Gaming",
    price: 10500,
    oldPrice: 12000,
    rating: 4.6,
    reviews: 57,
    photo: "photo-1505740420928-5e560c06d30e",
    description: "A comfortable gaming headset offering clear audio and reliable microphone performance.",
    specifications: {
      productType: "Gaming Headset",
      connectivity: "Wired",
      compatibility: "PC",
      audio: "DTS Spatial Audio",
    },
    features: ["Memory Foam", "Detachable Microphone", "Spatial Audio", "Multi-Platform Support"],
  }),

  createProduct({
    id: "gadget-048",
    name: "Xbox Wireless Controller",
    brand: "Microsoft",
    category: "Gaming",
    price: 8500,
    oldPrice: 9500,
    rating: 4.7,
    reviews: 74,
    photo: "photo-1605901309584-818e25960a8f",
    description: "A comfortable wireless controller with precise controls and broad gaming compatibility.",
    specifications: {
      productType: "Game Controller",
      connectivity: "Wireless",
      compatibility: "Xbox",
      battery: "AA / Rechargeable",
    },
    features: ["Ergonomic Design", "Textured Grip", "Bluetooth", "Customizable Buttons"],
  }),

  // ==================================================
  // SMART WATCHES (8)
  // ==================================================

  createProduct({
    id: "gadget-049",
    name: "Apple Watch Series 10",
    brand: "Apple",
    category: "Smart Watches",
    price: 52000,
    oldPrice: 59000,
    rating: 4.9,
    reviews: 83,
    badge: "New Arrival",
    photo: "photo-1434494878577-86c23bcb06b9",
    description: "A premium smartwatch with advanced health monitoring, fitness tracking and seamless iPhone integration.",
    specifications: {
      productType: "Smartwatch",
      display: "OLED Retina",
      operatingSystem: "watchOS",
      connectivity: "Bluetooth",
      waterResistance: "50m",
    },
    features: ["Health Tracking", "ECG App", "Sleep Monitoring", "Fast Charging"],
    isNew: true,
  }),

  createProduct({
    id: "gadget-050",
    name: "Samsung Galaxy Watch 7",
    brand: "Samsung",
    category: "Smart Watches",
    price: 32000,
    oldPrice: 37000,
    rating: 4.8,
    reviews: 61,
    photo: "photo-1523275335684-37898b6baf30",
    description: "A smart wearable offering advanced health features and seamless Android integration.",
    specifications: {
      productType: "Smartwatch",
      display: "Super AMOLED",
      operatingSystem: "Wear OS",
      connectivity: "Bluetooth",
      waterResistance: "5ATM",
    },
    features: ["Heart Rate Monitoring", "Sleep Tracking", "GPS", "Body Composition"],
  }),

  createProduct({
    id: "gadget-051",
    name: "Apple Watch SE 2",
    brand: "Apple",
    category: "Smart Watches",
    price: 29000,
    oldPrice: 33000,
    rating: 4.7,
    reviews: 52,
    photo: "photo-1434494878577-86c23bcb06b9",
    description: "An accessible Apple smartwatch with essential health and fitness tracking features.",
    specifications: {
      productType: "Smartwatch",
      display: "Retina OLED",
      operatingSystem: "watchOS",
      connectivity: "Bluetooth",
      waterResistance: "50m",
    },
    features: ["Activity Tracking", "Crash Detection", "Notifications", "Family Setup"],
  }),

  createProduct({
    id: "gadget-052",
    name: "Huawei Watch GT 4",
    brand: "Huawei",
    category: "Smart Watches",
    price: 25000,
    oldPrice: 29000,
    rating: 4.6,
    reviews: 38,
    photo: "photo-1523275335684-37898b6baf30",
    description: "A stylish smartwatch with extensive fitness tracking and impressive battery life.",
    specifications: {
      productType: "Smartwatch",
      display: "AMOLED",
      operatingSystem: "HarmonyOS",
      connectivity: "Bluetooth",
      waterResistance: "5ATM",
    },
    features: ["Health Monitoring", "GPS", "Long Battery Life", "Workout Tracking"],
  }),

  createProduct({
    id: "gadget-053",
    name: "Amazfit GTR 4",
    brand: "Amazfit",
    category: "Smart Watches",
    price: 17500,
    oldPrice: 20000,
    rating: 4.5,
    reviews: 43,
    photo: "photo-1508685096489-7aacd43bd3b1",
    description: "A versatile smartwatch offering reliable fitness tracking and a premium display.",
    specifications: {
      productType: "Smartwatch",
      display: "AMOLED",
      operatingSystem: "Zepp OS",
      connectivity: "Bluetooth",
      waterResistance: "5ATM",
    },
    features: ["Dual-Band GPS", "150+ Sports Modes", "Heart Rate Monitoring", "Long Battery Life"],
  }),

  createProduct({
    id: "gadget-054",
    name: "Xiaomi Redmi Watch 4",
    brand: "Xiaomi",
    category: "Smart Watches",
    price: 8500,
    oldPrice: 10000,
    rating: 4.5,
    reviews: 66,
    photo: "photo-1523275335684-37898b6baf30",
    description: "An affordable smartwatch with a large AMOLED screen and useful everyday health features.",
    specifications: {
      productType: "Smartwatch",
      display: "AMOLED",
      operatingSystem: "Xiaomi HyperOS",
      connectivity: "Bluetooth",
      waterResistance: "5ATM",
    },
    features: ["Large Display", "Built-in GPS", "150+ Sports Modes", "Extended Battery"],
  }),

  createProduct({
    id: "gadget-055",
    name: "Samsung Galaxy Fit 3",
    brand: "Samsung",
    category: "Smart Watches",
    price: 6500,
    oldPrice: 7500,
    rating: 4.5,
    reviews: 48,
    photo: "photo-1508685096489-7aacd43bd3b1",
    description: "A lightweight fitness band designed for daily activity and health monitoring.",
    specifications: {
      productType: "Fitness Band",
      display: "AMOLED",
      operatingSystem: "Proprietary OS",
      connectivity: "Bluetooth",
      waterResistance: "5ATM",
    },
    features: ["Sleep Tracking", "Workout Tracking", "Lightweight", "Long Battery Life"],
  }),

  createProduct({
    id: "gadget-056",
    name: "Garmin Forerunner 265",
    brand: "Garmin",
    category: "Smart Watches",
    price: 58000,
    oldPrice: 64000,
    rating: 4.8,
    reviews: 29,
    photo: "photo-1434494878577-86c23bcb06b9",
    description: "A performance-oriented GPS smartwatch for runners and fitness enthusiasts.",
    specifications: {
      productType: "Sports Smartwatch",
      display: "AMOLED",
      operatingSystem: "Garmin OS",
      connectivity: "Bluetooth",
      waterResistance: "5ATM",
    },
    features: ["Advanced GPS", "Training Readiness", "Heart Rate Monitoring", "Running Metrics"],
  }),

  // ==================================================
  // ACCESSORIES (8)
  // ==================================================

  createProduct({
    id: "gadget-057",
    name: "Sony WH-1000XM5",
    brand: "Sony",
    category: "Accessories",
    price: 28999,
    oldPrice: 34999,
    rating: 4.9,
    reviews: 128,
    badge: "Best Seller",
    photo: "photo-1505740420928-5e560c06d30e",
    description: "Premium wireless headphones featuring industry-leading noise cancellation and exceptional sound quality.",
    specifications: {
      productType: "Headphones",
      connectivity: "Wireless",
      battery: "30 Hours",
      noiseCancellation: "Active ANC",
      compatibility: "Universal",
    },
    features: ["Active Noise Cancellation", "Hi-Res Audio", "Touch Controls", "Multipoint Connection"],
    featured: true,
  }),

  createProduct({
    id: "gadget-058",
    name: "JBL Flip 6 Bluetooth Speaker",
    brand: "JBL",
    category: "Accessories",
    price: 11500,
    oldPrice: 13500,
    rating: 4.7,
    reviews: 77,
    photo: "photo-1608043152269-423dbba4e7e1",
    description: "A portable Bluetooth speaker with powerful sound and a durable waterproof design.",
    specifications: {
      productType: "Bluetooth Speaker",
      connectivity: "Bluetooth",
      battery: "12 Hours",
      waterproof: "IP67",
      compatibility: "Universal",
    },
    features: ["Portable Design", "Waterproof", "Powerful Bass", "USB-C Charging"],
  }),

  createProduct({
    id: "gadget-059",
    name: "Anker 737 Power Bank",
    brand: "Anker",
    category: "Accessories",
    price: 16500,
    oldPrice: 18500,
    rating: 4.8,
    reviews: 54,
    photo: "photo-1609091839311-d5365f9ff1c5",
    description: "A high-capacity power bank with fast charging support for smartphones, tablets and laptops.",
    specifications: {
      productType: "Power Bank",
      capacity: "24000mAh",
      output: "140W",
      connectivity: "USB-C",
      compatibility: "Universal",
    },
    features: ["High Capacity", "140W Fast Charging", "Smart Display", "Multiple Ports"],
  }),

  createProduct({
    id: "gadget-060",
    name: "Logitech MX Master 3S",
    brand: "Logitech",
    category: "Accessories",
    price: 12500,
    oldPrice: 14500,
    rating: 4.9,
    reviews: 92,
    photo: "photo-1527814050087-3793815479db",
    description: "A professional wireless mouse designed for productivity, precision and comfortable everyday use.",
    specifications: {
      productType: "Wireless Mouse",
      connectivity: "Wireless",
      dpi: "8000 DPI",
      compatibility: "Universal",
      sensor: "Darkfield",
    },
    features: ["Ergonomic Design", "Quiet Clicks", "Multi-Device Support", "USB-C Charging"],
  }),

  createProduct({
    id: "gadget-061",
    name: "Canon EOS R50 Camera",
    brand: "Canon",
    category: "Accessories",
    price: 89000,
    oldPrice: 99000,
    rating: 4.8,
    reviews: 38,
    photo: "photo-1516035069371-29a1b244cc32",
    description: "A compact mirrorless camera for photography, content creation and professional-quality video.",
    specifications: {
      productType: "Camera",
      sensor: "24.2MP APS-C",
      video: "4K UHD",
      connectivity: "Wi-Fi / Bluetooth",
      lensMount: "RF-S",
    },
    features: ["4K Video", "Dual Pixel Autofocus", "Compact Body", "Creator Friendly"],
  }),

  createProduct({
    id: "gadget-062",
    name: "Samsung 25W USB-C Charger",
    brand: "Samsung",
    category: "Accessories",
    price: 2200,
    oldPrice: 2800,
    rating: 4.6,
    reviews: 104,
    photo: "photo-1609592806596-b43bada3f6c4",
    description: "A compact USB-C wall charger designed for fast and reliable charging.",
    specifications: {
      productType: "Wall Charger",
      output: "25W",
      connectivity: "USB-C",
      compatibility: "Universal",
    },
    features: ["Fast Charging", "Compact Design", "Power Protection", "USB-C"],
  }),

  createProduct({
    id: "gadget-063",
    name: "Apple AirPods Pro 2",
    brand: "Apple",
    category: "Accessories",
    price: 28500,
    oldPrice: 32000,
    rating: 4.9,
    reviews: 117,
    photo: "photo-1606220945770-b5b6c2c55bf1",
    description: "Premium wireless earbuds with active noise cancellation, spatial audio and seamless Apple integration.",
    specifications: {
      productType: "Wireless Earbuds",
      connectivity: "Bluetooth",
      battery: "Up to 30 Hours with Case",
      noiseCancellation: "Active ANC",
      compatibility: "Universal",
    },
    features: ["Active Noise Cancellation", "Spatial Audio", "Adaptive Transparency", "MagSafe Charging"],
  }),

  createProduct({
    id: "gadget-064",
    name: "Baseus 100W USB-C Hub",
    brand: "Baseus",
    category: "Accessories",
    price: 6500,
    oldPrice: 7500,
    rating: 4.6,
    reviews: 34,
    photo: "photo-1625842268584-8f3296236761",
    description: "A versatile USB-C hub that expands laptop connectivity for professional workflows.",
    specifications: {
      productType: "USB-C Hub",
      connectivity: "USB-C",
      output: "100W PD",
      compatibility: "Universal",
      ports: "USB-A / HDMI / USB-C / SD",
    },
    features: ["Multiple Ports", "4K HDMI", "100W Power Delivery", "Compact Design"],
  }),

  // ==================================================
  // NETWORKING (8)
  // ==================================================

  createProduct({
    id: "gadget-065",
    name: "TP-Link Archer AX73 Wi-Fi 6 Router",
    brand: "TP-Link",
    category: "Networking",
    price: 14500,
    oldPrice: 16500,
    rating: 4.8,
    reviews: 65,
    badge: "Popular",
    photo: "photo-1647427060118-4911c9821b82",
    description: "A high-performance Wi-Fi 6 router designed for faster connections and reliable home networking.",
    specifications: {
      productType: "Wi-Fi Router",
      wifiStandard: "Wi-Fi 6",
      speed: "AX5400",
      bands: "Dual Band",
      ports: "Gigabit Ethernet",
    },
    features: ["Wi-Fi 6", "MU-MIMO", "OFDMA", "Advanced Security"],
    featured: true,
  }),

  createProduct({
    id: "gadget-066",
    name: "ASUS RT-AX86U Gaming Router",
    brand: "ASUS",
    category: "Networking",
    price: 24500,
    oldPrice: 27000,
    rating: 4.9,
    reviews: 39,
    photo: "photo-1647427060118-4911c9821b82",
    description: "A gaming-focused router delivering low-latency networking and advanced traffic management.",
    specifications: {
      productType: "Gaming Router",
      wifiStandard: "Wi-Fi 6",
      speed: "AX5700",
      bands: "Dual Band",
      ports: "2.5G Ethernet",
    },
    features: ["Gaming Acceleration", "Low Latency", "AiProtection", "Adaptive QoS"],
  }),

  createProduct({
    id: "gadget-067",
    name: "TP-Link Deco X50 Mesh Wi-Fi",
    brand: "TP-Link",
    category: "Networking",
    price: 18500,
    oldPrice: 21000,
    rating: 4.7,
    reviews: 42,
    photo: "photo-1606904825846-647eb07f5be2",
    description: "A mesh Wi-Fi system designed to provide seamless wireless coverage throughout your home.",
    specifications: {
      productType: "Mesh Wi-Fi System",
      wifiStandard: "Wi-Fi 6",
      speed: "AX3000",
      bands: "Dual Band",
      coverage: "Whole Home",
    },
    features: ["Mesh Technology", "Seamless Roaming", "Parental Controls", "Easy Setup"],
  }),

  createProduct({
    id: "gadget-068",
    name: "Netgear Nighthawk AX4",
    brand: "Netgear",
    category: "Networking",
    price: 12000,
    oldPrice: 14000,
    rating: 4.6,
    reviews: 31,
    photo: "photo-1647427060118-4911c9821b82",
    description: "A modern wireless router suitable for streaming, browsing and connected home devices.",
    specifications: {
      productType: "Wi-Fi Router",
      wifiStandard: "Wi-Fi 6",
      speed: "AX3000",
      bands: "Dual Band",
      ports: "Gigabit Ethernet",
    },
    features: ["Wi-Fi 6", "Gigabit Ports", "Smart Parental Controls", "Stable Connectivity"],
  }),

  createProduct({
    id: "gadget-069",
    name: "D-Link DIR-X1560 Router",
    brand: "D-Link",
    category: "Networking",
    price: 6500,
    oldPrice: 7800,
    rating: 4.5,
    reviews: 27,
    photo: "photo-1606904825846-647eb07f5be2",
    description: "An affordable Wi-Fi 6 router for modern homes and everyday internet usage.",
    specifications: {
      productType: "Wi-Fi Router",
      wifiStandard: "Wi-Fi 6",
      speed: "AX1500",
      bands: "Dual Band",
      ports: "Gigabit Ethernet",
    },
    features: ["Wi-Fi 6", "Dual Band", "MU-MIMO", "Easy Configuration"],
  }),

  createProduct({
    id: "gadget-070",
    name: "TP-Link TL-SG108 Gigabit Switch",
    brand: "TP-Link",
    category: "Networking",
    price: 3500,
    oldPrice: 4200,
    rating: 4.6,
    reviews: 46,
    photo: "photo-1558494949-ef010cbdcc31",
    description: "An eight-port unmanaged Gigabit Ethernet switch for expanding wired network connectivity.",
    specifications: {
      productType: "Network Switch",
      ports: "8 Gigabit Ports",
      speed: "10/100/1000Mbps",
      management: "Unmanaged",
    },
    features: ["Plug and Play", "Fanless Design", "Gigabit Speed", "Energy Efficient"],
  }),

  createProduct({
    id: "gadget-071",
    name: "TP-Link Archer T4U USB Wi-Fi Adapter",
    brand: "TP-Link",
    category: "Networking",
    price: 2200,
    oldPrice: 2800,
    rating: 4.5,
    reviews: 33,
    photo: "photo-1558494949-ef010cbdcc31",
    description: "A compact USB Wi-Fi adapter for adding wireless connectivity to desktop computers and laptops.",
    specifications: {
      productType: "Wi-Fi Adapter",
      wifiStandard: "Wi-Fi 5",
      speed: "AC1300",
      connectivity: "USB 3.0",
      bands: "Dual Band",
    },
    features: ["Dual Band", "USB 3.0", "Compact Design", "Easy Installation"],
  }),

  createProduct({
    id: "gadget-072",
    name: "Tenda Nova MW6 Mesh Wi-Fi",
    brand: "Tenda",
    category: "Networking",
    price: 9800,
    oldPrice: 11500,
    rating: 4.6,
    reviews: 36,
    photo: "photo-1606904825846-647eb07f5be2",
    description: "A whole-home mesh Wi-Fi system designed to eliminate dead zones and provide reliable connectivity.",
    specifications: {
      productType: "Mesh Wi-Fi System",
      wifiStandard: "Wi-Fi 5",
      speed: "AC1200",
      bands: "Dual Band",
      coverage: "Whole Home",
    },
    features: ["Mesh Networking", "Seamless Roaming", "Easy Setup", "Parental Controls"],
  }),
];

// --------------------------------------------------
// CATEGORY LIST
// --------------------------------------------------

export const categories = categoryNames;

// --------------------------------------------------
// BRAND LIST
// Automatically generated from products
// --------------------------------------------------

export const brands = [
  ...new Set(products.map((product) => product.brand)),
].sort();

// --------------------------------------------------
// CATEGORY CONFIGURATION
// --------------------------------------------------

export const categoryConfig = {
  "All Products": {
    title: "Explore All Products",
    description:
      "Discover premium electronics, innovative gadgets and accessories designed to upgrade your digital lifestyle.",
    image: imageUrl("photo-1498049794561-7780e7231661"),
  },

  Smartphones: {
    title: "Explore Smartphones",
    description:
      "Discover the latest smartphones with powerful performance, stunning cameras and innovative technology.",
    image: imageUrl("photo-1511707171634-5f897ff02aa9"),
  },

  Tablets: {
    title: "Explore Tablets",
    description:
      "Find versatile tablets for entertainment, productivity, creativity and everyday use.",
    image: imageUrl("photo-1544244015-0df4b3ffc6b0"),
  },

  Laptops: {
    title: "Find Your Perfect Laptop",
    description:
      "Power your productivity, creativity and gaming with laptops built for every need.",
    image: imageUrl("photo-1496181133206-80ce9b88a853"),
  },

  "Desktop PCs": {
    title: "Powerful Desktop PCs",
    description:
      "Explore powerful desktop systems for professional work, entertainment and gaming.",
    image: imageUrl("photo-1587202372775-e229f172b9d7"),
  },

  "PC Components": {
    title: "Build Your Dream PC",
    description:
      "Discover quality PC components to build, customize and upgrade your setup.",
    image: imageUrl("photo-1587202372634-32705e3bf49c"),
  },

  Gaming: {
    title: "Level Up Your Gaming",
    description:
      "Upgrade your gaming setup with performance-driven gaming gear and accessories.",
    image: imageUrl("photo-1593305841991-05c297ba4575"),
  },

  "Smart Watches": {
    title: "Smart Watches & Wearables",
    description:
      "Stay connected, track your fitness and simplify your everyday life.",
    image: imageUrl("photo-1523275335684-37898b6baf30"),
  },

  Accessories: {
    title: "Essential Tech Accessories",
    description:
      "Complete your setup with premium accessories and everyday tech essentials.",
    image: imageUrl("photo-1505740420928-5e560c06d30e"),
  },

  Networking: {
    title: "Networking Solutions",
    description:
      "Explore modern routers, mesh systems and networking essentials for reliable connectivity.",
    image: imageUrl("photo-1647427060118-4911c9821b82"),
  },
};

// --------------------------------------------------
// CATEGORY-SPECIFIC FILTERS
// --------------------------------------------------

export const categoryFilters = {
  Smartphones: [
    "processorBrand",
    "ram",
    "storageCapacity",
    "operatingSystem",
  ],

  Tablets: [
    "processorBrand",
    "ram",
    "storageCapacity",
    "operatingSystem",
  ],

  Laptops: [
    "storageType",
    "processorBrand",
    "ram",
    "operatingSystem",
    "storageCapacity",
    "graphicsType",
    "gpuBrand",
    "processorSeries",
  ],

  "Desktop PCs": [
    "processorBrand",
    "ram",
    "storageType",
    "storageCapacity",
    "graphicsType",
    "gpuBrand",
    "processorSeries",
  ],

  "PC Components": [
    "processorBrand",
    "processorSeries",
    "ram",
    "storageType",
    "storageCapacity",
    "graphicsType",
    "gpuBrand",
  ],

  Gaming: [
    "productType",
    "connectivity",
    "compatibility",
  ],

  "Smart Watches": [
    "productType",
    "operatingSystem",
    "connectivity",
  ],

  Accessories: [
    "productType",
    "connectivity",
    "compatibility",
  ],

  Networking: [
    "productType",
    "wifiStandard",
    "bands",
  ],
};

// --------------------------------------------------
// FILTER OPTIONS
// --------------------------------------------------

export const filterOptions = {
  storageType: {
    label: "Storage Type",
    options: ["SSD", "HDD"],
  },

  processorBrand: {
    label: "Processor Brand",
    options: ["Apple", "Intel", "AMD", "Snapdragon", "Google"],
  },

  ram: {
    label: "RAM",
    options: ["4GB", "8GB", "12GB", "16GB", "24GB", "32GB", "64GB"],
  },

  operatingSystem: {
    label: "Operating System",
    options: [
      "Windows",
      "macOS",
      "Linux",
      "Android",
      "iOS",
      "iPadOS",
      "watchOS",
      "Wear OS",
    ],
  },

  storageCapacity: {
    label: "Storage Capacity",
    options: [
      "64GB",
      "128GB",
      "256GB",
      "512GB",
      "1TB",
      "2TB",
    ],
  },

  graphicsType: {
    label: "Graphics Type",
    options: ["Dedicated", "Integrated"],
  },

  gpuBrand: {
    label: "GPU Brand",
    options: ["AMD Radeon", "NVIDIA", "Intel", "Apple"],
  },

  processorSeries: {
    label: "Processor Series",
    options: [
      "AMD Ryzen 9",
      "AMD Ryzen 7",
      "AMD Ryzen 5",
      "Intel Core i5",
      "Intel Core i7",
      "Intel Core Ultra 7",
      "Apple M2",
      "Apple M3",
      "Apple M4",
    ],
  },

  productType: {
    label: "Product Type",
    options: [
      "Headphones",
      "Wireless Earbuds",
      "Gaming Headset",
      "Gaming Mouse",
      "Gaming Keyboard",
      "Gaming Console",
      "Smartwatch",
      "Fitness Band",
      "Camera",
      "Bluetooth Speaker",
      "Power Bank",
      "Wall Charger",
      "USB-C Hub",
      "Wi-Fi Router",
      "Gaming Router",
      "Mesh Wi-Fi System",
      "Network Switch",
      "Wi-Fi Adapter",
    ],
  },

  connectivity: {
    label: "Connectivity",
    options: ["Wired", "Wireless", "Bluetooth", "USB-C", "Wi-Fi"],
  },

  compatibility: {
    label: "Compatibility",
    options: ["PC", "PlayStation", "Xbox", "Universal"],
  },

  wifiStandard: {
    label: "Wi-Fi Standard",
    options: ["Wi-Fi 5", "Wi-Fi 6", "Wi-Fi 7"],
  },

  bands: {
    label: "Wi-Fi Bands",
    options: ["Single Band", "Dual Band", "Tri Band"],
  },
};

// --------------------------------------------------
// PRODUCT HELPER FUNCTIONS
// --------------------------------------------------

export const getProductById = (id) =>
  products.find((product) => product.id === id);

export const getProductBySlug = (slug) =>
  products.find((product) => product.slug === slug);

export const getProductsByCategory = (category) => {
  if (!category || category === "All Products") {
    return products;
  }

  return products.filter(
    (product) => product.category === category
  );
};

export const getProductsByBrand = (brand) =>
  products.filter((product) => product.brand === brand);

export const getFeaturedProducts = () =>
  products.filter((product) => product.featured);

export const getNewArrivals = () =>
  products.filter((product) => product.isNew);

export const getRelatedProducts = (product, limit = 4) => {
  if (!product) return [];

  return products
    .filter(
      (item) =>
        item.category === product.category &&
        item.id !== product.id
    )
    .slice(0, limit);
};

export const getDiscountPercentage = (product) => {
  if (!product?.oldPrice || !product?.price) return 0;

  return Math.round(
    ((product.oldPrice - product.price) / product.oldPrice) * 100
  );
};

export const formatPrice = (price) =>
  new Intl.NumberFormat("en-BD", {
    style: "currency",
    currency: "BDT",
    maximumFractionDigits: 0,
  }).format(price);
