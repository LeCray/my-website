import React, { Component } from 'react';
import { Input, Button, Fa, Card, CardBody, ModalFooter,ModalBody, ModalHeader, Modal } from 'mdbreact';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col, Jumbotron} from 'react-bootstrap';

import { Dots, Digital } from 'react-activity';
import 'react-activity/dist/react-activity.css';    
import { Link } from 'react-router-dom'


import './Styles/Work.css'
import './Styles/WorkMobile.css'


import {TweenMax, Power2, TimelineLite, Elastic, Circ, Back, Power4, TimelineMax} from "gsap/TweenMax";
import scrollToComponent from 'react-scroll-to-component';

import Landing from '../Landing/Landing'
import About from '../About/About'
import Contact from '../Contact/Contact'

import {MadMobile} from './Content/MadMobile'
import {Parkupp} from './Content/Parkupp'
import {MoneyCalls} from './Content/MoneyCalls'
import {GalxyBit} from './Content/GalxyBit'



export default class Work extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            home: false,
            about: false,
            work: true,
            contact: false,
            
            madMobile:true,
            parkupp: false,
            moneyCalls: false,
            galxyBit: false,            
        };

        this.madMobile = this.madMobile.bind(this);
        this.parkupp = this.parkupp.bind(this);
        this.moneyCalls = this.moneyCalls.bind(this);
        this.galxyBit = this.galxyBit.bind(this);

        this.homeTransition = this.homeTransition.bind(this);
        this.aboutTransition = this.aboutTransition.bind(this);  
        this.contactTransition = this.contactTransition.bind(this);
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
    async contactTransition() {
        await this.setState({
            home: false, 
            about: false,           
            work: false,
            contact: true
        })
        //workEnter(this.workHome)
    }
       

	render() {		
        const home = home => this.home = home
        const aboutHome = aboutHome => this.aboutHome = aboutHome
        const contactHome = contactHome => this.contactHome = contactHome   
    
		return(
            <div>
                <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300" rel="stylesheet"/>
                {this.state.work?
                    <div style={{fontFamily: "Josefin Sans"}}>
                    <div className="workLeftCol">
                        <div className="workLeftColContent">
                            <h2>WORK</h2>
                            {/*<hr className="workHr"/>*/}
                            <div className="work-intra-links">
                                <p className="workLink" style={{marginLeft: 0}} onClick={this.madMobile}>MAD Mobile</p>
                                <p className="workLink" onClick={this.parkupp}>ParkUpp</p>
                                <p className="workLink" onClick={this.moneyCalls}>Money Calls</p>
                                <p className="workLink" onClick={this.galxyBit}>GalxyBit</p>
                            </div>
                            <div className="workLinks">
                                <p className="workLink" onClick={this.homeTransition}>Home /</p>
                                <p className="workLink" onClick={this.aboutTransition}>About /</p>
                                <p className="workLink">Work /</p>
                                <p className="workLink" onClick={this.contactTransition}>Contact /</p>
                            </div>
                        </div>
                    </div>

                    <div className="workRightCol">
                        <div className="workRightColContent" style={{"-webkit-overflow-scrolling": "touch"}}>

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
                </div>:null}

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
                
                {this.state.contact?   
                    <div ref={contactHome} className="contactHome">                 
                        <Contact />
                    </div>
                :null}
                
            </div>
		)
	}

}

