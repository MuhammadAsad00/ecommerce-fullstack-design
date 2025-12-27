import React from "react";

const CountryItem = ({ flag, name, domain }) => {
  return (
    <div className="flex items-center gap-3">
      <img
        src={flag}
        alt={name}
        className="w-8 h-6 object-cover rounded-sm border border-gray-200"
      />

      <div className="leading-tight">
        <p className="text-sm font-medium text-gray-800">{name}</p>
        <p className="text-xs text-gray-500">{domain}</p>
      </div>
    </div>
  );
};

export default CountryItem;
