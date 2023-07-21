// file: eye-catcher.js

import React from "react";
import "./eye-catcher.css";

function NextEyeCatcher({ eyeCatcher }) {
  return (
    <div className="eye-catcher">
      <img src={eyeCatcher.imgSource} alt={`Foto von ${eyeCatcher.photoCredit}`} width="100px" height="100px" />

      <h2>{eyeCatcher.header}</h2>
      <p>{eyeCatcher.teaser}<a href="/">weiterlesen</a></p>
    </div>
  );
}

function EyeCatcher({ eyeCatchers }) {
  // start with first eyeCatcher data object.
  // after 10 seconds switch to next eyeCatcher data object.
  // do so till every eyeCatcher data object has been shown.
  // then start again with first eyeCatcher data object.
  return (
    <div className="eye-catchers">
      {<NextEyeCatcher eyeCatcher={eyeCatchers[0]} />}
    </div>
  );
}

export default EyeCatcher;