import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Enter name" />
      </form>
    </div>
  );
};

export default Create;