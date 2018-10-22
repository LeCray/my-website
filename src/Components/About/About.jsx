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

import {aboutColumns} from '../../Animation/About'
import {workEnter} from '../../Animation/Work'
import {contactEnter} from '../../Animation/Contact'
import {Transition} from '../../Animation/Transition'


import {TweenMax, Power2, TimelineLite, Elastic, Circ, Back, Power4, TimelineMax} from "gsap/TweenMax";
import scrollToComponent from 'react-scroll-to-component';



export default class About extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            home: false,
            about: true,
            work: false,
            contact: false,
            columns: false,
            transition: false,
            txContent: false,
            width: window.innerWidth
            
        };

        this.homeTransition = this.homeTransition.bind(this);
        this.workTransition = this.workTransition.bind(this);
        this.contactTransition = this.contactTransition.bind(this);       
    }


    componentDidMount() {                
        this.setState({columns: true, transition: false})            
        aboutColumns(
            this.aboutLeftCol, this.aboutRightColContent, 
            this.state.width, this.aboutStill, this.aboutStill2, this.aboutLinkHome,
            this.aboutLink, this.aboutLinkWork, this.aboutLinkContact
        )
    }

    async homeTransition() {
        await this.setState({
            transition: true,
            txContent: true,                    
            home: true, 
            work: false,
            contact: false
        })
        //homeEnter(this.home)
        Transition(
            this.transitionFirst, this.transitionMain, 
            this.transitionSecond,this.FnameTx,this.LnameTx, 
            this.state.width, this.learnTx
        )

        setTimeout(() => {
            this.setState({about: false})
        }, 2000)
        setTimeout(() => {
            this.setState({txContent: false})
        }, 2700)
        setTimeout(() => {
            this.setState({transition: false})
        }, 3300)
    }
    async workTransition() {
        await this.setState({
            transition: true,
            txContent: true,
            home: false,                     
            work: true,
            contact: false
        })
        Transition(
            this.transitionFirst, this.transitionMain, 
            this.transitionSecond,this.FnameTx,this.LnameTx, 
            this.state.width, this.learnTx
        )        
        workEnter(this.workHome)
        
        setTimeout(() => {
            this.setState({about: false})
        }, 2000)
        setTimeout(() => {
            this.setState({txContent: false})
        }, 3000)
        setTimeout(() => {
            this.setState({transition: false})
        }, 3300)
    }
    async contactTransition() {
        await this.setState({
            transition: true,
            txContent: true,
            home: false,                     
            work: false,
            contact: true
        })
        Transition(
            this.transitionFirst, this.transitionMain, 
            this.transitionSecond,this.FnameTx,this.LnameTx, 
            this.state.width, this.learnTx
        )
        contactEnter(this.contactHome)

        setTimeout(() => {
            this.setState({about: false})
        }, 2000)
        setTimeout(() => {
            this.setState({txContent: false})
        }, 3000)
        setTimeout(() => {
            this.setState({transition: false})
        }, 3300)
    }


	render() {	
        const home = home => this.home = home
        const workHome = workHome => this.workHome = workHome
        const contactHome = contactHome => this.contactHome = contactHome

        const aboutLeftCol = aboutLeftCol => this.aboutLeftCol = aboutLeftCol
        const aboutRightColContent = aboutRightColContent => this.aboutRightColContent = aboutRightColContent
        const aboutStill = aboutStill => this.aboutStill = aboutStill
        const aboutStill2 = aboutStill2 => this.aboutStill2 = aboutStill2

        const aboutLinkHome = aboutLinkHome => this.aboutLinkHome = aboutLinkHome
        const aboutLink = aboutLink => this.aboutLink = aboutLink
        const aboutLinkWork = aboutLinkWork => this.aboutLinkWork = aboutLinkWork
        const aboutLinkContact = aboutLinkContact => this.aboutLinkContact = aboutLinkContact

        const transitionFirst  = transitionFirst  => this.transitionFirst  = transitionFirst
        const transitionMain  = transitionMain  => this.transitionMain  = transitionMain
        const transitionSecond  = transitionSecond  => this.transitionSecond  = transitionSecond
        const FnameTx = FnameTx => this.FnameTx = FnameTx
        const LnameTx = LnameTx => this.LnameTx = LnameTx
        const learnTx = learnTx => this.learnTx = learnTx
    
		return(
            <div>
                <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300" rel="stylesheet"/>
                {this.state.about?
                    <div style={{fontFamily: "Josefin Sans"}}>

                        <div ref={aboutLeftCol} className="aboutLeftCol" style={{display: this.state.columns?null:"none"}}>
                            <div className="aboutWhite">

                                <div className="about-still">
                                    <h2 ref={aboutStill}>ABOUT</h2>
                                    <p ref={aboutStill2} className="learn"><b> - I LIVE TO LEARN - </b></p>
                                </div>
                                
                                <div className="aboutLinks">
                                    <div className="about-link-content">
                                        <p 
                                            className={this.state.homeHover?"about-link-hover":"aboutLink"}
                                            ref={aboutLinkHome} 
                                            onClick={this.homeTransition}
                                            onMouseEnter={() => this.setState({homeHover: !this.state.homeHover})}
                                            onMouseLeave={() => this.setState({homeHover: !this.state.homeHover})}>
                                            Home
                                        </p>
                                        <p 
                                            className={this.state.aboutHover||this.state.about?"about-link-hover":"aboutLink"}
                                            ref={aboutLink}
                                            onMouseEnter={() => this.setState({aboutHover: !this.state.aboutHover})}
                                            onMouseLeave={() => this.setState({aboutHover: !this.state.aboutHover})}>
                                            About
                                        </p>
                                        <p 
                                            className={this.state.workHover||this.state.work?"about-link-hover":"aboutLink"}
                                            ref={aboutLinkWork} 
                                            onClick={this.workTransition}
                                            onMouseEnter={() => this.setState({workHover: !this.state.workHover})}
                                            onMouseLeave={() => this.setState({workHover: !this.state.workHover})}>
                                            Work
                                        </p>
                                        <p 
                                            className={this.state.contactHover||this.state.contact?"about-link-hover":"aboutLink"} 
                                            ref={aboutLinkContact} 
                                            onClick={this.contactTransition}
                                            onMouseEnter={() => this.setState({contactHover: !this.state.contactHover})}
                                            onMouseLeave={() => this.setState({contactHover: !this.state.contactHover})}>
                                            Contact
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="aboutRightCol">
                            <div 
                                ref={aboutRightColContent} 
                                className="aboutRightColContent" 
                                style={{"-webkit-overflow-scrolling": "touch", display: this.state.columns?null:"none"}}>

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
                                        <li>C#</li>
                                        <li>Java</li>
                                        <li>Ruby</li>  
                                    </ul>
                                    And frameworks:
                                    <ul>
                                        <li>Android Studio</li>
                                        <li>React JS</li>
                                        <li>React Native</li>
                                        <li>.NET</li>  
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
                
                {this.state.transition?
                    <div className="transition-container">
                        <div 
                            ref={transitionFirst} 
                            className="transition-first" 
                            >
                        </div>
                        <div ref={transitionMain} className="transition-main">
                            <div className="transition-content" style={{display: this.state.txContent?null:"none"}}>
                                <p ref={FnameTx} className="name-tx">J</p>
                                <p ref={LnameTx} className="name-tx" style={{marginLeft: 5}}>K</p>
                                <p ref={learnTx} className="learn-tx">- LIVING TO LEARN -</p>
                            </div>
                        </div>
                        <div 
                            ref={transitionSecond}
                            className="transition-second" 
                            >
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

