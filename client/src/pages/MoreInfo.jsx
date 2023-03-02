import React, { useState } from "react";
import beach from "../images/beach.jpg";
import surfboard from "../images/surfboards.jpg";
import { useParams } from "react-router-dom";

function MoreInfo() {
  const { id } = useParams();

  const [formUser, setFormUser] = useState({
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
    fetch(`http://localhost:8080/campers/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formUser),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.message);
        console.log("New info Created");
        window.location.pathname = "/dashboard"
      })
      .catch((err) => {
        console.log(err);
      });
    setFormUser({
      city: "",
      state: "",
      fun_fact: "",
      roles: "camper",
    });
  };

  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center"
      style={{
        minHeight: "92.6vh",
        padding: "0 25rem",
        backgroundSize: "cover",
        backgroundImage: `url(https://images.unsplash.com/photo-1586996292898-71f4036c4e07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80) `,
      }}
    >
      {/* <img
        className="img-fluid w-50"
        src={beach}
        style={{ height: "80vh" }}
        alt="Beach"
      ></img> */}
      <div className="container d-flex flex-column shadow p-3 bg-white rounded w-50 h-50 border border-dark" >
        <p className="fs-5">
          Welcome, for a more personalized experience please tell us a little
          more about yourself:
        </p>
        <form >
          {/* <form:hidden path="user" value="${userId}"></form:hidden> */}
          <input type="hidden" name="_method" value="put" />
          <div className="form-group">
            <label className="form-label" htmlFor="city">
              City:
            </label>
            <input
              type="text"
              name="city"
              id="city"
              className="form-control"
              value={formUser.city}
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="state">
              State:
            </label>
            <input
              type="text"
              name="state"
              id="state"
              className="form-control"
              value={formUser.state}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="fun_fact">
              Fun Fact About Yourself:
            </label>
            <textarea
              type="textarea"
              name="fun_fact"
              id="fun_fact"
              className="form-control"
              value={formUser.fun_fact}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn text-white"
            onClick={handleSubmit}
            style={{ backgroundColor: "#1976D2" }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default MoreInfo;
