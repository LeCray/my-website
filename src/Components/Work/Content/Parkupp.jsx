import React, { Component } from 'react';
import Ionicon from 'react-ionicons'
import { Link } from 'react-router-dom'

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




export class Parkupp extends Component {
  componentDidMount() {
      window.scrollTo(0, 0)
    }

  render() {
    return (
        <div>
            <h2 className="heading" style={{color: "#737373"}}>Parkupp</h2>
            <h4>A decentralised parking application</h4>

            <div className="parkupp-logo-container">
              <img className="parkupp-logo" src={require("../../../Assets/Images/parkupp_logo.png")}/>
            </div>

            <p className="mad-content">
                I am a co-founder and one of only two developers at Parkupp - a proptech startup that focuses on helping
                property owners utilise unoccupied space.
                <br/><br/>
                Owners of parking space can list their parking on the platform and drivers that
                need parking can then easily get access to that parking and pay the owners directly through the platform.
                Very similar to Airbnb except instead of apartments – its parking space.
                <br/><br/>
                One of our biggest partnerships to date is with Wework and Redefine Properties.
            </p>
            <div className="parkupp-partnership-container">
              <img className="parkupp-partnership" src={require("../../../Assets/Images/parkupp_partnership.png")}/>
            </div>
            <p className="mad-content">
                We've recieved quite a bit of media coverage. To explore more, click on the screenshot below to visit our website.
            </p>
            <a href="https://parkupp.co.za" target="_blank">
              <img className="parkupp-img" src={require("../../../Assets/Images/parkupp.png")}/>
            </a>
        </div>
    )}
}
