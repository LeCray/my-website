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




export const MadMobile = () => {
    return (
        <div>
            <h2>Mahele Auto Doctor</h2>
            <h5>A real time vehicle diagnostics application</h5>

            <p className="mad-content">
                I single-handedly developed software for Mahele Auto Doctor (M.A.D) in Vereeneging, Gauteng.                              
                M.A.D does vehicle repairs and maintenance, fleet management, construction, courier, towing and much more. 
                <br/><br/>
                The App I built for the company allows their clients to manage their accounts in a new way.
                The main feature involves streaming live vehicle data analytics from any client's vehicle, 
                anywhere in real time via an On Board Diagnostics dongle (OBD2)
                <br/><br/>
                Other features for their clients include: 
                <ul>
                    <li>Self vehicle <strong>diagnosis</strong></li>
                    <li>Make or cancel vehicle <strong>bookings</strong></li>
                    <li>Approve or disapprove proposed <strong>quotations</strong> </li>
                    <li>View <strong>Invoices</strong></li>
                </ul>
            </p> 
            <p> 
                The app was published to the Play Store in January 2018. MAD Mobile
            </p>
            <img className="mad-mobile-img" src={require("../../../Assets/Images/mad-mobile.png")}/>
        </div>
    )
}