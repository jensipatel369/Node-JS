import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';

export default function App() {

  const [formdata, setFormdata] = useState({})
  const [record, setRecord] = useState([])
  const [editIndex, setEditIndex] = useState(null)

  useEffect(() => {
    fetchData();
  }, [record]);

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
        // singleData = record.find((item) => item._id == editIndex);
        // singleData.name = formdata.name;
        // singleData.age = formdata.age;
        // singleData.city = formdata.city;
        alert(res.data.msg)
      })
    }
    setEditIndex(null);
    setFormdata({
      name: "",
      age: "",
      city: ""
    })
  }

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:2312/deleteData?id=${id}`).then((res) => {
      let newData = record.filter((item) => item.id != id)
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
    <div>
      <h1>CRUD with MERN</h1>
      <form onClick={handleSubmit}>
        <input type="text" name='name' value={formdata.name} placeholder='Enter your name' onChange={handleChange} />
        <input type="number" name='age' value={formdata.age} placeholder='Enter your age' onChange={handleChange} />
        <input type="text" name='city' value={formdata.city} placeholder='Enter your city' onChange={handleChange} />
        <button type='submit'>{editIndex == null ? "Add Data" : "Update Data"}</button>
      </form>

      <table border={1}>
        <thead>
          <tr>
            <th>S. No.</th>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th colSpan={2}>Actionns</th>
          </tr>
        </thead>
        <tbody>
          {
            record.map((e, i) => {
              return <tr key={i}>
                <td>{i + 1}</td>
                <td>{e._id}</td>
                <td>{e.name}</td>
                <td>{e.age}</td>
                <td>{e.city}</td>
                <td><button onClick={() => handleEdit(e._id)}>Edit</button></td>
                <td><button onClick={() => handleDelete(e._id)}>Delete</button></td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}