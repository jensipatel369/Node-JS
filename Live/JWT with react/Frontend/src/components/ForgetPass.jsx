import React, { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import axios from "axios";

export default function ForgetPass() {

  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({})

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }

  const sendOtp = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:2312/forgetPass", formdata, {withCredentials: true}).then((res) => {
      if(res.data.msg === "OTP sended Successfully !"){
        alert(res.data.msg)
        navigate("/verifyPass")
      }else{
        alert(res.data.msg)
        navigate("/forgetPass")
      }
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">

        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">
            Forgot Password?
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Don’t worry! Enter your email to reset your password.
          </p>
        </div>

        <form onSubmit={sendOtp}>
          <div className="mb-5">
            <label className="block text-gray-700 mb-2 font-medium">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your registered email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="email"
              required
              onChange={handleChange}
            />
          </div>

            <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
          >
            Send OTP
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-3 text-gray-400 text-sm">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <div className="text-center">
          <Link
            to="/"
            className="text-blue-600 hover:underline text-sm font-medium"
          >
            ← Back to Login
          </Link>
        </div>

      </div>
    </div>
  );
}
