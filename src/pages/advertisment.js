import React from "react"

export default function Advertisement() {
    return (
        <div className="advertisement-wrapper">
            <h2>Berechnen Sie sich Ihre Werbekosten</h2>
            <p>Es ist gar nicht so teuer wie Sie annehmen.</p>

            <div className="advertisement-form">
                <form>
                    <label>Name:</label><br></br>
                    <input type="text" required /><br></br>

                    <label>Email:</label><br></br>
                    <input type="email" required /><br></br>

                    <label>Telefon:</label><br></br>
                    <input type="email" required /><br></br>

                    <button type="submit"><strong>Unverbindlich</strong> berechnen</button>
                </form>
            </div>

        </div>
    );

}