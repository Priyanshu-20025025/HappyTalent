// savingPathInDb.controller.js
export const saveFilePathInDb = async (req, res) => {
  try {
    console.log("req.body in controller:", req.body);
    console.log("req.files in controller:", req.files); // Log req.files

    const avatarFile = req.files['avatar'] ? req.files['avatar'][0] : null;
    const galleryFiles = req.files['gallery'] || [];

    if (avatarFile) {
      console.log("Avatar file path:", avatarFile.path); // Access the path
      // avatarFile.path will be something like: 'uploads/suppliers/proofs/avatar-1687254678901-123456789.png'
      // (depending on your filename function and where your project root is)
      // You can now save avatarFile.path in your database
    }

    if (galleryFiles.length > 0) {
      galleryFiles.forEach(galleryFile => {
        console.log("Gallery file path:", galleryFile.path); // Access path for each gallery file
        // Save galleryFile.path in your database for each gallery image
      });
    }

    res.status(200).json({ message: "Files uploaded and paths saved successfully" });

  } catch (error) {
    console.error("Error saving file paths:", error);
    res.status(500).json({ message: "Error saving file paths", error: error.message });
  }
};