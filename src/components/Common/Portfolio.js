import React from 'react';
import PortfolioItem from './PortfolioItem';

const portfolio=[
    {title: "Threads", subtitle: "Illustration", image: 1},
    {title: "Explore", subtitle: "Graphic Design", image: 2},
    {title: "Finish", subtitle: "Identity", image: 3},
    {title: "Lines", subtitle: "Branding", image: 4},
    {title: "SouthWest", subtitle: "Website Design", image: 5},
    {title: "Window", subtitle: "Photography", image: 6},
]

class Portfolio extends React.Component {
    render() {
        return(
            <div>
                <section className="page-section bg-light" id="portfolio">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Portfolio</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <div className="row">
                            {
                                portfolio.map((item,index) => {
                                    return <PortfolioItem {...item} key={index} />
                                })
                            }
                            
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Portfolio;