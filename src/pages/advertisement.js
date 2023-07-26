// file advertisement.js

import React from "react"

export default function Advertisement() {
    return (
        <div className="advertisement-wrapper">
            <h2>Berechnen Sie sich Ihre Werbekosten</h2>
            <p>Es ist gar nicht so teuer wie Sie annehmen.</p>

            <div className="advertisement-form">
                <form  onSubmit={(e)=>onAdvertismentSubmit(e)}>
                    <label>Name:</label><br></br>
                    <input type="text" value={name} onChange={(e) =>  setTitle(e.target.value)} required /><br></br>

                    <label>Email:</label><br></br>
                    <input type="email" required /><br></br>

                    <label>Telefon:</label><br></br>
                    <input type="email" required /><br></br>

{/* Kosten:
                    Pro Sekunde						: 	 25 €

Sendeplatz vor den Nachrichten	:	150 €
Sendeplatz nach den Nachrichten :	130 €
Sendeplatz Verkehr 				:	120 €

Häufigkeit 3 x täglich			:	150 €
Häufigkeit 6 x täglich			:	250 € */}



                    <button type="submit"><strong>Unverbindlich</strong> berechnen</button>
                </form>
            </div>

        </div>
    );

}