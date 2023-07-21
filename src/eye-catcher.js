// file: eye-catcher.js

import React from "react";
import "./app.css";

function EyeCatcher({ eyeCatcher }) {
  return (
    <div className="eye-catcher">
      <img src={eyeCatcher.imgSource} alt={`Foto von ${eyeCatcher.photoCredit}`} width="100px" height="100px" />

      <h2>{eyeCatcher.header}</h2>
      <p>{eyeCatcher.teaser}<a href="/">weiterlesen</a></p>
    </div>
  );
}


function EyeCatchers({ eyeCatchers }) {
  return (
    <div className="eye-catchers">
      {eyeCatchers.map(currentEyeCatcher => {
        return <EyeCatcher key={currentEyeCatcher.id} eyeCatcher={currentEyeCatcher} />;
      }
      )}
    </div>
  );
}

export default EyeCatchers;