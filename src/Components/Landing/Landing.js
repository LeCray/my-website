import React, { Component } from 'react';
import { Input, Button, Fa, Card, CardBody, ModalFooter,ModalBody, ModalHeader, Modal } from 'mdbreact';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col, Jumbotron} from 'react-bootstrap';

import { Dots, Digital } from 'react-activity';
import 'react-activity/dist/react-activity.css';    
import { Link } from 'react-router-dom'

import './styles/Landing.css'
import './styles/LandingMobile.css'
import './animation.js'

import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";
import {Loadable} from "react-loading-overlay";
import LoadingScreen from 'react-loading-screen'




export default class Landing extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            loading: true,   
            landingHome: false         
        };

        //this.handleInputChange = this.handleInputChange.bind(this);
    }
       
    componentDidMount() {
        
        this.fade = TweenMax.to(this.flamingo, 1, {
            scale: .7, opacity: 0, delay: 2
        });        
        this.twistActivity = TweenMax.to(this.activity, 4, {
            opacity: 0,rotation:90, delay: 2
        });

        setTimeout(() => {
            this.setState({loading: false, landingHome: true})            
        }, 3000)

        setTimeout(() => {                        
            this.landingHome = TweenMax.from(this.landingHome, 2, {
                opacity: 0
            }); 
            
            this.rocket = TweenMax.from(this.rocket, 1, {
                opacity: 0,rotation:90, x:-200, y:200, delay: .5
            });
            this.name = TweenMax.from(this.name, 1, {
                opacity: 0, y:50, delay: .5
            });

        }, 3000)

        
        
    }

	render() {		
        const Landing = landingContainer => this.landingContainer = landingContainer
        const flamingo = flamingo => this.flamingo = flamingo
        const activity = activity => this.activity = activity
        const landingHome = landingHome => this.landingHome = landingHome
        const rocket = rocket => this.rocket = rocket
        const name = name => this.name = name

		return(
            <div className="landingContainer">
                <link href="https://fonts.googleapis.com/css?family=Quicksand:500" rel="stylesheet"/>
                                        
                {this.state.loading?
                    <div ref={Landing} className="landingFlamingo">                
                        <img ref={flamingo} className="flamingo" src={require("../../Assets/Images/flamingo.jpg")}/>
                        <div ref={activity} className="activity">
                            <Dots size={15} animating={this.state.loading}/>
                        </div>                                                                   
                    </div>
                :

                    <div ref={landingHome} className="landingHome" style={{fontFamily: "Quicksand"}}>
                        <Row>
                            <Col lg={12} className="topSection">
                                <img ref={rocket} className="rocket" src={require("../../Assets/Images/rocket.svg")}/>
                                <h1 ref={name} className="name">JABULANI KUNENE</h1>
                            </Col>                            
                        </Row>




                    </div>
                }
                
            </div>
		)
	}

}

