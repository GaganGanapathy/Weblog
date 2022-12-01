import React from "react";
import {Link} from 'react-router-dom';

class TeamMember extends React.Component {
    render() {
        return(
            <div className="col-lg-4">
                <div className="team-member">
                    <img className="mx-auto rounded-circle" src={`../assets/img/team/${this.props.image}.jpg`} alt="..." />
                    <h4>{this.props.title}</h4>
                    <p className="text-muted">{this.props.subtitle}</p>
                    <Link className="btn btn-dark btn-social mx-2" to="/!" aria-label={`${this.props.title} Twitter Profile`}><i className="fab fa-twitter"></i></Link>
                    <Link className="btn btn-dark btn-social mx-2" to="/!" aria-label={`${this.props.title} Facebook Profile`}><i className="fab fa-facebook-f"></i></Link>
                    <Link className="btn btn-dark btn-social mx-2" to="/!" aria-label={`${this.props.title} LinkedIn Profile`}><i className="fab fa-linkedin-in"></i></Link>
                </div>
            </div>
        )
    }
}

export default TeamMember; 