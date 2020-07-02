import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Card from "./Card";

import profile from "../assets/images/profile.jpg";
import myway from "../assets/images/myway.png";
import wip2s from "../assets/images/wip2s.png";

class Carousel extends React.Component {
    constructor(props){
        super(props)
        this.state={
            items: [
                {
                    id: 0,
                    title: 'Laszlo Nagy',
                    subTitle: 'LinkedIn profile',
                    imgSrc: profile,
                    link: 'https://www.linkedin.com/in/laszlo-nagy-bb0b1417a/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'My Way',
                    subTitle: 'The Travellers Community',
                    imgSrc: myway,
                    link: 'https://github.com/kadartibi/myway-backend',
                    selected: false
                },
                {
                    id: 2,
                    title: 'SocialDistance',
                    subTitle: 'A simple social network for real friends',
                    imgSrc: wip2s,
                    link: 'https://www.google.com',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id,card) => {
        let items = [...this.state.items];

        items[id].selected = !items[id].selected;

        items.forEach(item => item.id !== id && (item.selected = false));

        this.setState({items});
    }

    makeItems = (items) => {
        return items.map(item => {
        return <Card key={item.id} item={item} onClick={(e => this.handleCardClick(item.id, e))}/>;
        });
    }

  render() {
    return (
        <Container fluid={true}>
            <Row className="justify-content-around">
                {this.makeItems(this.state.items)}
            </Row>
        </Container>
    )
  }
}

export default Carousel;
