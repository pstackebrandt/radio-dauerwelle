// file advertisement.js

import React, { useState } from "react";

export default function Advertisement() {
    const [name, setName] = useState("Ihr name");
    const [email, setEmail] = useState("ihre@email.adresse");
    const [telephone, setTelephone] = useState("0123456789");

    const [spotLengthSeconds, setSpotLengthSeconds] = useState(10);
    const [costPerSecond, setCostPerSecond] = useState(25);
    const [placementBeforeNews, setPlacementBeforeNews] = useState(150);
    const [placementAfterNews, setPlacementAfterNews] = useState(130);
    const [placementTraffic, setPlacementTraffic] = useState(120);
    const [frequency, setFrequency] = useState(3);  // Der Defaultwert ist 6x täglich
    const [showSummary, setShowSummary] = useState(false);
    const [totalCost, setTotalCost] = useState(0);

    const calculateTotalCost = () => {
        let totalCost = 0;
        totalCost += spotLengthSeconds * costPerSecond;

        return totalCost;
    }

    const onAdvertisementSubmit = (e) => {
        e.preventDefault();
        // Gesamtkosten berechnen und im Zustand speichern
        const calculatedTotalCost = calculateTotalCost();
        setTotalCost(calculatedTotalCost);

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
                    <h3>Spoterstellung</h3>
                    <label>Spotlänge in Sekunden:</label><br />
                    <input type="number" value={spotLengthSeconds} onChange={(e) => setSpotLengthSeconds(parseFloat(e.target.value))} /><br />

                    <label>Kosten pro Sekunde:</label><br />
                    <input type="number" value={costPerSecond} onChange={(e) => setCostPerSecond(parseFloat(e.target.value))} /><br />

                    <h3>Sendeplatz</h3>
                    <label>Sendeplatz vor den Nachrichten:</label><br />
                    <input type="number" value={placementBeforeNews} onChange={(e) => setPlacementBeforeNews(parseFloat(e.target.value))} /><br />

                    <label>Sendeplatz nach den Nachrichten:</label><br />
                    <input type="number" value={placementAfterNews} onChange={(e) => setPlacementAfterNews(parseFloat(e.target.value))} /><br />

                    <label>Sendeplatz Verkehr:</label><br />
                    <input type="number" value={placementTraffic} onChange={(e) => setPlacementTraffic(parseFloat(e.target.value))} /><br />

                    <p><strong>Häufigkeit:</strong></p>
                    <label>
                        <input type="radio" value={3} checked={frequency === 3}
                         onChange={(e) => setFrequency(e.target.value)} />
                        3 x täglich (150 €)
                    </label>
                    <label>
                        <input type="radio" value={6} checked={frequency === 6}
                         onChange={(e) => setFrequency(e.target.value)} />
                        6 x täglich (250 €)
                    </label>
                    
                    <button type="submit"><strong>Unverbindlich</strong> berechnen</button>
                </form>
            </div>

            {showSummary && (
                <div className="summary">
                    <h3>Zusammenfassung Ihrer Anfrage:</h3>
                    <p><strong>Name:</strong> {name}</p>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Telefon:</strong> {telephone}</p>
                    <p><strong>Spotlänge in Sekunden:</strong> {spotLengthSeconds} Sekunden</p>
                    <p><strong>Kosten pro Sekunde:</strong> {costPerSecond} €</p>
                    <p><strong>Sendeplatz vor den Nachrichten:</strong> {placementBeforeNews} €</p>
                    <p><strong>Sendeplatz nach den Nachrichten:</strong> {placementAfterNews} €</p>
                    <p><strong>Sendeplatz Verkehr:</strong> {placementTraffic} €</p>
                    <p><strong>Gewählte Häufigkeit:</strong> {frequency === '3' ? '3 x täglich' : '6 x täglich'}</p>

                    <p><strong>Gesamtkosten:</strong> {totalCost} €</p>
                </div>
            )}
        </div>
    );
}
