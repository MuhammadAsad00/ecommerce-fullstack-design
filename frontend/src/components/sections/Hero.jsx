import React from "react";
import { User } from "lucide-react";
import {
  categories,
  deals,
  recommended,
  services,
  countries,
} from "../data/Data";
import banner from "../../assets/banner.png";
import inquiry from "../../assets/inquiry.png";
import TimerBox from "../ui/TimerBox";
import CategoryGroup from "../ui/CategoryGroup.jsx";
import ServiceCard from "../ui/ServiceCard.jsx";
import CountryItem from "../ui/CountryItem.jsx";
import categoryBg1 from "../../assets/category-back.jpg";
import categoryBg2 from "../../assets/category-back2.png";
import ElectronicsGadgets from "../ui/ElectronicsGadgets.jsx";
import RecommendedItems from "./RecommendedItems.jsx";

const Hero = () => {
  return (
    <>
      <main className="max-w-7xl mx-auto px-4 lg:px-6 py-4 lg:py-6 space-y-6">
        {/* ================= HERO SECTION ================= */}
        <section className="bg-transparent lg:bg-white border border-gray-200 rounded-lg p-0 lg:p-0 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_280px]">
            {/* 1. Desktop Sidebar */}
            <div className="hidden lg:block border-r border-gray-200 p-4">
              <ul className="space-y-2.5">
                {categories.map((cat, i) => (
                  <li
                    key={i}
                    className={`text-gray-600 hover:bg-blue-50 hover:text-blue-700 hover:font-medium px-2 py-1.5 rounded cursor-pointer text-sm transition-colors ${
                      i === 0 ? "font-medium bg-blue-50 text-blue-700" : ""
                    }`}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </div>

            {/* 2. Main Banner */}
            <div
              className="relative bg-teal-50 -mx-4 lg:mx-0 rounded-none overflow-hidden h-45 lg:h-auto min-h-55 bg-cover bg-right bg-no-repeat"
              style={{ backgroundImage: `url(${banner})` }}
            >
              <div className="absolute inset-0 p-8 flex flex-col justify-center items-start z-10">
                <h3 className="text-lg lg:text-2xl text-gray-800 mb-1">
                  Latest trending
                </h3>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  Electronic items
                </h2>
                <button className="bg-white text-gray-800 px-4 py-2 rounded-md shadow-sm text-sm font-medium hover:bg-gray-50 transition-colors">
                  Learn more
                </button>
              </div>
            </div>

            {/* 3. Right User Column (Desktop Only) */}
            <div className="hidden lg:flex flex-col gap-4 p-4">
              {/* User Card */}
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-gray-300 rounded-full p-2 text-white">
                    <User size={24} />
                  </div>
                  <div className="text-sm">
                    <p>Hi, user</p>
                    <p>let's get started</p>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white text-sm py-1.5 rounded mb-2 hover:bg-blue-700">
                  Join now
                </button>
                <button className="w-full bg-white border border-gray-300 text-blue-600 text-sm py-1.5 rounded hover:bg-gray-50">
                  Log in
                </button>
              </div>

              {/* Promo 1 */}
              <div className="bg-orange-500 text-white rounded-lg p-4 text-sm font-medium flex-1 flex items-center">
                Get US $10 off with a new supplier
              </div>
              {/* Promo 2 */}
              <div className="bg-teal-500 text-white rounded-lg p-4 text-sm font-medium flex-1 flex items-center">
                Send quotes with supplier preferences
              </div>
            </div>
          </div>
        </section>

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
            {deals.map((deal, i) => (
              <div
                key={i}
                className="min-w-35 p-6 flex flex-col items-center justify-center gap-3 cursor-pointer hover:shadow-lg transition-shadow"
              >
                <div className="w-24 h-24 bg-gray-100 rounded-md flex items-center justify-center overflow-hidden">
                  <img
                    src={deal.img}
                    alt={deal.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <p className="text-gray-800 font-medium text-sm">
                    {deal.name}
                  </p>
                  <span className="bg-red-100 text-red-500 text-xs px-2 py-0.5 rounded-full font-medium">
                    {deal.discount}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Grid (desktop-only) */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-6 p-6 w-full">
            {deals.map((deal) => (
              <div
                key={deal.id}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition"
              >
                <div className="w-full h-36 overflow-hidden rounded-md mb-3">
                  <img
                    src={deal.img}
                    alt={deal.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-800 font-semibold text-sm mb-2">
                  {deal.name}
                </p>
                <span className="bg-red-100 text-red-500 text-xs px-2 py-0.5 rounded-full font-medium">
                  {deal.discount}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ================= CATEGORY SECTIONS (Double Block) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
          <CategoryGroup title="Home and outdoor" bgImg={categoryBg1} />
          <ElectronicsGadgets
            title="Consumer electronics"
            bgImg={categoryBg2}
          />
        </div>

        {/* ================= INQUIRY CTA SECTION ================= */}
        <section className="w-full rounded-lg overflow-hidden bg-linear-to-r from-blue-500 to-blue-600 relative">
          <div
            className="absolute inset-0 opacity-10"
            style={{ backgroundImage: `url(${inquiry})` }}
          ></div>

          <div className="flex flex-col lg:flex-row justify-between p-6 lg:p-10 gap-8 relative z-10">
            {/* Text Side */}
            <div className="lg:max-w-md text-white space-y-3">
              <h2 className="text-2xl lg:text-3xl font-bold leading-tight">
                An easy way to send requests to all suppliers
              </h2>

              <p className="text-blue-100 text-sm lg:text-base hidden lg:block">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>

              <button className="bg-blue-600 border border-white text-white px-4 py-2 rounded-md text-sm mt-4 hidden  hover:bg-blue-700">
                Send inquiry
              </button>

              {/* Mobile Button */}
              <button className="lg:hidden bg-blue-600 border text-white px-4 py-2 rounded-md text-sm mt-4 hover:bg-blue-700">
                Send inquiry
              </button>
            </div>

            {/* Form Card — Desktop ONLY */}
            <div className="hidden lg:block bg-white rounded-lg p-5 lg:p-6 shadow-lg lg:w-112.5">
              <h3 className="font-bold text-gray-800 mb-4">
                Send quote to suppliers
              </h3>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="What item you need?"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-blue-500"
                />
                <textarea
                  placeholder="Type more details"
                  rows={3}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-blue-500"
                ></textarea>

                <div className="flex gap-3">
                  <input
                    type="number"
                    placeholder="Quantity"
                    className="w-1/2 border border-gray-300 rounded-md px-3 py-2 text-sm"
                  />
                  <select className="w-1/2 border border-gray-300 rounded-md px-3 py-2 text-sm bg-white">
                    <option>Pcs</option>
                    <option>Kg</option>
                  </select>
                </div>

                <button className="bg-blue-600 text-white w-full py-2 rounded-md font-medium hover:bg-blue-700 transition-colors">
                  Send inquiry
                </button>
              </form>
            </div>
          </div>
        </section>

        <RecommendedItems items={recommended} />

        {/* ================= EXTRA SERVICES ================= */}
        <section>
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Our extra services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, i) => (
              <ServiceCard
                key={i}
                icon={service.icon}
                title={service.title}
                image={service.img}
              />
            ))}
          </div>
        </section>

        {/* ================= SUPPLIERS BY REGION ================= */}
        <section>
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Suppliers by region
          </h3>

          <div
            className="
    grid
    grid-cols-2
    sm:grid-cols-3
    md:grid-cols-4
    lg:grid-cols-5
    gap-y-6
    gap-x-4
  "
          >
            {countries.map((country, i) => (
              <CountryItem
                key={i}
                flag={country.flag}
                name={country.name}
                domain={country.domain}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Hero;
