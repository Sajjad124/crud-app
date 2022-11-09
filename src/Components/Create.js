import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

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
    Employees.push({ id: uniqueId, Name: a, Age: b });
    history("/");
  };
  return (
    <div>
      <form>
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
        <Button type="submit" onSubmit={(e) => handleSubmit(e)}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Create;
