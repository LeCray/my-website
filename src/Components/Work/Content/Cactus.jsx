import React, { Component } from 'react';
import Ionicon from 'react-ionicons'
import { Link } from 'react-router-dom'
import { Modal } from 'react-bootstrap';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Button
} from 'react-bootstrap';




export class Cactus extends Component {

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
                    <h2 className="heading" style={{ color: "#737373" }}>Cactus Global</h2>
                    <h4>Doctoral Research Papers</h4>

                    <div className="design-logo-container">
                        <img className="design-logo" src={require("../../../Assets/Images/design_pic.png")} />
                    </div>

                    <p className='exec-summary'>Executive Summary:</p>
                    <p className="mad-content">
                        This paper presents the methodology to design the energy absorption system of a robotic lander
                        for a soft landing on an extraterrestrial surface that is characterised by extremely low gravity
                        e.g.  an asteroid.  The landing gear preliminary design is based on the requirements of the stability
                        distance and ground clearance.
                <br /><br />
                A  three-dimensional  cantilever  design  lander  was  modelled  in  a  six  degree  of  freedom
                environment  using MATLAB/Simscape  as  the  preferred  multibody  dynamics  software.   Analysis  of  the
                landing  dynamics  of the lander with spring and damper absorber elements was performed to determine the
                preliminary design parameters.
                <br /><br />
                Results show that the spring and damper absorber elements provide an effective energy absorption mechanism
                for landing on an arbitrarily sloped surface at nominal velocities.
                <br /><br />
                The  structural  mass  of  the  landing  system  components  were  estimated  based  on  the  required  design
                parameters and design requirements.  Carbon fiber reinforced plastic was used as the material of choice due
                to its high strength-to-weight ratio and general wide spread use in aerospace applications.
            </p>
                    {/*
            <div className="design-poster-container" onClick={()=> this.setState({design_poster: true})}>
              <img className="design-poster" src={require("../../../Assets/Images/design_poster.png")}/>
            </div>
            */}
                </div>
                {/*}
        {this.state.design_poster?
            <div className='design-poster-container2'>
                <img className="design-poster" src={require("../../../Assets/Images/design_poster.png")}/>
            </div>
        :null}
        */}
            </div>
        )
    }
}
