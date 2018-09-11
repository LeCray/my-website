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
import scrollToComponent from 'react-scroll-to-component';



export class GalxyBit extends Component {
    componentDidMount() {
      
    }

    render() {
    return (
        <div >
            <h2 ref={(section)=>{this.gxb = section;}} className="heading" style={{color: "#737373"}}>GalxyBit</h2>
            <h4>A cryptocurrency exchange</h4>

            <div className="gxb-logo-container">
              <p style={{display: "inline-block", fontSize: 40}}>G</p>ALXY<p style={{color: "#cc7a00", display: "inline-block"}}>BIT</p>            
            </div>

            <p  className="galxybit-content">
                Being the first Web App I attempted to build I am currently rebuilding it
                using a much more faster framework - ExpressJS. 
                Having already conceptulized it, I am redesigning the user interface and, with the help of 3 other developers,
                we will be building both the frontend and backend of this exchange from the ground up.
                It's going to be awesome.
                <br/><br/>
                People with South African Rands will be able to exchange their ZARS 
                for one of three major cryptocurrencies namely Bitcoin, Litecoin and Ethereum. 
                The web application and mobile application are still in beta testing mode.
            </p>        
            <img onClick={()=>scrollToComponent(this.gxb,{offset:0,align:'top',duration:1500})} className="galxybit-img" src={require("../../../Assets/Images/galxybit.png")}/>    
        </div>
    )}
}