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




export const Parkupp = () => {
    return (
        <div>
            <h2>ParkUpp</h2>
            <h5>A decentralised parking application</h5>

            <p className="parkupp-content">
                I am currently the lead developer in a team of developers developing ParkUpp's web and mobile application.
                <br/><br/>                
                Owners that own parking can list their parking on the app and users that 
                need parking can simply get access to that parking and pay the owners directly through the app. 
                <br/><br/>                 
                Very similar to Airbnb except instead of apartments – its parking space.
            </p>  
            <img className="parkupp-img" src={require("../../../Assets/Images/parkupp.png")}/>          
        </div>
    )
}