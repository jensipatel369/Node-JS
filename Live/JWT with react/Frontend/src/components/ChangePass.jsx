import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

export default function ChangePass() {

    const [formdata, setFormdata] = useState({})
    const token = localStorage.getItem("token")
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    const handleChangePass = async (e) => {
        e.preventDefault();
        if (formdata.newPass == formdata.confirmPass) {
            await axios.post("http://localhost:2312/changePass", formdata, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((res) => {
                localStorage.removeItem("token");
                navigate("/");
            })
        } else {
            alert("New password and confirm password do not match");
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-100">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Change Your Password
                </h2>
                <form onSubmit={handleChangePass}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Old Password</label>
                        <input type="text" name="oldPass" placeholder="Enter old password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">New Password</label>
                        <input type="text" name="newPass" placeholder="Enter new password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required onChange={handleChange} />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2">Confirm Password</label>
                        <input type="text" name="confirmPass" placeholder="Confirm new password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required onChange={handleChange} />
                    </div>
                    <button type="submit" className="w-full cursor-pointer bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition" >Update Password</button>
                </form>
            </div>
        </div>
    )
}
