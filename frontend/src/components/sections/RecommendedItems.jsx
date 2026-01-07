import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { shopDataContext } from "../../context/ShopContext";

const RecommendedItems = () => {
  const { products, loading, serverUrl } = useContext(shopDataContext);

  const ImageUrl = (imgName) => `${serverUrl}/uploads/${imgName}`;

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-64 bg-gray-200 animate-pulse rounded-lg"></div>
        ))}
      </div>
    );
  }

  // If products is empty, or the slice index is too high, show nothing or a message
  const recommended = products.length > 5 ? products.slice(0, 10) : products;

  if (recommended.length === 0) return null;

  return (
    <section className="my-8">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Recommended items</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {recommended.map((item) => (
          <Link
            to={`/products/${item._id}`}
            key={item._id}
            className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all flex flex-col gap-2 h-full"
          >
            <div className="aspect-square rounded-md overflow-hidden bg-gray-50 mb-2">
              <img
                src={ImageUrl(item.image)}
                alt={item.name}
                className="w-full h-full object-contain"
                onError={(e) => (e.target.src = "https://via.placeholder.com/200")}
              />
            </div>
            <span className="font-bold text-lg text-gray-800">${item.price}</span>
            <p className="text-gray-500 text-sm line-clamp-2 min-h-10">
              {item.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RecommendedItems;