import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Playlist() {

    const songs = [
        {
            "id": "de305d54-75b4-431b-adb2-eb6b9e546014",
            "Titel": "Thunderstruck",
            "Länge_in_Sekunden": 292,
            "Musiker": "AC/DC",
            "Startzeit": "15:00",
            "Album": "The Razors Edge"
        },
        {
            "id": "81f3d1c8-4383-4b0d-9ccf-3c3c866d7355",
            "Titel": "Master of Puppets",
            "Länge_in_Sekunden": 515,
            "Musiker": "Metallica",
            "Startzeit": "15:05",
            "Album": "Master of Puppets"
        },
        {
            "id": "65383d44-8c50-4be3-af2d-f87a7b7e794a",
            "Titel": "Painkiller",
            "Länge_in_Sekunden": 378,
            "Musiker": "Judas Priest",
            "Startzeit": "15:13",
            "Album": "Painkiller"
        }
    ]

    return (
        <Container className="d-flex justify-content-center">
            <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                    <h2 className="text-center">Unsere Songs</h2>
                    {songs.map(song => <PlayListEntry key={song.id} song={song} />)}
                </Col>
            </Row>
        </Container>
    );
}

function PlayListEntry({song}) {
    return (
        <Card className="mt-3">
            <Card.Header>{song.Titel} - {song.Musiker}</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item>Album: {song.Album}</ListGroup.Item>
                <ListGroup.Item>Länge: {song.Länge_in_Sekunden} Sekunden</ListGroup.Item>
                <ListGroup.Item>Startzeit: {song.Startzeit}</ListGroup.Item>
            </ListGroup>
        </Card>
    );
}

export default Playlist;
