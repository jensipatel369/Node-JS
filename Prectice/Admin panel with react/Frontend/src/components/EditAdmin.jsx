import React, { useEffect, useState } from 'react'
import Header from './Header'
import Aside from './Aside'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function EditAdmin() {

    const [formdata, setFormdata] = useState({})
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async () => {
        await axios.put(`http://localhost:2312/updateData?id=${formdata}`, formdata).then((res) => {
            alert(res.data.msg)
        })
    };

    return (
        <div className="h-screen bg-gray-900 flex flex-col overflow-hidden">
            <Header />
            <div className="flex flex-1 overflow-hidden">
                <Aside />
                <div className="flex-1 flex items-center justify-center">
                    <div className="w-full max-w-md bg-[#1f2a3a] rounded-xl border border-white/10 p-8 text-white">
                        <h2 className="text-2xl font-semibold mb-1 text-center">Edit Admin</h2>
                        <p className="text-sm text-gray-400 mb-6 text-center">
                            Edit administrator form
                        </p>

                        <form className="space-y-5" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-sm mb-1 text-gray-300">Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    value={formdata.name}
                                    onChange={handleChange}
                                    className="w-full rounded-lg bg-[#0f172a] border border-white/10 px-4 py-2.5
                                    text-white placeholder-gray-500 focus:outline-none
                                    focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm mb-1 text-gray-300">Age</label>
                                <input
                                    type="number"
                                    name='age'
                                    placeholder="Enter your age"
                                    value={formdata.age}
                                    onChange={handleChange}
                                    className="w-full rounded-lg bg-[#0f172a] border border-white/10 px-4 py-2.5
                                    text-white placeholder-gray-500 focus:outline-none
                                    focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm mb-1 text-gray-300">City</label>
                                <input
                                    type="text"
                                    name='city'
                                    placeholder="Enter your city"
                                    value={formdata.city}
                                    onChange={handleChange}
                                    className="w-full rounded-lg bg-[#0f172a] border border-white/10 px-4 py-2.5
                                    text-white placeholder-gray-500 focus:outline-none
                                    focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm mb-1 text-gray-300">Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={formdata.email}
                                    onChange={handleChange}
                                    className="w-full rounded-lg bg-[#0f172a] border border-white/10 px-4 py-2.5
                                    text-white placeholder-gray-500 focus:outline-none
                                    focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm mb-1 text-gray-300">Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    value={formdata.password}
                                    onChange={handleChange}
                                    className="w-full rounded-lg bg-[#0f172a] border border-white/10 px-4 py-2.5
                                    text-white placeholder-gray-500 focus:outline-none
                                    focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <button onClick={() => navigate("/viewAdmin")}
                                type="submit"
                                className="w-full rounded-lg px-6 py-2.5 text-sm font-medium
                                bg-blue-600 hover:bg-blue-500 transition cursor-pointer"
                            >
                                Update
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

