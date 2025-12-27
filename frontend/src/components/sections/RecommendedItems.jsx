import React from "react";
import { Link } from "react-router-dom";

const RecommendedItems = ({ items }) => {
  return (
    <>
      {/* ================= RECOMMENDED ITEMS ================= */}
      <section>
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Recommended items
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {items.map((item) => (
            <Link
              to={`/products/${item.id}`}
              key={item.id}
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer flex flex-col gap-2"
            >
              <div className="aspect-square rounded-md flex items-center justify-center text-5xl mb-2">
                <img
                  src={item.img}
                  alt={item.desc}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-bold text-gray-800">{item.price}</span>
              <p className="text-gray-500 text-sm leading-snug">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default RecommendedItems;
