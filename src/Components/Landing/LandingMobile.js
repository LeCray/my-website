import React, { Component } from 'react';
import { Dots } from 'react-activity';
import 'react-activity/dist/react-activity.css';
import { Col, Row } from 'react-bootstrap';
import scrollToComponent from 'react-scroll-to-component';
import { aboutEnter } from '../../Animation/About';
import { contactEnter } from '../../Animation/Contact';
import { menu, menuClose, menuOpen, topSectionMobile } from '../../Animation/LandingMobile';
import { workEnter } from '../../Animation/Work';
import AboutMobile from '../About/AboutMobile';
import ContactMobile from '../Contact/ContactMobile';
import WorkMobile from '../Work/WorkMobile';


export default class LandingMobile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mobile: false,
            width: window.innerWidth,
            loading: false,
            landingHome: false,
            about: false,
            work: true,
            contact: false,
            menuOpen: false

        };

        this.workTransition = this.workTransition.bind(this);
        this.aboutTransition = this.aboutTransition.bind(this);
        this.contactTransition = this.contactTransition.bind(this);
        this.aboutMenuLink = this.aboutMenuLink.bind(this);
        this.workMenuLink = this.workMenuLink.bind(this);
        this.contactMenuLink = this.contactMenuLink.bind(this);
        this.openCloseMenu = this.openCloseMenu.bind(this);
    }

    componentWillMount() {
        this.setState({ height: window.innerHeight + 'px' });
        if (this.state.width < 576) {
            this.setState({ mobile: true });
        }
    }

    componentDidMount() {

        setTimeout(() => {
            this.setState({ loading: false, landingHome: true })
        }, 1000)

        setTimeout(() => {

            topSectionMobile(this.landingHome, this.rocket, this.Fname,
                this.Lname, this.whiteBox, this.me, this.hr, this.summary,
                this.aboutLink, this.workLink, this.contactLink)

            menu(this.hamburger)


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
        menuClose(this.hamburger, this.hexagon, this.menuScreen, this.aboutLinkMenu, this.workLinkMenu, this.contactLinkMenu)

        setTimeout(() => {
            this.setState({ menuOpen: false })
        }, 1000)

        setTimeout(() => {
            scrollToComponent(this.about, { offset: 0, align: 'top', ease: 'inOutCirc', duration: 1500 })
        }, 300)
    }
    workMenuLink() {
        menuClose(this.hamburger, this.hexagon, this.menuScreen, this.aboutLinkMenu, this.workLinkMenu, this.contactLinkMenu)

        setTimeout(() => {
            this.setState({ menuOpen: false })
        }, 1000)

        setTimeout(() => {
            scrollToComponent(this.work, { offset: 0, align: 'top', ease: 'inOutCirc', duration: 1500 })
        }, 300)
    }
    contactMenuLink() {
        menuClose(this.hamburger, this.hexagon, this.menuScreen, this.aboutLinkMenu, this.workLinkMenu, this.contactLinkMenu)

        setTimeout(() => {
            this.setState({ menuOpen: false })
        }, 1000)

        setTimeout(() => {
            scrollToComponent(this.contact, { offset: 0, align: 'top', ease: 'inOutCirc', duration: 1500 })
        }, 300)
    }

    openCloseMenu() {
        if (this.state.menuOpen) {

            menuClose(this.hamburger, this.hexagon, this.menuScreen, this.aboutLinkMenu, this.workLinkMenu, this.contactLinkMenu)

            setTimeout(() => {
                this.setState({ menuOpen: false })
            }, 1000)

        } else {
            this.setState({ menuOpen: true })
            menuOpen(this.hamburger, this.hexagon, this.menuScreen, this.aboutLinkMenu, this.workLinkMenu, this.contactLinkMenu)
        }
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

        const hamburger = hamburger => this.hamburger = hamburger
        const hexagon = hexagon => this.hexagon = hexagon
        const menuScreen = menuScreen => this.menuScreen = menuScreen


        const aboutHome = aboutHome => this.aboutHome = aboutHome
        const workHome = workHome => this.workHome = workHome
        const contactHome = contactHome => this.contactHome = contactHome

        return (
            <div className="landing-container">
                <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:700" rel="stylesheet" />


                {this.state.loading ?
                    <div ref={activity} className="activity">
                        <Dots size={25} animating={this.state.loading} color="#808080" />
                    </div>
                    :
                    <div>
                        {/*MENU SECTION*/}
                        <div className="hamburger-container" >
                            <div ref={hamburger} onClick={this.openCloseMenu} style={{ "z-index": 99 }}>
                                {this.state.menuOpen ?
                                    <img
                                        className="hamburger"
                                        src={require("../../Assets/Images/cross.svg")}
                                    />
                                    :
                                    <img
                                        className="hamburger"
                                        src={require("../../Assets/Images/hamburger.svg")}
                                    />
                                }
                                <img ref={hexagon} className="hamburger-hexagon" src={require("../../Assets/Images/hamburger-hexagon.svg")} />
                            </div>
                        </div>

                        <div ref={menuScreen} className="menu-screen" style={{ display: this.state.menuOpen ? null : "none" }}>
                            <p ref={aboutLinkMenu} className="link-mobile-menu" onClick={this.aboutMenuLink}>
                                ABOUT
                            </p>
                            <p ref={workLinkMenu} className="link-mobile-menu" onClick={this.workMenuLink}>
                                EXPERIENCE
                            </p>
                            <p ref={contactLinkMenu} className="link-mobile-menu" onClick={this.contactMenuLink}>
                                CONTACT
                            </p>

                            <div className="menu-footer">
                                <div className="menu-footer-content">
                                    <p>
                                        © Jabulani Kunene. All rights reserved.
                                        <br />
                                        2023
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/*MENU SECTION*/}

                        <div ref={landingHome} className="landing-home" style={{ fontFamily: "Josefin Sans", "-webkit-overflow-scrolling": "touch" }}>

                            <Row>

                                <Col lg={12} className="top-section">
                                    <img ref={rocket} className="rocket" src={require("../../Assets/Images/thunder.svg")} /><br />

                                    <h1 ref={Fname} className="name">Jabulani</h1>
                                    <h1 ref={Lname} className="name" style={{ marginLeft: 5 }}>Kunene</h1>
                                    <hr ref={hr} className={this.state.mobile ? "hr-mobile" : "hr"} />


                                    <div ref={summary} >
                                        <h6 className="summary-mobile">Mechanical Engineer (BSc Hons) (2023)</h6>
                                        <h6 className="summary-mobile">University of the Witwatersrand</h6>
                                        <h6 className="summary-mobile">Self-Taught Software Developer (6+ years exp)</h6>
                                        {/*<h6 className="summary-mobile">ReactJS, ExpressJS, Ruby on Rails</h6>*/}
                                    </div>


                                    <div ref={whiteBox} className="white-box">
                                        <img ref={me} className="me-mobile" src={require("../../Assets/Images/me_updated.png")} />
                                    </div>




                                    <div className="links-mobile">
                                        <p ref={aboutLink} className="link-mobile" onClick={() => scrollToComponent(this.about, { offset: 0, align: 'top', ease: 'inOutCirc', duration: 1500 })}>
                                            About
                                        </p>
                                        <p ref={workLink} className="link-mobile" onClick={() => scrollToComponent(this.work, { offset: 0, align: 'top', ease: 'inOutCirc', duration: 1500 })}>
                                            Experience
                                        </p>
                                        <p ref={contactLink} className="link-mobile" onClick={() => scrollToComponent(this.contact, { offset: 0, align: 'top', ease: 'inOutCirc', duration: 1500 })}>
                                            Contact
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
