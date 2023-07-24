import React from "react"

import logo from '../images/logo.svg';

/**
 * Ist die Startseite der React-Applikation
 * Hier finden sich die News und Werbung
 * @returns 
 */
export default function Welcome() {
    const radioNews = [
        {
            id: 0,
            header: "Spotify und AI",
            text: "1) Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        },
        {
            id: 1,
            header: "Ist die DSGVO der Absturz für Streaming Services?",
            text: "2) Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        },
        {
            id: 2,
            header: "Asking Alexandria - Tourbericht",
            text: "3) Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        },
        {
            id: 3,
            header: "Fender SDM neu am Markt",
            text: "4) Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        }

    ]

    const sportNews = [
        {
            id: 4,
            header: "Fußball - Neues Ball Design sorgt für unmut",
            text: "1) Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        },
        {
            id: 5,
            header: "Handball - Handballer sind mit Ihrem neuen Bal zufrieden",
            text: "2) Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        },
        {
            id: 6,
            header: "Formel 1 - Neue Motortechnik die Revolutioniert",
            text: "3) Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        },
        {
            id: 7,
            header: "Stabhochspringer Verband ordnet sich neu",
            text: "4) Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        }

    ]

    function ShowPost(currentPost) {
        return (
            <div key={currentPost.id} className="news-post">
                <h3>{currentPost.header}</h3>
                <p>{currentPost.text}</p>
            </div>
        );
    }

    function ShowNews() {
        return (
            <>
                <div className="current-news">
                    {radioNews.map(currentPost => ShowPost(currentPost))}
                </div>

                <div className="current-news">
                    {sportNews.map(currentPost => ShowPost(currentPost))}
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