import React, { useEffect, useState } from 'react'
import Header from './Header'
import Aside from './Aside'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function ViewAdmin() {

    const [record, setRecord] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetchData();
    }, [])

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:2312/deleteData?id=${id}`).then((res) => {
            let newData = record.filter((item) => item.id != id)
            setRecord(newData)
            alert(res.data.msg);
        })
    }

    const handleEdit = (id) => {
        let singleData = record.find((item) => item._id == id);
        navigate("/editAdmin", { state: singleData })
    }

    const fetchData = async () => {
        await axios.get("http://localhost:2312/getData").then((res) => {
            setRecord(res.data.data)
        })
    }

    return (
        <div className="h-screen bg-gray-900 flex flex-col overflow-hidden">
            <Header />
            <div className="flex flex-1 overflow-hidden">
                <Aside />
                <div className="flex-1 flex justify-center p-6">
                    <div className="w-full bg-[#1f2a3a] rounded-xl border border-white/10 p-6 text-white">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-semibold">View Admin</h2>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="text-gray-400 border-b border-white/10">
                                        <th className="text-left py-3 px-4 font-medium">S. No.</th>
                                        <th className="text-left py-3 px-4 font-medium">Id</th>
                                        <th className="text-left py-3 px-4 font-medium">Name</th>
                                        <th className="text-left py-3 px-4 font-medium">Age</th>
                                        <th className="text-left py-3 px-4 font-medium">Email</th>
                                        <th className="text-left py-3 px-4 font-medium">Password</th>
                                        <th className="text-left py-3 px-4 font-medium">City</th>
                                        <th className="text-right py-3 font-medium">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        record.map((e, i) => {
                                            return <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition">
                                                <td className="py-3 px-4">{i + 1}</td>
                                                <td className="py-3 px-4">{e._id}</td>
                                                <td className="py-3 px-4">{e.name}</td>
                                                <td className="py-3 px-4">{e.age}</td>
                                                <td className="py-3 px-4 text-gray-400">{e.email}</td>
                                                <td className="py-3 px-4">{e.password}</td>
                                                <td className="py-3 px-4">{e.city}</td>
                                                <td>
                                                    <button onClick={() => handleEdit(e._id)} className="px-3 py-1 cursor-pointer rounded-md bg-blue-600/20 text-blue-400 hover:bg-blue-600/30">
                                                        Edit
                                                    </button>
                                                </td>
                                                <td>
                                                    <button onClick={() => handleDelete(e._id)} className="px-3 py-1 cursor-pointer rounded-md bg-red-600/20 text-red-400 hover:bg-red-600/30">
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                                {/* <tbody>
                                    <tr className="border-b border-white/5 hover:bg-white/5 transition">
                                        <td className="py-3 px-4">1</td>
                                        <td className="py-3 px-4">John</td>
                                        <td className="py-3 px-4">21</td>
                                        <td className="py-3 px-4 text-gray-400">john@gmail.com</td>
                                        <td className="py-3 px-4">manger</td>
                                        <td className="py-3 px-4">
                                            <span className="px-3 py-1 rounded-full text-xs bg-green-500/20 text-green-400">
                                                Active
                                            </span>
                                        </td>
                                        <td>
                                            <button className="px-3 py-1 cursor-pointer rounded-md bg-blue-600/20 text-blue-400 hover:bg-blue-600/30">
                                                Edit
                                            </button>
                                        </td>
                                        <td>
                                            <button className="px-3 py-1 cursor-pointer rounded-md bg-red-600/20 text-red-400 hover:bg-red-600/30">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                </tbody> */}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
