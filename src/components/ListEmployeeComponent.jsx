import React, { useEffect, useState } from "react";
import { listEmployees } from "../services/EmployeeService";

/**
 * This component lists all the employees available in the EmployeeService.
 *
 * It first initializes an empty array of employees and then makes a call to
 * the EmployeeService to fetch the list of employees. It then updates the state
 * with the response data and renders the list of employees in a table.
 *
 * @returns A JSX element representing the list of employees.
 */
const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="text-center">List of Employees</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
