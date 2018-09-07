import React, { Component } from 'react';
import { Input, Button, Fa, Card, CardBody, ModalFooter,ModalBody, ModalHeader, Modal } from 'mdbreact';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col, Jumbotron} from 'react-bootstrap';

import { Dots, Digital } from 'react-activity';
import 'react-activity/dist/react-activity.css';    
import { Link } from 'react-router-dom'
import {loading, topSection} from './Animation'

import './styles/Landing.css'
import './styles/LandingMobile.css'


import {TweenMax, Power2, TimelineLite, Elastic, Circ, Back, Power4, TimelineMax} from "gsap/TweenMax";
import {Loadable} from "react-loading-overlay";
import LoadingScreen from 'react-loading-screen'




export default class Landing extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            loading: true,   
            landingHome: false,
            
        };

        //this.handleInputChange = this.handleInputChange.bind(this);
    }
       
    componentDidMount() {
        
        loading(this.flamingo, this.activity)                           
        
        setTimeout(() => {
            this.setState({loading: false, landingHome: true})            
        }, 3000)

        setTimeout(() => {                
            topSection(this.landingHome, this.rocket, this.Fname, this.Lname, this.whiteBox, this.me)
            
        }, 3000)

       

        
        
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
                        <Row>
                            <Col lg={12} className="topSection">
                                <img ref={rocket} className="rocket" src={require("../../Assets/Images/rocket.svg")}/><br/>
                                
                                <h1 ref={Fname} className="name">Jabulani</h1>
                                <h1 ref={Lname} className="name" style={{marginLeft: 5}}>Kunene</h1>
                                
                            </Col>                            
                            <div ref={whiteBox} className="whiteBox">                                
                                <img ref={me} className="me" src={require("../../Assets/Images/me.jpg.png")}/>
                            </div>
                        </Row>




                    </div>
                }
                
            </div>
		)
	}

}

