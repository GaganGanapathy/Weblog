import React from "react";
import Header from "../Common/Header";
import image from '../assets/img/header-bg.jpg'

import Services from '../Common/Services';
import Portfolio from '../Common/Portfolio';
import Timeline from '../Common/Timeline';
import Team from '../Common/Team';


class Home extends React.Component {
    render() {
        return(
            <div>
                <Header 
                title="Welcome To Our Studio!"
                subtitle="IT'S NICE TO MEET YOU"
                buttonText="TELL ME MORE"
                showButton={true}
                link="/services"
                image={image}
                />
                <Services />
                <Portfolio />
                <Timeline />
                <Team />
            </div>
        )
    }
}

export default Home;