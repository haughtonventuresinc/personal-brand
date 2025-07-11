import React, { useState } from 'react';
import { ArrowLeft, Instagram, Twitter } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const services = [
    {
      id: 1,
      title: "MUSIC CREATION MENTORSHIP",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Man teaching on whiteboard",
      page: "sports-betting"
    },
    {
      id: 2,
      title: "JOIN THE MUSIC COMMUNITY",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Group of people talking casually",
      page: "chat"
    },
    {
      id: 3,
      title: "GUIDES",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Man sitting on couch talking",
      page: "guides"
    },
    {
      id: 4,
      title: "YOUTUBE",
      image: "https://images.pexels.com/photos/3800517/pexels-photo-3800517.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Man with luxury cars",
      page: "youtube",
      link: "https://www.youtube.com/@MosesStoneTV/videos"
    }
  ];

  const handleServiceClick = (page: string) => {
    setCurrentPage(page);
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  if (currentPage === 'chat') {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-8">
                <button 
                  onClick={handleBackToHome}
                  className="text-xl font-black tracking-wider text-gray-900 hover:text-gray-700 transition-colors"
                >
                  MOSES STONE
                </button>
              </div>
              <nav className="flex space-x-8">
                <button 
                  onClick={handleBackToHome}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  HOME
                </button>
                <button className="text-sm font-medium text-gray-900">
                  JOIN THE MUSIC COMMUNITY
                </button>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
              <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h1 className="text-4xl tracking-tight font-black text-gray-900 sm:text-5xl md:text-6xl">
                      <span className="block">Join the</span>
                      <span className="block">Music Creation</span>
                      <span className="block text-gray-600">Community</span>
                    </h1>
                    <p className="mt-6 text-lg text-gray-600 max-w-md">
                      Get exclusive access to music collaboration, live discussions, and a supportive community of music creators.
                    </p>
                    <div className="mt-8">
                      <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
                        Start Free Trial
                      </button>
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      className="w-full h-96 object-cover rounded-lg shadow-xl"
                      src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Group of people discussing sports betting strategies"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Membership Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xl">G</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 flex items-center">
                        Music Creation Community Membership
                        <span className="ml-2 text-blue-500">✓</span>
                      </h3>
                      <p className="text-sm text-gray-600">⭐ (1037) members</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">3 day free trial</div>
                    <div className="text-lg font-bold text-gray-900">$25.00 per month</div>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">Start Creating with the Community</h4>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl">🎹</span>
                    <span className="text-2xl">🎤</span>
                    <span className="text-2xl">🎧</span>
                    <span className="text-2xl">🥁</span>
                    <span className="text-2xl">🎸</span>
                    <span className="text-sm text-gray-600 ml-2">5 creative tools included</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Daily music prompts and creative challenges</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Live chat with music mentors and creators</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Real-time feedback on your tracks</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Access to exclusive production resources</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Weekly music critique and growth sessions</span>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold text-gray-900">Total due today</span>
                    <span className="text-2xl font-bold text-gray-900">$25.00</span>
                  </div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-sm text-gray-600">Recurring subtotal after 3 day trial</span>
                    <span className="text-sm text-gray-900">$25.00 per month</span>
                  </div>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg text-lg transition-colors">
                    Start 3-Day Free Trial
                  </button>
                  
                  <p className="text-xs text-gray-500 text-center mt-4">
                    Cancel anytime. No commitment required during trial period.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              What Our Members Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                    M
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold text-gray-900">Mike R.</div>
                    <div className="text-sm text-gray-600">Member since 2023</div>
                  </div>
                </div>
                <p className="text-gray-700">
                  "The daily picks have been incredibly accurate. I've seen consistent profits since joining the community."
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                    S
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold text-gray-900">Sarah L.</div>
                    <div className="text-sm text-gray-600">Member since 2024</div>
                  </div>
                </div>
                <p className="text-gray-700">
                  "The community aspect is amazing. Learning from other successful bettors has improved my game significantly."
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                    J
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold text-gray-900">James K.</div>
                    <div className="text-sm text-gray-600">Member since 2023</div>
                  </div>
                </div>
                <p className="text-gray-700">
                  "Victor's insights are gold. The free trial convinced me immediately - best investment I've made."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-gray-500 mb-4 md:mb-0">
                © 2025 MOSES STONE
              </div>
              <div className="flex space-x-6 text-sm text-gray-500 mb-4 md:mb-0">
                <a href="#" className="hover:text-gray-700 transition-colors">FULFILLMENT POLICY</a>
                <a href="#" className="hover:text-gray-700 transition-colors">REFUND POLICY</a>
                <a href="#" className="hover:text-gray-700 transition-colors">TERMS</a>
                <a href="#" className="hover:text-gray-700 transition-colors">PRIVACY</a>
              </div>
              <div className="flex space-x-4">
                <Instagram className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  if (currentPage === 'guides') {
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-8">
                <button 
                  onClick={handleBackToHome}
                  className="flex items-center space-x-2 text-gray-900 hover:text-gray-700 transition-colors"
                >
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">V</span>
                  </div>
                  <span className="font-semibold">Moses Stone</span>
                </button>
              </div>
              <div className="flex items-center space-x-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <button className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 max-w-4xl">
              Business and Marketing tips from a proven source and decorated young entrepreneur.
            </h1>
            
            <div className="flex space-x-8 mb-12">
              <button className="px-6 py-2 border border-gray-900 rounded-full text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors">
                Products
              </button>
              <button className="px-6 py-2 text-gray-600 font-medium hover:text-gray-900 transition-colors">
                Posts
              </button>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-8">
                  <div className="mb-6">
                    <p className="text-sm text-gray-600 mb-4">1-18 of 44 products</p>
                    <input
                      type="text"
                      placeholder="Search products"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="border-b border-gray-200 pb-4">
                      <button className="flex items-center justify-between w-full text-left font-medium text-gray-900">
                        Sort by
                        <span className="text-gray-400">›</span>
                      </button>
                    </div>
                    
                    <div className="border-b border-gray-200 pb-4">
                      <button className="flex items-center justify-between w-full text-left font-medium text-gray-900">
                        Tags
                        <span className="text-gray-400">›</span>
                      </button>
                    </div>
                    
                    <div className="border-b border-gray-200 pb-4">
                      <button className="flex items-center justify-between w-full text-left font-medium text-gray-900">
                        Contains
                        <span className="text-gray-400">›</span>
                      </button>
                    </div>
                    
                    <div>
                      <button className="flex items-center justify-between w-full text-left font-medium text-gray-900">
                        Price
                        <span className="text-gray-400">›</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Grid */}
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Social Media Marketing Guide */}
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-square bg-gradient-to-br from-blue-50 to-green-50 p-6 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white rounded-lg shadow-md mx-auto mb-4 flex items-center justify-center">
                          <div className="grid grid-cols-2 gap-1">
                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                            <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          </div>
                        </div>
                        <div className="text-2xl font-bold text-green-600 mb-2">📈</div>
                        <div className="text-lg font-bold text-gray-900">$</div>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-gray-500 mb-2">by Moses Stone</p>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Social Media Marketing: Scaling Your Business 101 & "Keeping it Real"
                      </h3>
                      <div className="flex items-center">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm text-gray-600 ml-1">4.1 (31)</span>
                      </div>
                    </div>
                  </div>

                  {/* AirBnB Guide */}
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-square bg-gradient-to-br from-gray-900 to-gray-700 p-6 flex items-center justify-center relative">
                      <div className="text-white text-center">
                        <div className="text-4xl font-bold mb-2">Airbnb</div>
                        <div className="text-sm opacity-75">SUCCESSFUL</div>
                        <div className="text-sm opacity-75">AIRBNB</div>
                        <div className="absolute bottom-4 right-4 text-xs opacity-60">
                          By: Kelechi Ezeani
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        How to Start a Successful AirBnB Business
                      </h3>
                      <div className="flex items-center">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm text-gray-600 ml-1">4.3 (11)</span>
                      </div>
                    </div>
                  </div>

                  {/* Car Rental Guide */}
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-square bg-gradient-to-br from-orange-400 to-red-500 p-6 flex items-center justify-center relative">
                      <div className="text-white text-center">
                        <div className="text-3xl font-bold mb-2">RENTAL</div>
                        <div className="text-sm opacity-75">**BEGINNER**</div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        **BEGINNER** Car Rental Guide: How to Make Money on Turo
                      </h3>
                      <div className="flex items-center">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm text-gray-600 ml-1">4.8 (21)</span>
                      </div>
                    </div>
                  </div>

                  {/* Additional Product Placeholders */}
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-square bg-gradient-to-br from-purple-400 to-pink-400 p-6 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-2xl font-bold mb-2">💼</div>
                        <div className="text-lg font-semibold">Business</div>
                        <div className="text-sm opacity-75">Strategy</div>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-gray-500 mb-2">by Moses Stone</p>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Advanced Business Strategy & Growth Hacking
                      </h3>
                      <div className="flex items-center">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm text-gray-600 ml-1">4.6 (18)</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-square bg-gradient-to-br from-indigo-400 to-blue-500 p-6 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-2xl font-bold mb-2">📱</div>
                        <div className="text-lg font-semibold">Digital</div>
                        <div className="text-sm opacity-75">Marketing</div>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-gray-500 mb-2">by Moses Stone</p>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Complete Digital Marketing Masterclass
                      </h3>
                      <div className="flex items-center">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm text-gray-600 ml-1">4.7 (25)</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-square bg-gradient-to-br from-green-400 to-teal-500 p-6 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-2xl font-bold mb-2">💰</div>
                        <div className="text-lg font-semibold">Passive</div>
                        <div className="text-sm opacity-75">Income</div>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-gray-500 mb-2">by Moses Stone</p>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Building Multiple Passive Income Streams
                      </h3>
                      <div className="flex items-center">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm text-gray-600 ml-1">4.5 (33)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (currentPage === 'sports-betting') {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-8">
                <button 
                  onClick={handleBackToHome}
                  className="text-xl font-black tracking-wider text-gray-900 hover:text-gray-700 transition-colors"
                >
                  Moses Stone
                </button>
              </div>
              <nav className="flex space-x-8">
                <button 
                  onClick={handleBackToHome}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  HOME
                </button>
                <button className="text-sm font-medium text-gray-900">
                  SPORTS BETTING
                </button>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
              <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h1 className="text-4xl tracking-tight font-black text-gray-900 sm:text-5xl md:text-6xl">
                      <span className="block">Private Music</span>
                      <span className="block">Creation Mentorship</span>
                      <span className="block text-gray-600">w/ Moses Stone</span>
                    </h1>
                    <p className="mt-6 text-lg text-gray-600 max-w-md">
                      Unlock your music production potential with expert guidance - Exclusive music creation mentorship sessions with Moses Stone.
                    </p>
                    <div className="mt-8">
                      <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
                        View Sports Packages
                      </button>
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      className="w-full h-96 object-cover rounded-lg shadow-xl"
                      src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Moses Stone teaching music creation strategies"
                    />
                    <meta name="description" content="Moses Stone - Music Creation Mentorship, Guides, and Premium Content" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* NBA, NFL, NHL Package */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold text-gray-600 mb-4">
                    NBA, NFL, NHL Mentorship
                  </h3>
                  <div className="text-5xl font-bold text-gray-800 mb-6">
                    $299
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">All Recordings</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">Tests</span>
                  </div>
                </div>

                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-lg transition-colors">
                  Buy Now
                </button>
              </div>

              {/* MLB Package */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold text-gray-600 mb-4">
                    MLB Exclusive Mentorship
                  </h3>
                  <div className="text-5xl font-bold text-gray-800 mb-6">
                    $199
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">8 Recordings</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">Sports Course Outline</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">MLB Foundation Calendar</span>
                  </div>
                </div>

                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-lg transition-colors">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-gray-500 mb-4 md:mb-0">
                © 2025 Moses Stone
              </div>
              <div className="flex space-x-6 text-sm text-gray-500 mb-4 md:mb-0">
                <a href="#" className="hover:text-gray-700 transition-colors">FULFILLMENT POLICY</a>
                <a href="#" className="hover:text-gray-700 transition-colors">REFUND POLICY</a>
                <a href="#" className="hover:text-gray-700 transition-colors">TERMS</a>
                <a href="#" className="hover:text-gray-700 transition-colors">PRIVACY</a>
              </div>
              <div className="flex space-x-4">
                <Instagram className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  // Home Page
  return (
    <div className="min-h-screen bg-black text-white font-bold">
      {/* Header */}
      <header className="absolute top-0 left-0 z-10 p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-black tracking-wider">
          Moses Stone
        </h1>
      </header>

      {/* Main Grid */}
      <main className="h-screen grid grid-cols-2 grid-rows-2">
        {services.map((service) => (
  service.page === "youtube" ? (
    <a
      key={service.id}
      href={service.link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative h-full group cursor-pointer overflow-hidden block"
      tabIndex={0}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
        style={{
          backgroundImage: `url(${service.image})`,
        }}
      />
      {/* Base Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30" />
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-center text-white tracking-wider transform group-hover:scale-105 transition-all duration-500 group-hover:text-opacity-100 text-opacity-90">
          {service.title}
        </h2>
      </div>
      {/* Hover Effect Indicator */}
      <div className="absolute bottom-8 left-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="w-12 h-0.5 bg-white" />
      </div>
    </a>
  ) : (
    <div
      key={service.id}
      onClick={() => handleServiceClick(service.page)}
      className="relative h-full group cursor-pointer overflow-hidden"
      tabIndex={0}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
        style={{
          backgroundImage: `url(${service.image})`,
        }}
      />
      {/* Base Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30" />
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-center text-white tracking-wider transform group-hover:scale-105 transition-all duration-500 group-hover:text-opacity-100 text-opacity-90">
          {service.title}
        </h2>
      </div>
      {/* Hover Effect Indicator */}
      <div className="absolute bottom-8 left-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="w-12 h-0.5 bg-white" />
      </div>
    </div>
  )
))}
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8 text-center z-10">
        <p className="text-xs text-gray-300 font-medium tracking-widest">
          FULFILLMENT POLICY / REFUND POLICY
        </p>
      </footer>
    </div>
  );
}

export default App;