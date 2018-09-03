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



export default class Landing extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            loading: true,            
        };

        //this.handleInputChange = this.handleInputChange.bind(this);
    }
       
    componentDidMount() {
        
        this.down = TweenMax.to(this.flamingo, 3, {
            y:300,opacity: 0, delay: 1
        });
        this.downDelay = TweenMax.to(this.activity, 3, {
            opacity: 0,rotation:90, delay: 1
        });
        
    }

	render() {		
        const Landing = landingContainer => this.landingContainer = landingContainer
        const flamingo = flamingo => this.flamingo = flamingo
        const activity = activity => this.activity = activity

		return(
            <div ref={Landing} className="landingContainer">  
              
                <img ref={flamingo} className="flamingo" src={require("../../Assets/Images/flamingo.jpg")}/>
                <div ref={activity} className="activity">
                    <Dots size={15} animating={this.state.loading}/>
                </div>

                    {/*<Col md={6} className="headingContainer">                        
                        <h1 className="j">J</h1><h1 className="k">K</h1>
                        <div className="activity">
                            <Dots size={20} animating={this.state.loading}/>
                        </div>
                    </Col>*/}
                
            </div>
		)
	}

}
