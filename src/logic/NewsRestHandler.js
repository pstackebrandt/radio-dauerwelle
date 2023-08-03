// file name: NewsRestHandler.js

// Basis-URL für die Mitarbeiter-API
const BASE_URL = "http://localhost:3001/api/news-articles/";

// Die Funktion ruft alle News-Daten von einer URL ab und gibt sie zurück.
export const getNews = async () => {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
}

// create, update, delete function not needed for this project
// see manager client project for examples