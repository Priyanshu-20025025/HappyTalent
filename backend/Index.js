// console.log("lsdjf;l")
import express from "express"
import cors from 'cors'; // Import cors
import bodyParser from 'body-parser'; // Import body-parser
import users from "../backend/MOCK_DATA.json" assert { type: "json" };

const app = express();
const PORT = 8080;

// Enable CORS for all origins (for development - be more specific in production)
app.use(cors());

// Middleware to parse JSON request bodies
app.use(bodyParser.json());


app.get("/users",(req,res)=>{
  return res.json(users)
})

app.post("/api/contact",(req,res)=>{ // Corrected route path to start with /
  const formData = req.body; // Get form data from request body
  console.log("Received Form Data:", formData); // Log the form data

  return (
    //console.log("req",req), // No need to log req again, formData is more relevant
    res.status(200).send({ // Send status 200 for success
      data: "success", // Corrected "succus" to "success"
      message: "form submitting successfully" // Corrected message
    })
  )
})

app.get("/",(req,res)=>{
  return res.send(`
    <ul>
    <li>1</li>
     <li>2</li>
     </ul>
    `)
})

app.listen(PORT,()=>{
  console.log("Server is listening Port On",PORT)
})