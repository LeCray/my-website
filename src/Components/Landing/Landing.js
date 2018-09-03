import React, { Component } from 'react';
import { Input, Button, Fa, Card, CardBody, ModalFooter,ModalBody, ModalHeader, Modal } from 'mdbreact';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col, Jumbotron} from 'react-bootstrap';

import { Dots } from 'react-activity';
import 'react-activity/dist/react-activity.css';    
import { Link } from 'react-router-dom'

import './styles/Landing.css'
import './styles/LandingMobile.css'

    

export default class Landing extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            loading: true,            
        };

        //this.handleInputChange = this.handleInputChange.bind(this);
    }
       
    componentDidMount() {
        //this.setState({loading: false})
        window.scrollTo(0, 0)
    }

	render() {		
		return(
            <div className="headingContainer">              
                <h1 className="jk"> J.K </h1>   
                <Dots animating={this.state.loading}/>           
            </div>
		)
	}

}

