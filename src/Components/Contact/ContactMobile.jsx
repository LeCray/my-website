import React, { Component } from 'react';
import { Input, Button, Fa, Card, CardBody, ModalFooter, ModalBody, ModalHeader, Modal } from 'mdbreact';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col, Jumbotron } from 'react-bootstrap';

import { Dots, Digital } from 'react-activity';
import 'react-activity/dist/react-activity.css';
import { Link } from 'react-router-dom'


import './Styles/Contact.css'
import './Styles/ContactMobile.css'

import Landing from '../Landing/Landing'
import About from '../About/About'
import Work from '../Work/Work'

import { TweenMax, Power2, TimelineLite, Elastic, Circ, Back, Power4, TimelineMax } from "gsap/TweenMax";
import scrollToComponent from 'react-scroll-to-component';

import { ArrowDown } from 'react-feather';


export default class ContactMobile extends Component {

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

        return (
            <div>
                <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300" rel="stylesheet" />

                <div style={{ fontFamily: "Josefin Sans" }}>
                    <div className="contact-left-col">
                        <div className="about-white">
                            <h2>CONTACT</h2>
                            <div className="arrow-container">
                                <ArrowDown color="#800033" size={30} onClick={() => scrollToComponent(this.contact, { offset: 10, align: 'top', ease: 'inOutCirc', duration: 1500 })} />
                            </div>
                        </div>
                    </div>

                    <div className="contact-right-col">
                        <div className="contact-right-col-content" style={{ "-webkit-overflow-scrolling": "touch" }} ref={(section) => { this.contact = section; }}>

                            <h4 className="heading" style={{ color: "#737373" }}>Looking forward to hearing from you!</h4>
                            <h5>I am available for full-time, part-time, and freelance work </h5>
                            <hr />
                            <br />

                            <h4 className="name-contact-mobile">Jabulani Kunene</h4>

                            <h5 className="contact-details">Email:</h5>
                            <h5 className="contact-details-2">j.kunene123@gmail.com</h5>
                            <br />
                            <h5 className="contact-details">WhatsApp: </h5>
                            <h5 className="contact-details-2">+27 81 741 2792</h5>
                            <br />
                            <h5 className="contact-details">Phone: </h5>
                            <h5 className="contact-details-2">+27 64 020 4711</h5>

                            <div className="me-contact-mobile-container">
                                <img className="me-contact-mobile" src={require("../../Assets/Images/me3.jpg")} />
                            </div>
                        </div>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <p>
                            © Jabulani Kunene. All rights reserved.
                            <br />
                            2022
                        </p>
                    </div>
                </div>
            </div>
        )
    }

}
