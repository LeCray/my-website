import React, { Component } from 'react';
import { Input, Button, Fa, Card, CardBody, ModalFooter,ModalBody, ModalHeader, Modal } from 'mdbreact';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col, Jumbotron} from 'react-bootstrap';

import { Dots, Digital } from 'react-activity';
import 'react-activity/dist/react-activity.css';    
import { Link } from 'react-router-dom'


import './Styles/About.css'
import './Styles/AboutMobile.css'


import {TweenMax, Power2, TimelineLite, Elastic, Circ, Back, Power4, TimelineMax} from "gsap/TweenMax";
import scrollToComponent from 'react-scroll-to-component';

import {MadMobile} from './Content/MadMobile'
import {Parkupp} from './Content/Parkupp'
import {MoneyCalls} from './Content/MoneyCalls'
import {GalxyBit} from './Content/GalxyBit'



export default class About extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            loading: true,   
            landingHome: false,
            madMobile: true,
            parkupp: false
            
        };

        this.madMobile = this.madMobile.bind(this);
        this.parkupp = this.parkupp.bind(this);
        this.moneyCalls = this.moneyCalls.bind(this);
        this.galxyBit = this.galxyBit.bind(this);
    }

    madMobile() {
        this.setState({
            madMobile:true,
            parkupp: false,
            moneyCalls: false,
            galxyBit: false,
        })
    }
    parkupp() {
        this.setState({
            parkupp: true,
            madMobile:false,
            moneyCalls: false,
            galxyBit: false,
        })
    }
    moneyCalls() {
        this.setState({
            moneyCalls: true,
            parkupp: false,
            madMobile:false,
            galxyBit: false,
        })
    }
    galxyBit() {
        this.setState({
            galxyBit: true,
            moneyCalls: false,
            parkupp: false,
            madMobile:false,
        })
    }
       

	render() {		
    
		return(
            <div>
                <div className="aboutLeftCol">
                    <div className="leftColContent">
                        <h2>ABOUT</h2>
                        {/*<hr className="aboutHr"/>*/}
                        <div className="about-intra-links">
                            <p className="aboutLink" style={{marginLeft: 0}} onClick={this.madMobile}>MAD Mobile</p>
                            <p className="aboutLink" onClick={this.parkupp}>ParkUpp</p>
                            <p className="aboutLink" onClick={this.moneyCalls}>Money Calls</p>
                            <p className="aboutLink" onClick={this.galxyBit}>GalxyBit</p>
                        </div>
                        <div className="aboutLinks">
                            <p className="aboutLink" onClick={this.aboutTransition}>About /</p>
                            <p className="aboutLink">Work /</p>
                            <p className="aboutLink">Contact /</p>
                        </div>
                    </div>
                </div>

                <div className="aboutRightCol">
                    <div className="rightColContent" style={{"-webkit-overflow-scrolling": "touch"}}>

                        <div style={{display: this.state.madMobile?null:"none"}}>
                            <MadMobile />
                        </div>
                        <div style={{display: this.state.parkupp?null:"none"}}>
                            <Parkupp />
                        </div>
                        <div style={{display: this.state.moneyCalls?null:"none"}}>
                            <MoneyCalls />
                        </div>
                        <div style={{display: this.state.galxyBit?null:"none"}}>
                            <GalxyBit />
                        </div>
                      
   

                    </div>
                </div>
                
            </div>
		)
	}

}
