import React from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import {Link,useNavigate} from 'react-router-dom';
import "./Home.css";

const Home = () => {
    let History = useNavigate();

    const handleDelete=(id)=>{
        var index = Employees.map(function(e){
            return e.id
        }).indexOf(id);
        Employees.splice(index,1);
        History('/');
    }
  return (
    <div style={{ margin: "10rem" }}>
      <Table
        style={{ width: "100%" }}
        className="table table-striped table-dark table-hover table-responsive table-sm"
      >
        <thead className="thead-dark">
          <tr>
            <td>
              <h4>Employees Table</h4>
            </td>
            <td></td>
            <td></td>
          </tr>
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
                    <td style={{ width: "100%" }}>{item.name}</td>
                    <td style={{ width: "100%" }}>{item.age}</td>
                    <td className="action-button">
                      <Button onClick={() => handleDelete(item.id)}>Delete</Button>
                      &nbsp;
                      <Button onClick={() => handleDelete(item.id)}>
                        Update
                      </Button>
                    </td>
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
