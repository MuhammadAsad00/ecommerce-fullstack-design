import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link, NavLink } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Check,
  User,
  ShoppingCart,
} from "lucide-react";
import { shopDataContext } from "../context/ShopContext";
import { cartDataContext } from "../context/CartContext";
import axios from "axios";
import toast from "react-hot-toast";

const ProductDetailsPage = () => {
  const { id } = useParams(); // Get ID from URL
  const navigate = useNavigate();
  const { serverUrl, products } = useContext(shopDataContext);
  const { addToCart } = useContext(cartDataContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddTOCart = async (e) => {
    if (e) e.preventDefault();

    if (!product?._id) return;

    setIsAdding(true);
    try {
      // addToCart from context already handles the API call and Toast notifications
      await addToCart(product._id);
    } catch (error) {
      console.error("Cart error:", error);
    } finally {
      setIsAdding(false);
    }
  };

  // 1. Fetch Product Data on Load
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${serverUrl}/api/product/single/${id}`
        );
        if (response.data.success) {
          setProduct(response.data.data);
        }
      } catch (error) {
        console.error("Fetch error:", error);
        toast.error("Failed to load product details");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id, serverUrl]);

  if (loading)
    return <div className="p-20 text-center">Loading product...</div>;
  if (!product)
    return <div className="p-20 text-center">Product not found.</div>;

  const relatedProducts = products
    .filter(
      (item) => item.category === product.category && item._id !== product._id
    )
    .slice(0, 5);

  // Use server URL for the image
  const mainImage = `${serverUrl}/uploads/${product.image}`;

  return (
    <div className="bg-gray-50 font-sans">
      {/* Mobile Header */}
      <header className="lg:hidden bg-white p-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)}>
            <ChevronLeft size={24} />
          </button>
          <span className="font-semibold text-lg">Details</span>
        </div>
        <div className="flex gap-4 text-gray-600">
          <Link to='/cart'>
           <ShoppingCart size={22} />
          </Link>
          <User size={22} />
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* ================= DYNAMIC BREADCRUMBS ================= */}
        <div className="hidden lg:flex items-center space-x-2 text-gray-500 text-sm mb-4">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          <ChevronRight size={14} />
          <Link to="#" className="hover:text-blue-600 capitalize">
            {product.category || "Shop"}
          </Link>
          <ChevronRight size={14} />
          <span className="text-gray-900 font-medium">{product.name}</span>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 lg:p-6 flex flex-col lg:flex-row gap-8">
          {/* ================= PRODUCT GALLERY ================= */}
          <div className="lg:w-1/3">
            <div className="aspect-square bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-center relative overflow-hidden">
              <img
                src={mainImage}
                alt={product.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            {/* Note: If your schema only has one image, we hide the thumbnails */}
          </div>

          {/* ================= PRODUCT INFO ================= */}
          <div className="flex-1">
            <p className="text-green-500 font-medium mb-2 flex items-center gap-1">
              <Check size={16} />{" "}
              {product.stock > 0 ? "In stock" : "Out of Stock"}
            </p>

            <h1 className="text-xl lg:text-3xl font-semibold text-gray-900 mb-2">
              {product.name}
            </h1>

            {/* Price section */}
            <div className="bg-blue-50/50 p-4 rounded-lg mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-gray-900">
                  ${product.price}
                </span>
                <span className="text-gray-500 line-through text-sm">
                  ${(product.price * 1.2).toFixed(2)}
                </span>
              </div>
            </div>

            {/* Specs Table */}
            <div className="border-t border-gray-100 pt-4">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-gray-50">
                    <td className="py-2 text-gray-500 w-1/3">Category:</td>
                    <td className="py-2 text-gray-900 capitalize">
                      {product.category}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-50">
                    <td className="py-2 text-gray-500">Stock Available:</td>
                    <td className="py-2 text-gray-900">
                      {product.stock} units
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex gap-4 mt-8">
              <button
                type="button"
                onClick={handleAddTOCart}
                disabled={isAdding || product.stock <= 0}
                className={`flex-1 text-white font-bold py-4 rounded-lg shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2
      ${
        isAdding || product.stock <= 0
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-600 hover:bg-blue-700 shadow-blue-200"
      }`}
              >
                {isAdding ? (
                  "Adding to Cart..."
                ) : product.stock <= 0 ? (
                  "Out of Stock"
                ) : (
                  <>
                    <ShoppingCart size={20} />
                    Add to Cart
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* ================= DESCRIPTION TAB ================= */}
        <div className="mt-8 bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="flex border-b border-gray-200">
            <button className="px-6 py-4 text-blue-600 font-bold border-b-2 border-blue-600">
              Description
            </button>
          </div>
          <div className="p-6">
            <h3 className="font-bold text-gray-900 mb-4 text-lg">
              About this item
            </h3>
            <p className="text-gray-600 leading-relaxed whitespace-pre-line">
              {product.description}
            </p>
          </div>
        </div>

        {/* ================= RELATED PRODUCTS ================= */}
        {relatedProducts.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Similar products
            </h3>
            <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
              {relatedProducts.map((item) => (
                <div
                  key={item._id}
                  onClick={() => {
                    navigate(`/product/${item._id}`);
                    window.scrollTo(0, 0); // Scroll to top when clicking a new product
                  }}
                  className="min-w-45 lg:min-w-55 bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="w-full h-32 lg:h-40 flex items-center justify-center mb-4">
                    <img
                      src={`${serverUrl}/uploads/${item.image}`}
                      alt={item.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <h4 className="text-gray-700 font-medium text-sm lg:text-base mb-2 truncate">
                    {item.name}
                  </h4>
                  <p className="text-blue-600 font-bold">${item.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsPage;
