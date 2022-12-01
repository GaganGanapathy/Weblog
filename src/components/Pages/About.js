import React from 'react';
import image from '../assets/img/about.jpg';
import Header from '../Common/Header';
import Timeline from '../Common/Timeline';

class About extends React.Component {
    render() {
        return(
            <div>
                <Header 
            title="About Us"
            subtitle="IT'S NICE TO MEET YOU"
            showButton={false}
            image={image}
            />

            <Timeline />
            
            </div>
        )
    }

}

export default About;