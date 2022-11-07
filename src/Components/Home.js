import React from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";

const Home = () => {
  return (
    <div style={{ margin: "10rem" }}>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {Employees && Employees.length > 0
            ? Employees.map((item) => {
                return (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                  </tr>
                );
              })
            : "No Data found"}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
