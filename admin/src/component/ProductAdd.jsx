import React, { useContext } from "react";
import { useState } from "react";
import uploadImage from "../assets/imageupload.png";
import { authDataContext } from "./../context/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";

const ProductAdd = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [image1, setImage1] = useState(false);
  let { serverUrl } = useContext(authDataContext);

  const handleAdProduct = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Uploading product...");
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("image", image1);
      formData.append("stock", stock || 0);

      const result = await axios.post(
        `${serverUrl}/api/product/add`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (result.data.success) {
        toast.success(result.data.message || "Product added successfully!", {
          id: toastId,
        });

        // 3. Reset Form
        setName("");
        setDescription("");
        setPrice("");
        setStock("");
        setCategory("");
        setImage1(null);
      } else {
        toast.error(result.data.message || "Failed to add product", {
          id: toastId,
        });
      }
    } catch (error) {
      console.log("Error Adding Product:", error.response?.data || error);
      toast.error("Failed to add product. Please try again.", {
        id: toastId,
      });
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 shadow-md rounded-md">
      <h2 className="text-3xl font-bold mb-6">Add Product</h2>
      <form onSubmit={handleAdProduct}>
        {/* Image Upload */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Upload Images</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <label htmlFor="image1">
              <img
                src={!image1 ? uploadImage : URL.createObjectURL(image1)}
                alt="Upload 1"
                className="w-[70%] h-[80%] object-cover rounded-lg shadow-2xl cursor-pointer transition hover:scale-105"
              />
            </label>
            <input
              type="file"
              id="image1"
              hidden
              onChange={(e) => {
                if (e.target.files[0]) {
                  setImage1(e.target.files[0]);
                  toast.success("Image 1 selected successfully!", {
                    duration: 1500, // Auto dismiss in 1.5s
                  });
                }
              }}
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="block font-semibold mb-2">Product Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        {/* Description */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Description</label>
          <textarea
            name="description"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          ></textarea>
        </div>
        {/* Price */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Price</label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="$ 2500"
            required
          />
        </div>
        {/* Stock */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Stock Quantity</label>
          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className="w-full border rounded-md p-2"
            placeholder="10"
            required
          />
        </div>
        {/* Category */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Category</label>
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          >
            <option value="">-- Select Category --</option>
            <option value="electronics">Electronics</option>
            <option value="accessories">Accessories</option>
            <option value="fashion">Fashion</option>
            <option value="lifestyle">Life Style</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-gray-200 text-black py-2 rounded-md hover:text-blue-600 transition-colors cursor-pointer"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductAdd;
