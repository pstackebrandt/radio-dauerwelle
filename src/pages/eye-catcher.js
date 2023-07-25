// file: eye-catcher.js
// for ideas and variants see https://chat.openai.com/share/3f480495-e1b2-414b-827c-3aa0f271fc01

import React, { useState, useEffect } from "react";
import "./eye-catcher.css";

// Definition der NextEyeCatcher-Komponente, die den aktuellen "eyeCatcher" darstellt.
// Diese Komponente bekommt den aktuellen "eyeCatcher" als prop übergeben.
// Sie stellt diesen "eyeCatcher" als Bild, Überschrift und Teaser-Text dar.
function NextEyeCatcher({ eyeCatcher }) {
  return (
    <div className="eye-catcher">
      <img className="mb-3" src={eyeCatcher.imgSource} alt={`Foto von ${eyeCatcher.photoCredit}`} width="200px" height="200px" />

      <h2>{eyeCatcher.header}</h2>
      <p>
        {eyeCatcher.teaser} <a className="ml-5" href="/">weiterlesen</a>
      </p>
    </div>
  );
}

/* Show 1 eye catcher on screen. If we get data for more than 1 rerun eyecatcher after a while.  */
function EyeCatcher({ eyeCatchers }) {
  // Definiere den aktuellen Index als State. Initialisiere ihn auf 0.
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Überprüfe, ob das "eyeCatchers"-Array existiert und nicht leer ist
    if (eyeCatchers && eyeCatchers.length > 0) {
      // Wenn "eyeCatchers" existiert und nicht leer ist, wechsle den Index in einem Intervall von 10 Sekunden.
      // Das % (Modulo) Operator sorgt dafür, dass der Index wieder auf 0 zurückgesetzt wird, wenn er das Ende des Arrays erreicht hat.
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % eyeCatchers.length);
      }, 10000);

      // Aufräumen: Dieser Code wird ausgeführt, wenn die Komponente unmountet wird. Es beendet das Intervall, um Speicherlecks zu vermeiden.
      return () => clearInterval(interval);
    }
  // Füge "eyeCatchers" als Abhängigkeit hinzu, damit useEffect neu ausgeführt wird, wenn sich "eyeCatchers" ändert.
  }, [eyeCatchers]);

  return (
    <div className="eye-catchers">
      { // Überprüfe, ob das "eyeCatchers"-Array existiert, nicht leer ist und das aktuelle Element (eyeCatchers[currentIndex]) existiert
        eyeCatchers && eyeCatchers.length > 0 && eyeCatchers[currentIndex] ? 
        // Wenn alle Bedingungen erfüllt sind, rendere die "NextEyeCatcher"-Komponente mit dem aktuellen Element als Prop
        <NextEyeCatcher eyeCatcher={eyeCatchers[currentIndex]} /> 
        : 
        // Ansonsten rendere null (nichts)
        null 
      } 
    </div>
  );
}

export default EyeCatcher;