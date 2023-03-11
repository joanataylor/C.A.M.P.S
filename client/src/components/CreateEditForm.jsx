import React, {useState} from 'react'

function CreateEditForm({formData, setFormData, handleChange, handleSubmit}) {

    return (
        <div
            className="container-fluid d-flex align-items-center justify-content-center"
            style={{
                minHeight: "94vh",
                padding: "0 25rem",
                backgroundSize: "cover",
                backgroundImage: `url(https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1277&q=80) `,
            }}
        >
            <div className="container d-flex flex-column shadow p-3 bg-white rounded w-50 h-50 border border-dark">
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
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateEditForm