# BERBS Shopping Cart

A responsive shopping-cart application built with React and Vite. The project is a small storefront where users can browse products, adjust quantities, and manage the items in their cart.

## Features

- **Home page** with a storefront introduction.
- **Shop page** displaying products retrieved from the [Fake Store API](https://fakestoreapi.com/).
- **Product cards** with product images, names, prices, and quantity controls.
- **Shopping cart** showing products with a quantity greater than zero.
- **Cart item count** displayed in the navigation.
- **Client-side routing** between the Home, Shop, and Cart pages.

## Built With

- [React](https://react.dev/) 19
- [React Router](https://reactrouter.com/)
- [Vite](https://vite.dev/)
- CSS Modules
- [Fake Store API](https://fakestoreapi.com/) for product data
- [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for testing

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (a current LTS release is recommended)
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/HaydenBerberich/shopping-cart.git
   ```

2. Navigate into the project directory:

   ```bash
   cd shopping-cart
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL printed by Vite in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the application for production |
| `npm run preview` | Preview the production build locally |
| `npm test` | Run the Vitest test suite |
| `npm run lint` | Run ESLint |

## Project Structure

```text
src/
├── assets/          # Images and other static assets
├── components/      # Shared UI components (navigation, product cards)
├── pages/
│   ├── Home/        # Store landing page
│   ├── Shop/        # Product listing
│   └── Cart/        # Cart contents
├── App.jsx          # Shared application state and layout
├── routes.jsx       # Client-side route definitions
├── main.jsx         # React application entry point
└── index.css        # Global styles
```

## How It Works

The application fetches the product catalog from Fake Store API when the app loads. Product data is held in the top-level `App` component and shared with the routed pages through React Router's outlet context.

Each product's `quantity` determines whether it appears in the cart. The navigation displays the combined quantity of all items currently in the cart.

> **Note:** Cart contents are maintained in React state and are not persisted between page reloads.

## License

No license has been specified for this project.
