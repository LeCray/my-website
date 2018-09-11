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
            <h2 className="heading" style={{color: "#737373"}}>ParkUpp</h2>
            <h4>A decentralised parking application</h4>
            
            <div className="parkupp-logo-container">
              <img className="parkupp-logo" src={require("../../../Assets/Images/parkupp_logo.png")}/>
            </div>

            <p className="parkupp-content">
                I am currently a lead developer in a team of developers developing ParkUpp's Web and Mobile Application. 
                I build both frontend and backend components of both the ParkUpp Web App and Mobile App.
                <br/><br/>                
                Owners that own parking can list their parking on the app and users that 
                need parking can simply get access to that parking and pay the owners directly through the app. 
                <br/><br/>                 
                Very similar to Airbnb except instead of apartments – its parking space.
                <br/><br/>
                Click on the image below to go to the App.
            </p>  

            <a href="https://parkupp.co.za" target="_blank">
              <img className="parkupp-img" src={require("../../../Assets/Images/parkupp.png")}/>          
            </a>
        </div>
    )}
}