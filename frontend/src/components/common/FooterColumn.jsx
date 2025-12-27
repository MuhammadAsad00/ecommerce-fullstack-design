import React from "react";

const FooterColumn = ({ title, links }) => {
  return (
    <div className="col-span-1">
      <h5 className="font-bold text-gray-800 mb-3">{title}</h5>
      <ul className="space-y-2 text-gray-500">
        {links.map((l) => (
          <li key={l} className="hover:text-blue-600 cursor-pointer">
            {l}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
