import React, { Component } from 'react';
import { Input, Button, Fa, Card, CardBody, ModalFooter,ModalBody, ModalHeader, Modal } from 'mdbreact';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col, Jumbotron} from 'react-bootstrap';

import { Dots, Digital } from 'react-activity';
import 'react-activity/dist/react-activity.css';    
import { Link } from 'react-router-dom'


import './Styles/Contact.css'
import './Styles/ContactMobile.css'

import Landing from '../Landing/Landing'
import About from '../About/About'
import Work from '../Work/Work'

import {TweenMax, Power2, TimelineLite, Elastic, Circ, Back, Power4, TimelineMax} from "gsap/TweenMax";
import scrollToComponent from 'react-scroll-to-component';




export default class Contact extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            home: false,
            about: false,
            work: false,
            contact: true
        }
            
        this.homeTransition = this.homeTransition.bind(this);
        this.workTransition = this.workTransition.bind(this);
        this.aboutTransition = this.aboutTransition.bind(this);       
    }

    async homeTransition() {
        await this.setState({
            home: true, 
            about: false,           
            work: false,
            contact: false
        })
        //homeEnter(this.home)
    }
    async aboutTransition() {
        await this.setState({
            home: false, 
            about: true,           
            work: false,
            contact: false
        })
        //homeEnter(this.home)
    }
    async workTransition() {
        await this.setState({
            home: false, 
            about: false,           
            work: true,
            contact: false
        })
        //workEnter(this.workHome)
    }
       


	render() {	
        const home = home => this.home = home
        const aboutHome = aboutHome => this.aboutHome = aboutHome
        const workHome = workHome => this.workHome = workHome	
    
		return(
            <div>
                <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300" rel="stylesheet"/>
                {this.state.contact?
                    <div style={{fontFamily: "Josefin Sans"}}>
                        <div className="contactLeftCol">
                            <div className="contactWhite">
                                <h2>CONTACT</h2>
                                {/*<hr className="contactHr"/>*/}
                                
                                <div className="contactLinks">
                                    <p className="contactLink" onClick={this.homeTransition}>Home /</p>
                                    <p className="contactLink" onClick={this.aboutTransition}>About /</p>
                                    <p className="contactLink" onClick={this.workTransition}>Work /</p>
                                    <p className="contactLink">Contact /</p>
                                </div>
                            </div>
                        </div>

                        <div className="contactRightCol">
                            <div className="contactRightColContent" style={{"-webkit-overflow-scrolling": "touch"}}>

                                <h2 className="heading">Get in touch</h2>
                                <h4>I am available for Full-Time and Freelance work </h4>
                                <hr/>
                                <br/><br/>
                                <Row>
                                    <Col className="contact-container" lg={6}>
                                        <h5 className="contact-details">Email:</h5>
                                        <h5 className="contact-details">Contact: </h5>
                                    </Col>
                                    <Col className="contact-container-2" lg={6}>
                                        <h5 className="contact-details-2">j.kunene123@gmail.com</h5>
                                        <h5 className="contact-details-2">081 741 2792<br/>073 890 4805</h5>
                                    </Col>
                                </Row>

                            </div>
                        </div>
                    </div>
                :null}

                {this.state.home?   
                    <div ref={home} className="home">                 
                        <Landing />
                    </div>
                :null}


                {this.state.about?   
                    <div ref={aboutHome} className="aboutHome">                 
                        <About />
                    </div>
                :null}
                
                {this.state.work?   
                    <div ref={workHome} className="workHome">                 
                        <Work />
                    </div>
                :null}
            </div>
		)
	}

}

