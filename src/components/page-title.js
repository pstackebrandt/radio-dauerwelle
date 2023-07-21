import React from "react";
import "./page-title.css";


function PageTitle() {

    const pageTitleAndSubtitle = {
        title: "HipDipDauerwelle",
        subtitle: "Dein Radiosender auf Dauer...Welle"
    }

    return (
        <div className="container mt-3">
            <h1 className="display-4">{pageTitleAndSubtitle.title}</h1>
            <p className="lead">{pageTitleAndSubtitle.subtitle}</p>
        </div>
    );
}

export default PageTitle;