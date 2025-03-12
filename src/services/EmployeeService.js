import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/employees";

/**
 * Lists all employees.
 *
 * @returns {Promise} - The promise returned by Axios.
 */
export const listEmployees = () => axios.get(REST_API_BASE_URL);

/**
 * Creates a new employee.
 *
 * @param {Object} employee - The employee to add.
 * @returns {Promise} - The promise returned by Axios.
 */
export const createEmployee = (employee) =>
  axios.post(REST_API_BASE_URL, employee);
