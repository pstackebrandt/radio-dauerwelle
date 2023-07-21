// File: src\show-sender-team.cjs

import React from 'react';
  
  function ShowSenderTeam({ employees }) {
    return (
      <div className="employees">
        <h2>Unser Team</h2>
        {employees.map(employee => {
          return <ShowEmployee key={employee.id} employee={employee} />;
        })}
      </div>
    );
  }

  function ShowEmployee({ employee }) {
    return (
      <div className="employee">
        <h3>{employee.name.firstName}</h3>
        <p>Beruf: {employee.role}</p>
        <p>Lieblingsmusik: {employee.favoriteMusic.join(', ')}</p>
      </div>
    );
  }

  export default ShowSenderTeam;