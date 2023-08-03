// file eye-catcher-with-data.js

import React, { useState, useEffect } from 'react';
import EyeCatcher from '../pages/eye-catcher';

export default function EyeCatcherWithData() {
    const [eyeCatchers, setEyeCatchers] = useState([]);

    useEffect(() => {
        // angenommen, dies ist Ihre Funktion zum Abrufen von Daten vom Server
        async function fetchData() {
            const initialData = [
                {
                  id: 0,
                  imgSource: "/images/pexels-eric-esma-894156.jpg",
                  header: "Samy Deluxe im Anmarsch",
                  teaser: "Samy Delux hat eine neue Single veröffentlicht. Simon Desu produzierte die Beats",
                  photoCredit: "Eric Esma"
                },
                {
                  id: 1,
                  imgSource: "/images/pexels-anete-lusina-5239964.jpg",
                  header: "2Pac - Lebt",
                  teaser: "Immer wieder gibt es Gerüchte, dass 2 Pac noch lebt. Neuste Sichtung in Texas...",
                  photoCredit: "Anete Lusina"
                },
                {
                  id: 2,
                  imgSource: "/images/pexels-maria-pop-339805.jpg",
                  header: "Eddie hat ausgedient!",
                  teaser: "Eddie bekommt ein neues Design, Zombies sind nicht meher zeitgemäß!",
                  photoCredit: "Maria Pop"
                },
            ];

            // initialen Daten setzen
            setEyeCatchers(initialData);

            // hier würden Sie Ihren Service oder Server aufrufen, um die Daten zu aktualisieren
            // z.B.: const response = await fetch('your-server-url');
            // const data = await response.json();
            // setEyeCatchers(data);
        }

        fetchData();
    }, []); // [] bedeutet, dass dieser useEffect nur einmal ausgeführt wird, wenn die Komponente gemountet wird

    return <EyeCatcher eyeCatchers={eyeCatchers}/>;
}
