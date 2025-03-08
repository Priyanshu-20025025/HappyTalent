import { useRef, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
const AddUserForm = () => {
  const nameRef = useRef(null);
  const fatherNameRef = useRef(null);
  const emailRef = useRef(null);
  const mobileRef = useRef(null);
  const designationRef = useRef(null);
  const dobRef = useRef(null);
  const aadharRef = useRef(null);
  const addressRef = useRef(null);
  const cityRef = useRef(null);
  const occupationRef = useRef(null);
  const statusRef = useRef(null);
  const profilePicRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("name", nameRef.current.value);
    formData.append("fatherName", fatherNameRef.current.value);
    formData.append("email", emailRef.current.value);
    formData.append("mobile", mobileRef.current.value);
    formData.append("designation", designationRef.current.value);
    formData.append("dob", dobRef.current.value);
    formData.append("aadhar", aadharRef.current.value);
    formData.append("address", addressRef.current.value);
    formData.append("city", cityRef.current.value);
    formData.append("occupation", occupationRef.current.value);
    formData.append("status", statusRef.current.value);
    // formData.append("profilePic", profilePicRef.current.files[0]);

    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/user/add",
        formData,
        {  withCredentials: true }
      );

      if (data.success) {
        // onUserAdded();
        alert("user added successfully")
        navigate("/admin")
        
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError(err.response.data.message);
      console.log("err",)
    }

    setLoading(false);
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Add New User</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input type="text" placeholder="Name" ref={nameRef} required className="border p-2 rounded" />
        <input type="text" placeholder="Father Name" ref={fatherNameRef} required className="border p-2 rounded" />
        <input type="email" placeholder="Email" ref={emailRef} required className="border p-2 rounded" />
        <input type="tel" placeholder="Mobile" ref={mobileRef} required className="border p-2 rounded" />
        <input type="text" placeholder="Designation" ref={designationRef} required className="border p-2 rounded" />
        <input type="date" ref={dobRef} required className="border p-2 rounded" />
        <input type="text" placeholder="Aadhar No." ref={aadharRef} required className="border p-2 rounded" />
        <input type="text" placeholder="Address" ref={addressRef} required className="border p-2 rounded" />
        <input type="text" placeholder="City" ref={cityRef} required className="border p-2 rounded" />
        <input type="text" placeholder="Occupation" ref={occupationRef} required className="border p-2 rounded" />
        <select ref={statusRef} required className="border p-2 rounded">
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        {/* <input type="file" ref={profilePicRef}  className="border p-2 rounded" /> */}

        <button type="submit" className="bg-blue-500 text-white p-2 rounded" disabled={loading}>
          {loading ? "Adding..." : "Add User"}
        </button>
      </form>
    </div>
  );
};

export default AddUserForm;
