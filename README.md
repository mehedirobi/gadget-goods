# GadgetGoods

GadgetGoods is a responsive electronics storefront built with React and Vite. It includes product discovery, category and price filtering, wishlist and cart experiences, promotional offers, pre-orders, blog content, and Firebase-powered authentication.

## Features

- Responsive storefront with shared navigation and footer
- Product search, category filters, brand filters, sorting, and price controls
- Product details with specifications and purchase actions
- Shopping cart with quantity controls, shipping totals, and promo-code support
- Wishlist with filtering, sorting, and add-to-cart actions
- Email/password and Google authentication through Firebase
- Remember-me support for local or session authentication persistence
- Exclusive deals, pre-order listings, blog articles, contact, and about pages
- Toast notifications and browser local-storage persistence

## Tech Stack

- React 19
- Vite 8
- React Router 7
- Tailwind CSS 4
- DaisyUI 5
- Firebase Authentication
- Lucide React and React Icons
- ESLint

## Pages

| Route | Description |
| --- | --- |
| `/` | Home page and featured storefront sections |
| `/shop` | Searchable product catalog |
| `/product/:id` | Individual product details |
| `/categories` | Category browsing |
| `/offers` | Promotional campaigns and coupon codes |
| `/preorders` | Upcoming products and pre-order listings |
| `/wishlist` | Saved products |
| `/cart` | Shopping cart and checkout summary |
| `/blog` | Gadget and technology articles |
| `/blog/:slug` | Individual blog article |
| `/about` | About GadgetGoods |
| `/contact` | Contact page |
| `/login` | Email/password and Google sign-in |
| `/register` | Account registration |

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm
- A Firebase project with Authentication enabled

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mehedirobi/gadget-goods.git
   cd gadget-goods
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root:

   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   Vite will print the local URL in the terminal, usually `http://localhost:5173`.

## Firebase Setup

In the Firebase console:

1. Enable **Email/Password** under **Authentication > Sign-in method**.
2. Enable **Google** if Google sign-in should be available.
3. Add your local development and production domains under **Authentication > Settings > Authorized domains**.
4. Restart the Vite server after changing environment variables.

The Firebase configuration is initialized in [src/firebase/firebase.config.js](src/firebase/firebase.config.js).

## Available Scripts

```bash
npm run dev      # Start the Vite development server
npm run build    # Create a production build in dist/
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```

## Demo Cart Behavior

Cart and wishlist data are stored in browser `localStorage` using these keys:

- `gadgetgoods-cart`
- `gadgetgoods-wishlist`

The cart initializes with demo items for first-time visitors. The demo promo code `WELCOME10` applies a 10% discount, capped at ৳2,000.

## Project Structure

```text
src/
├── assets/          # Local images and static assets
├── components/      # Reusable storefront and UI components
├── contexts/        # Authentication and toast contexts
├── data/            # Product, category, and blog data
├── firebase/        # Firebase initialization
├── layouts/         # Shared page layout
├── pages/           # Route-level pages
├── routes/          # React Router configuration
├── styles/          # Additional styles
├── index.css        # Tailwind and DaisyUI setup
└── main.jsx         # Application entry point
```

## Build for Production

```bash
npm run build
```

Deploy the generated `dist/` directory to a static hosting provider. Configure a rewrite/fallback rule that serves `index.html` for React Router paths.
