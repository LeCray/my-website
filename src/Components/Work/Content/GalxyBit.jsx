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
            <h5>A cryptocurrency exchange</h5>
            <p><i>- Still in progress</i></p>

            <p className="galxybit-content">
                People with South African Rands will be able to exchange their ZARS 
                for one of three major cryptocurrencies namely Bitcoin, Litecoin and Ethereum. 
                The web application and mobile application are still in beta testing mode.
            </p>        
            <img className="galxybit-img" src={require("../../../Assets/Images/galxybit.png")}/>    
        </div>
    )
}