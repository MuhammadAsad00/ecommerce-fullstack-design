import React from "react";
import { ChevronDown } from "lucide-react";
import RatingStars from "../common/RatingStars";

const Sidebar = () => {
  return (
    <aside className="w-64 pr-6 hidden md:block">
      {/* Category */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-3 flex justify-between items-center">
          Category <ChevronDown size={16} />
        </h3>
        <ul className="space-y-2 text-gray-600">
          <li><a href="#" className="text-blue-600">Mobile accessory</a></li>
          <li><a href="#">Electronics</a></li>
          <li><a href="#">Smartphones</a></li>
          <li><a href="#">Modern tech</a></li>
          <li><a href="#" className="text-sm text-blue-500">See all</a></li>
        </ul>
      </div>

      {/* Brands */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-3 flex justify-between items-center">
          Brands <ChevronDown size={16} />
        </h3>
        <ul className="space-y-2">
          {['Samsung', 'Apple', 'Huawei', 'Pocco', 'Lenovo'].map((brand) => (
            <li key={brand}>
              <label className="flex items-center space-x-2 text-gray-600 cursor-pointer">
                <input type="checkbox" className="form-checkbox rounded text-blue-600" />
                <span>{brand}</span>
              </label>
            </li>
          ))}
          <li><a href="#" className="text-sm text-blue-500">See all</a></li>
        </ul>
      </div>

      {/* Features */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-3 flex justify-between items-center">
          Features <ChevronDown size={16} />
        </h3>
        <ul className="space-y-2">
          {['Metallic', 'Plastic cover', '8GB Ram', 'Super power', 'Large Memory'].map((feature) => (
            <li key={feature}>
              <label className="flex items-center space-x-2 text-gray-600 cursor-pointer">
                <input type="checkbox" className="form-checkbox rounded text-blue-600" />
                <span>{feature}</span>
              </label>
            </li>
          ))}
          <li><a href="#" className="text-sm text-blue-500">See all</a></li>
        </ul>
      </div>

      {/* Price range */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-3 flex justify-between items-center">
          Price range <ChevronDown size={16} />
        </h3>
        <div className="flex items-center space-x-4 mb-4">
          <input type="range" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
        </div>
        <div className="flex items-center space-x-4">
          <div>
            <label className="text-sm text-gray-600">Min</label>
            <input type="number" placeholder="0" className="w-full border border-gray-300 rounded px-2 py-1" />
          </div>
          <div>
            <label className="text-sm text-gray-600">Max</label>
            <input type="number" placeholder="99999" className="w-full border border-gray-300 rounded px-2 py-1" />
          </div>
        </div>
        <button className="mt-4 w-full bg-white border border-gray-300 text-blue-600 px-4 py-2 rounded hover:bg-gray-50">
          Apply
        </button>
      </div>

      {/* Condition */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-3 flex justify-between items-center">
          Condition <ChevronDown size={16} />
        </h3>
        <ul className="space-y-2">
          {['Any', 'Refurbished', 'Brand new', 'Old items'].map((condition, index) => (
            <li key={condition}>
              <label className="flex items-center space-x-2 text-gray-600 cursor-pointer">
                <input type="radio" name="condition" defaultChecked={index === 0} className="form-radio text-blue-600" />
                <span>{condition}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Ratings */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-3 flex justify-between items-center">
          Ratings <ChevronDown size={16} />
        </h3>
        <ul className="space-y-2">
          {[5, 4, 3, 2].map((rating) => (
            <li key={rating}>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="form-checkbox rounded text-blue-600" defaultChecked={rating === 5} />
                <RatingStars rating={rating * 2} />
              </label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;