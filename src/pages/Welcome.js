// file name: Welcome.js

import { useLoaderData } from "react-router-dom";
import { Container, Row, Col, Card } from 'react-bootstrap';
import React from "react"
import logo from '../images/logo.svg';

/**
 * Ist die Startseite der React-Applikation von RH
 * Hier finden sich die News und Werbung
 * @returns 
 */
export default function Welcome() {
    // Lade Daten vom Service
    const news = useLoaderData();

    function ShowPost(currentPost) {
        return (
            <Col md={6} sm={12} key={currentPost.news_id}>
                <Card className='mb-3'>
                    <Card.Body>
                        <Card.Title>{currentPost.news_headline}</Card.Title>
                        <Card.Text>{currentPost.news_content}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        );
    }

    function ShowNews() {
        return (
            <Row className="current-news">
                {news.map(currentPost => ShowPost(currentPost))}
            </Row>
        );
    }

    function NewsSection() {
        return (
            <div className='news-section'>
                <h2>HipDipDauerwelle News</h2>
                <ShowNews />
            </div>
        );
    }

    function BookCommercials() {
        return (
            <Card className="book-commercials">
                <Card.Body>
                    <Card.Title>Bei uns Werben</Card.Title>
                    <Card.Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Card.Text>
                    <div className="book-commercials-img">
                        <img src={logo} alt="Werbebild" className="img-fluid" />
                    </div>
                </Card.Body>
            </Card>
        );
    }

    return (
        <Container className="welcome text-center">
            <NewsSection />
            <BookCommercials />
        </Container>
    );
}
