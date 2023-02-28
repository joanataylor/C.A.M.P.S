import React, { useState } from "react";

function MoreInfo() {
  const [formUser, setFormUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm: "",
    city: "",
    state: "",
    fun_fact: "",
    roles: "camper",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormUser({
      ...formUser,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formUser);
    fetch("http://localhost:8080/update/{id}", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formUser),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        console.log("New info Created");
      })
      .catch((err) => {
        console.log(err);
      });
    setFormUser({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm: "",
      city: "",
      state: "",
      fun_fact: "",
      roles: "camper",
    });
  };

  return (

    <div className="container w-100 mt-3 p-3" style={{ backgroundImage: `url("https://i.imgur.com/Nb9ldM4.jpg")`,  backgroundRepeat: 'no-repeat',
    width:'350px'}} >
      <div className="container w-50 mt-3 shadow p-3 mb-5 bg-white rounded">
        <form>
        <div className="form-group">
          <p className="fs-2 form-group">Edit User Information</p>
            <label className="form-label" htmlFor="first_name">
              First Name:
            </label>
            <br />
            <input
              type="text"
              name="first_name"
              id="firstName"
              className="form-control"
              value={formUser.first_name}
              onChange={handleChange}
            ></input>
            <br />
            <label className="form-label" htmlFor="last_name">
              Last Name:
            </label>
            <br />
            <input
              type="text"
              name="last_name"
              id="lastName"
              className="form-control"
              value={formUser.last_name}
              onChange={handleChange}
            ></input>
            <br />
            <label className="form-label" htmlFor="email">
              Email Address:
            </label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={formUser.email}
              onChange={handleChange}
            ></input>
            <br />
            <div>
              <label className="form-label" htmlFor="city">
                City:
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="form-control"
                  value={formUser.city}
                  onChange={handleChange}
                ></input>
              </label>
              <br />
              <label className="form-label" htmlFor="state">
                State:
                <input
                  type="text"
                  name="state"
                  id="state"
                  className="form-control"
                  value={formUser.state}
                  onChange={handleChange}
                ></input>
              </label>
              <br />
              <label className="form-label" htmlFor="fun_fact">
                Fun Fact About Yourself:
                <textarea
                  type="textarea"
                  name="fun_fact"
                  id="fun_fact"
                  className="form-control"
                  value={formUser.fun_fact}
                  onChange={handleChange}
                ></textarea>
              </label>
              <br />
            </div>
            <button type="submit" className="btn text-white" onClick={handleSubmit} style={{ backgroundColor: "#1976D2" }}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MoreInfo;
