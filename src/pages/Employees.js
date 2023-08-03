// file name: Employees.js

import { useLoaderData, } from "react-router-dom";

import React from "react"

import logo from '../images/logo.svg';

/**
 * Eigene Seite um die Mitarbeiter anzuzeigen
 * @returns 
 */
export default function Employees() {
  // Lade Daten vom Service
  const employees = useLoaderData();

  function ShowEmployee(currentEmployee) {
    return (
      <>
        <div id={currentEmployee.id} className='employee'>
          <div className='employeeInformation'>
            <h4>{`${currentEmployee.full_name} - ${currentEmployee.department}`}</h4>
            <p>{currentEmployee.information}</p>
            <p><b>Job:</b> {currentEmployee.job}</p>
          </div>
          <div className='employeePicture'>
            <img src={logo} alt={currentEmployee.name} />
          </div>
        </div>
      </>
    );
  }

  return (
    <div className='all-employees'>
      <h2>Unsere Mitarbeiter</h2>

      <h3>Employees from server</h3>
      {employees.map(currentEmployee => <ShowEmployee key={currentEmployee.id} {...currentEmployee} />)}

    </div>
  );

}