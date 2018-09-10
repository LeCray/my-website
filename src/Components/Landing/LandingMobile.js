import React, { Component } from 'react';
import { Input, Button, Fa, Card, CardBody, ModalFooter,ModalBody, ModalHeader, Modal } from 'mdbreact';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col, Jumbotron} from 'react-bootstrap';


import { Dots, Digital, Bounce } from 'react-activity';
import 'react-activity/dist/react-activity.css';    
import { Link } from 'react-router-dom'

import {loading, topSection} from '../../Animation/Landing'
import {topSectionMobile} from '../../Animation/LandingMobile'
import {aboutEnter} from '../../Animation/About'
import {workEnter} from '../../Animation/Work'
import {contactEnter} from '../../Animation/Contact'




import WorkMobile from '../Work/WorkMobile'
import AboutMobile from '../About/AboutMobile'
import ContactMobile from '../Contact/ContactMobile'


import {TweenMax, Power2, TimelineLite, Elastic, Circ, Back, Power4, TimelineMax} from "gsap/TweenMax";
import scrollToComponent from 'react-scroll-to-component';




export default class LandingMobile extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            mobile: false,
            width: window.innerWidth,
            loading: true,   
            landingHome: false,
            about: false,
            work: false,
            contact: false
            
        };

        this.workTransition = this.workTransition.bind(this);
        this.aboutTransition = this.aboutTransition.bind(this);
        this.contactTransition = this.contactTransition.bind(this);
    }

    componentWillMount(){
        this.setState({height: window.innerHeight + 'px'});
        if (this.state.width < 576) {
            this.setState({mobile: true});
        }       
    }
       
    componentDidMount() {
                
        setTimeout(() => {
            this.setState({loading: false, landingHome: true})            
        }, 1000)

        setTimeout(() => {   
           
            topSectionMobile(this.landingHome, this.rocket, this.Fname, this.Lname, this.whiteBox, this.me, this.hr, this.summary, this.links)
           
            
        }, 1000)                
    }

    async aboutTransition() {
        await this.setState({
            about: true,
            work: false,
            contact: false
        })
        aboutEnter(this.aboutHome)
    }
    async workTransition() {
        await this.setState({
            about: false,
            work: true,
            contact: false
        })
        workEnter(this.workHome)
    }
    async contactTransition() {
        await this.setState({
            about: false,
            work: false,
            contact: true
        })
        contactEnter(this.contactHome)
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
        const hr = hr => this.hr = hr
        const links = links => this.links = links

        const aboutHome = aboutHome => this.aboutHome = aboutHome
        const workHome = workHome => this.workHome = workHome
        const contactHome = contactHome => this.contactHome = contactHome

		return(
            <div className="landing-container">
                <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300" rel="stylesheet"/>
                                

                {this.state.loading?    
                    <div ref={activity} className="activity">
                        <Dots size={25} animating={this.state.loading} color="#808080"/>
                    </div>                                                                                       
                :
                    
                    <div ref={landingHome} className="landing-home" style={{fontFamily: "Josefin Sans", "-webkit-overflow-scrolling": "touch"}}>
                        <Row>
                            
                            <Col lg={12} className="top-section">
                                <img ref={rocket} className="rocket" src={require("../../Assets/Images/happy.svg")}/><br/>
                                
                                <h1 ref={Fname} className="name">Jabulani</h1>
                                <h1 ref={Lname} className="name" style={{marginLeft: 5}}>Kunene</h1>
                                <hr ref={hr} className={this.state.mobile?"hr-mobile":"hr"}/>


                                <div ref={summary} className={this.state.mobile?"summary-mobile":"summary"}>
                                    <div className="summary-details">
                                        <h6>Full Stack Developer</h6>
                                        <h6>ReactJS, ExpressJS, Ruby on Rails</h6>
                                        <h6>Web | Android | iOS</h6>
                                    </div>
                                </div>

                                
                                <div ref={whiteBox} className="white-box">
                                    <img ref={me} className="me-mobile" src={require("../../Assets/Images/me.jpg.png")}/>
                                </div>
                                
                                
                                

                                <div ref={links} className="links-mobile">
                                    <p className="link-mobile" onClick={()=>scrollToComponent(this.about,{offset:0,align:'top',duration:1500})}>                                    
                                        About /
                                    </p>
                                    <p className="link-mobile" onClick={()=>scrollToComponent(this.work,{offset:0,align:'top',duration:1500})}>
                                        Work /
                                    </p>
                                    <p className="link-mobile" onClick={()=>scrollToComponent(this.contact,{offset:0,align:'top',duration:1500})}>
                                        Contact /
                                    </p>
                                </div>

                                
                            </Col>                                                                             
                        </Row>     
                        <div ref={(section) => { this.about = section; }} className="about-home">                 
                            <AboutMobile />
                        </div>                

                    
                        <div ref={(section) => { this.work = section; }} className="work-home">                 
                            <WorkMobile />
                        </div>                

                    
                        <div ref={(section) => { this.contact = section; }} className="contact-home">                 
                            <ContactMobile />
                        </div>                
                        
                    </div>  
                    
                }

                

                
            </div>
		)
	}

}

