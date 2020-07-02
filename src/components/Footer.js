import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {

    return (
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        2020 All Rights Reserved.
                    </Col>
                    <Col className="p-0 justify-content-end d-flex" md={3}>
                        This site was made by Laszlo Nagy.
                    </Col>

                </Row>
            </Container>
        </footer>
    )
}

export default Footer;