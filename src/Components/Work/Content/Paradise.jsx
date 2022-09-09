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




export class Paradise extends Component {

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
                    <h2 className="heading" style={{ color: "#737373" }}>Paradise Eats</h2>
                    <h4>A Food Delivery Platform</h4>

                    <div className="design-logo-container">
                        <img className="paradise-logo" src={require("../../../Assets/Images/paradise_logo.png")} />
                    </div>

                    <p className="mad-content">
                        Paradise Eats is my attempt at an Uber Eats clone for areas that still don't have any
                        food delivery platforms, but still have several great local restaurants.
                    </p>
                    <div className="screenshot-container">
                        <img className="screenshot" src={require("../../../Assets/Images/consumer.png")} />
                        <img className="screenshot" src={require("../../../Assets/Images/vendor.png")} />
                        <img className="screenshot" src={require("../../../Assets/Images/driver.png")} />
                    </div>
                    <p className="mad-content">
                        The entire solution consists of the consumer app, vendor app, and driver app. These are 3
                        completely seperate, standalone mobile applications that all
                        communicate with each other in real-time.
                        <br /><br />
                        I worked on all 3 apps by myself initially, and published the first version of the apps
                        to Google Play Store on the 13th of July, 2022. It took me close to 7 months to complete.
                        Only after I published the apps was I joined by my current developer colleague.
                    </p>

                </div>
            </div>
        )
    }
}
