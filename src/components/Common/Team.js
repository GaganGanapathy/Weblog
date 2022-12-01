import React, {Component} from 'react';
import TeamMember from './TeamMember';

const persons=[
    {title: "Parveen Anand", subtitle: "Lead Designer", image: 1},
    {title: "Diana Peterson", subtitle: "Lead Marketer", image: 2},
    {title: "Larry Parker", subtitle: "Lead Develop", image: 3},
]

class Team extends Component {
    render() {
        return(
            <section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                    {
                        persons.map((person,index) => {
                            return <TeamMember {...person} key={index} />
                        })
                    }
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div>
            </div>
        </section>
        )
    }
}

export default Team;