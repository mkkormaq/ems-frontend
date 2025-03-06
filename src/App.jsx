import "./App.css";
import ListEmployeeComponent from "./components/ListEmployeeComponent";

/**
 * The main App component.
 *
 * It renders a ListEmployeeComponent, which in turn renders a table of all
 * employees.
 */
function App() {
  return (
    <>
      <ListEmployeeComponent />
    </>
  );
}

export default App;
