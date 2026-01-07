import React, { useState } from "react"; // Added missing import
import { useSearchParams } from "react-router-dom";
import { X } from "lucide-react";

const Sidebar = ({ isMobile, onClose }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [price, setPrice] = useState({
    min: searchParams.get("minPrice") || "",
    max: searchParams.get("maxPrice") || ""
  });

  const updateFilters = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) params.set(key, value);
    else params.delete(key);
    setSearchParams(params);
    if (isMobile) onClose(); // Auto-close on mobile after selection
  };

  const handleApplyPrice = () => {
    const params = new URLSearchParams(searchParams);
    if (price.min) params.set("minPrice", price.min); else params.delete("minPrice");
    if (price.max) params.set("maxPrice", price.max); else params.delete("maxPrice");
    setSearchParams(params);
    if (isMobile) onClose();
  };

  const handleClearAll = () => {
    setSearchParams({}); // Wipes all URL params
    setPrice({ min: "", max: "" });
    if (isMobile) onClose();
  };

  const categories = ["Electronics", "Accessories", "Fashion", "Life Style"];

  return (
    <aside className={`${isMobile ? "w-full p-6" : "w-64 pr-6"}`}>
      {/* Mobile Header */}
      {isMobile && (
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Filters</h2>
          <button onClick={onClose}><X size={24} /></button>
        </div>
      )}

      <div className="mb-6">
        <h3 className="font-semibold mb-3 text-gray-900">Category</h3>
        <ul className="space-y-3 text-gray-600">
          {categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => updateFilters("category", cat)}
                className={`w-full text-left transition-colors hover:text-blue-600 ${
                  searchParams.get("category") === cat ? "text-blue-600 font-bold" : ""
                }`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="font-semibold mb-3 text-gray-900">Price range</h3>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            placeholder="Min"
            value={price.min}
            onChange={(e) => setPrice({ ...price, min: e.target.value })}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none"
          />
          <span className="text-gray-400">-</span>
          <input
            type="number"
            placeholder="Max"
            value={price.max}
            onChange={(e) => setPrice({ ...price, max: e.target.value })}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none"
          />
        </div>
        <button
          onClick={handleApplyPrice}
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition-colors"
        >
          Apply Price
        </button>
      </div>

      <button 
        onClick={handleClearAll}
        className="w-full text-sm text-red-500 font-medium hover:underline"
      >
        Clear All Filters
      </button>
    </aside>
  );
};

export default Sidebar;