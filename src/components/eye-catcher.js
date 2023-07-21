// file: eye-catcher.js

import React, { useState, useEffect } from "react";
import "./eye-catcher.css";

function NextEyeCatcher({ eyeCatcher }) {
  return (
    <div className="eye-catcher">
      <img className="mb-3" src={eyeCatcher.imgSource} alt={`Foto von ${eyeCatcher.photoCredit}`} width="100px" height="100px" />

      <h2>{eyeCatcher.header}</h2>
      <p>
        {eyeCatcher.teaser} <a className="ml-5" href="/">weiterlesen</a>
      </p>
    </div>
  );
}

/* Show 1 eye catcher on screen. If we get data for more than 1 rerun eyecatcher after a while.  */
function EyeCatcher({ eyeCatchers }) {
  // start with first eyeCatcher data object.
  // after n seconds switch to next eyeCatcher data object.
  // do so till every eyeCatcher data object has been shown.
  // then start again with first eyeCatcher data object.
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Funktion zum Wechseln des Indexes in einem Intervall von 10 Sekunden
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % eyeCatchers.length);
    }, 10000);

    // Aufräumarbeiten beim Entfernen der Komponente
    return () => clearInterval(interval);
  }, [eyeCatchers.length]);

  return (
    <div className="eye-catchers">
      <NextEyeCatcher eyeCatcher={eyeCatchers[currentIndex]} />
    </div>
  );
}

export default EyeCatcher;