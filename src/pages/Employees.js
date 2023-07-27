import React from "react"

import logo from '../images/logo.svg';

/**
 * Eigene Seite um die Mitarbeiter anzuzeigen
 * @returns 
 */
export default function Employees() {

  const radioHosts = [
    {
      id: 0,
      name: "Hans Peter",
      employeeDescription: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      jobDescription: "Morning show"
    },
    {
      id: 1,
      name: "Erna Schmitt",
      employeeDescription: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      jobDescription: "Midday Music Show"
    },
    {
      id: 2,
      name: "Shrek vom Schlammtümpel",
      employeeDescription: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      jobDescription: "Evening Chill Show"
    }
  ];

  const managenment = [
    {
      id: 0,
      name: "Prinzessin Fiona",
      employeeDescription: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      jobDescription: "Nachrichtenkoordination"
    },
    {
      id: 1,
      name: "Esel",
      employeeDescription: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      jobDescription: "Verkehr"
    },
    {
      id: 3,
      name: "Gestiefelter Kater",
      employeeDescription: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      jobDescription: "Wetter"
    }
  ];

  function ShowEmployee(currentEmployee) {
    return (
      <>
        <div id={currentEmployee.id} className='employee'>
          <div className='employeeInformation'>
            <h4>{`${currentEmployee.name} - ${currentEmployee.jobDescription}`}</h4>
            <p>{currentEmployee.employeeDescription}</p>
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

      <h3>Moderatoren</h3>
      {radioHosts.map(currentEmployee => <ShowEmployee key={currentEmployee.id} {...currentEmployee} />)}

      <h3>Regie</h3>
      {managenment.map(currentEmployee => <ShowEmployee key={currentEmployee.id} {...currentEmployee} />)}

    </div>
  );

}