import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';

const Navbar = () => {
  const { getCartCount } = useCart();
  const { getWishlistCount } = useWishlist();

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-orange-500">ShoeStore</h1>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-500 transition">
              Home
            </Link>
            <Link to="/" className="text-gray-700 hover:text-orange-500 transition">
              Products
            </Link>
            <Link to="/" className="text-gray-700 hover:text-orange-500 transition">
              About
            </Link>
            <Link to="/" className="text-gray-700 hover:text-orange-500 transition">
              Contact
            </Link>
          </div>

          {/* Cart and Wishlist Icons */}
          <div className="flex items-center space-x-4">
            <Link to="/wishlist" className="relative p-2 hover:bg-gray-100 rounded-full transition">
              <svg 
                className="w-6 h-6 text-gray-700 hover:text-orange-500 transition" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                />
              </svg>
              {getWishlistCount() > 0 && (
                <span className="badge">{getWishlistCount()}</span>
              )}
            </Link>
            
            <Link to="/cart" className="relative p-2 hover:bg-gray-100 rounded-full transition">
              <svg 
                className="w-6 h-6 text-gray-700 hover:text-orange-500 transition" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" 
                />
              </svg>
              {getCartCount() > 0 && (
                <span className="badge">{getCartCount()}</span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 