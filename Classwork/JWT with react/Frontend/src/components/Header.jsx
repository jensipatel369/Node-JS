import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Header() {

    const navigate = useNavigate();

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-8xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-blue-600 cursor-pointer" onClick={() => navigate("/dashboard")}>Dashboard</h1>
                <div className="space-x-6">
                    <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
                    <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
                    <a href="#" className="text-gray-700 hover:text-blue-600">Services</a>
                    <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
                    <button onClick={() => navigate("/profile")}
                        className="text-white cursor-pointer font-medium hover:text-blue-600 hover:bg-transparent hover:border-1 border-1 bg-blue-600 px-5 py-2 rounded-full"
                    >
                        Profile
                    </button>
                </div>
            </div>
        </nav>

    )
}
