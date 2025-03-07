import React, { useState } from "react";

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  function saveEmployee(event) {
    event.preventDefault();
    const employee = {
      firstName,
      lastName,
      email,
    };
    console.log(employee);
  }

  return (
    <div className="container">
      <br></br>
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">Add Employee</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">First Name:</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter Employee First Name"
                  name="firstName"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                ></input>
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Last Name:</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter Employee Last Name"
                  name="lastName"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                ></input>
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Email:</label>
                <input
                  className="form-control"
                  type="email"
                  placeholder="Enter Employee Email"
                  name="lastName"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                ></input>
              </div>
              <button
                className="btn btn-success"
                type="submit"
                onClick={saveEmployee}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;
