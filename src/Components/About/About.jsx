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




export default class About extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            loading: true,   
            landingHome: false,
            
        };

        //this.handleInputChange = this.handleInputChange.bind(this);
    }
       

	render() {		
    
		return(
            <div>
                <div className="aboutLeftCol">
                    <div className="leftColContent">
                        <h2>About</h2>
                        <hr className="aboutHr"/>
                        <div className="aboutLinks">
                            <p className="aboutLink" onClick={this.aboutTransition}>About /</p>
                            <p className="aboutLink">Work /</p>
                            <p className="aboutLink">Contact /</p>
                        </div>
                    </div>
                </div>

                <div className="aboutRightCol">
                    <div className="leftColContent">
                    </div>
                </div>
                
            </div>
		)
	}

}

