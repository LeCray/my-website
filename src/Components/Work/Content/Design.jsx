import React, { Component } from 'react';





export class Design extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            design_poster: false,
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <div ref={(section) => { this.design = section; }}>
                    <h2 className="heading" style={{ color: "#737373" }}>Honors Design Project</h2>
                    <h4>Space Engineering (2021)</h4>

                    <div className="design-logo-container">
                        <img className="design-logo" src={require("../../../Assets/Images/design_project.png")} />
                    </div>

                    <p className='exec-summary'>Executive Summary:</p>
                    <p className="mad-content">
                        An asteroid mining system employing an inflatable Cassegrain style solar concentrator was conceptualized
                        and designed. The design captures and encloses an asteroid with an inflatable bag, and concentrated solar
                        energy is used to heat, and mine the asteroid. This kind of heating process is known as thermal spalling;
                        and is used to drill into the asteroid, breaking it apart, thereby releasing volatiles (including water vapor)
                        that are trapped in the asteroid.
                    </p>

                    <div className="design-logo-container">
                        <img className="design-logo" src={require("../../../Assets/Images/asteroid_mining_design.png")} />
                    </div>
                    <p className="mad-content">
                        As is seen in the diagram above, inflatable, passively cooled cryopumps trap the released water vapor as ice. The design attempts to realise atleast
                        100 kgs of water as ice from a single asteroid, and will deliver the water to fueling stations
                        in low-Earth orbit (LEO). Water has been identified as the first commodity most likely to be of value for
                        extraction and sale to customers in space&#8212;particularly for sale as propellant for spacecraft or satellite
                        propulsion, solar radiation shielding, and human consumption.
                        <br /><br />
                        The design targets Arjuna type near-Earth asteroids (NEAs) that are rich in water as determined by spectroscopic analysis.
                        After being launched into LEO from Earth (using SpaceX’s Falcon 9 rocket for example),
                        the spacecraft follows an efficient Hohmann transfer orbit to get to the asteroid; once mining is complete, a
                        spiral transfer orbit is used to get back to LEO&#8212;where the water will be sold.
                    </p>
                </div>

            </div>
        )
    }
}
