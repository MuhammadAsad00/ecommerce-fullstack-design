import React from "react";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";


const ProductCard = ({ product, view, serverUrl}) => {
  const isGrid = view === "grid";
  const imageUrl = `${serverUrl}/uploads/${product.image}`;
  return (
   <div className={`bg-white border border-gray-200 rounded-lg hover:shadow-sm transition-shadow duration-200 overflow-hidden
      ${isGrid ? "flex flex-col p-3" : "flex p-3"}`}>
      
      {/* Product Image */}
      <Link to={`/product/${product._id}`} className={`shrink-0 flex items-center justify-center 
        ${isGrid ? "w-full h-32 mb-2" : "w-24 h-24 sm:w-48 sm:h-48 mr-4"}`}>
        <img src={imageUrl} alt={product.name} className="max-w-full max-h-full object-contain" />
      </Link>

      {/* Product Info */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="flex justify-between items-start">
          <h3 className={`text-gray-800 font-normal leading-snug hover:text-blue-600 cursor-pointer
            ${isGrid ? "text-sm line-clamp-2" : "text-sm sm:text-base"}`}>
            {product.name}
          </h3>
          {/* Heart icon only on desktop or specific grid view */}
          <button className="hidden md:block text-gray-400 hover:text-red-500">
            <Heart size={20} />
          </button>
        </div>

        <div className="mt-1">
          <span className="text-base sm:text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
        </div>

        {/* Hide description and details link on mobile to match image */}
        {!isGrid && (
          <>
            <p className="hidden md:block mt-2 text-sm text-gray-600 line-clamp-2">{product.description}</p>
            <div className="hidden md:block mt-2">
              <a href="#" className="text-blue-600 font-medium hover:underline text-sm">View details</a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard;