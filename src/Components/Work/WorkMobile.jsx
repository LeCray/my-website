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

import {Design} from './Content/Design'
import {Research} from './Content/Research'
import {MadMobile} from './Content/MadMobile'
import {Parkupp} from './Content/Parkupp'
import {MoneyCalls} from './Content/MoneyCalls'
import {GalxyBit} from './Content/GalxyBit'



export default class WorkMobile extends Component {

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

                    <div style={{fontFamily: "Josefin Sans"}}>
                    <div className="work-left-col">
                        <div className="work-left-col-content">
                            <h2>WORK</h2>
                            {/*<hr className="workHr"/>*/}
                            <div className="work-intra-links">
                                <p className="work-link" onClick={()=>scrollToComponent(this.design,{offset:-45,align:'top',ease:'inOutCirc',duration:1500})}>Honors Design Project</p>
                                <p className="work-link" onClick={()=>scrollToComponent(this.research,{offset:-45,align:'top',ease:'inOutCirc',duration:1500})}>Honors Research Project</p>
                                <p className="work-link" onClick={()=>scrollToComponent(this.mad,{offset:-45,align:'top',ease:'inOutCirc',duration:1500})}>MAD Mobile</p>
                                <p className="work-link" onClick={()=>scrollToComponent(this.parkupp,{offset:-45,align:'top',ease:'inOutCirc',duration:1500})}>ParkUpp</p>
                                <p className="work-link" onClick={()=>scrollToComponent(this.moneycalls,{offset:-45,align:'top',ease:'inOutCirc',duration:1500})}>Money Calls</p>
                                <p className="work-link" onClick={()=>scrollToComponent(this.galxybit,{offset:-45,align:'top',ease:'inOutCirc',duration:1500})}>GalxyBit</p>
                            </div>
                        </div>
                    </div>

                    <div className="work-right-col">
                        <div className="work-right-col-content" style={{"-webkit-overflow-scrolling": "touch"}}>
                            <div ref={(section)=>{this.design = section;}} className="work-content-mobile">
                                <Design />
                            </div>
                            <hr className="work-hr"/>
                            <div ref={(section)=>{this.research = section;}} className="work-content-mobile">
                                <Research />
                            </div>
                            <hr className="work-hr"/>
                            <div ref={(section)=>{this.parkupp = section;}} className="work-content-mobile">
                                <Parkupp />
                            </div>
                            <hr className="work-hr"/>
                            <div ref={(section)=>{this.mad = section;}} className="work-content-mobile">
                                <MadMobile />
                            </div>
                            <hr className="work-hr"/>
                            <div ref={(section)=>{this.moneycalls = section;}} className="work-content-mobile">
                                <MoneyCalls />
                            </div>
                            <hr className="work-hr"/>
                            <div ref={(section)=>{this.galxybit = section;}} className="work-content-mobile">
                                <GalxyBit />
                            </div>

                        </div>
                    </div>
                </div>

            </div>
		)
	}

}
