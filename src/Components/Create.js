import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import "./Create.css";

const Create = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuid();
    let uniqueId = id.slice(0, 8);
    let a = name;
    let b = age;
    Employees.push({ id: uniqueId, name: a, age: b });
    history("/");
  };
  return (
    <div className="div">
      <form className="create-form">
        <h4>Create Employee Form</h4>
        <input
          type="text"
          placeholder="Enter name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Age"
          required
          onChange={(e) => setAge(e.target.value)}
        />
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
