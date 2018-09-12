import React, { Component } from 'react';
import { Input, Button, Fa, Card, CardBody, ModalFooter,ModalBody, ModalHeader, Modal } from 'mdbreact';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col, Jumbotron} from 'react-bootstrap';

import { Dots, Digital, Bounce } from 'react-activity';
import 'react-activity/dist/react-activity.css';    
import { Link } from 'react-router-dom'

import {loading, topSection} from '../../Animation/Landing'
import {aboutEnter} from '../../Animation/About'
import {workEnter} from '../../Animation/Work'
import {contactEnter} from '../../Animation/Contact'

import './styles/Landing.css'
import './styles/LandingMobile.css'

import LandingMobile from './LandingMobile'
import Work from '../Work/Work'
import About from '../About/About'
import Contact from '../Contact/Contact'


import {TweenMax, Power2, TimelineLite, Elastic, Circ, Back, Power4, TimelineMax} from "gsap/TweenMax";
import scrollToComponent from 'react-scroll-to-component';




export default class Landing extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            loading: true,   
            landingHome: false,
            about: false,
            work: false,
            contact: false,
            mobile: false,
            width: window.innerWidth
        };

        this.workTransition = this.workTransition.bind(this);
        this.aboutTransition = this.aboutTransition.bind(this);
        this.contactTransition = this.contactTransition.bind(this);
    }
    
    componentWillMount(){

        this.setState({height: window.innerHeight + 'px'});
        if (this.state.width < 576) {
            this.setState({mobile: true});
        }       
    }

    componentDidMount() {
        
        

        setTimeout(() => {
            this.setState({loading: false, landingHome: true})            
        }, 1000)

        setTimeout(() => {   
            if (this.state.mobile){
                null
            } else {
                topSection(this.landingHome, this.rocket, this.Fname, this.Lname, 
                    this.whiteBox, this.me, this.hr, this.summary, 
                    this.aboutLink, this.workLink, this.contactLink)
            }
            
        }, 1000)                
    }

    async aboutTransition() {
        await this.setState({
            about: true,
            work: false,
            contact: false
        })
        aboutEnter(this.aboutHome)
    }
    async workTransition() {
        await this.setState({
            about: false,
            work: true,
            contact: false
        })
        workEnter(this.workHome)
    }
    async contactTransition() {
        await this.setState({
            about: false,
            work: false,
            contact: true
        })
        contactEnter(this.contactHome)
    }

	render() {		
        const Landing = landingContainer => this.landingContainer = landingContainer
        const flamingo = flamingo => this.flamingo = flamingo
        const activity = activity => this.activity = activity
        const landingHome = landingHome => this.landingHome = landingHome
        const rocket = rocket => this.rocket = rocket
        const Fname = Fname => this.Fname = Fname
        const Lname = Lname => this.Lname = Lname
        const whiteBox = whiteBox => this.whiteBox = whiteBox
        const me = me => this.me = me
        const summary = summary => this.summary = summary
        const hr = hr => this.hr = hr
        const aboutLink = aboutLink => this.aboutLink = aboutLink
        const workLink = workLink => this.workLink = workLink
        const contactLink = contactLink => this.contactLink = contactLink

        const aboutHome = aboutHome => this.aboutHome = aboutHome
        const workHome = workHome => this.workHome = workHome
        const contactHome = contactHome => this.contactHome = contactHome

		return(
            <div className="landingContainer">
                <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:700" rel="stylesheet"/>
                                

                {this.state.loading?    
                    <div ref={activity} className="activity">
                        <Dots size={25} animating={this.state.loading} color="#0066ff"/>
                    </div>                                                                                       
                :
                    this.state.mobile? <LandingMobile />:
                    <div ref={landingHome} className="landingHome" style={{fontFamily: "Josefin Sans"}}>
                        <Row>
                            <Col lg={12} className="topSection">
                                <img ref={rocket} className="rocket" src={require("../../Assets/Images/thunder.svg")}/><br/>
                                
                                <h1 ref={Fname} className="name">Jabulani</h1>
                                <h1 ref={Lname} className="name" style={{marginLeft: 5}}>Kunene</h1>
                                <hr ref={hr} className="hr"/>

                                <div ref={summary} className="summary">
                                    <div className="summary-details" style={{fontWeight: "bold"}}>
                                        <h6>Full Stack Developer</h6>
                                        {/*<h6>ReactJS, ExpressJS, Ruby on Rails</h6>*/}
                                        <h6>Web | Android | iOS</h6>
                                    </div>
                                </div>

                                <div  className="links summary">
                                    <p ref={aboutLink} className="link" onClick={this.aboutTransition}>About /</p>
                                    <p ref={workLink} className="link" onClick={this.workTransition}>Work /</p>
                                    <p ref={contactLink} className="link" onClick={this.contactTransition}>Contact /</p>
                                </div>

                                
                            </Col>                            
                            <div ref={whiteBox} className="whiteBox">                                
                                <img ref={me} className="me" src={require("../../Assets/Images/me3.jpg")}/>
                            </div>
                        </Row>                                                        
                    </div>
                                      
                }

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

                {this.state.contact?   
                    <div ref={contactHome} className="contactHome">                 
                        <Contact />
                    </div>
                :null}

                
            </div>
		)
	}

}

