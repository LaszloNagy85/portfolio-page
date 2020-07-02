import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Jumbotron from "react-bootstrap/Jumbotron"

const Hero = (props) => {
    return (
        <Jumbotron>
            <Container>
                <Row>
                    <Col>
                        { props.title && <h1>{props.title}</h1>}
                        { props.subtitle && <h3>{props.subtitle}</h3>}
                        { props.text && <h3>{props.title}</h3>}
                    </Col>
                </Row>

            </Container>
        </Jumbotron>

    );
}

export default Hero;