import React, { Component } from 'react';
import { Input, Button, Fa, Card, CardBody, ModalFooter,ModalBody, ModalHeader, Modal } from 'mdbreact';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col, Jumbotron} from 'react-bootstrap';

import { Dots, Digital } from 'react-activity';
import 'react-activity/dist/react-activity.css';    
import { Link } from 'react-router-dom'


import './Styles/Contact.css'
import './Styles/ContactMobile.css'


import {TweenMax, Power2, TimelineLite, Elastic, Circ, Back, Power4, TimelineMax} from "gsap/TweenMax";
import scrollToComponent from 'react-scroll-to-component';




export default class Contact extends Component {
    
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
                <div className="contactLeftCol">
                    <div className="contactleftColContent">
                        <h2>CONTACT</h2>
                        {/*<hr className="contactHr"/>*/}
                        
                        <div className="contactLinks">
                            <p className="contactLink" onClick={this.contactTransition}>About /</p>
                            <p className="contactLink">Work /</p>
                            <p className="contactLink">Contact /</p>
                        </div>
                    </div>
                </div>

                <div className="contactRightCol">
                    <div className="contactRightColContent" style={{"-webkit-overflow-scrolling": "touch"}}>

                        <h2>I am a self taught fullstack developer</h2>
                      
   

                    </div>
                </div>
                
            </div>
		)
	}

}

