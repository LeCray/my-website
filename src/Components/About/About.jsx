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
                <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300" rel="stylesheet"/>
                {this.state.about?
                    <div style={{fontFamily: "Josefin Sans"}}>
                        <div className="aboutLeftCol">
                            <div className="aboutWhite">
                                <h2>ABOUT</h2>
                                <p className="learn"><b> - I LIVE TO LEARN - </b></p>
                                
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

                                <h2 className="heading">Jabulani Kunene</h2>
                                <h4>I am a self taught fullstack developer</h4>

                                <br/><br/>
                                
                                <h5 className="heading">University of the Witwatersrand</h5>
                                <p>
                                    1) I am currently taking a break from my 3rd year of Mechanical Engineering studies
                                    <br/><br/>
                                    My subjects include:                                    
                                    <ul>                                        
                                        <li>Design 3</li> 
                                        <li>Mechatronics 3</li>  
                                        <li>Fluid Mechanics 3</li>  
                                        <li>Mechanics of Vibrations 3</li>  
                                        <li>Mechanics of Solids 3</li>  
                                        <li>Numerical Analysis 3</li>  
                                        <li>Statistics 3</li>
                                        <li>Maths 3</li> 
                                    </ul>
                                    
                                    2) Right now I am studying Computer Science part-time.
                                    <br/><br/>
                                    My subjects include:
                                    <ul>                                        
                                        <li>Computational & Applied Mathematics</li>                                         
                                    </ul>
                                                                        
                                </p>

                                <hr className="hrLine"/>

                                <h5 className="heading">My Passions & Skills</h5>
                                <p>
                                    I first taught myself how to trade the financial markets and am 
                                    currently developing a cryptocurrency market algorithm with a Computer Science Phd student 
                                    (my lecturer) to model the crypto market, predict intraday moves and place trades automatically.
                                    <br/><br/>
                                    My early interest in cryptocurrency evolved into an interest in <b>Web Development</b> because I then made the decision
                                    to build <b>GalxyBit</b> - a cryptocurrency exchange (BTC/ZAR, ETH/ZAR, LTC/ZAR)
                                    <br/><br/>
                                    I taught myself various coding languages including:
                                    <ul>                                        
                                        <li>HTML</li> 
                                        <li>CSS</li>  
                                        <li>JavaScript</li>  
                                        <li>Ruby</li>  
                                        <li>Java</li>
                                    </ul>
                                    And frameworks:
                                    <ul>
                                        <li>Android Studio</li>
                                        <li>React JS</li>  
                                        <li>Express JS</li>  
                                        <li>Ruby on Rails</li>  
                                    </ul>
                                    I am also very familar with:
                                    <ul>
                                        <li>Python</li>
                                        <li>MATLAB</li>
                                        <li>Scilab</li>
                                    </ul>
                                </p>
                                
                                <hr className="hrLine"/>                                
                                <p className="heading">IT'S POSSIBLE TO LEARN ANYTHING</p>
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

