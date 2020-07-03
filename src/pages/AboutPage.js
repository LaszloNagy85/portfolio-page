import React, { useState, useEffect} from 'react';

import Hero from "../components/Hero";
import Content from '../components/Content';

const AboutPage = (props) => {
    const [ervinAge, setErvinAge] = useState(0);
    
    useEffect(() => {
        let monthes = 0;
        const birth = new Date(2019, 7);
        const now = new Date();
        const y = now.getFullYear() - birth.getFullYear();
        const m = now.getMonth() - birth.getMonth();
        monthes = y*12 + m;
        setErvinAge(monthes);
    }, []);

    return (
        <div>
            <Hero title={props.title} />
            <Content>
                <p>Hello, my name is Laszlo Nagy. I'm a fresh junior full stack developer with experience in Java, Spring Framework, Microservices, JPA, H2/Postgre SQL and React.</p>

                <p>My dream is to one day start my own business, to make people's life easier, by creating standout applications, and also to become a great mentor for my future team.</p>
               
                <p>I'm constantly learning new things, currently those include gaining more experience with React and Java, and getting to know Google Firebase and Node JS.</p>
                
                <p>My latest project, "My Way", is a community page for travellers, made by our team of 3, fresh junior developers. You can check it out <a href="https://github.com/kadartibi/myway-backend" target="_blank" rel="noopener noreferrer">here</a>, or on the home page. Technologies, that we used for this app: Java, Spring, JPA, Microservices and React.</p>
                
                <p>My current project is "Social Distance", a little, but yet more useful, mini social media app for the real friends, without all the unnecessary staff. Just friends. It's back-end is currently based on Google Firebase, coded in Node JS, and it's front-end will be React. Once it's ready and deployed, my plan is to recreate the back-end with Java and redeploy it.</p>

                <p>When I'm not learning something new, I like to spend time with my wife and my son Ervin, who is 
                    {ervinAge >= 12 && " " + Math.round(ervinAge / 12) + "y "}
                    {ervinAge % 12 !== 0 ? ervinAge > 12 ? "and " + ervinAge%12 + "m " : " " + ervinAge + "m " : ""}
                    old now. Cannot wait to start teaching him programming. :)</p>
            </Content>
        </div>
    );
}

export default AboutPage;