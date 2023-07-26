// file advertisement.js

import React, { useState } from "react";

export default function Advertisement() {
    const [name, setName] = useState("Ihr name");
    const [email, setEmail] = useState("ihre@email.adresse");
    const [telephone, setTelephone] = useState("0123456789"); const [costPerSecond, setCostPerSecond] = useState(25);
    const [placementBeforeNews, setPlacementBeforeNews] = useState(150);
    const [placementAfterNews, setPlacementAfterNews] = useState(130);
    const [placementTraffic, setPlacementTraffic] = useState(120);
    const [frequency3x, setFrequency3x] = useState(150);
    const [frequency6x, setFrequency6x] = useState(250);
    const [showSummary, setShowSummary] = useState(false);

    const onAdvertisementSubmit = (e) => {
        e.preventDefault();
        setShowSummary(true);
    };

    return (
        <div className="advertisement-wrapper">
            <h2>Berechnen Sie sich Ihre Werbekosten</h2>
            <p>Es ist gar nicht so teuer wie Sie annehmen.</p>

            <div className="advertisement-form">
                <form onSubmit={onAdvertisementSubmit}>
                    <label>Name:</label><br />
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required /><br />

                    <label>Email:</label><br />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />

                    <label>Telefon:</label><br />
                    <input type="tel" value={telephone} onChange={(e) => setTelephone(e.target.value)} required /><br />

                    <label>Kosten pro Sekunde:</label><br />
                    <input type="number" value={costPerSecond} onChange={(e) => setCostPerSecond(parseFloat(e.target.value))} /><br />

                    <label>Sendeplatz vor den Nachrichten:</label><br />
                    <input type="number" value={placementBeforeNews} onChange={(e) => setPlacementBeforeNews(parseFloat(e.target.value))} /><br />

                    <label>Sendeplatz nach den Nachrichten:</label><br />
                    <input type="number" value={placementAfterNews} onChange={(e) => setPlacementAfterNews(parseFloat(e.target.value))} /><br />

                    <label>Sendeplatz Verkehr:</label><br />
                    <input type="number" value={placementTraffic} onChange={(e) => setPlacementTraffic(parseFloat(e.target.value))} /><br />

                    <label>Häufigkeit 3 x täglich:</label><br />
                    <input type="number" value={frequency3x} onChange={(e) => setFrequency3x(parseFloat(e.target.value))} /><br />

                    <label>Häufigkeit 6 x täglich:</label><br />
                    <input type="number" value={frequency6x} onChange={(e) => setFrequency6x(parseFloat(e.target.value))} /><br />

                    <button type="submit"><strong>Unverbindlich</strong> berechnen</button>
                </form>
            </div>

            {showSummary && (
                <div className="summary">
                    <h3>Zusammenfassung Ihrer Anfrage:</h3>
                    <p><strong>Name:</strong> {name}</p>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Telefon:</strong> {telephone}</p>
                    <p><strong>Kosten pro Sekunde:</strong> {costPerSecond} €</p>
                    <p><strong>Sendeplatz vor den Nachrichten:</strong> {placementBeforeNews} €</p>
                    <p><strong>Sendeplatz nach den Nachrichten:</strong> {placementAfterNews} €</p>
                    <p><strong>Sendeplatz Verkehr:</strong> {placementTraffic} €</p>
                    <p><strong>Häufigkeit 3 x täglich:</strong> {frequency3x} €</p>
                    <p><strong>Häufigkeit 6 x täglich:</strong> {frequency6x} €</p>
                </div>
            )}
        </div>
    );
}
