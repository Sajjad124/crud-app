import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import "./Create.css";
import Home from "./Home";

const Edit = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");

  let history = useNavigate();

  var index = Employees.map(function (e) {
    return e.id;
  }).indexOf(id);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked update");
    let a = Employees[index];
    a.name = name;
    a.age = age;
    // property = local name in useState
    history("/");
  };
  useEffect(() => {
    setName(localStorage.getItem("name"));
    setAge(localStorage.getItem("age"));
    setId(localStorage.getItem("Id"));
  }, []);

  return (
    <div className="div">
      <form className="create-form">
        <h4>Edit Employee Form</h4>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Age"
          value={age}
          required
          onChange={(e) => setAge(e.target.value)}
        />
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Update
        </button>
      </form>
    </div>
  );
};

export default Edit;
