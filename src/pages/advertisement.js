// file advertisement.js

import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";


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
<Container className="mt-4">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h2>Berechnen Sie sich Ihre Werbekosten</h2>
                    <p>Es ist gar nicht so teuer wie Sie annehmen.</p>

                    <Form onSubmit={onAdvertisementSubmit}>
                        <Form.Group controlId="formName">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </Form.Group>

                        <Form.Group controlId="formTelephone">
                            <Form.Label>Telefon:</Form.Label>
                            <Form.Control type="tel" value={telephone} onChange={(e) => setTelephone(e.target.value)} required />
                        </Form.Group>

                        <h3>Spoterstellung</h3>
                        <Form.Group controlId="formSpotLength">
                            <Form.Label>Spotlänge in Sekunden:</Form.Label>
                            <Form.Control type="number" value={spotLengthSeconds} onChange={(e) => setSpotLengthSeconds(parseFloat(e.target.value))} />
                        </Form.Group>

                        <Form.Group controlId="formCostPerSecond">
                            <Form.Label>Kosten pro Sekunde:</Form.Label>
                            <Form.Control type="number" value={costPerSecond} onChange={(e) => setCostPerSecond(parseFloat(e.target.value))} />
                        </Form.Group>

                        <h3>Sendeplatz</h3>
                        <Form.Group controlId="formPlacementBeforeNews">
                            <Form.Label>Sendeplatz vor den Nachrichten:</Form.Label>
                            <Form.Control type="number" value={placementBeforeNews} onChange={(e) => setPlacementBeforeNews(parseFloat(e.target.value))} />
                        </Form.Group>

                        <Form.Group controlId="formPlacementAfterNews">
                            <Form.Label>Sendeplatz nach den Nachrichten:</Form.Label>
                            <Form.Control type="number" value={placementAfterNews} onChange={(e) => setPlacementAfterNews(parseFloat(e.target.value))} />
                        </Form.Group>

                        <Form.Group controlId="formPlacementTraffic">
                            <Form.Label>Sendeplatz Verkehr:</Form.Label>
                            <Form.Control type="number" value={placementTraffic} onChange={(e) => setPlacementTraffic(parseFloat(e.target.value))} />
                        </Form.Group>

                        <p><strong>Häufigkeit:</strong></p>
                        <Form.Check 
                            inline
                            type="radio" 
                            label="3 x täglich (150 €)" 
                            value={3} 
                            checked={frequency === 3}
                            onChange={(e) => setFrequency(e.target.value)} 
                        />
                        <Form.Check 
                            inline
                            type="radio" 
                            label="6 x täglich (250 €)" 
                            value={6} 
                            checked={frequency === 6}
                            onChange={(e) => setFrequency(e.target.value)} 
                        />
                        
                        <Button className="mt-3" variant="primary" type="submit">Unverbindlich berechnen</Button>
                    </Form>

                    {showSummary && (
                        <Card className="mt-3">
                            <Card.Body>
                                <Card.Title>Zusammenfassung Ihrer Anfrage:</Card.Title>
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
                            </Card.Body>
                        </Card>
                    )}
                </Col>
            </Row>
        </Container>
    );
}
