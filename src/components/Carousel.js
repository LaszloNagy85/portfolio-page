import React from "react";

import profile from "../assets/images/profile.jpg";
import myway from "../assets/images/myway.png";
import wip1 from "../assets/imageswip1.png";

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
                    imgSrc: wip1,
                    link: 'https://www.google.com',
                    selected: false
                },
            ]
        }
    }
  render() {
    return <div>Carousel works</div>;
  }
}

export default Carousel;
