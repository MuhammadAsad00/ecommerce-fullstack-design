import React from "react";
import {
  ShoppingCart,
  Monitor,
  Smartphone,
  Globe,
  ChevronDown,
  AppleIcon,
  PlayIcon,
  ShoppingBag,
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Youtube
} from "lucide-react";
import FooterColumn from "./FooterColumn";
import SocialIcon from "../ui/SocialIcon";

const Footer = () => {
  return (
    <>
      {/* ================= FOOTER ================= */}
      <footer className="bg-white border-t border-gray-200 mt-12 pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-6">
          {/* Newsletter (Simplified) */}
          <div className="flex flex-col items-center text-center space-y-4 mb-10">
            <h4 className="font-bold text-gray-800">
              Subscribe on our newsletter
            </h4>
            <p className="text-gray-500 text-sm">
              Get daily news on upcoming offers from many suppliers all over the
              world
            </p>
            <div className="flex gap-2 w-full max-w-sm">
              <input
                type="email"
                placeholder="Email"
                className="bg-gray-100 border-none rounded-md px-3 py-2 flex-1 outline-none text-sm"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 text-sm">
            <div className="col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-blue-600 p-1.5 rounded text-white">
                  <ShoppingBag size={16} />
                </div>
                <span className="text-xl font-bold text-blue-600">Brand</span>
              </div>

              <p className="text-gray-500 mb-4 text-sm">
                Best information about the company gies here but now lorem ipsum
                is
              </p>

              {/* Social Media Icons */}
              <div className="flex gap-3">
                <SocialIcon Icon={Facebook} />
                <SocialIcon Icon={Twitter} />
                <SocialIcon Icon={Linkedin} />
                <SocialIcon Icon={Instagram} />
                <SocialIcon Icon={Youtube} />
              </div>
            </div>
            <FooterColumn
              title="About"
              links={["About Us", "Find store", "Categories", "Blogs"]}
            />
            <FooterColumn
              title="Partnership"
              links={["About Us", "Find store", "Categories", "Blogs"]}
            />
            <FooterColumn
              title="Information"
              links={["Help Center", "Money Refund", "Shipping", "Contact us"]}
            />
            <FooterColumn
              title="For Users"
              links={["Login", "Register", "Settings", "My Orders"]}
            />
            <div className="col-span-2 lg:col-span-1">
              <h5 className="font-bold text-gray-800 mb-3">Get App</h5>

              {/* App Store */}
              <button className="bg-black text-white w-full py-2 rounded-2xl mb-2 flex items-center justify-center gap-3 hover:bg-gray-900 transition">
                <AppleIcon size={26} fill="currentColor" />
                <div className="text-left leading-tight">
                  <span className="block text-[10px] uppercase tracking-wide">
                    Download on the
                  </span>
                  <span className="block text-lg font-semibold">App Store</span>
                </div>
              </button>

              {/* Google Play */}
              <button className="bg-black text-white w-full py-2 rounded-2xl flex items-center justify-center gap-3 hover:bg-gray-900 transition">
                <PlayIcon size={26} fill="currentColor" />
                <div className="text-left leading-tight">
                  <span className="block text-[10px] uppercase tracking-wide">
                    Get it on
                  </span>
                  <span className="block text-lg font-semibold">
                    Google Play
                  </span>
                </div>
              </button>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4">
            <span>© 2026 Ecommerce.</span>
            <div className="flex items-center gap-2">
              <Globe size={16} />
              <span>English</span>
              <ChevronDown size={14} />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
