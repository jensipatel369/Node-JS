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
    <div className='flex flex-col items-center'>
      <h1 className='text-2xl font-semibold py-5'>CRUD with React</h1>
      <form onSubmit={handleSubmit} className='pb-5 flex flex-col gap-3 w-75'>
        <input type="text" name="name" value={formdata.name} placeholder="Enter Your Full Name :" onChange={handleChange} className='border-1' />
        <input type="number" name="age" value={formdata.age} placeholder="Enter Your Age :" onChange={handleChange} className='border-1' />
        <input type="text" name="city" value={formdata.city} placeholder="Enter Your City :" onChange={handleChange} className='border-1' />
        <button type="submit" className='border-1'>{editIndex == null ? "Add Record" : "Update Record"}</button>
      </form>

      <table className='border-1'>
        <thead className='border-1'>
          <tr>
            <th className='border-1'>#</th>
            <th className='border-1'>ID</th>
            <th className='border-1'>Name</th>
            <th className='border-1'>Age</th>
            <th className='border-1'>City</th>
            <th className='border-1' colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            record.map((e, i) => (
              <tr key={i}>
                <td className='border-1 p-5'>{i + 1}</td>
                <td className='border-1 p-5'>{e._id}</td>
                <td className='border-1 p-5'>{e.name}</td>
                <td className='border-1 p-5'>{e.age}</td>
                <td className='border-1 p-5'>{e.city}</td>
                <td className='border-1 p-5'>
                  <button onClick={() => handleEdit(e._id)}>Edit</button>
                </td>
                <td className='border-1 p-5'>
                  <button onClick={() => handleDelete(e._id)}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}