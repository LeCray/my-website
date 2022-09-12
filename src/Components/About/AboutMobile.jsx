import React, { Component } from 'react';
import 'react-activity/dist/react-activity.css';
import { ArrowDown } from 'react-feather';
import scrollToComponent from 'react-scroll-to-component';
import './Styles/About.css';
import './Styles/AboutMobile.css';











export default class AboutMobile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            home: false,
            about: true,
            work: false,
            contact: false

        };

        this.homeTransition = this.homeTransition.bind(this);
        this.workTransition = this.workTransition.bind(this);
        this.contactTransition = this.contactTransition.bind(this);
    }

    async homeTransition() {
        await this.setState({
            home: true,
            about: false,
            work: false,
            contact: false
        })
        //homeEnter(this.home)
    }
    async workTransition() {
        await this.setState({
            home: false,
            about: false,
            work: true,
            contact: false
        })
        //workEnter(this.workHome)
    }
    async contactTransition() {
        await this.setState({
            home: false,
            about: false,
            work: false,
            contact: true
        })
        //contactEnter(this.contactHome)
    }


    render() {
        const home = home => this.home = home
        const workHome = workHome => this.workHome = workHome
        const contactHome = contactHome => this.contactHome = contactHome

        return (
            <div>
                <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300" rel="stylesheet" />

                <div style={{ fontFamily: "Josefin Sans" }}>
                    <div className="about-left-col">
                        <div className="about-white">
                            <div>
                                <h2>ABOUT</h2>
                                <p className="learn"><b> - I LIVE TO LEARN - </b></p>
                            </div>
                            <div className="arrow-container">
                                <ArrowDown color="#800033" size={30} onClick={() => scrollToComponent(this.about, { offset: 10, align: 'top', ease: 'inOutCirc', duration: 1500 })} />
                            </div>

                        </div>
                    </div>

                    <div className="about-right-col" >
                        <div className="about-right-col-content" style={{ "-webkit-overflow-scrolling": "touch" }} ref={(section) => { this.about = section; }}>

                            <h2 className="heading" style={{ color: "#737373" }}>Jabulani Kunene</h2>
                            <h4>I am a self-taught, full-stack software developer</h4>

                            <br /><br />

                            <h5 className="heading">Formal Education</h5>
                            <div className="wits-mobile-logo-container">
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
                                In my first year of engineering studies (2014), I began learning how to trade the financial markets.
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
                                    Also in 2018, I co-founded and developed Parkupp&#8212;a decentralised parking application that has
                                    recently been acquired by real-estate investment company Docklands Ventures.
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
            </div>
        )
    }

}
