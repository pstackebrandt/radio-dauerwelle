// file: eye-catcher.js

import React from "react";
import "./eye-catcher.css";

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
      {<EyeCatcher eyeCatcher={eyeCatchers[0]} />}
    </div>
  );
}

export default EyeCatchers;