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




export const GalxyBit = () => {
    return (
        <div>
            <h2>GalxyBit</h2>

            <p className="mad-content">
                I am also currently developing the web application of ParkUpp – a tech startup.  
                ParkUpp is a company that solves todays limited parking problem.  It is a decentralised parking application.  
                Owners that own parking can list their parking on the app and users that 
                need parking can simply get access to that parking and pay the owners directly.  
                Very similar to Airbnb except instead of apartments – its parking space.
            </p>            
        </div>
    )
}