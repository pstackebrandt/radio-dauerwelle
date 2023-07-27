// file name: advertisement.js

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card, Alert } from "react-bootstrap";

import "../styles/advertisement.css";

// Define constants for placement costs
const COST_BEFORE_NEWS = 150;
const COST_AFTER_NEWS = 130;
const COST_TRAFFIC = 120;
const COST_PER_SECOND = 25;
const MIN_SPOT_LENGTH = 2;

export default function Advertisement() {
    const [name, setName] = useState("Ihr name");
    const [email, setEmail] = useState("ihre@email.adresse");
    const [telephone, setTelephone] = useState("0123456789");

    const [spotLengthSeconds, setSpotLengthSeconds] = useState(10);

    const [placementBeforeNews, setPlacementBeforeNews] = useState(false);
    const [placementAfterNews, setPlacementAfterNews] = useState(false);
    const [placementTraffic, setPlacementTraffic] = useState(false);
    const [frequency, setFrequency] = useState(3);
    const [showSummary, setShowSummary] = useState(false);
    const [totalCost, setTotalCost] = useState(0);

    // User has ordered calculation of price at least once
    const [hadToCalculatePriceOnce, setHadToCalculatePriceOnce] = useState(false);

    const calculateTotalCost = () => {
        let totalCost = 0;
        const baseTaxPrice = spotLengthSeconds * COST_PER_SECOND;

        var spotTaxPrice = 0;

        if (placementBeforeNews) {
            spotTaxPrice += COST_BEFORE_NEWS;
        }

        if (placementAfterNews) {
            spotTaxPrice += COST_AFTER_NEWS;
        }

        if (placementTraffic) {
            spotTaxPrice += COST_TRAFFIC;
        }

        // assuming frequency cost is linear i.e., 3 times costs 150 and 6 times costs 250
        let frequencyCost = frequency === 3 ? 150 : 250;

        totalCost = baseTaxPrice + spotTaxPrice + frequencyCost;

        return totalCost;
    }

    useEffect(() => {
        if (hadToCalculatePriceOnce) {
            setTotalCost(calculateTotalCost());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [spotLengthSeconds, placementBeforeNews, placementAfterNews, placementTraffic, hadToCalculatePriceOnce, frequency]);


    const onAdvertisementSubmit = (e) => {
        e.preventDefault();
        // Gesamtkosten berechnen und im Zustand speichern
        setHadToCalculatePriceOnce(true);
        setTotalCost(calculateTotalCost());

        setShowSummary(true);
    };

    return (
        <Container className="mt-4, mb-4">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h2 className="mb-3 text-primary">Berechnen Sie sich Ihre Werbekosten</h2>
                    <div className="mb-4 fw-bold">Es ist gar nicht so teuer wie Sie annehmen.</div>

                    <Form onSubmit={onAdvertisementSubmit}>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formTelephone">
                            <Form.Label>Telefon:</Form.Label>
                            <Form.Control type="tel" value={telephone} onChange={(e) => setTelephone(e.target.value)} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formSpotLength">
                        <div className="mb-1"  fw-bold>Spoterstellung</div>
                            <Form.Label>Spotlänge in Sekunden: {spotLengthSeconds} (mindestens {MIN_SPOT_LENGTH})</Form.Label>
                            <Form.Control type="range" min={MIN_SPOT_LENGTH} max="90" value={spotLengthSeconds}
                                onChange={
                                    (e) => {
                                        setSpotLengthSeconds(parseInt(e.target.value))
                                    }} />
                            <Form.Text className="text-muted">(Kosten pro Sekunde: {COST_PER_SECOND} €)</Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPlacementBeforeNews">
                            <div className="mb-1"><strong>Sendeplatz</strong></div>
                            <Form.Check
                                type="checkbox"
                                label={`Vor den Nachrichten: ${COST_BEFORE_NEWS} €`}
                                checked={placementBeforeNews}
                                onChange={(e) => setPlacementBeforeNews(e.target.checked)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPlacementAfterNews">
                            <Form.Check
                                type="checkbox"
                                label={`Nach den Nachrichten: ${COST_AFTER_NEWS} €`}
                                checked={placementAfterNews}
                                onChange={(e) => setPlacementAfterNews(e.target.checked)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPlacementTraffic">
                            <Form.Check
                                type="checkbox"
                                label={`Verkehr: ${COST_TRAFFIC} €`}
                                checked={placementTraffic}
                                onChange={(e) => setPlacementTraffic(e.target.checked)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formFrequency">
                        <div className="mb-1"><strong>Häufigkeit:</strong></div>

                        <Form.Check
                            inline
                            type="radio"
                            label="3 x täglich (150 €)"
                            value={3}
                            checked={frequency === 3}
                            onChange={(e) => setFrequency(parseInt(e.target.value))}
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="6 x täglich (250 €)"
                            value={6}
                            checked={frequency === 6}
                            onChange={(e) => setFrequency(parseInt(e.target.value))}
                        />
</Form.Group>

                        <Button className="mt-3" variant="primary" type="submit">Unverbindlich berechnen</Button>
                    </Form>

                    {showSummary && (
                        <Card className="mt-3">
                            <Card.Body>
                                <Card.Title>Zusammenfassung Ihrer Anfrage:</Card.Title>
                                {name && <p><strong>Name:</strong> {name}</p>}
                                {email && <p><strong>Email:</strong> {email}</p>}
                                {telephone && <p><strong>Telefon:</strong> {telephone}</p>}
                                {spotLengthSeconds > 0 && <p><strong>Spotlänge in Sekunden:</strong> {spotLengthSeconds} Sekunden</p>}
                                {placementBeforeNews && <p><strong>Sendeplatz vor den Nachrichten:</strong> {COST_BEFORE_NEWS} €</p>}
                                {placementAfterNews && <p><strong>Sendeplatz nach den Nachrichten:</strong> {COST_AFTER_NEWS} €</p>}
                                {placementTraffic && <p><strong>Sendeplatz Verkehr:</strong> {COST_TRAFFIC} €</p>}
                                {frequency && <p><strong>Gewählte Häufigkeit:</strong> {frequency === 3 ? '3 x täglich' : '6 x täglich'}</p>}
                                {totalCost && <Alert variant="primary" className="mt-3">
                                    <strong>Gesamtkosten:</strong> {totalCost} €
                                </Alert>}
                            </Card.Body>
                        </Card>
                    )}
                </Col>
            </Row>
        </Container>
    );
}
