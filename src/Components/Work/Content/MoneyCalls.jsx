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




export const MoneyCalls = () => {
    return (
        <div>
            <h2 className="heading" style={{color: "#737373"}}>Money Calls</h2>
            <h4>A foreign exchange web application</h4>

            <p className="money-calls-content">
                This application was built for Gift Mashapha, founder and CEO of Market Trading Network SA.  
                New aspiring traders can create sign up and trade foreign currencies using AVA Trade as the affiliated broker. 
                <br/><br/>
                Features of the app included:
                <ul>
                  <li>Real time group chat sessions</li>
                  <li>Tracking of who referred who to the system</li>
                  <li>User account statistics management</li>
                  <li>Performance tracking</li>
                  <li>Embedded cryptocurrency payment system for top trader rewards</li>
                </ul>
                <img className="money-calls-img" src={require("../../../Assets/Images/money-calls.png")}/>                
            </p>            
        </div>
    )
}