import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';

export default function App() {

  const [formdata, setFormdata] = useState({})
  const [record, setRecord] = useState([])
  const [editIndex, setEditIndex] = useState(null)

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (editIndex == null) {
      await axios.post("http://localhost:2312/addData", formdata).then((res) => {
        alert(res.data.msg)
      })
    } else {
      await axios.put(`http://localhost:2312/updateData?id=${editIndex}`, formdata).then((res) => {
        alert(res.data.msg)
      })
    }
    fetchData();
    setEditIndex(null);
    setFormdata({
      name: "",
      age: "",
      city: ""
    })
  }

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:2312/deleteData?id=${id}`).then((res) => {
      let newData = record.filter((item) => item._id != id)
      setRecord(newData)
      alert(res.data.msg);
    })
  }

  const handleEdit = (id) => {
    let singleData = record.find((item) => item._id == id);
    setFormdata({
      name: singleData.name,
      age: singleData.age,
      city: singleData.city
    });
    setEditIndex(id);
  }

  const fetchData = async () => {
    await axios.get("http://localhost:2312/getData").then((res) => {
      setRecord(res.data.data);
    })
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-white tracking-wide">CRUD Dashboard</h1>
          <p className="text-gray-400 mt-2">MERN Stack Data Management</p>
        </div>

        {/* form */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-6">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8" >
            <input type="text" name="name" value={formdata.name} placeholder="Full Name" onChange={handleChange} className="bg-white/10 text-white placeholder-gray-400 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <input type="number" name="age" value={formdata.age} placeholder="Age" onChange={handleChange} className="bg-white/10 text-white placeholder-gray-400 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <input type="text" name="city" value={formdata.city} placeholder="City" onChange={handleChange} className="bg-white/10 text-white placeholder-gray-400 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <button type="submit" className={`rounded-lg font-semibold px-4 py-3 transition-all duration-300 ${editIndex == null ? "bg-gradient-to-r from-indigo-500 to-purple-600 cursor-pointer" : "bg-gradient-to-r from-emerald-500 to-green-600 cursor-pointer"} text-white shadow-lg`}>
              {editIndex == null ? "Add Record" : "Update Record"}
            </button>
          </form>

          {/* Data Table */}
          <div className="overflow-x-auto rounded-xl">
            <table className="w-full text-sm text-left text-gray-300">
              <thead className="uppercase bg-white/10 text-gray-400">
                <tr>
                  <th className="px-4 py-3">#</th>
                  <th className="px-4 py-3">ID</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Age</th>
                  <th className="px-4 py-3">City</th>
                  <th className="px-4 py-3 text-center">Edit</th>
                  <th className="px-4 py-3 text-center">Delete</th>
                </tr>
              </thead>
              <tbody>
                {record.length > 0 ? (
                  record.map((e, i) => (
                    <tr key={i} className="border-b border-white/10 hover:bg-white/5 transition" >
                      <td className="px-4 py-3">{i + 1}</td>
                      <td className="px-4 py-3 text-xs text-gray-400">{e._id}</td>
                      <td className="px-4 py-3 font-medium text-white">{e.name}</td>
                      <td className="px-4 py-3">{e.age}</td>
                      <td className="px-4 py-3">{e.city}</td>
                      <td className="px-4 py-3 text-center">
                        <button onClick={() => handleEdit(e._id)} className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500 hover:text-black transition">Edit</button>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <button onClick={() => handleDelete(e._id)} className="px-3 py-1 text-xs font-semibold rounded-full bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white transition">Delete</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="px-4 py-6 text-center text-gray-400" >No records found</td>
                  </tr>
                )}
              </tbody>
              <tfoot className="bg-white/10 text-gray-300 font-semibold">
                <tr>
                  <td colSpan={7} className="px-4 py-3 text-right">Total Records :
                    <span className="ml-2 text-indigo-400">{record.length}</span>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}