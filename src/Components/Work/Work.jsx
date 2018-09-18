import React, { Component } from 'react';
import { Input, Button, Fa, Card, CardBody, ModalFooter,ModalBody, ModalHeader, Modal } from 'mdbreact';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col, Jumbotron} from 'react-bootstrap';

import { Dots, Digital } from 'react-activity';
import 'react-activity/dist/react-activity.css';    
import { Link } from 'react-router-dom'


import './Styles/Work.css'
import './Styles/WorkMobile.css'

import {workColumns} from '../../Animation/Work'


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
            columns: false,
            madMobile:true,
            parkupp: false,
            moneyCalls: false,
            galxyBit: false,
            transition: false,  
            width: window.innerWidth          
        };

        this.madMobile = this.madMobile.bind(this);
        this.parkupp = this.parkupp.bind(this);
        this.moneyCalls = this.moneyCalls.bind(this);
        this.galxyBit = this.galxyBit.bind(this);

        this.homeTransition = this.homeTransition.bind(this);
        this.aboutTransition = this.aboutTransition.bind(this);  
        this.contactTransition = this.contactTransition.bind(this);
    }

    componentDidMount() {                
        this.setState({columns: true})            
        workColumns(
            this.workLeftCol, this.workRightColContent, 
            this.state.width, this.workStill, this.workLinkHome,
            this.workLinkAbout, this.workLink, this.workLinkContact
        )
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
        
        const workLeftCol = workLeftCol => this.workLeftCol = workLeftCol
        const workRightColContent = workRightColContent => this.workRightColContent = workRightColContent 
        const workStill = workStill => this.workStill = workStill

        const workLinkHome = workLinkHome => this.workLinkHome = workLinkHome
        const workLink = workLink => this.workLink = workLink
        const workLinkAbout = workLinkAbout => this.workLinkAbout = workLinkAbout
        const workLinkContact = workLinkContact => this.workLinkContact = workLinkContact

        const transitionFirst  = transitionFirst  => this.transitionFirst  = transitionFirst
        const transitionMain  = transitionMain  => this.transitionMain  = transitionMain
        const transitionSecond  = transitionSecond  => this.transitionSecond  = transitionSecond
        const FnameTx = FnameTx => this.FnameTx = FnameTx
        const LnameTx = LnameTx => this.LnameTx = LnameTx
        const learnTx = learnTx => this.learnTx = learnTx

    
		return(
            <div>
                <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300" rel="stylesheet"/>
                {this.state.work?

                    <div style={{fontFamily: "Josefin Sans"}}>

                    <div ref={workLeftCol} className="workLeftCol" style={{display: this.state.columns?null:"none"}}>
                        <div className="workLeftColContent">
                            <div ref={workStill}> 
                                <h2>WORK</h2>
                                
                                <div className="work-intra-links">
                                    <p className="workLink" style={{marginLeft: 0}} onClick={this.madMobile}>MAD Mobile</p>
                                    <p className="workLink" onClick={this.parkupp}>ParkUpp</p>
                                    <p className="workLink" onClick={this.moneyCalls}>Money Calls</p>
                                    <p className="workLink" onClick={this.galxyBit}>GalxyBit</p>
                                </div>
                            </div>

                            <div className="workLinks">
                                <p className="workLink" ref={workLinkHome} onClick={this.homeTransition}>Home /</p>
                                <p className="workLink" ref={workLinkAbout} onClick={this.aboutTransition}>About /</p>
                                <p className="workLink" ref={workLink}>Work /</p>
                                <p className="workLink" ref={workLinkContact} onClick={this.contactTransition}>Contact /</p>
                            </div>
                        </div>
                    </div>

                    <div className="workRightCol">
                        <div 
                            ref={workRightColContent} 
                            className="workRightColContent" 
                            style={{"-webkit-overflow-scrolling": "touch", display: this.state.columns?null:"none"}}>
                            
                            <div className="scroller" style={{display: this.state.madMobile?null:"none"}}>
                                <div>
                                    <MadMobile />
                                </div>
                            </div>
                            <div className="scroller" style={{display: this.state.parkupp?null:"none"}}>
                                <div>
                                    <Parkupp />
                                </div>
                            </div>
                            <div className="scroller" style={{display: this.state.moneyCalls?null:"none"}}>
                                <div>
                                    <MoneyCalls />
                                </div>
                            </div>
                            <div className="scroller" style={{display: this.state.galxyBit?null:"none"}}>
                                <div>
                                    <GalxyBit />
                                </div>
                            </div>                          
                        </div>
                    </div>
                </div>:null}

                <div className="transition-container" style={{display: this.state.transition?null:"none"}}>
                    <div 
                        ref={transitionFirst} 
                        className="transition-first" 
                        >
                    </div>
                    <div ref={transitionMain} className="transition-main">
                        <div className="transition-content">
                            <p ref={FnameTx} className="name-tx">J</p>
                            <p ref={LnameTx} className="name-tx" style={{marginLeft: 5}}>K</p>
                            <p ref={learnTx} className="learn-tx">- I LIVE TO LEARN -</p>
                        </div>
                    </div>
                    <div 
                        ref={transitionSecond}
                        className="transition-second" 
                        >
                    </div>
                </div>

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

