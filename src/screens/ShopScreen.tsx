import React, { useState } from 'react';
import { Bell, Filter, Heart, ShoppingCart, Sparkles, Gift, User, Search } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import { mockProducts } from '../data/mockData';

const categories = [
  { id: 'all', name: 'All', icon: '🐾', color: 'bg-primary' },
  { id: 'food', name: 'Food', icon: '🍖', color: 'bg-secondary' },
  { id: 'toys', name: 'Toys', icon: '🎾', color: 'bg-accent' },
  { id: 'grooming', name: 'Grooming', icon: '✂️', color: 'bg-success' },
  { id: 'medicine', name: 'Medicine', icon: '💊', color: 'bg-warning' },
];

const ShopScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    if (categoryId === 'all') {
      setFilteredProducts(mockProducts);
    } else {
      setFilteredProducts(mockProducts.filter(product => 
        product.category.toLowerCase() === categoryId
      ));
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = mockProducts.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.brand.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header */}
      <div className="bg-white px-4 py-3 flex justify-between items-center shadow-sm">
        <div>
          <h1 className="text-xl font-bold text-primary">PetSphere</h1>
        </div>
        <div className="flex items-center space-x-3">
          <button className="relative p-2 bg-red-50 rounded-xl">
            <Heart size={18} className="text-primary" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
          </button>
          <button className="relative p-2 bg-blue-50 rounded-xl">
            <ShoppingCart size={18} className="text-accent" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
          </button>
          <button className="p-2 bg-gray-100 rounded-xl">
            <User size={18} className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Hero Header */}
      <div 
        className="relative bg-gradient-to-r from-primary to-red-400 px-4 py-6"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-primary bg-opacity-90"></div>
        <div className="relative z-10">
          <div className="flex justify-between items-center mb-5">
            <div>
              <h2 className="text-white text-2xl font-bold">Hello Pet Parent! 🐕</h2>
              <p className="text-white text-sm opacity-90 mt-1">Let's find something amazing for your furry friend</p>
            </div>
            <button className="p-3 bg-yellow-100 rounded-xl">
              <Bell size={20} className="text-yellow-600" />
            </button>
          </div>
          
          {/* Search Bar */}
          <div className="flex items-center bg-white bg-opacity-90 rounded-2xl px-4 py-3 shadow-lg">
            <Search size={18} className="text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Search for treats, toys, and more..."
              className="flex-1 bg-transparent outline-none text-gray-700"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
      
      {/* Categories */}
      <div className="bg-white px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex space-x-3 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategorySelect(category.id)}
                className={`flex items-center px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  selectedCategory === category.id
                    ? `${category.color} text-white`
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                <span className="text-sm font-semibold">{category.name}</span>
              </button>
            ))}
          </div>
          <button className="p-2 bg-gray-100 rounded-xl ml-3">
            <Filter size={18} className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-4">
        {/* Promotion Banner */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-5 my-4 flex items-center justify-between">
          <div className="flex items-center">
            <Sparkles size={22} className="text-yellow-300 mr-3" />
            <div>
              <h3 className="text-white font-bold text-lg">🎉 Flash Sale!</h3>
              <p className="text-white text-sm opacity-90">Up to 50% off on premium pet food</p>
            </div>
          </div>
          <button className="bg-white text-indigo-600 px-4 py-2 rounded-full font-bold text-sm">
            Shop Now
          </button>
        </div>

        {/* Section Header */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800">🌟 Featured Products</h3>
            <p className="text-sm text-gray-600">Handpicked for your pets</p>
          </div>
          <button className="text-primary font-semibold text-sm">See All</button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onPress={() => console.log('Product pressed:', product.name)}
              onAddToCart={() => console.log('Add to cart:', product.name)}
            />
          ))}
        </div>

        {/* Deals Section */}
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <Gift size={24} className="text-primary mr-3" />
            <div>
              <h3 className="text-xl font-bold text-gray-800">🔥 Hot Deals</h3>
              <p className="text-sm text-gray-600">Limited time offers for your furry friends</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {mockProducts.filter(p => p.originalPrice).map((product) => (
              <ProductCard
                key={`deal-${product.id}`}
                product={product}
                onPress={() => console.log('Deal product pressed:', product.name)}
                onAddToCart={() => console.log('Add deal to cart:', product.name)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopScreen;