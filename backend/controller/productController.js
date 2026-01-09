import uploadCloudinary from "../config/cloudinary.js";
import Product from "../models/productModel.js";

export const addProduct = async (req, res) => {
  try {
    const { name, description, price, category, stock } = req.body;

    // Pass the memory buffer to Cloudinary
    const imageUrl = await uploadCloudinary(req.file.path);

    if (!imageUrl) {
        throw new Error("Cloudinary upload failed");
    }

    const product = await Product.create({
      name,
      image: imageUrl,
      description,
      price: Number(price),
      category,
      stock: Number(stock),
    });

    return res.status(201).json({ success: true, data: product });
  } catch (error) {
    console.error("Product creation failed", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const filterProduct = async (req, res) => {
  try {
    const { category, search, sortBy, limit, minPrice, maxPrice } = req.query;

    let query = {};

    // 1. Search Logic (Case-insensitive search on name)
    if (search) {
      query.name = { $regex: search, $options: "i" };
    }

    // 2. Category Filter
    if (category && category !== "All" && category !== "") {
      query.category = category;
    }

    // 3. Price Range Filter (Optional but recommended for e-commerce)
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    // 4. Execution with Sorting and Limiting
    let apiQuery = Product.find(query);

    // Sorting Logic (e.g., sortBy=price_asc or sortBy=date_desc)
    if (sortBy) {
      const [field, order] = sortBy.split("_");
      apiQuery = apiQuery.sort({ [field]: order === "desc" ? -1 : 1 });
    } else {
      apiQuery = apiQuery.sort({ date: -1 }); // Default to newest
    }

    // Limit results
    const finalLimit = Number(limit) || 10;
    apiQuery = apiQuery.limit(finalLimit);

    const products = await apiQuery;

    return res.status(200).json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    console.log("Filtering failed", error);
    return res.status(500).json({
      success: false,
      message: `Filtering failed: ${error.message}`,
    });
  }
};

export const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find({}).sort({ date: -1 });
    return res
      .status(200)
      .json({ success: true, count: products.length, data: products });
  } catch (error) {
    console.error("Fetching products failed", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Get single product details
export const singleProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.json({
      success: true,
      data: product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error fetching product details",
      error: error.message,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, category, stock } = req.body;

    // 1. Find the product first to get the old image name
    const product = await Product.findById(id);

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    // 2. Handle Image Logic
    let imageName = product.image; // Default to existing image

    if (req.file) {
      // A new image was uploaded!
      // Delete the old image file from the 'uploads' folder
      if (product.image) {
        const oldImagePath = `uploads/${product.image}`;
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }
      // Set the new filename provided by Multer
      imageName = req.file.filename;
    }

    // 3. Update the fields
    product.name = name || product.name;
    product.description = description || product.description;
    product.price = price ? Number(price) : product.price;
    product.category = category || product.category;
    product.stock = stock ? Number(stock) : product.stock;
    product.image = imageName;

    // 4. Save and return
    const updatedProduct = await product.save();

    return res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: updatedProduct,
    });
  } catch (error) {
    console.error("Update error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);

    // Check if product actually existed
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    return res
      .status(200)
      .json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    console.error("Deleting product failed", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
