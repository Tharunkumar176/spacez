'use client'

import { useState } from 'react'
import { Search, Tag, Star, Clock, Copy, Check, X } from 'lucide-react'

interface Coupon {
  id: number
  code: string
  title: string
  description: string
  discount: string
  category: string
  expiryDate: string
  featured?: boolean
  termsAndConditions: string[]
}

export default function CouponsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const categories = ['All', 'Electronics', 'Fashion', 'Food', 'Travel', 'Services']

  const coupons: Coupon[] = [
    {
      id: 1,
      code: 'SAVE50',
      title: 'Big Summer Sale',
      description: 'Get 50% off on all electronics',
      discount: '50% OFF',
      category: 'Electronics',
      expiryDate: '2026-02-28',
      featured: true,
      termsAndConditions: ['Valid on orders above $100', 'Cannot be combined with other offers']
    },
    {
      id: 2,
      code: 'FASHION30',
      title: 'Fashion Week Special',
      description: 'Flat 30% discount on fashion items',
      discount: '30% OFF',
      category: 'Fashion',
      expiryDate: '2026-02-15',
      termsAndConditions: ['Valid on all clothing', 'One use per customer']
    },
    {
      id: 3,
      code: 'FOOD25',
      title: 'Food Lovers Deal',
      description: 'Save 25% on food orders',
      discount: '25% OFF',
      category: 'Food',
      expiryDate: '2026-03-10',
      featured: true,
      termsAndConditions: ['Valid on orders above $30', 'Limited to first 100 customers']
    },
    {
      id: 4,
      code: 'TRAVEL200',
      title: 'Travel Adventure',
      description: 'Get $200 off on travel bookings',
      discount: '$200 OFF',
      category: 'Travel',
      expiryDate: '2026-04-30',
      termsAndConditions: ['Valid on bookings above $1000', 'Excludes peak season']
    },
    {
      id: 5,
      code: 'SERVICE15',
      title: 'Service Saver',
      description: '15% off on all services',
      discount: '15% OFF',
      category: 'Services',
      expiryDate: '2026-03-31',
      termsAndConditions: ['Valid on all services', 'One use per customer']
    },
    {
      id: 6,
      code: 'TECH100',
      title: 'Tech Tuesday',
      description: '$100 off on tech products',
      discount: '$100 OFF',
      category: 'Electronics',
      expiryDate: '2026-02-20',
      featured: true,
      termsAndConditions: ['Valid on orders above $500', 'Excludes Apple products']
    }
  ]

  const filteredCoupons = coupons.filter(coupon => {
    const matchesCategory = selectedCategory === 'All' || coupon.category === selectedCategory
    const matchesSearch = coupon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         coupon.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         coupon.code.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(code)
    showSuccess(`Coupon code "${code}" copied to clipboard!`)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const showSuccess = (message: string) => {
    setSuccessMessage(message)
    setShowSuccessMessage(true)
    setTimeout(() => setShowSuccessMessage(false), 3000)
  }

  const handleApplyCoupon = (coupon: Coupon) => {
    showSuccess(`Coupon "${coupon.code}" applied successfully! Enjoy ${coupon.discount}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Success Message Toast */}
      {showSuccessMessage && (
        <div className="fixed top-4 right-4 z-50 animate-slide-in">
          <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3">
            <Check className="w-5 h-5" />
            <span>{successMessage}</span>
            <button 
              onClick={() => setShowSuccessMessage(false)}
              className="ml-2 hover:bg-green-600 rounded p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Tag className="w-8 h-8 text-purple-600" />
              <h1 className="text-2xl font-bold text-gray-900">Spacez Coupons</h1>
            </div>
            <button 
              onClick={() => showSuccess('Account menu opened!')}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Sign In
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Save Big with Exclusive Coupons</h2>
          <p className="text-xl text-purple-100">Discover amazing deals and discounts across all categories</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search coupons by name, code, or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3 text-gray-900">Categories</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-all ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Coupons Grid */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900">
              {selectedCategory === 'All' ? 'All Coupons' : `${selectedCategory} Coupons`}
            </h3>
            <span className="text-gray-600">{filteredCoupons.length} coupons available</span>
          </div>

          {filteredCoupons.length === 0 ? (
            <div className="text-center py-12">
              <Tag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-xl text-gray-600">No coupons found</p>
              <p className="text-gray-500">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCoupons.map((coupon) => (
                <div
                  key={coupon.id}
                  className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden ${
                    coupon.featured ? 'ring-2 ring-purple-500' : ''
                  }`}
                >
                  {coupon.featured && (
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 flex items-center gap-2">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-semibold">Featured Deal</span>
                    </div>
                  )}
                  
                  <div className="p-6">
                    {/* Discount Badge */}
                    <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-lg font-bold mb-4">
                      {coupon.discount}
                    </div>

                    {/* Coupon Info */}
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{coupon.title}</h4>
                    <p className="text-gray-600 mb-4">{coupon.description}</p>

                    {/* Coupon Code */}
                    <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-3 mb-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Coupon Code</p>
                          <p className="text-lg font-mono font-bold text-gray-900">{coupon.code}</p>
                        </div>
                        <button
                          onClick={() => handleCopyCode(coupon.code)}
                          className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                          title="Copy code"
                        >
                          {copiedCode === coupon.code ? (
                            <Check className="w-5 h-5 text-green-600" />
                          ) : (
                            <Copy className="w-5 h-5 text-gray-600" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Expiry Date */}
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <Clock className="w-4 h-4" />
                      <span>Expires: {new Date(coupon.expiryDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                    </div>

                    {/* Terms and Conditions */}
                    <details className="mb-4">
                      <summary className="text-sm text-purple-600 cursor-pointer hover:text-purple-700 font-medium">
                        Terms & Conditions
                      </summary>
                      <ul className="mt-2 text-xs text-gray-600 space-y-1 pl-4">
                        {coupon.termsAndConditions.map((term, index) => (
                          <li key={index} className="list-disc">{term}</li>
                        ))}
                      </ul>
                    </details>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleApplyCoupon(coupon)}
                        className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors font-semibold"
                      >
                        Apply Coupon
                      </button>
                      <button
                        onClick={() => showSuccess(`Coupon "${coupon.code}" saved to favorites!`)}
                        className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        title="Save to favorites"
                      >
                        <Star className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Never Miss a Deal!</h3>
            <p className="text-lg text-purple-100 mb-6">
              Subscribe to our newsletter and get exclusive coupons delivered to your inbox
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                onClick={() => showSuccess('Successfully subscribed to newsletter!')}
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Tag className="w-6 h-6" />
                <h4 className="text-xl font-bold">Spacez</h4>
              </div>
              <p className="text-gray-400">Your one-stop destination for the best deals and coupons.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => showSuccess('Navigating to About page!')} className="hover:text-white">About Us</button></li>
                <li><button onClick={() => showSuccess('Navigating to Contact page!')} className="hover:text-white">Contact</button></li>
                <li><button onClick={() => showSuccess('Navigating to FAQ page!')} className="hover:text-white">FAQ</button></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Categories</h5>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => showSuccess('Viewing Electronics category!')} className="hover:text-white">Electronics</button></li>
                <li><button onClick={() => showSuccess('Viewing Fashion category!')} className="hover:text-white">Fashion</button></li>
                <li><button onClick={() => showSuccess('Viewing Food category!')} className="hover:text-white">Food</button></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Legal</h5>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => showSuccess('Viewing Privacy Policy!')} className="hover:text-white">Privacy Policy</button></li>
                <li><button onClick={() => showSuccess('Viewing Terms of Service!')} className="hover:text-white">Terms of Service</button></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Spacez. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}
