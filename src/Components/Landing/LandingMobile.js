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
            contact: false,
            menuOpen: false
            
        };

        this.workTransition = this.workTransition.bind(this);
        this.aboutTransition = this.aboutTransition.bind(this);
        this.contactTransition = this.contactTransition.bind(this);        
        this.aboutMenuLink = this.aboutMenuLink.bind(this);
        this.workMenuLink = this.workMenuLink.bind(this);
        this.contactMenuLink = this.contactMenuLink.bind(this);
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
           
            topSectionMobile(this.landingHome, this.rocket, this.Fname, 
                this.Lname, this.whiteBox, this.me, this.hr, this.summary, 
                this.aboutLink, this.workLink, this.contactLink)
           
            
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

    aboutMenuLink() {        
        this.setState({menuOpen: !this.state.menuOpen})
        setTimeout(() => {
            scrollToComponent(this.about,{offset:0,align:'top',ease:'inOutCirc',duration:1500})
        }, 200)
    }
    workMenuLink() {        
        this.setState({menuOpen: !this.state.menuOpen})
        setTimeout(() => {
            scrollToComponent(this.work,{offset:0,align:'top',ease:'inOutCirc',duration:1500})
        }, 200)
    }
    contactMenuLink() {        
        this.setState({menuOpen: !this.state.menuOpen})
        setTimeout(() => {
            scrollToComponent(this.contact,{offset:0,align:'top',ease:'inOutCirc',duration:1500})
        }, 200)
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

        const aboutLink = aboutLink => this.aboutLink = aboutLink
        const workLink = workLink => this.workLink = workLink
        const contactLink = contactLink => this.contactLink = contactLink

        const aboutLinkMenu = aboutLinkMenu => this.aboutLinkMenu = aboutLinkMenu
        const workLinkMenu = workLinkMenu => this.workLinkMenu = workLinkMenu
        const contactLinkMenu = contactLinkMenu => this.contactLinkMenu = contactLinkMenu

        const aboutHome = aboutHome => this.aboutHome = aboutHome
        const workHome = workHome => this.workHome = workHome
        const contactHome = contactHome => this.contactHome = contactHome

		return(
            <div className="landing-container">
                <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:700" rel="stylesheet"/>
                                

                {this.state.loading?    
                    <div ref={activity} className="activity">
                        <Dots size={25} animating={this.state.loading} color="#808080"/>
                    </div>                                                                                       
                :
                    <div>
                        <img 
                            className="menu" 
                            src={require("../../Assets/Images/menu-white.svg")}
                            onClick={() => this.setState({menuOpen: !this.state.menuOpen})}
                        />
                        <img className="menu-hexagon" src={require("../../Assets/Images/menu-hexagon.svg")}/>

                        <div className="menu-mobile" style={{display: this.state.menuOpen?null:"none"}}>
                            <p ref={aboutLinkMenu} className="link-mobile-menu" onClick={this.aboutMenuLink}>                                    
                                About 
                            </p>
                            <p ref={workLinkMenu} className="link-mobile-menu" onClick={this.workMenuLink}>
                                Work 
                            </p>
                            <p ref={contactLinkMenu} className="link-mobile-menu" onClick={this.contactMenuLink}>
                                Contact 
                            </p>
                        </div>

                        <div ref={landingHome} className="landing-home" style={{fontFamily: "Josefin Sans", "-webkit-overflow-scrolling": "touch"}}>                                      

                            <Row>
                                
                                <Col lg={12} className="top-section">
                                    <img ref={rocket} className="rocket" src={require("../../Assets/Images/thunder.svg")}/><br/>
                                    
                                    <h1 ref={Fname} className="name">Jabulani</h1>
                                    <h1 ref={Lname} className="name" style={{marginLeft: 5}}>Kunene</h1>
                                    <hr ref={hr} className={this.state.mobile?"hr-mobile":"hr"}/>


                                    <div ref={summary} >                                    
                                        <h6 className="summary-mobile">Full Stack Developer</h6>
                                        {/*<h6 className="summary-mobile">ReactJS, ExpressJS, Ruby on Rails</h6>*/}
                                        <h6 className="summary-mobile">Web | Android | iOS</h6>                                    
                                    </div>

                                    
                                    <div ref={whiteBox} className="white-box">
                                        <img ref={me} className="me-mobile" src={require("../../Assets/Images/me3.jpg")}/>
                                    </div>
                                    
                                    
                                    

                                    <div className="links-mobile">
                                        <p ref={aboutLink} className="link-mobile" onClick={()=>scrollToComponent(this.about,{offset:0,align:'top',duration:1500})}>                                    
                                            About /
                                        </p>
                                        <p ref={workLink} className="link-mobile" onClick={()=>scrollToComponent(this.work,{offset:0,align:'top',duration:1500})}>
                                            Work /
                                        </p>
                                        <p ref={contactLink} className="link-mobile" onClick={()=>scrollToComponent(this.contact,{offset:0,align:'top',duration:1500})}>
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
                    </div>
                    
                }

                

                
            </div>
		)
	}

}

