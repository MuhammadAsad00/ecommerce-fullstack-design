import React, { useState } from "react";
import { ChevronRight, ChevronDown, Grid, List, ChevronLeft, Search, Filter, X, ShoppingCart, User} from "lucide-react";
import Sidebar from "../components/products/Sidebar.jsx";
import ProductCard from "../components/products/ProductCard.jsx";
import { products } from "../components/data/Data.js";
import { useNavigate } from "react-router-dom";



const ProductsPage = () => {
  const [view, setView] = useState('list');
  const navigate = useNavigate();

  return (
<div className="bg-gray-50 min-h-screen font-sans">
      {/* MOBILE TOP NAVIGATION (Updated to match mobile-itemlist.jpg) */}
      <div className="md:hidden bg-white p-4 sticky top-0 z-20">
        {/* New Header Row: Back button, Title, Cart, User */}
        <div className="flex items-center justify-between mb-4">
          <div onClick={() => navigate('/')} className="flex items-center">
            <ChevronLeft size={24} className="mr-4 text-gray-800 cursor-pointer" />
            <h1 className="text-xl font-semibold text-gray-900">Mobile accessory</h1>
          </div>
          <div className="flex items-center space-x-5 text-gray-700">
            <ShoppingCart size={22} />
            <User size={22} />
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-4">
          <input 
            type="text" 
            placeholder="Search" 
            className="w-full bg-gray-100 border border-gray-200 rounded-lg py-2 px-10 focus:outline-none" 
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>

        {/* Scrolling Category Tabs */}
        <div className="flex space-x-2 overflow-x-auto no-scrollbar pb-2">
          {['Tablets', 'Phones', 'Ipads', 'Ipod', 'Accessories'].map((tab, i) => (
            <button key={i} className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap ${i === 0 ? 'bg-blue-50 text-blue-600 border border-blue-200' : 'bg-gray-100 text-gray-600'}`}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Breadcrumb - Hidden on mobile */}
      <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-gray-600">
        Home <ChevronRight size={12} className="inline mx-1"/> Clothings <ChevronRight size={12} className="inline mx-1"/> Men's wear <ChevronRight size={12} className="inline mx-1"/> Summer clothing
      </div>

      <div className="max-w-7xl mx-auto px-0 md:px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex flex-col md:flex-row">
          
          {/* FIX: Hide Sidebar on Mobile to prevent double search/categories */}
          <div className="hidden md:block">
            <Sidebar />
          </div>

          <main className="flex-1 px-4 md:px-0">
            {/* Top Bar / Sort Bar */}
            <div className="bg-white md:border border-gray-200 rounded-lg p-3 mb-4 flex justify-between items-center">
              {/* Desktop Items Count */}
              <p className="hidden md:block text-gray-600">12,911 items in <span className="font-semibold text-gray-900">Mobile accessory</span></p>
              
              {/* Mobile Sort/Filter Buttons */}
              <div className="flex md:hidden space-x-2 w-full">
                <button className="flex-1 border border-gray-300 rounded-md py-2 flex justify-center items-center text-sm font-medium">
                  Sort: Newest <ChevronDown size={16} className="ml-1" />
                </button>
                <button className="flex-1 border border-gray-300 rounded-md py-2 flex justify-center items-center text-sm font-medium">
                  Filter (3) <Filter size={16} className="ml-1" />
                </button>
                <div className="flex border border-gray-300 rounded">
                   <button className={`p-2 ${view === 'grid' ? 'bg-gray-100' : ''}`} onClick={() => setView('grid')}><Grid size={18}/></button>
                   <button className={`p-2 border-l border-gray-300 ${view === 'list' ? 'bg-gray-100' : ''}`} onClick={() => setView('list')}><List size={18}/></button>
                </div>
              </div>

              {/* Desktop View Controls */}
              <div className="hidden md:flex items-center space-x-4">
                <label className="flex items-center space-x-2 cursor-pointer text-gray-600">
                  <input type="checkbox" className="form-checkbox rounded text-blue-600"/>
                  <span>Verified only</span>
                </label>
                <select className="bg-white border border-gray-300 rounded px-4 py-2 text-gray-600">
                  <option>Featured</option>
                </select>
                <div className="flex border border-gray-300 rounded">
                  <button className={`p-2 ${view === 'grid' ? 'bg-gray-100' : ''}`} onClick={() => setView('grid')}><Grid size={20}/></button>
                  <button className={`p-2 border-l border-gray-300 ${view === 'list' ? 'bg-gray-100' : ''}`} onClick={() => setView('list')}><List size={20}/></button>
                </div>
              </div>
            </div>

            {/* Filter Tags (Mobile & Desktop) */}
            <div className="flex flex-wrap gap-2 mb-4 px-4 md:px-0">
              {['Huawei', 'Apple', '64GB'].map(tag => (
                <span key={tag} className="flex items-center border border-blue-400 text-gray-700 px-3 py-1 rounded-md text-sm bg-white">
                  {tag} <X size={14} className="ml-2 text-gray-400" />
                </span>
              ))}
            </div>

            {/* Product list */}
            <div className={view === 'grid' ? "grid grid-cols-2 md:grid-cols-3 gap-3" : "space-y-3"}>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} view={view} />
              ))}
            </div>

            {/* Mobile "You may also like" section */}
            <div className="md:hidden mt-8 px-4">
               <h3 className="text-lg font-bold mb-4">You may also like</h3>
               <div className="flex space-x-4 overflow-x-auto pb-4 no-scrollbar">
                  {products.slice(0, 4).map(p => (
                    <div key={p.id} className="min-w-35 bg-white border rounded-lg p-2">
                      <img src={p.image} className="w-full h-24 object-contain mb-2" />
                      <div className="text-sm font-bold">${p.price}</div>
                      <div className="text-xs text-gray-500 line-clamp-2">{p.title}</div>
                    </div>
                  ))}
               </div>
            </div>

            {/* Pagination - Desktop Only */}
            <div className="hidden md:flex mt-8 justify-end items-center space-x-2">
               <div className="relative">
                  <select className="appearance-none bg-white border border-gray-300 rounded px-3 py-1 pr-8 cursor-pointer focus:outline-none text-sm text-gray-600">
                      <option>Show 10</option>
                      <option>Show 20</option>
                      <option>Show 50</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
              <div className="flex border border-gray-300 rounded bg-white">
                <button className="p-2 text-gray-400 hover:text-gray-600 border-r border-gray-300 disabled:opacity-50">
                  <ChevronLeft size={16} />
                </button>
                <button className="px-4 py-2 text-gray-900 bg-gray-100 font-medium border-r border-gray-300">
                  1
                </button>
                <button className="px-4 py-2 text-gray-600 hover:bg-gray-50 border-r border-gray-300">
                  2
                </button>
                <button className="px-4 py-2 text-gray-600 hover:bg-gray-50 border-r border-gray-300">
                  3
                </button>
                <button className="p-2 text-gray-600 hover:text-gray-900">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;