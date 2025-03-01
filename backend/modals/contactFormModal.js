import mongoose from "mongoose";

// Define Mongoose Schema for Contact Form Data
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String, // Phone number is optional, so not required
  message: { type: String, required: true },
  submissionDate: { type: Date, default: Date.now } // Add submission timestamp
},{
  timestamps: true
});

// Create Mongoose Model
const ContactForm = mongoose.model('Contact', contactSchema); // 'Contact' model for 'contacts' collection (mongoose pluralizes)

export default ContactForm