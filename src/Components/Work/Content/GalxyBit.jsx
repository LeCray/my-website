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
            <h2 className="heading" style={{color: "#737373"}}>GalxyBit</h2>
            <h4>A cryptocurrency exchange</h4>

            <div className="gxb-logo-container">
              <p style={{display: "inline-block", fontSize: 40}}>G</p>ALXY<p style={{color: "#cc7a00", display: "inline-block"}}>BIT</p>            
            </div>

            <p className="galxybit-content">
                Being the first Web App I attempted to build I again built it from the ground up. 
                I conceptulized it, designed the User Interface and built both the frontend and backend of this exchange.
                <br/><br/>
                People with South African Rands will be able to exchange their ZARS 
                for one of three major cryptocurrencies namely Bitcoin, Litecoin and Ethereum. 
                The web application and mobile application are still in beta testing mode.
            </p>        
            <img className="galxybit-img" src={require("../../../Assets/Images/galxybit.png")}/>    
        </div>
    )
}