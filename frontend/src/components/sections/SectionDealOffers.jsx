import { useContext } from "react";
import TimerBox from "../ui/TimerBox";
import { shopDataContext } from "../../context/ShopContext";

const SectionDealOffers = () => {
  const { products, loading, serverUrl } = useContext(shopDataContext);
  const ImageUrl = (imgName) => `${serverUrl}/uploads/${imgName}`;

  if (loading) return null; 

  return (
    <>
      {/* ================= DEALS & OFFERS ================= */}
      <section className="bg-white border border-gray-200 rounded-lg flex flex-col lg:flex-row overflow-hidden">
        {/* Timer Column */}
        <div className="p-4 lg:w-64 border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-row lg:flex-col justify-between lg:justify-start items-center lg:items-start gap-4">
          <div>
            <h3 className="text-lg font-bold text-gray-800">
              Deals and offers
            </h3>
            <p className="text-gray-500 text-sm">Hygiene equipments</p>
          </div>

          <div className="flex gap-1 lg:gap-2">
            <TimerBox val="04" label="Days" />
            <TimerBox val="13" label="Hour" />
            <TimerBox val="34" label="Min" />
            <TimerBox val="56" label="Sec" />
          </div>
        </div>

        {/* Scrollable Products (mobile) */}
        <div className="flex-1 flex overflow-x-auto no-scrollbar divide-x divide-gray-200 lg:hidden">
          {products.slice(0, 5).map((deal) => (
            <div
              key={deal._id}
              className="min-w-35 p-6 flex flex-col items-center justify-center gap-3 cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div className="w-24 h-24 bg-gray-100 rounded-md flex items-center justify-center overflow-hidden">
                <img
                  src={ImageUrl(deal.image)}
                  alt={deal.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <p className="text-gray-800 font-medium text-sm">{deal.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Grid (desktop-only) */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-6 p-6 w-full">
          {products.slice(0, 5).map((deal) => (
            <div
              key={deal._id}
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition"
            >
              <div className="w-full h-36 overflow-hidden rounded-md mb-3">
                <img
                  src={ImageUrl(deal.image)}
                  alt={deal.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-800 font-semibold text-sm mb-2">
                {deal.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SectionDealOffers;
