// file name: RestHandler.js

// This file may contain later code for calls to different endpoints.

// Basis-URL für die Mitarbeiter-API
const BASE_URL = "http://localhost:3001/api/employees/";

// Die Funktion ruft alle Mitarbeiterdaten von einer URL ab und gibt sie zurück.
export const getEmployees = async () => {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
}

// create, update, delete function not needed for this project
// see manager client project for examples