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
            <div key={currentPost.news_id} className="news-post">
                <h3>{currentPost.news_headline}</h3>
                <p>{currentPost.news_content}</p>
            </div>
        );
    }

    function ShowNews() {
        return (
            <>
                <div className="current-news">
                    {news.map(currentPost => ShowPost(currentPost))}
                </div>
            </>
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
            <div className="book-commercials">
                <h2>Bei uns Werben</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>

                <div className="book-commercials-img">
                    <img src={logo} alt="Werbebild" />
                </div>
            </div>
        );
    }

    return (
        <div className="welcome">
            <NewsSection />
            <BookCommercials />
        </div>
    );
}