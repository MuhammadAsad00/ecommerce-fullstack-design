import React from "react";
import inquiry from "../../assets/Image/background image/inquiry.png"

const SectionInquiry = () => {
  return (
    <>
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
    </>
  );
};

export default SectionInquiry;
