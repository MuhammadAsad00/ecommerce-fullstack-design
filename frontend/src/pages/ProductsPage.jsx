import React, { useContext, useState, useEffect} from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import {
  ChevronRight,
  ChevronDown,
  Grid,
  List,
  ChevronLeft,
  Search,
  Filter,
  X,
  ShoppingCart,
  User,
} from "lucide-react";
import Sidebar from "../components/products/Sidebar.jsx";
import ProductCard from "../components/products/ProductCard.jsx";
import { shopDataContext } from "../context/ShopContext.jsx";

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [view, setView] = useState("list");
  const navigate = useNavigate();
  const { products, loading, serverUrl, filterProduct } =
    useContext(shopDataContext);
  const [searchInput, setSearchInput] = useState(
    searchParams.get("search") || ""
  );

  // Listen for URL changes and trigger your Context's filterProduct
  useEffect(() => {
    // Convert URLSearchParams into a clean object for your POST request
    const currentFilters = {
      search: searchParams.get("search") || "",
      category: searchParams.get("category") || "",
      minPrice: searchParams.get("minPrice") || "",
      maxPrice: searchParams.get("maxPrice") || "",
      sortBy: searchParams.get("sortBy") || "newest",
    };

    // Call the function from your ShopContext
    filterProduct(currentFilters);
  }, [searchParams]); // Re-runs every time the URL changes

  // 2. Helper to update the URL
  const updateURL = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) params.set(key, value);
    else params.delete(key);
    setSearchParams(params);
  };

  // Sortby price 
  const handleSortChange = (e) => {
  const params = new URLSearchParams(searchParams);
  params.set("sortBy", e.target.value);
  setSearchParams(params);
};

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* MOBILE TOP NAVIGATION */}
      <div className="md:hidden bg-white p-4 sticky top-0 z-20">
        {/* Back button, Title, Cart, User */}
        <div className="flex items-center justify-between mb-4">
          <div onClick={() => navigate("/")} className="flex items-center">
            <ChevronLeft
              size={24}
              className="mr-4 text-gray-800 cursor-pointer"
            />
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
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" && updateURL("search", searchInput)
            }
            placeholder="Search"
            className="w-full bg-gray-100 border border-gray-200 rounded-lg py-2 px-10 focus:outline-none"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>

        {/* Scrolling Category Tabs */}
        <div className="flex space-x-2 overflow-x-auto no-scrollbar pb-2">
          {/* Add "All" so users can reset the category filter */}
          {["All", "Fashion", "Life Style", "Electronics", "Accessories"].map(
            (tab) => {
              // Check if this tab is the currently active one in the URL
              const currentCategory = searchParams.get("category") || "All";
              const isActive = currentCategory === tab;

              return (
                <button
                  key={tab}
                  onClick={() => {
                    const params = new URLSearchParams(searchParams);
                    if (tab === "All") {
                      params.delete("category"); // Remove filter if "All" is clicked
                    } else {
                      params.set("category", tab);
                    }
                    setSearchParams(params);
                  }}
                  className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-blue-50 text-blue-600 border border-blue-200 font-semibold"
                      : "bg-gray-100 text-gray-600 border border-transparent hover:bg-gray-200"
                  }`}
                >
                  {tab}
                </button>
              );
            }
          )}
        </div>
      </div>

      {/* Breadcrumb - Hidden on mobile */}
      <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-gray-600">
        Home <ChevronRight size={12} className="inline mx-1" /> Products{" "}
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
              {/* MOBILE VIEW CONTROLS */}
              <div className="flex md:hidden space-x-2 w-full">
                {/* Functional Sort Select for Mobile */}
                <div className="flex-1 relative">
                  <select
                    className="w-full appearance-none border border-gray-300 rounded-md py-2 pl-3 pr-8 text-sm font-medium bg-white"
                    onChange={handleSortChange}
                    value={searchParams.get("sortBy") || "newest"}
                  >
                    <option value="newest">Sort: Newest</option>
                    <option value="price_asc">Price: Low to High</option>
                    <option value="price_desc">Price: High to Low</option>
                    <option value="oldest">Oldest</option>
                  </select>
                  <ChevronDown
                    size={14}
                    className="absolute right-2 top-3 text-gray-400 pointer-events-none"
                  />
                </div>

                {/* Filter Button (Can be used to toggle a Mobile Sidebar Modal later) */}
                <button className="flex-1 border border-gray-300 rounded-md py-2 flex justify-center items-center text-sm font-medium">
                  Filter {searchParams.get("category") && "(1)"}{" "}
                  <Filter size={16} className="ml-1" />
                </button>

                {/* Grid/List Toggle */}
                <div className="flex border border-gray-300 rounded overflow-hidden">
                  <button
                    className={`p-2 ${
                      view === "grid"
                        ? "bg-blue-600 text-white"
                        : "bg-white text-gray-600"
                    }`}
                    onClick={() => setView("grid")}
                  >
                    <Grid size={18} />
                  </button>
                  <button
                    className={`p-2 border-l border-gray-300 ${
                      view === "list"
                        ? "bg-blue-600 text-white"
                        : "bg-white text-gray-600"
                    }`}
                    onClick={() => setView("list")}
                  >
                    <List size={18} />
                  </button>
                </div>
              </div>

              {/* DESKTOP VIEW CONTROLS */}
              <div className="hidden md:flex items-center justify-between w-full">
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-500">Sort by:</span>
                  <select
                    className="bg-white border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-600 outline-none focus:ring-1 focus:ring-blue-500"
                    onChange={handleSortChange}
                    value={searchParams.get("sortBy") || "newest"}
                  >
                    <option value="newest">Newest Arrivals</option>
                    <option value="price_asc">Price: Low to High</option>
                    <option value="price_desc">Price: High to Low</option>
                    <option value="oldest">Oldest</option>
                  </select>
                </div>

                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-500 mr-2">View:</span>
                  <div className="flex border border-gray-300 rounded-md overflow-hidden bg-white">
                    <button
                      className={`p-2 transition-colors ${
                        view === "grid"
                          ? "bg-gray-100 text-blue-600"
                          : "text-gray-400 hover:text-gray-600"
                      }`}
                      onClick={() => setView("grid")}
                    >
                      <Grid size={20} />
                    </button>
                    <button
                      className={`p-2 border-l border-gray-300 transition-colors ${
                        view === "list"
                          ? "bg-gray-100 text-blue-600"
                          : "text-gray-400 hover:text-gray-600"
                      }`}
                      onClick={() => setView("list")}
                    >
                      <List size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Loading State UI */}
            {loading ? (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                <p className="mt-4 text-gray-500">
                  Fetching latest products...
                </p>
              </div>
            ) : (products?.length > 0) ? (
              <div
                className={
                  view === "grid"
                    ? "grid grid-cols-2 md:grid-cols-3 gap-4"
                    : "space-y-4"
                }
              >
                {products?.slice(0, 6).map((product) => (
                  <ProductCard
                    key={product._id}
                    product={product}
                    view={view}
                    serverUrl={serverUrl}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white p-10 text-center rounded-lg border">
                <p className="text-gray-500">
                  No products match your criteria.
                </p>
              </div>
            )}

            {/* Mobile "You may also like" section */}
            <div className="md:hidden mt-8 px-4">
              <h3 className="text-lg font-bold mb-4">You may also like</h3>
              <div className="flex space-x-4 overflow-x-auto pb-4 no-scrollbar">
                {products?.slice(0, 4).map((p) => (
                  <div
                    key={p._id}
                    className="min-w-35 bg-white border rounded-lg p-2"
                  >
                    <img
                      src={p.image}
                      className="w-full h-24 object-contain mb-2"
                    />
                    <div className="text-sm">${p.price}</div>
                    <div className="text-xs text-gray-500 line-clamp-2">
                      {p.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {!loading && products?.length > 0 && (
              <div className="mt-10 flex justify-center md:justify-end">
                {/* Pagination - Desktop Only */}
                <div className="hidden md:flex mt-8 justify-end items-center space-x-2">
                  <div className="relative">
                    <select className="appearance-none bg-white border border-gray-300 rounded px-3 py-1 pr-8 cursor-pointer focus:outline-none text-sm text-gray-600">
                      <option>Show 10</option>
                      <option>Show 20</option>
                      <option>Show 50</option>
                    </select>
                    <ChevronDown
                      size={14}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                    />
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
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
