import React from "react";

const ServiceCard = ({ icon: Icon, title, image }) => {
  return (
    <div className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all">
      
      {/* Background Image */}
      <div
        className="h-36 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Light overlay (IMPORTANT) */}
        <div className="absolute inset-0 bg-gray-600/40"></div>

        {/* Floating Icon */}
        <div className="absolute -bottom-6 left-4 bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow">
          <Icon size={22} />
        </div>
      </div>

      {/* Content */}
      <div className="pt-8 pb-4 px-4">
        <h4 className="font-semibold text-gray-800 leading-snug">
          {title}
        </h4>
      </div>
    </div>
  );
};

export default ServiceCard;
