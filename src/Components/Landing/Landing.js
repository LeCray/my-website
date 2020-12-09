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

import {Transition} from '../../Animation/Transition'

import './styles/Landing.css'
import './styles/LandingMobile.css'
import './Styles/LandingTransitions.css'

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
            transition: false,
            width: window.innerWidth
        };

        this.workTransition = this.workTransition.bind(this);
        this.aboutTransition = this.aboutTransition.bind(this);
        this.contactTransition = this.contactTransition.bind(this);
    }

    componentWillMount(){

        this.setState({height: window.innerHeight + 'px'});
        if (this.state.width < 1025) {
            this.setState({mobile: true});
        }
    }

    async componentDidMount() {

        setTimeout(() => {
            this.setState({loading: false, landingHome: true})
        }, 1000)

        setTimeout(() => {
            if (this.state.mobile){
                null
            } else {
                topSection(
                    this.landingHome, this.rocket, this.Fname, this.Lname,
                    this.whiteBox, this.me, this.hr, this.summary,
                    this.aboutLink, this.workLink, this.contactLink
                )
            }
        }, 1000)
    }

    async aboutTransition() {
        await this.setState({transition: true, txContent: true,})
        Transition(
            this.transitionFirst, this.transitionMain,
            this.transitionSecond,this.FnameTx,this.LnameTx,
            this.state.width, this.learnTx
        )
        this.setState({
            about: true,
            work: false,
            contact: false,
        })
        aboutEnter(this.aboutHome)

        setTimeout(() => {
            this.setState({landingHome: false})
        }, 2000)
        setTimeout(() => {
            this.setState({txContent: false})
        }, 3000)
        setTimeout(() => {
            this.setState({transition: false})
        }, 3200)
    }
    async workTransition() {
        await this.setState({transition: true, txContent: true,})
        Transition(
            this.transitionFirst, this.transitionMain,
            this.transitionSecond,this.FnameTx,this.LnameTx,
            this.state.width, this.learnTx
        )
        this.setState({
            about: false,
            work: true,
            contact: false
        })
        workEnter(this.workHome)

        setTimeout(() => {
            this.setState({landingHome: false})
        }, 2000)
        setTimeout(() => {
            this.setState({txContent: false})
        }, 3000)
        setTimeout(() => {
            this.setState({transition: false})
        }, 3300)
    }
    async contactTransition() {
        await this.setState({transition: true, txContent: true,})
        Transition(
            this.transitionFirst, this.transitionMain,
            this.transitionSecond,this.FnameTx,this.LnameTx,
            this.state.width, this.learnTx
        )
        this.setState({
            about: false,
            work: false,
            contact: true
        })
        contactEnter(this.contactHome)

        setTimeout(() => {
            this.setState({landingHome: false})
        }, 2000)
        setTimeout(() => {
            this.setState({txContent: false})
        }, 3000)
        setTimeout(() => {
            this.setState({transition: false})
        }, 3300)
    }

	render() {
        const Landing = landingContainer => this.landingContainer = landingContainer
        const flamingo = flamingo => this.flamingo = flamingo
        const activity = activity => this.activity = activity
        const landingHome = landingHome => this.landingHome = landingHome
        const rocket = rocket => this.rocket = rocket

        const Fname = Fname => this.Fname = Fname
        const Lname = Lname => this.Lname = Lname
        const FnameTx = FnameTx => this.FnameTx = FnameTx
        const LnameTx = LnameTx => this.LnameTx = LnameTx
        const learnTx = learnTx => this.learnTx = learnTx

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

       const transitionFirst  = transitionFirst  => this.transitionFirst  = transitionFirst
       const transitionMain  = transitionMain  => this.transitionMain  = transitionMain
       const transitionSecond  = transitionSecond  => this.transitionSecond  = transitionSecond

		return(
            <div className="landingContainer">
                <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:700" rel="stylesheet"/>


                {this.state.loading?
                    <div ref={activity} className="activity">
                        <Dots size={25} animating={this.state.loading} color="#0066ff"/>
                    </div>
                :
                    this.state.mobile? <LandingMobile />:
                    <div ref={landingHome} className="landingHome" style={{fontFamily: "Josefin Sans", display: this.state.landingHome?null:"none"}}>
                        <Row>
                            <Col lg={12} className="topSection">
                                <img ref={rocket} className="rocket" src={require("../../Assets/Images/thunder.svg")}/><br/>

                                <div className="name-container">
                                    <h1 ref={Fname} className="name">Jabulani</h1>
                                    <h1 ref={Lname} className="name" style={{marginLeft: 5}}>Kunene</h1>
                                </div>

                                <div className="landing-right-col-container">
                                    <div ref={summary} className="summary">
                                        <div className="summary-details">
                                            <hr ref={hr} className="hr"/>
                                            <p className="summary-details-text">Software Developer (4+ years of experience)</p>
                                            <p className="summary-details-text">Mechanical Engineer (BSc Hons)</p>
                                            <p className="summary-details-text-wits">University of the Witswatersrand</p>
                                        </div>
                                    </div>

                                    <div className={this.state.aboutHover||this.state.workHover||this.state.contactHover?"links-correction":"links"}>
                                        <p
                                            ref={aboutLink}
                                            className={this.state.aboutHover?"link-hover":"link"}
                                            onClick={this.aboutTransition}
                                            onMouseEnter={() => this.setState({aboutHover: !this.state.aboutHover})}
                                            onMouseLeave={() => this.setState({aboutHover: !this.state.aboutHover})}>
                                            About
                                        </p>
                                        <p
                                            ref={workLink}
                                            className={this.state.workHover?"link-hover":"link"}
                                            onClick={this.workTransition}
                                            onMouseEnter={() => this.setState({workHover: !this.state.workHover})}
                                            onMouseLeave={() => this.setState({workHover: !this.state.workHover})}>
                                            Work
                                        </p>
                                        <p
                                            ref={contactLink}
                                            className={this.state.contactHover?"link-hover":"link"}
                                            onClick={this.contactTransition}
                                            onMouseEnter={() => this.setState({contactHover: !this.state.contactHover})}
                                            onMouseLeave={() => this.setState({contactHover: !this.state.contactHover})}>
                                            Contact
                                        </p>
                                    </div>
                                </div>

                            </Col>
                            <div ref={whiteBox} className="whiteBox">
                                <img ref={me} className="me" src={require("../../Assets/Images/me3.jpg")}/>
                            </div>
                        </Row>
                    </div>

                }

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
