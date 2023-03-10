import React, { useState } from "react";
import CreateEditForm from "../components/CreateEditForm";

function CreateActivity() {
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
    fetch("http://localhost:8080/activity/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((data) => {
        console.log(data.message);
        console.log("New Activity Created");
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
  return (
    <div>
      <CreateEditForm handleChange={handleChange} handleSubmit={handleSubmit} setFormData={setFormData} formData={formData}/>
    </div>
  );
}

export default CreateActivity;
