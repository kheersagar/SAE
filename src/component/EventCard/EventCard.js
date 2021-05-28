import React from 'react'
import { Col, Row } from 'react-bootstrap';
import "./EventCard.css";

function EventCard(props) {
    return (
        <div>
            <Row className="event__card">
                <Col>
                <img className="event__card__img"src="https://image.freepik.com/free-photo/blue-jeep-parking-public-zone_114579-4042.jpg"></img>
                </Col>
                <Col className="event__card__title">{props.title}</Col>
                <Col className="event__card__description">{props.description}</Col>
            </Row>
        </div>
    )
}

export default EventCard
