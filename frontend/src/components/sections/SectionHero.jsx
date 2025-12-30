import React from 'react'
import { categories } from '../data/Data'
import banner from "../../assets/Image/background image/banner.png"
import UserCard from '../ui/UserCard'
import Promo from '../ui/Promo'

const SectionHero = () => {
  return (
    <>
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
            {/* User card componnet */}
              <UserCard/>
              {/* Promo Component */}
              <Promo/>
            </div>
          </div>
        </section>
    </>
  )
}

export default SectionHero