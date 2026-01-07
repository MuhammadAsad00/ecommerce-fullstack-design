import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { authDataContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { ChevronLeft } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const { serverUrl } = useContext(authDataContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `${serverUrl}/api/product/single/${id}`,
          { withCredentials: true }
        );
        if (response.data.success) {
          setProduct(response.data.data);
        }
      } catch (error) {
        toast.error("Error fetching product details");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id, serverUrl]);

  if (loading) return <div className="p-10 text-center">Loading...</div>;
  if (!product)
    return <div className="p-10 text-center">Product not found.</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <button
        onClick={() => navigate(-1)}
        className="group mb-6 flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-blue-600 transition-all duration-200"
      >
        <ChevronLeft
          size={20}
          className="group-hover:-translate-x-1 transition-transform"
        />
        <span className="text-sm font-semibold tracking-wide uppercase">
          Back to Products
        </span>
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="flex justify-center">
          <img
            src={`${serverUrl}/uploads/${product.image}`}
            alt={product.name}
            className="rounded-lg max-h-96 object-cover shadow-md"
          />
        </div>

        <div className="space-y-4">
          <span className="text-sm uppercase text-gray-500 font-semibold">
            {product.category}
          </span>
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-2xl text-blue-600 font-bold">${product.price}</p>
          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          <div className="pt-4 border-t">
            <p
              className={`font-medium ${
                product.stock > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {product.stock > 0
                ? `In Stock: ${product.stock}`
                : "Out of Stock"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
