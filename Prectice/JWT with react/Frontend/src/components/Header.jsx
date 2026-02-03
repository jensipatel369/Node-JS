import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const [data, setData] = useState("")
    const navigate = useNavigate();

    return (
        <header className="relative w-full bg-white shadow px-6 py-4 flex items-center justify-between">
            <div className="text-xl cursor-pointer font-bold text-blue-600">
                Dashboard
            </div>

            <div className="relative">
                <button
                    onClick={() => setData(!data)}
                    className="text-gray-700 cursor-pointer font-medium hover:text-blue-600"
                >
                    Profile
                </button>

                {
                    data && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border">
                            <div className="p-4 border-b">
                                <p className="font-semibold text-gray-800">John Doe</p>
                                <p className="text-sm text-gray-500">john@example.com</p>
                            </div>

                            <div className="p-2">
                                <button className="w-full cursor-pointer text-left px-4 py-2 rounded-lg hover:bg-gray-100">
                                    My Profile
                                </button>
                                <button className="w-full cursor-pointer text-left px-4 py-2 rounded-lg hover:bg-gray-100">
                                    Settings
                                </button>
                                <button className="w-full cursor-pointer text-left px-4 py-2 rounded-lg text-red-600 hover:bg-red-50" onClick={()=>navigate('/login')}>
                                    Logout
                                </button>
                            </div>
                        </div>
                    )
                }
            </div>
        </header>
    )
}
