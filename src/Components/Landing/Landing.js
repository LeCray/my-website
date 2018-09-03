import React, { Component } from 'react';
import { Input, Button, Fa, Card, CardBody, ModalFooter,ModalBody, ModalHeader, Modal } from 'mdbreact';

//import Ionicon from 'react-ionicons'
//import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
//import scrollToComponent from 'react-scroll-to-component';
    
import { Link } from 'react-router-dom'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  //Button
} from 'react-bootstrap';



export default class Landing extends Component {
    
       


    componentDidMount() {
      window.scrollTo(0, 0)
    }


	render() {		
		return(
            <div>              
                <h1 style={{textAlign: "center"}}> MY HUSTLE </h1>              
            </div>
		)
	}

}

