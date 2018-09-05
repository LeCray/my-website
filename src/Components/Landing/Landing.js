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
            console.log("Bang")
            this.leftCol = TweenMax.from(this.leftCol, 3, {
                scale: .7, opacity: 0
            }); 
        }, 3000)

        
        
    }

	render() {		
        const Landing = landingContainer => this.landingContainer = landingContainer
        const flamingo = flamingo => this.flamingo = flamingo
        const activity = activity => this.activity = activity
        const leftCol = leftCol => this.leftCol = leftCol
        const rightCol = rightCol => this.rightCol = rightCol

		return(
            <div className="landingContainer">
                                        

                    {this.state.loading?
                        <div ref={Landing} className="landingFlamingo">                
                            <img ref={flamingo} className="flamingo" src={require("../../Assets/Images/flamingo.jpg")}/>
                            <div ref={activity} className="activity">
                                <Dots size={15} animating={this.state.loading}/>
                            </div>                                                                   
                        </div>
                    :

                        <div ref={leftCol} className="landingHome">
                            <Row>
                                <Col  md={6} className="leftCol">
                                </Col>
                                <Col ref={rightCol} md={6} className="rightCol">
                                </Col>

                            </Row>
                        </div>
                    }
                
            </div>
		)
	}

}

