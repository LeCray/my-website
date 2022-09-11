import React, { Component } from 'react';
import { Input, Button, Fa, Card, CardBody, ModalFooter, ModalBody, ModalHeader, Modal } from 'mdbreact';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col, Jumbotron } from 'react-bootstrap';

import { Dots, Digital } from 'react-activity';
import 'react-activity/dist/react-activity.css';
import { Link } from 'react-router-dom'


import './Styles/Contact.css'
import './Styles/ContactMobile.css'

import { contactColumns } from '../../Animation/Contact'
import { aboutEnter } from '../../Animation/About'
import { workEnter } from '../../Animation/Work'
import { Transition } from '../../Animation/Transition'

import Landing from '../Landing/Landing'
import About from '../About/About'
import Work from '../Work/Work'

import { TweenMax, Power2, TimelineLite, Elastic, Circ, Back, Power4, TimelineMax } from "gsap/TweenMax";
import scrollToComponent from 'react-scroll-to-component';




export default class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            home: false,
            about: false,
            work: false,
            contact: true,
            columns: false,
            transition: false,
            width: window.innerWidth
        }

        this.homeTransition = this.homeTransition.bind(this);
        this.workTransition = this.workTransition.bind(this);
        this.aboutTransition = this.aboutTransition.bind(this);
    }

    componentDidMount() {
        this.setState({ columns: true })
        contactColumns(
            this.contactLeftCol, this.contactRightColContent,
            this.state.width, this.contactStill, this.contactLinkHome,
            this.contactLinkAbout, this.contactLinkWork, this.contactLink
        )
    }

    async homeTransition() {
        await this.setState({
            transition: true,
            txContent: true,
            home: true,
            about: false,
            work: false,
        })
        //homeEnter(this.home)
        Transition(
            this.transitionFirst, this.transitionMain,
            this.transitionSecond, this.FnameTx, this.LnameTx,
            this.state.width, this.learnTx
        )

        setTimeout(() => {
            this.setState({ contact: false })
        }, 1000)
        setTimeout(() => {
            this.setState({ txContent: false })
        }, 2700)
        setTimeout(() => {
            this.setState({ transition: false })
        }, 3300)
    }
    async aboutTransition() {
        await this.setState({
            transition: true,
            txContent: true,
            home: false,
            about: true,
            work: false,
        })
        Transition(
            this.transitionFirst, this.transitionMain,
            this.transitionSecond, this.FnameTx, this.LnameTx,
            this.state.width, this.learnTx
        )
        aboutEnter(this.aboutHome)

        setTimeout(() => {
            this.setState({ contact: false })
        }, 2000)
        setTimeout(() => {
            this.setState({ txContent: false })
        }, 3000)
        setTimeout(() => {
            this.setState({ transition: false })
        }, 3300)
    }
    async workTransition() {
        await this.setState({
            transition: true,
            txContent: true,
            home: false,
            about: false,
            work: true,
        })
        Transition(
            this.transitionFirst, this.transitionMain,
            this.transitionSecond, this.FnameTx, this.LnameTx,
            this.state.width, this.learnTx
        )
        workEnter(this.workHome)

        setTimeout(() => {
            this.setState({ contact: false })
        }, 2000)
        setTimeout(() => {
            this.setState({ txContent: false })
        }, 3000)
        setTimeout(() => {
            this.setState({ transition: false })
        }, 3300)
    }



    render() {
        const home = home => this.home = home
        const aboutHome = aboutHome => this.aboutHome = aboutHome
        const workHome = workHome => this.workHome = workHome

        const contactLeftCol = contactLeftCol => this.contactLeftCol = contactLeftCol
        const contactRightColContent = contactRightColContent => this.contactRightColContent = contactRightColContent
        const contactStill = contactStill => this.contactStill = contactStill

        const contactLinkHome = contactLinkHome => this.contactLinkHome = contactLinkHome
        const contactLinkAbout = contactLinkAbout => this.contactLinkAbout = contactLinkAbout
        const contactLinkWork = contactLinkWork => this.contactLinkWork = contactLinkWork
        const contactLink = contactLink => this.contactLink = contactLink

        const transitionFirst = transitionFirst => this.transitionFirst = transitionFirst
        const transitionMain = transitionMain => this.transitionMain = transitionMain
        const transitionSecond = transitionSecond => this.transitionSecond = transitionSecond
        const FnameTx = FnameTx => this.FnameTx = FnameTx
        const LnameTx = LnameTx => this.LnameTx = LnameTx
        const learnTx = learnTx => this.learnTx = learnTx

        return (
            <div>
                <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300" rel="stylesheet" />
                {this.state.contact ?

                    <div style={{ fontFamily: "Josefin Sans" }}>

                        <div ref={contactLeftCol} className="contactLeftCol">
                            <div className="contactWhite">
                                <h2 ref={contactStill}>CONTACT</h2>

                                <div className="contactLinks">
                                    <div className="contact-link-content">
                                        <p
                                            className={this.state.homeHover ? "contactLinkHover" : "contactLink"}
                                            ref={contactLinkHome}
                                            onClick={this.homeTransition}
                                            onMouseEnter={() => this.setState({ homeHover: !this.state.homeHover })}
                                            onMouseLeave={() => this.setState({ homeHover: !this.state.homeHover })}>
                                            Home
                                        </p>
                                        <p
                                            className={this.state.aboutHover || this.state.about ? "contactLinkHover" : "contactLink"}
                                            ref={contactLinkAbout}
                                            onClick={this.aboutTransition}
                                            onMouseEnter={() => this.setState({ aboutHover: !this.state.aboutHover })}
                                            onMouseLeave={() => this.setState({ aboutHover: !this.state.aboutHover })}>
                                            About
                                        </p>
                                        <p
                                            className={this.state.workHover || this.state.work ? "contactLinkHover" : "contactLink"}
                                            ref={contactLinkWork}
                                            onClick={this.workTransition}
                                            onMouseEnter={() => this.setState({ workHover: !this.state.workHover })}
                                            onMouseLeave={() => this.setState({ workHover: !this.state.workHover })}>
                                            Work
                                        </p>
                                        <p
                                            className={this.state.contactHover || this.state.contact ? "contactLinkHover" : "contactLink"}
                                            ref={contactLink}
                                            onMouseEnter={() => this.setState({ contactHover: !this.state.contactHover })}
                                            onMouseLeave={() => this.setState({ contactHover: !this.state.contactHover })}>
                                            Contact
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contactRightCol">
                            <div
                                ref={contactRightColContent}
                                className="contactRightColContent"
                                style={{ "-webkit-overflow-scrolling": "touch", display: this.state.columns ? null : "none" }}>

                                <h4 className="contact-heading">Looking forward to hearing from you!</h4>
                                <h5>I am available for full-time, part-time, and freelance work </h5>
                                <hr />
                                <br />

                                <h4 className="name-contact">Jabulani Kunene</h4>


                                <Row>
                                    <Col className="contact-container" lg={6}>
                                        <h5 className="contact-details">Email:</h5>
                                        <h5 className="contact-details">WhatsApp: </h5>
                                        <h5 className="contact-details">Phone: </h5>
                                    </Col>
                                    <Col className="contact-container-2" lg={6}>
                                        <h5 className="contact-details-2">j.kunene123@gmail.com</h5>
                                        <h5 className="contact-details-2">+27 81 741 2792</h5>
                                        <h5 className="contact-details-2">+27 64 020 4711</h5>
                                    </Col>
                                </Row>
                                <img className="me-contact" src={require("../../Assets/Images/me3.jpg")} />

                            </div>
                        </div>
                    </div>
                    : null}

                <div className="transition-container" style={{ display: this.state.transition ? null : "none" }}>
                    <div
                        ref={transitionFirst}
                        className="transition-first"
                    >
                    </div>
                    <div ref={transitionMain} className="transition-main">
                        <div className="transition-content" style={{ display: this.state.txContent ? null : "none" }}>
                            <p ref={FnameTx} className="name-tx">J</p>
                            <p ref={LnameTx} className="name-tx" style={{ marginLeft: 5 }}>K</p>
                            <p ref={learnTx} className="learn-tx">- LIVING TO LEARN -</p>
                        </div>
                    </div>
                    <div
                        ref={transitionSecond}
                        className="transition-second"
                    >
                    </div>
                </div>

                {this.state.home ?
                    <div ref={home} className="home">
                        <Landing />
                    </div>
                    : null}


                {this.state.about ?
                    <div ref={aboutHome} className="aboutHome">
                        <About />
                    </div>
                    : null}

                {this.state.work ?
                    <div ref={workHome} className="workHome">
                        <Work />
                    </div>
                    : null}
            </div>
        )
    }

}
