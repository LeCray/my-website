import React, { Component } from 'react';
import 'react-activity/dist/react-activity.css';
import { aboutColumns } from '../../Animation/About';
import { contactEnter } from '../../Animation/Contact';
import { Transition } from '../../Animation/Transition';
import { workEnter } from '../../Animation/Work';
import Contact from '../Contact/Contact';
import Landing from '../Landing/Landing';
import Work from '../Work/Work';
import './Styles/About.css';
import './Styles/AboutMobile.css';









export default class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            home: false,
            about: true,
            work: false,
            contact: false,
            columns: false,
            transition: false,
            txContent: false,
            width: window.innerWidth

        };

        this.homeTransition = this.homeTransition.bind(this);
        this.workTransition = this.workTransition.bind(this);
        this.contactTransition = this.contactTransition.bind(this);
    }


    componentDidMount() {
        this.setState({ columns: true, transition: false })
        aboutColumns(
            this.aboutLeftCol, this.aboutRightColContent,
            this.state.width, this.aboutStill, this.aboutStill2, this.aboutLinkHome,
            this.aboutLink, this.aboutLinkWork, this.aboutLinkContact
        )
    }

    async homeTransition() {
        await this.setState({
            transition: true,
            txContent: true,
            home: true,
            work: false,
            contact: false
        })
        //homeEnter(this.home)
        Transition(
            this.transitionFirst, this.transitionMain,
            this.transitionSecond, this.FnameTx, this.LnameTx,
            this.state.width, this.learnTx
        )

        setTimeout(() => {
            this.setState({ about: false })
        }, 2000)
        setTimeout(() => {
            this.setState({ txContent: false })
        }, 2700)
        setTimeout(() => {
            this.setState({ transition: false })
        }, 3300)
    }
    async workTransition() {
        await this.setState({
            transition: true,
            txContent: true,
            home: false,
            work: true,
            contact: false
        })
        Transition(
            this.transitionFirst, this.transitionMain,
            this.transitionSecond, this.FnameTx, this.LnameTx,
            this.state.width, this.learnTx
        )
        workEnter(this.workHome)

        setTimeout(() => {
            this.setState({ about: false })
        }, 2000)
        setTimeout(() => {
            this.setState({ txContent: false })
        }, 3000)
        setTimeout(() => {
            this.setState({ transition: false })
        }, 3300)
    }
    async contactTransition() {
        await this.setState({
            transition: true,
            txContent: true,
            home: false,
            work: false,
            contact: true
        })
        Transition(
            this.transitionFirst, this.transitionMain,
            this.transitionSecond, this.FnameTx, this.LnameTx,
            this.state.width, this.learnTx
        )
        contactEnter(this.contactHome)

        setTimeout(() => {
            this.setState({ about: false })
        }, 2000)
        setTimeout(() => {
            this.setState({ txContent: false })
        }, 3000)
        setTimeout(() => {
            this.setState({ transition: false })
        }, 3300)
    }


    render() {
        const home = home => this.home = home
        const workHome = workHome => this.workHome = workHome
        const contactHome = contactHome => this.contactHome = contactHome

        const aboutLeftCol = aboutLeftCol => this.aboutLeftCol = aboutLeftCol
        const aboutRightColContent = aboutRightColContent => this.aboutRightColContent = aboutRightColContent
        const aboutStill = aboutStill => this.aboutStill = aboutStill
        const aboutStill2 = aboutStill2 => this.aboutStill2 = aboutStill2

        const aboutLinkHome = aboutLinkHome => this.aboutLinkHome = aboutLinkHome
        const aboutLink = aboutLink => this.aboutLink = aboutLink
        const aboutLinkWork = aboutLinkWork => this.aboutLinkWork = aboutLinkWork
        const aboutLinkContact = aboutLinkContact => this.aboutLinkContact = aboutLinkContact

        const transitionFirst = transitionFirst => this.transitionFirst = transitionFirst
        const transitionMain = transitionMain => this.transitionMain = transitionMain
        const transitionSecond = transitionSecond => this.transitionSecond = transitionSecond
        const FnameTx = FnameTx => this.FnameTx = FnameTx
        const LnameTx = LnameTx => this.LnameTx = LnameTx
        const learnTx = learnTx => this.learnTx = learnTx

        return (
            <div>
                <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300" rel="stylesheet" />
                {this.state.about ?
                    <div style={{ fontFamily: "Josefin Sans" }}>

                        <div ref={aboutLeftCol} className="aboutLeftCol" style={{ display: this.state.columns ? null : "none" }}>
                            <div className="aboutWhite">

                                <div className="about-still">
                                    <h2 ref={aboutStill}>ABOUT</h2>
                                    <p ref={aboutStill2} className="learn"><b> - I LIVE TO LEARN - </b></p>
                                </div>

                                <div className="aboutLinks">
                                    <div className="about-link-content">
                                        <p
                                            className={this.state.homeHover ? "about-link-hover" : "aboutLink"}
                                            ref={aboutLinkHome}
                                            onClick={this.homeTransition}
                                            onMouseEnter={() => this.setState({ homeHover: !this.state.homeHover })}
                                            onMouseLeave={() => this.setState({ homeHover: !this.state.homeHover })}>
                                            Home
                                        </p>
                                        <p
                                            className={this.state.aboutHover || this.state.about ? "about-link-hover" : "aboutLink"}
                                            ref={aboutLink}
                                            onMouseEnter={() => this.setState({ aboutHover: !this.state.aboutHover })}
                                            onMouseLeave={() => this.setState({ aboutHover: !this.state.aboutHover })}>
                                            About
                                        </p>
                                        <p
                                            className={this.state.workHover || this.state.work ? "about-link-hover" : "aboutLink"}
                                            ref={aboutLinkWork}
                                            onClick={this.workTransition}
                                            onMouseEnter={() => this.setState({ workHover: !this.state.workHover })}
                                            onMouseLeave={() => this.setState({ workHover: !this.state.workHover })}>
                                            Work
                                        </p>
                                        <p
                                            className={this.state.contactHover || this.state.contact ? "about-link-hover" : "aboutLink"}
                                            ref={aboutLinkContact}
                                            onClick={this.contactTransition}
                                            onMouseEnter={() => this.setState({ contactHover: !this.state.contactHover })}
                                            onMouseLeave={() => this.setState({ contactHover: !this.state.contactHover })}>
                                            Contact
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="aboutRightCol">
                            <div
                                ref={aboutRightColContent}
                                className="aboutRightColContent"
                                style={{ "-webkit-overflow-scrolling": "touch", display: this.state.columns ? null : "none" }}>

                                <h2 className="heading">Jabulani Kunene</h2>
                                <h4>I am a self-taught, full-stack software developer</h4>

                                <br /><br />

                                <h5 className="heading">Formal Education</h5>
                                <div className="wits-logo-container">
                                    <img className="mad-mobile-logo" src={require("../../Assets/Images/wits_logo.png")} />
                                </div>
                                <p style={{ textAlign: "justify" }}>
                                    With just two courses left to complete, I am expected to graduate with an Honors in Mechanical Engineering
                                    from the University of the Witwatersrand, South Africa in November 2023.
                                </p>

                                <hr className="hrLine" />
                                <br />
                                <h5 className="heading">My Passions & Skills</h5>
                                <p style={{ textAlign: "justify" }}>
                                    In my first year of engineering studies, I began learning how to trade the financial markets.
                                    <br /><br />
                                    I quickly took an interest in the cryptocurrency markets and thought to become a part of it. This lead me to learn and
                                    become familiar with web development technologies because I made the decision to build GalxyBit&#8212;a cryptocurrency exchange offering
                                    btc/zar, eth/zar and ltc/zar (liquidity provided by Ice3X).
                                    <br /><br />
                                    Since then, I have become a full-stack software developer having taught myself various coding languages including:
                                    <ul>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                        <li>Ruby</li>
                                        <li>Java</li>
                                        <li>C#</li>
                                        <li>MQL5</li>
                                        <li>C++ Development</li>
                                        <li>Python (Anaconda)</li>
                                        <li>MATLAB (Multibody Dynamics using Simscape Multibody)</li>
                                    </ul>
                                    And frameworks:
                                    <ul>
                                        <li>React JS</li>
                                        <li>React Native</li>
                                        <li>Express JS</li>
                                        <li>Ruby on Rails</li>
                                        <li>Android Studio</li>
                                        <li>.NET</li>
                                    </ul>

                                    <br />
                                    In 2018 I took a break from Mechanical Engineering to study Computational and Applied Maths for a year
                                    part-time (at the Univeristy of the Witswatersrand). It was there that I started working on a cryptocurrency market algorithm
                                    that could trade the markets autonomously using Artificial Intelligence (AI). This was with the help of my at the time lecturer&#8212;a Computer Science PhD student whose
                                    own research was on applying AI to finance.
                                    <br /><br />
                                    In 2019 I recontinued studying Mechanical Engineering, and made it to my final year in 2020 where I passed 8/10 of my courses.
                                    2021 was a challenging year, and I had difficulty redoing the remaining 2 courses as I was working as a
                                    freelance software engineer, and living independantly.
                                    <br /><br />
                                    Towards the end of 2021, I moved to Wilderness (a small coastal town close to Knysna in the Western Cape, SA),
                                    and founded Paradise Eats&#8212;a food delivery application for the area (Uber Eats hasn't offered their services there yet).
                                    <br /><br />
                                    In the current year 2022, I continued developing Paradise Eats full-time,
                                    and managed to publish the Android apps to Google Play Store in July.
                                    <br /><br />
                                    Next year, 2023, I plan on finishing my engineering degree. This will be possible by grounding myself in full-time work, with a consistent income.
                                    As opposed to freelancing again, where my income is inconsistent, and without the added difficulty of managing too many projects at once.
                                </p>

                                <hr className="hrLine" />
                                <br />
                                <p className="heading">IT'S POSSIBLE TO LEARN ANYTHING</p>
                            </div>
                        </div>
                    </div>
                    : null}

                {this.state.transition ?
                    <div className="transition-container">
                        <div
                            ref={transitionFirst}
                            className="transition-first"
                        >
                        </div>
                        <div ref={transitionMain} className="transition-main">
                            <div className="transition-content" style={{ display: this.state.txContent ? null : "none" }}>
                                <p ref={FnameTx} className="name-tx">J</p>
                                <p ref={LnameTx} className="name-tx" style={{ marginLeft: 5 }}>K</p>
                                <p ref={learnTx} className="learn-tx">- LIVING TO LEARN -</p>
                            </div>
                        </div>
                        <div
                            ref={transitionSecond}
                            className="transition-second"
                        >
                        </div>
                    </div>
                    : null}

                {this.state.home ?
                    <div ref={home} className="home">
                        <Landing />
                    </div>
                    : null}

                {this.state.work ?
                    <div ref={workHome} className="workHome">
                        <Work />
                    </div>
                    : null}

                {this.state.contact ?
                    <div ref={contactHome} className="contactHome">
                        <Contact />
                    </div>
                    : null}

            </div>
        )
    }

}
