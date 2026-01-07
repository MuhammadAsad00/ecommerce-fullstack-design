import { useContext } from "react";
import { ArrowRight } from "lucide-react";
import { shopDataContext } from "../../context/ShopContext";

const ElectronicsGadgets = ({ title, bgImg }) => {
  const { products, loading, serverUrl } = useContext(shopDataContext);
  const ImageUrl = (imgName) => `${serverUrl}/uploads/${imgName}`;

  if (loading) return null; 
  return (
    <div className="bg-white border border-gray-200 rounded-lg flex flex-col lg:flex-row overflow-hidden h-auto lg:h-64">
      {/* Banner Side — Desktop ONLY (unchanged) */}
      <div
        className="p-6 w-full lg:w-64 bg-cover relative hidden lg:flex flex-col justify-between"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div>
          <h4 className="font-bold text-lg text-gray-800 mb-2">{title}</h4>
          <button className="bg-white text-gray-800 px-3 py-1.5 rounded shadow-sm text-sm font-medium hover:bg-gray-50">
            Source now
          </button>
        </div>
      </div>

      {/* Mobile Title */}
      <h4 className="lg:hidden font-bold text-base text-gray-800 px-4 pt-2">
        {title}
      </h4>

      {/* Grid Side */}
      <div className="flex-1 flex lg:grid md:items-center flex-nowrap overflow-x-auto lg:overflow-visible lg:grid-cols-4 divide-x divide-y lg:divide-y divide-gray-200 no-scrollbar">
        {products.slice(8, 16).map((item) => (
          <div
            key={item._id}
            className="min-w-40 lg:min-w-0 min-h-45 lg:min-h-0 p-4 flex flex-col justify-between h-32 lg:h-auto border border-gray-200"
          >
            <div className="order-1 lg:order-2 lg:self-end w-19 h-12 rounded flex items-center justify-center text-xl">
              <img src={ImageUrl(item.image)} alt={item.name} />
            </div>

            {/* Text */}
            <div className="order-2 lg:order-1 mt-2 lg:mt-0 lg:self-start">
              <h5 className="text-xs lg:text-sm font-medium text-gray-800 mb-1">
                {item.name}
              </h5>
              <p className="text-xs text-gray-400">$ {item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile ONLY Source Button */}
      <div className="lg:hidden border-t border-gray-200 p-3">
        <button className="flex items-center justify-center gap-2 text-blue-600 font-medium text-1xl hover:text-blue-700 transition-colors">
          Source now <ArrowRight size={16}/>
        </button>
      </div>
    </div>
  );
};

export default ElectronicsGadgets;