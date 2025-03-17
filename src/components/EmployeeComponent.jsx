import React, { useEffect, useState } from "react";
import { createEmployee, getEmployee } from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

/**
 * Handles the form submission to save a new employee.
 *
 * This component renders a form to enter the employee's first name, last name and email.
 * It provides input validation and prevents the default form submission behavior.
 * If the form is valid, it creates an employee object and sends it to the server via the createEmployee service.
 * Upon successful creation, it navigates to the employee list page.
 *
 * @returns {JSX.Element} - The rendered component.
 */
const EmployeeComponent = () => {
  //TODO research destructuring
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const { id } = useParams();

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getEmployee(id)
        .then((response) => {
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setEmail(response.data.email);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  /**
   * Handles the form submission to save a new employee.
   *
   * This function prevents the default form submission behavior, validates the form data,
   * and if valid, creates an employee object and sends it to the server via the createEmployee service.
   * Upon successful creation, it navigates to the employee list page.
   *
   * @param {object} event - The event object from the form submission.
   */
  function saveEmployee(event) {
    event.preventDefault();

    if (validateForm()) {
      const employee = {
        firstName,
        lastName,
        email,
      };

      createEmployee(employee).then((response) => {
        console.log(response.data);
        navigate("/employees");
      });
    }
  }

  /**
   * Validate the form data and update the errors state.
   *
   * This function checks if the first name, last name and email are not empty.
   * If any of them are empty, it adds an error message to the errors state.
   * If all of them are not empty, it clears the errors state.
   *
   * @returns {boolean} - True if the form is valid, false otherwise.
   */
  function validateForm() {
    let valid = true;

    // Create a copy of the errors object using spread operator.
    // This ensures that we don't modify the original errors object.
    // This is important because React relies on references and needs a new object to trigger a re-render.
    const errorsCopy = { ...errors };

    if (firstName.trim()) {
      errorsCopy.firstName = "";
    } else {
      errorsCopy.firstName = "First name is required";
      valid = false;
    }

    if (lastName.trim()) {
      errorsCopy.lastName = "";
    } else {
      errorsCopy.lastName = "Last name is required";
      valid = false;
    }

    if (email.trim()) {
      errorsCopy.email = "";
    } else {
      errorsCopy.email = "Email is required";
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  }

  function pageTitle() {
    if (id) {
      return <h2 className="text-center">Update Employee</h2>;
    } else {
      return <h2 className="text-center">Add Employee</h2>;
    }
  }

  return (
    <div className="container">
      <br></br>
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">{pageTitle()}</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">First Name:</label>
                <input
                  className={`form-control ${
                    errors.firstName ? "is-invalid" : ""
                  }`}
                  type="text"
                  placeholder="Enter Employee First Name"
                  name="firstName"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                ></input>
                {errors.firstName && (
                  <div className="invalid-feedback">{errors.firstName}</div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Last Name:</label>
                <input
                  className={`form-control ${
                    errors.lastName ? "is-invalid" : ""
                  }`}
                  type="text"
                  placeholder="Enter Employee Last Name"
                  name="lastName"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                ></input>
                {errors.lastName && (
                  <div className="invalid-feedback">{errors.lastName}</div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Email:</label>
                <input
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  type="email"
                  placeholder="Enter Employee Email"
                  name="lastName"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                ></input>
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
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
