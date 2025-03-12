import React from "react";

/**
 * Renders the application header.
 *
 * This component renders a Bootstrap navbar with the application name
 * "Employee Management System" on the left side.
 *
 * @returns {JSX.Element} - The rendered component.
 */
const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav
          className="navbar bg-dark border-bottom border-body ps-3"
          data-bs-theme="dark"
        >
          <a className="navbar-brand " href="#">
            Employee Management System
          </a>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
