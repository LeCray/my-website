import React, { Component } from 'react';
import { Input, Button, Fa, Card, CardBody, ModalFooter,ModalBody, ModalHeader, Modal } from 'mdbreact';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col, Jumbotron} from 'react-bootstrap';

import { Dots, Digital } from 'react-activity';
import 'react-activity/dist/react-activity.css';    
import { Link } from 'react-router-dom'

import './Styles/About.css'
import './Styles/AboutMobile.css'

import Landing from '../Landing/Landing'
import Work from '../Work/Work'
import Contact from '../Contact/Contact'


import {TweenMax, Power2, TimelineLite, Elastic, Circ, Back, Power4, TimelineMax} from "gsap/TweenMax";
import scrollToComponent from 'react-scroll-to-component';



export default class About extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            home: false,
            about: true,
            work: false,
            contact: false
            
        };

        this.homeTransition = this.homeTransition.bind(this);
        this.workTransition = this.workTransition.bind(this);
        this.contactTransition = this.contactTransition.bind(this);       
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
    async workTransition() {
        await this.setState({
            home: false, 
            about: false,           
            work: true,
            contact: false
        })
        //workEnter(this.workHome)
    }
    async contactTransition() {
        await this.setState({
            home: false, 
            about: false,           
            work: false,
            contact: true
        })
        //contactEnter(this.contactHome)
    }


	render() {	
        const home = home => this.home = home
        const workHome = workHome => this.workHome = workHome
        const contactHome = contactHome => this.contactHome = contactHome	
    
		return(
            <div>
                {this.state.about?
                    <div>
                        <div className="aboutLeftCol">
                            <div className="aboutWhite">
                                <h2>ABOUT</h2>
                                {/*<hr className="aboutHr"/>*/}
                                
                                <div className="aboutLinks">
                                    <p className="aboutLink" onClick={this.homeTransition}>Home /</p>
                                    <p className="aboutLink" >About /</p>
                                    <p className="aboutLink" onClick={this.workTransition}>Work /</p>
                                    <p className="aboutLink" onClick={this.contactTransition}>Contact /</p>
                                </div>
                            </div>
                        </div>

                        <div className="aboutRightCol">
                            <div className="aboutRightColContent" style={{"-webkit-overflow-scrolling": "touch"}}>

                                <h2>I am a self taught fullstack developer</h2>

                            </div>
                        </div>
                    </div>
                :null}

                {this.state.home?   
                    <div ref={home} className="home">                 
                        <Landing />
                    </div>
                :null}

                {this.state.work?   
                    <div ref={workHome} className="workHome">                 
                        <Work />
                    </div>
                :null}

                {this.state.contact?   
                    <div ref={contactHome} className="contactHome">                 
                        <Contact />
                    </div>
                :null}
                
            </div>
		)
	}

}

