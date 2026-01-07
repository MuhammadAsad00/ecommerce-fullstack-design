import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authDataContext } from "../context/AuthContext";
import axios from "axios";
import { Trash2, Pencil } from "lucide-react";
import toast from "react-hot-toast";

const ProductManagement = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  let { serverUrl } = useContext(authDataContext);
  let navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const result = await axios.get(serverUrl + "/api/product/list", {
        withCredentials: true,
      });
      if (result.data.success) {
        setList(result.data.data);
      }
    } catch (error) {
      toast.error("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    // 1. Ask for confirmation
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;

    const toastId = toast.loading("Deleting product...");
    try {
      const result = await axios.delete(
        `${serverUrl}/api/product/remove/${id}`,
        { withCredentials: true }
      );

      if (result.data.success) {
        // 3. Optimistic UI update: Remove from local state immediately or re-fetch
        fetchProducts();
        toast.success("Product deleted successfully", { id: toastId });
      } else {
        toast.error(result.data.message || "Error deleting product", {
          id: toastId,
        });
      }
    } catch (error) {
      console.error("Error deleting product:", error.response?.data || error);
      toast.error("Unauthorized or Server Error", { id: toastId });
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Product Management</h2>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-3 px-4">Image</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">Stock</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6" className="text-center p-10">
                  Loading products...
                </td>
              </tr>
            ) : list.length > 0 ? (
              list.map((item) => (
                <tr
                  key={item._id}
                  className="border-b hover:bg-gray-50 cursor-pointer"
                >
                  <td className="p-4 text-gray-900 font-medium whitespace-nowrap">
                    <img
                      src={`${serverUrl}/uploads/${item.image}`}
                      alt={item.altText}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg"
                    />
                  </td>
                  <td className="p-4 font-bold text-blue-600 hover:underline">
                    <Link to={`/products/${item._id}`}>{item.name}</Link>
                  </td>
                  <td className="p-4">{item.category}</td>
                  <td className="p-4">${item.price}</td>
                  <td className="p-4">{item.stock}</td>

                  <td className="p-4 flex items-center space-x-2 mt-3">
                    <Link
                      to={`/products/${item._id}/edit`}
                      className="text-black hover:text-blue-500 transition-all"
                    >
                      <Pencil size={18} />
                    </Link>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="text-black hover:text-blue-500 transition-all cursor-pointer"
                    >
                      <Trash2 size={20} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={6}
                  className="p-6 text-center text-gray-500 bg-gray-50 rounded-b-md"
                >
                  <div className="flex flex-col items-center justify-center space-y-3">
                    {/* Optional icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-gray-400 mb-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6m4 0V9a2 2 0 00-2-2h-2a2 2 0 00-2 2v8m-4 0V5a2 2 0 012-2h2a2 2 0 012 2v12"
                      />
                    </svg>

                    <p className="text-lg font-medium">No Products found.</p>
                    <p className="text-sm text-gray-400">
                      Start by adding your first product.
                    </p>

                    {/* Add Product button */}
                    <button
                      onClick={() => navigate("/adproduct")} // or your route
                      className="px-4 py-2 bg-gray-200 text-blue-500 rounded-md hover:bg-gray-100 transition"
                    >
                      Add Product
                    </button>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagement;
