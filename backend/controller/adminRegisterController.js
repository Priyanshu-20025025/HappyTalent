import adminModal from "../modals/adminModal.js";
import bcrypt from "bcrypt";
const adminRegisterController = async (req, res) => {
  const { email, password } = req.body;
  console.log("req", email, password);
  if (!email || !password) {
    return res
      .status(400)
      .send({ message: "email and password are required." });
  }

  try {
    // Check if username already exists
    const existingAdmin = await adminModal.findOne({ email });
    if (existingAdmin) {
      return res.status(409).send({ message: "Username already exists." }); // 409 Conflict
    }

    // Hash the password before saving
    const saltRounds = 10; // Standard salt rounds for bcrypt
    const Hashpassword = await bcrypt.hash(password, saltRounds);

    // Create new Admin User
    const newAdmin = new adminModal({
      email,
      password:Hashpassword, // Store the hash, not the plain password
    });

    const savedAdmin = await newAdmin.save();
    console.log("Admin user registered:", savedAdmin);

    return res
      .status(201)
      .send({ message: "Admin user registered successfully!" });
  } catch (error) {
    console.error("Error registering admin user:", error);
    return res.status(500).send({
      message: "Error registering admin user.",
      error: error.message,
    });
  }
};

export default adminRegisterController;
