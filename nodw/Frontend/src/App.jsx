import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function App() {
  const [formdata, setFormdata] = useState({})
  const [record, setRecord] = useState([])
  const [editIndex, setEditIndex] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

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
    }
    else{
      await axios.put(`http://localhost:2312/updateData?id=${editIndex}`,formdata).then((res)=>{
        alert(res.data.msg)
      })
    }
    setEditIndex(null)
    setFormdata({
      title : "",
      name : "",
      dur:"",
      genre:""
    })
  }

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:2312/deleteData?id=${id}`).then((res) => {
      let newData = record.filter((item) => item.id != id)
      setRecord(newData)
      alert(res.data.msg)
    })
  }

  const handleEdit = async (id) => {
    let singleData = record.find((item) => item._id == id)
    setFormdata({
      title: singleData.title,
      name: singleData.name,
      dur: singleData.dur,
      genre: singleData.genre,
    })
    setEditIndex(id)
  }
  const fetchData = async () => {
    await axios.get("http://localhost:2312/getData").then((res) => {
      setRecord(res.data.data)
    })
  }
  return (
<div className="bg-gray-900 min-h-screen p-8 text-gray-100">
  <h1 className="text-5xl font-extrabold text-center mb-10 text-yellow-400 drop-shadow-lg">🍿 Movie Hub</h1>
  <form  onSubmit={handleSubmit}  className="bg-gray-800 p-6 rounded-xl shadow-lg max-w-lg mx-auto mb-12 flex flex-col gap-4 border border-yellow-500">
    <input type="text" value={formdata.title} onChange={handleChange} placeholder="Movie Title" name="title" className="p-3 rounded-lg bg-gray-700 border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"/>
    <input type="text" value={formdata.name} onChange={handleChange} placeholder="Director Name" name="name" className="p-3 rounded-lg bg-gray-700 border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"/>
    <input type="number" value={formdata.dur} onChange={handleChange} placeholder="Duration (min)" name="dur" className="p-3 rounded-lg bg-gray-700 border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"/>
    <select name="genre" value={formdata.genre} onChange={handleChange} className="p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400">
      <option hidden>Select Genre</option>
      <option value="action">Action</option>
      <option value="comedy">Comedy</option>
      <option value="drama">Drama</option>
      <option value="horror">Horror</option>
    </select>
    <button type="submit" className="bg-yellow-400 text-gray-900 py-3 rounded-lg font-bold hover:bg-yellow-500 transition">Add Movie</button>
  </form>
  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {record.map((e, i) => (
      <div key={i} className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-purple-500/50 transition-all p-4">
        <h2 className="text-xl font-bold mb-2 text-yellow-400">{e.title}</h2>
        <p className="mb-1"><span className="font-semibold">Director:</span> {e.name}</p>
        <p className="mb-1"><span className="font-semibold">Duration:</span> {e.dur} min</p>
        <p className="mb-2"><span className="font-semibold">Genre:</span> {e.genre}</p>
        <div className="flex gap-2 mt-4">
          <button onClick={() => handleEdit(e._id)} className="flex-1 bg-yellow-400 text-gray-900 py-2 rounded hover:bg-yellow-500 transition">Edit</button>
          <button onClick={() => handleDelete(e._id)} className="flex-1 bg-red-600 text-white py-2 rounded hover:bg-red-700 transition">Delete</button>
        </div>
      </div>
    ))}
  </div>
</div>
)}