import React, { useState } from "react";

function MoreInfo() {
  const [formUser, setFormUser] = useState({
    city: "",
    state: "",
    fun_fact: "",
    roles: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormUser({
      ...formUser,
      [name]: value,
    });
  };

  return (
    <form>
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
    </form>
  );
}
