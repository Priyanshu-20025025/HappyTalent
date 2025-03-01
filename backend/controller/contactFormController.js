import ContactForm from "../modals/contactFormModal.js";


const contactFormController = async (req,res) => {
// Make route handler async to use await
    const formData = req.body; // Get form data from request body
    console.log("Received Form Data:", formData); // Log the form data
  
    // Create a new Contact document using the Mongoose model
    const newContact = new ContactForm({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    });
  
    try {
      // Save the new contact document to MongoDB
      const savedContact = await newContact.save(); // Use await for asynchronous save operation
      console.log('Contact form data saved to MongoDB:', savedContact);
  
      return res.status(201).send({ // Use 201 Created for successful resource creation
        data: "success",
        message: "Form submitted and data saved successfully!"
      });
  
    } catch (error) {
      console.error('Error saving contact form data to MongoDB:', error);
      return res.status(500).send({ // Use 500 Internal Server Error for database errors
        data: "error",
        message: "Failed to save form data. Please try again later.",
        error: error.message // Optionally send error message for debugging (not in production)
      });
    }
  
}

export default contactFormController