import ContactForm from "../modals/contactFormModal.js";

const adminContactQueries = async (req, res) => {
  try {
   const queries = await ContactForm.find().sort({createdAt:-1}).lean();
   console.log("queries",queries)
   res.status(200).json({success:true , data: queries , error : false})
  } catch (error) {
    res.status(500).json({success:false , message:"Server error"})
  }
}

export default adminContactQueries
