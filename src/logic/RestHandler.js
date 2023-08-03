// filen name: RestHandler.js
// besserer Name: EmployeeRestHandler.js

// Komponenten, um mit einer REST API zu interagieren, die Mitarbeiterdaten verwaltet. 

// Basis-URL für die Mitarbeiter-API
const BASE_URL = "http://localhost:3001/api/employees/";

// Funktion, um alle Mitarbeiter abzurufen
export const getEmployees = async () => {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
}

// create, update, delete function not needed for this project