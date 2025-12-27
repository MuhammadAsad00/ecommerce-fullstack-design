import React, { useState } from 'react';
import { Heart, MessageSquare, ShoppingBag, ChevronLeft, ChevronRight, Check, ShieldCheck, Globe, User, ShoppingCart } from 'lucide-react';
import RatingStars from '../components/common/RatingStars';
import { productData, relatedProducts } from '../components/data/Data.js';
import { useNavigate } from 'react-router-dom';


const ProductDetailsPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const product = productData;
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 font-sans">
      {/* Mobile Header */}
      <header className="lg:hidden bg-white p-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/')}><ChevronLeft size={24} /></button>
          <span className="font-semibold text-lg">Product Details</span>
        </div>
        <div className="flex gap-4">
          <ShoppingCart size={22} />
          <User size={22} />
        </div>
      </header>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Breadcrumbs (Desktop Only) */}
        <div className="hidden lg:flex items-center space-x-2 text-gray-500 text-sm mb-4">
          <a href="#" className="hover:text-blue-600">Home</a> <ChevronRight size={14} />
          <a href="#" className="hover:text-blue-600">Clothing</a> <ChevronRight size={14} />
          <a href="#" className="hover:text-blue-600">Men's wear</a> <ChevronRight size={14} />
          <span className="text-gray-900">Summer clothing</span>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 lg:p-6 flex flex-col lg:flex-row gap-8">
          {/* ================= PRODUCT GALLERY ================= */}
          <div className="lg:w-1/3">
            <div className="aspect-square bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-center relative overflow-hidden">
              <img src={product.images[selectedImage]} alt={product.title} className="max-h-full max-w-full object-contain" />
              {/* Mobile Gallery Navigation */}
              <div className="lg:hidden absolute inset-0 flex items-center justify-between p-4">
                <button onClick={() => setSelectedImage((prev) => (prev === 0 ? product.images.length - 1 : prev - 1))} className="p-1 bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200"><ChevronLeft size={20} /></button>
                <button onClick={() => setSelectedImage((prev) => (prev === product.images.length - 1 ? 0 : prev + 1))} className="p-1 bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200"><ChevronRight size={20} /></button>
              </div>
            </div>
            {/* Desktop Thumbnail Gallery */}
            <div className="hidden lg:flex gap-2 mt-4 overflow-x-auto pb-2">
              {product.images.map((img, index) => (
                <div key={index} onClick={() => setSelectedImage(index)} className={`w-16 h-16 border rounded-md p-1 cursor-pointer ${selectedImage === index ? "border-blue-500" : "border-gray-200"}`}>
                  <img src={img} alt={`Thumbnail ${index}`} className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* ================= PRODUCT INFO ================= */}
          <div className="flex-1">
            {/* Stock Status (Desktop) */}
            <p className="hidden lg:block text-green-500 font-medium mb-2"><Check size={16} className="inline mr-1" /> In stock</p>
            
            <h1 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-2">{product.title}</h1>
            
            {/* Rating & Reviews */}
            <div className="flex items-center gap-2 text-sm mb-4">
              <div className="flex items-center">
                <RatingStars rating={product.rating} />
                <span className="text-orange-400 ml-1 font-medium">{product.rating}</span>
              </div>
              <span className="text-gray-300">•</span>
              <span className="text-gray-500 flex items-center gap-1"><MessageSquare size={16} /> {product.reviews} reviews</span>
              <span className="text-gray-300">•</span>
              <span className="text-gray-500 flex items-center gap-1"><ShoppingBag size={16} /> {product.sold} sold</span>
            </div>

            {/* Price (Mobile View) */}
            <div className="lg:hidden mb-4">
              <span className="text-2xl font-bold text-red-500">$129.95</span>
              <span className="text-gray-500 text-sm ml-2">(50-100 pcs)</span>
            </div>

            {/* Bulk Pricing (Desktop View) */}
            <div className="hidden lg:block bg-red-50/50 p-4 rounded-lg mb-6">
              <div className="flex justify-between gap-4">
                {product.bulkPricing.map((tier, index) => (
                  <div key={index} className={`flex-1 ${index !== 0 ? 'border-l border-red-100 pl-4' : ''}`}>
                    <p className="text-red-500 font-bold text-xl">{tier.price}</p>
                    <p className="text-gray-500 text-sm">{tier.quantity}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Specs Table (Desktop View) */}
            <div className="hidden lg:block">
              <table className="w-full text-sm">
                <tbody>
                  {Object.entries(product.specs).map(([key, value], index) => (
                    <tr key={key} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="py-2 text-gray-500 w-1/3">{key}:</td>
                      <td className="py-2 text-gray-900">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Call to Action */}
            <div className="lg:hidden flex gap-4 my-4">
              <button className="flex-1 bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700">Send inquiry</button>
              <button className="p-3 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50"><Heart size={20} /></button>
            </div>

            {/* Mobile Specs List */}
            <div className="lg:hidden space-y-2 text-sm text-gray-700 mb-4">
              <p><span className="text-gray-500">Condition:</span> Brand new</p>
              <p><span className="text-gray-500">Material:</span> Plastic</p>
              <p><span className="text-gray-500">Category:</span> Electronics, gadgets</p>
              <p><span className="text-gray-500">Item num:</span> 23421</p>
            </div>

            {/* Description (Both Views) */}
            <div className="lg:hidden">
              <p className="text-sm text-gray-600 line-clamp-3 mb-2">{product.description}</p>
              <button className="text-blue-600 text-sm font-medium hover:underline">Read more</button>
            </div>
          </div>

          {/* ================= SUPPLIER INFO (Desktop) ================= */}
          <div className="hidden lg:block w-72 bg-white border border-gray-200 rounded-lg p-4 h-fit">
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 font-bold text-xl rounded-md flex items-center justify-center">R</div>
              <div>
                <p className="text-gray-500 text-sm">Supplier</p>
                <h4 className="font-medium text-gray-900">{product.supplier.name}</h4>
              </div>
            </div>
            <div className="space-y-3 text-sm text-gray-500 mb-6">
              <p className="flex items-center gap-2"><img src="https://flagcdn.com/w20/de.png" alt="Germany" className="w-5" /> {product.supplier.location}</p>
              <p className="flex items-center gap-2"><ShieldCheck size={16} className="text-gray-400" /> Verified Seller</p>
              <p className="flex items-center gap-2"><Globe size={16} className="text-gray-400" /> {product.supplier.shipping}</p>
            </div>
            <div className="flex flex-col gap-2">
              <button className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700">Send inquiry</button>
              <button className="w-full border border-gray-200 text-gray-700 font-medium py-2 rounded-md hover:bg-gray-50">Seller's profile</button>
            </div>
            <div className="mt-4 text-center">
              <button className="text-blue-600 text-sm flex items-center justify-center gap-1 hover:underline"><Heart size={16} /> Save for later</button>
            </div>
          </div>
        </div>
        
        {/* ================= SUPPLIER INFO (Mobile) ================= */}
        <div className="lg:hidden mt-4 bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 text-blue-600 font-bold text-lg rounded-md flex items-center justify-center">R</div>
            <div>
              <p className="text-gray-500 text-xs">Supplier</p>
              <h4 className="font-medium text-gray-900 text-sm">{product.supplier.name}</h4>
            </div>
          </div>
          <ChevronRight size={20} className="text-gray-400" />
        </div>

        {/* ================= TABS & DETAILS (Desktop) ================= */}
        <div className="hidden lg:block mt-6 bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="flex border-b border-gray-200">
            <button className="px-6 py-3 text-blue-600 font-medium border-b-2 border-blue-600">Description</button>
            <button className="px-6 py-3 text-gray-500 font-medium hover:text-gray-700">Reviews</button>
            <button className="px-6 py-3 text-gray-500 font-medium hover:text-gray-700">Shipping</button>
            <button className="px-6 py-3 text-gray-500 font-medium hover:text-gray-700">About seller</button>
          </div>
          <div className="p-6 text-gray-600 text-sm leading-relaxed">
            <p className="mb-4">{product.description}</p>
            <p>{product.description}</p>
            <table className="w-full mt-6 border border-gray-200">
              <tbody>
                {Object.entries(product.specs).map(([key, value]) => (
                  <tr key={key} className="border-b border-gray-200">
                    <td className="p-2 bg-gray-50 w-1/4 font-medium">{key}</td>
                    <td className="p-2">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ================= RELATED PRODUCTS ================= */}
        <div className="mt-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Similar products</h3>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {relatedProducts.map((item) => (
              <div key={item.id} className="min-w-40 lg:min-w-55 bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <img src={item.image} alt={item.title} className="w-full h-32 lg:h-40 object-contain mb-4" />
                <h4 className="text-gray-700 font-medium text-sm lg:text-base mb-2 truncate">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;