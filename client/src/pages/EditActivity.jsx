import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CreateEditForm from '../components/CreateEditForm';
import CreateActivity from './CreateActivity'

function EditActivity() {

  const { id } = useParams()

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    duration: "",
    date: "",
    image: "",
    items: "",
    description: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    fetch(`http://localhost:8080/activity/edit/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((data) => {
        console.log(data.message);
        console.log("Activity edited");
        window.location.pathname = "/dashboard";
      })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
    setFormData({
      name: "",
      location: "",
      duration: "",
      date: "",
      image: "",
      items: "",
      description: "",
    });
  };

  useEffect(() => {
    fetch(`http://localhost:8080/activity/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setFormData(data)
      }).catch(err => {
        console.log(err)
      })
  }, [])


  return (
    <div>
      <CreateEditForm handleChange={handleChange} handleSubmit={handleSubmit} setFormData={setFormData} formData={formData} />
    </div>
  )
}

export default EditActivity