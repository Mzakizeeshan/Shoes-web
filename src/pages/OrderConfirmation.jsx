import { Link } from 'react-router-dom';

const OrderConfirmation = () => {
  const orderNumber = Math.random().toString(36).substr(2, 9).toUpperCase();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Icon */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        {/* Success Message */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Thank you for your order!
        </h1>
        <p className="text-gray-600 mb-8">
          Your order has been successfully placed. We'll send you an email confirmation with tracking details once your order ships.
        </p>

        {/* Order Details */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Order Details</h2>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Order Number:</span>
              <span className="font-semibold text-gray-800">#{orderNumber}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Order Date:</span>
              <span className="font-semibold text-gray-800">
                {new Date().toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Estimated Delivery:</span>
              <span className="font-semibold text-gray-800">
                {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
          </div>
        </div>

        {/* What's Next */}
        <div className="bg-gray-50 rounded-lg p-8 mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">What's Next?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">1</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Order Confirmation</h4>
              <p className="text-sm text-gray-600">You'll receive an email confirmation with your order details</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">2</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Processing</h4>
              <p className="text-sm text-gray-600">We'll process your order and prepare it for shipping</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">3</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Shipping</h4>
              <p className="text-sm text-gray-600">You'll get tracking information once your order ships</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Continue Shopping
          </Link>
          
          <button 
            onClick={() => window.print()}
            className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
          >
            Print Receipt
          </button>
        </div>

        {/* Contact Support */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4">
            Have questions about your order?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:support@shoestore.com"
              className="text-orange-500 hover:text-orange-600 font-medium"
            >
              support@shoestore.com
            </a>
            <span className="text-gray-400">|</span>
            <a 
              href="tel:+1234567890"
              className="text-orange-500 hover:text-orange-600 font-medium"
            >
              +1 (234) 567-890
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation; 