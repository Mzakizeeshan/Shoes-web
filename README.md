# ShoeStore - Daraz-style E-commerce Website

A fully functional e-commerce shoe website built with React + Vite, featuring a modern UI and complete shopping experience.

## 🎯 Features

### Core Functionality
- **Homepage** with product cards and filtering options
- **Product Detail Pages** with comprehensive product information
- **Shopping Cart** with quantity management and item removal
- **Wishlist** for saving favorite products
- **Order Confirmation** page with order summary
- **WhatsApp Integration** for customer inquiries

### User Experience
- **Responsive Design** that works on all devices
- **Light Theme** with modern, clean aesthetics
- **Smooth Animations** and hover effects
- **Local Storage** for persistent cart and wishlist data
- **React Router** for seamless navigation

### Product Features
- Product filtering by category and brand
- Size and color selection
- Product ratings and reviews display
- Discount badges and original price display
- Similar products recommendations

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Styling**: Custom CSS (Tailwind-like utility classes)
- **State Management**: React Context API
- **Data Storage**: Local Storage
- **Icons**: SVG icons (no external dependencies)

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd shoe-store
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
shoe-store/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx      # Navigation bar
│   │   ├── ProductCard.jsx # Product display card
│   │   └── WhatsAppButton.jsx # WhatsApp integration
│   ├── contexts/           # React Context providers
│   │   ├── CartContext.jsx # Shopping cart state management
│   │   └── WishlistContext.jsx # Wishlist state management
│   ├── data/               # Static data and utilities
│   │   └── products.js     # Product data and helper functions
│   ├── pages/              # Page components
│   │   ├── Home.jsx        # Homepage
│   │   ├── ProductDetail.jsx # Product detail page
│   │   ├── Cart.jsx        # Shopping cart page
│   │   ├── Wishlist.jsx    # Wishlist page
│   │   └── OrderConfirmation.jsx # Order confirmation page
│   ├── App.jsx             # Main application component
│   ├── App.css             # Global styles
│   ├── main.jsx            # Application entry point
│   └── index.css           # Base styles
├── public/                 # Static assets
├── package.json            # Dependencies and scripts
└── README.md              # Project documentation
```

## 🎨 Features in Detail

### Homepage
- Hero section with call-to-action
- Product filtering by category and brand
- Responsive product grid
- Feature highlights section

### Product Detail Page
- Large product images
- Detailed product information
- Size and color selection
- Quantity controls
- Add to cart and wishlist functionality
- Similar products recommendations

### Shopping Cart
- Item list with product details
- Quantity adjustment controls
- Remove individual items
- Clear entire cart
- Order summary with tax calculation
- Checkout process

### Wishlist
- Saved products display
- Add to cart from wishlist
- Remove from wishlist
- Clear all items

### WhatsApp Integration
- Floating WhatsApp button
- Pre-filled inquiry message
- Opens WhatsApp with customer support

## 🔧 Customization

### Adding New Products
Edit `src/data/products.js` to add new products:

```javascript
{
  id: 13,
  name: "New Shoe Model",
  price: 99.99,
  originalPrice: 129.99,
  image: "product-image-url",
  category: "Category",
  brand: "Brand",
  description: "Product description",
  features: ["Feature 1", "Feature 2"],
  sizes: [7, 8, 9, 10, 11, 12],
  colors: ["Black", "White"],
  rating: 4.5,
  reviews: 100,
  inStock: true
}
```

### Styling
The application uses custom CSS classes that mimic Tailwind CSS. You can modify `src/App.css` to customize the design.

### WhatsApp Configuration
Update the phone number in `src/components/WhatsAppButton.jsx`:

```javascript
const phoneNumber = "your-phone-number"; // Replace with actual phone number
```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🗄️ Data Persistence

All cart and wishlist data is stored in the browser's local storage, ensuring data persistence across browser sessions.

## 🚀 Performance Features

- Lazy loading of images
- Optimized bundle size with Vite
- Efficient state management with Context API
- Minimal external dependencies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

For support or questions, please contact:
- Email: support@shoestore.com
- Phone: +1 (234) 567-890

---

**Built with ❤️ using React + Vite**
