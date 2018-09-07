import React, { Component } from 'react';
import { Input, Button, Fa, Card, CardBody, ModalFooter,ModalBody, ModalHeader, Modal } from 'mdbreact';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col, Jumbotron} from 'react-bootstrap';

import { Dots, Digital } from 'react-activity';
import 'react-activity/dist/react-activity.css';    
import { Link } from 'react-router-dom'

import {loading, topSection} from '../../Animation/Landing'
import {aboutEnter} from '../../Animation/About'

import './Styles/Landing.css'
import './Styles/LandingMobile.css'

import About from '../About/About'


import {TweenMax, Power2, TimelineLite, Elastic, Circ, Back, Power4, TimelineMax} from "gsap/TweenMax";
import scrollToComponent from 'react-scroll-to-component';




export default class Landing extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            loading: true,   
            landingHome: false,
            
        };

        this.aboutTransition = this.aboutTransition.bind(this);
    }
       
    componentDidMount() {
        
        loading(this.flamingo, this.activity)                           
        
        setTimeout(() => {
            this.setState({loading: false, landingHome: true})            
        }, 3000)

        setTimeout(() => {                
            topSection(this.landingHome, this.rocket, this.Fname, this.Lname, this.whiteBox, this.me, this.summary, this.links)
            
        }, 3000)                
    }

    aboutTransition() {
        aboutEnter(this.aboutHome)
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
        const links = links => this.links = links

        const aboutHome = aboutHome => this.aboutHome = aboutHome

		return(
            <div className="landingContainer">
                <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:600" rel="stylesheet"/>
                                        
                {this.state.loading?
                    <div ref={Landing} className="landingFlamingo">                
                        <img ref={flamingo} className="flamingo" src={require("../../Assets/Images/flamingo.jpg")}/>
                        <div ref={activity} className="activity">
                            <Dots size={15} animating={this.state.loading}/>
                        </div>                                                                   
                    </div>
                :

                    <div ref={landingHome} className="landingHome" style={{fontFamily: "Josefin Sans"}}>
                        
                        

                        <div ref={aboutHome} >
                            <About />
                        </div>
                    </div>

                    
                }
                
            </div>
		)
	}

}

