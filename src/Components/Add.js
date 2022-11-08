import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  let history = useNavigate();

  return (
    <div>
      <Form></Form>
    </div>
  );
};

export default Add;
