import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios"
import { API } from '../helper';

const MembershipSignupSection = ({close:handleCloseModal}) => {
  // const [isModalOpen, setIsModalOpen] = useState(switchMode|| false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(`${API.addUserSignup.url}`,data)
      if(res.data.success){
        alert("Signup successfully !")
        setTimeout(() => {
          handleCloseModal();
        }, 2000);
      }
    } catch (error) {
      alert("Something went wrong , Please try again later!")
    }
    // Here you would typically handle the signup logic
    // e.g., send data to your backend API
    // setIsModalOpen(false); // Close modal after submission (or on success)
  };


  return (

        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Modal overlay, when clicked, the modal will close. */}
            <div className="fixed inset-0 bg-gray-500 opacity-55 transition-opacity" aria-hidden="true" onClick={handleCloseModal}></div>

            {/* This element is to trick the browser into centering the modal content. */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">​</span>

            {/* Modal panel */}
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <form onSubmit={handleSubmit(onSubmit)} className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                    Membership Signup
                  </h3>
                  <p className="text-sm text-gray-500">
                    Join our community and unlock exclusive benefits.
                  </p>
                </div>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Your Name"
                  />
                  {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Your Email"
                  />
                  {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
                </div>
                <div className="mb-6">
                  <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters long" } })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="********"
                  />
                  {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-orange-500 hover:bg-orange-700-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Sign Up
                  </button>
                  <button
                    type="button"
                    className="inline-block align-baseline font-bold text-sm text-orange-500 hover:text-orange-800"
                    onClick={handleCloseModal}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
 
  );
};

export default MembershipSignupSection;