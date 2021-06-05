import React from 'react'
import { Col, Row } from 'react-bootstrap';
import "./EventCard.css";

function EventCard(props) {
    return (
        <div>
            <Row className="event__card">
                <Col style={{minHeight:"50px"}}>
                <img className="event__card__img" src={props.logo}></img>
                </Col>
                <Col className="event__card__title">{props.title}</Col>
                <Col className="event__card__description">{props.description} <br/>
                {props.link ? <a href={props.link} >{props.link} </a>: null }
                </Col>
            </Row>
        </div>
    )
}

export default EventCard
