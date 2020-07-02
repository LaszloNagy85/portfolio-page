import React from "react";

class Carousel extends React.Component {
    constructor(props){
        super(props)
        this.state={
            items: [
                {
                    id: 0,
                    title: 'My Way',
                    subTitle: 'The Travellers Community',
                    imgSrc: gitHub,
                    link: 'https://github.com/kadartibi/myway-backend',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Laszlo Nagy',
                    subTitle: 'LinkedIn profile',
                    imgSrc: LinledIn,
                    link: 'https://www.linkedin.com/in/laszlo-nagy-bb0b1417a/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'SocialDistance',
                    subTitle: 'A simple social network for real friends',
                    imgSrc: socialDistance,
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
