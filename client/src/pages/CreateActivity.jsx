import React, { useState } from "react";

function CreateActivity() {

    const [formData, setFormData] = useState({
        name : '',
        location: "",
        duration: "",
        date: "",
        image: "",
        items: "",
        description: "",
    })

    const handleChange = (e) => {
        const {value, name} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        fetch("http://localhost:8080/activity/new", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        }).then((res) => {
            return res.json()
        }).then(data => {
            window.location.href = "dashboard"
            console.log(data)
            console.log("New Activity Created")
        })
        .catch((err) => {
            console.log(err)
        })
        setFormData({
            name : '',
            location: "",
            duration: "",
            date: "",
            image: "",
            items: "",
            description: "",
        })
    }

    return (
        <div className="container">
            
            <form>
                <div className="form-group">
                    <label htmlFor="name">Activity Name </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input
                        type="text"
                        className="form-control"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="duration">Estimated Time</label>
                    <input
                        type="text"
                        className="form-control"
                        id="duration"
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="items">Items</label>
                    <input
                        type="text"
                        className="form-control"
                        id="items"
                        name="items"
                        value={formData.items}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Activity Date</label>
                    <input
                        type="date"
                        className="form-control"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input
                        type="text"
                        className="form-control"
                        id="image"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        type="text"
                        className="form-control"
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default CreateActivity;
