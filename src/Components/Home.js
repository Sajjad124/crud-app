import React from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  let History = useNavigate();

  const handleDelete = (id) => {
    var index = Employees.map(function (e) {
      return e.id;
    }).indexOf(id);
    Employees.splice(index, 1);
    History("/");
  };

  const handleEdit = (id) => {};
  return (
    <div style={{ margin: "10rem" }}>
      <h3 className="head">Table</h3>
      <Table
        style={{ width: "100%" }}
        className="table table-striped  table-hover table-responsive table-sm"
      >
        <thead className="">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Employees && Employees.length > 0
            ? Employees.map((item) => {
                return (
                  <tr>
                    <td style={{ width: "100%", color: "black" }}>
                      {item.name}
                    </td>
                    <td style={{ width: "100%", color: "black" }}>
                      {item.age}
                    </td>

                    <td className="action-button">
                      <Link to={"/"}>
                        <Button onClick={() => handleEdit(item.id)}>
                          Edit
                        </Button>
                      </Link>
                      &nbsp;
                      <Button onClick={() => handleDelete(item.id)}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })
            : "No Data found"}
        </tbody>
      </Table>
      <br></br>
      <Link to="/create">
        <Button className="createbtn">Create</Button>
      </Link>
    </div>
  );
};

export default Home;
