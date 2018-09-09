import React, { Component } from 'react';
import { Input, Button, Fa, Card, CardBody, ModalFooter,ModalBody, ModalHeader, Modal } from 'mdbreact';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col, Jumbotron} from 'react-bootstrap';

import { Dots, Digital } from 'react-activity';
import 'react-activity/dist/react-activity.css';    
import { Link } from 'react-router-dom'


import './Styles/about.css'
import './Styles/aboutMobile.css'


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

        //this.madMobile = this.madMobile.bind(this);
       
    }


	render() {		
    
		return(
            <div>
                <div className="aboutLeftCol">
                    <div className="aboutleftColContent">
                        <h2>ABOUT</h2>
                        {/*<hr className="aboutHr"/>*/}
                        
                        <div className="aboutLinks">
                            <p className="aboutLink" onClick={this.aboutTransition}>about /</p>
                            <p className="aboutLink">about /</p>
                            <p className="aboutLink">Contact /</p>
                        </div>
                    </div>
                </div>

                <div className="aboutRightCol">
                    <div className="aboutRightColContent" style={{"-webkit-overflow-scrolling": "touch"}}>

                        <h2>I am a self taught fullstack developer</h2>
                      
   

                    </div>
                </div>
                
            </div>
		)
	}

}

