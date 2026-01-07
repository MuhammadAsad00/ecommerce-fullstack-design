import multer from "multer";

// Set storage engine
const storage = multer.diskStorage({
  destination: "./uploads", // Folder where images will be saved
  filename: (req, file, callback) => {
    // Save file as: timestamp-originalname (to avoid duplicates)
    callback(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

export default upload;