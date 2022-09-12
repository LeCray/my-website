import React, { Component } from 'react';
import 'react-activity/dist/react-activity.css';
import { aboutEnter } from '../../Animation/About';
import { contactEnter } from '../../Animation/Contact';
import { Transition } from '../../Animation/Transition';
import { switchTo, workColumns } from '../../Animation/Work';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Landing from '../Landing/Landing';
import { Cactus } from './Content/Cactus';
import { Design } from './Content/Design';
import { GalxyBit } from './Content/GalxyBit';
import { MadMobile } from './Content/MadMobile';
import { Medyear } from './Content/Medyear';
import { MoneyCalls } from './Content/MoneyCalls';
import { Paradise } from './Content/Paradise';
import { Parkupp } from './Content/Parkupp';
import { Research } from './Content/Research';
import './Styles/Work.css';
import './Styles/WorkMobile.css';

export default class Work extends Component {

    constructor(props) {
        super(props);
        this.state = {
            home: false,
            about: false,
            work: true,
            contact: false,
            columns: false,

            paradise: false,
            medyear: false,
            cactus: false,

            design: false,
            research: true,
            parkupp: false,
            madMobile: false,
            moneyCalls: false,
            galxyBit: false,
            transition: false,
            txContent: false,
            width: window.innerWidth
        };

        this.paradise = this.paradise.bind(this);
        this.medyear = this.medyear.bind(this);
        this.cactus = this.cactus.bind(this);

        this.design = this.design.bind(this);
        this.research = this.research.bind(this);
        this.madMobile = this.madMobile.bind(this);
        this.parkupp = this.parkupp.bind(this);
        this.moneyCalls = this.moneyCalls.bind(this);
        this.galxyBit = this.galxyBit.bind(this);

        this.homeTransition = this.homeTransition.bind(this);
        this.aboutTransition = this.aboutTransition.bind(this);
        this.contactTransition = this.contactTransition.bind(this);


    }

    componentDidMount() {
        this.setState({ columns: true })
        workColumns(
            this.workLeftCol, this.workRightColContent,
            this.state.width, this.workStill, this.workLinkHome,
            this.workLinkAbout, this.workLink, this.workLinkContact,
            this.paradiseSlide, this.medyearSlide, this.cactusSlide,
            this.designSlide, this.researchSlide, this.madMobileSlide, this.parkuppSlide, this.moneyCallsSlide, this.galxyBitSlide
        )
    }
    paradise() {
        switchTo(this.workRightColContent)
        setTimeout(() => {
            this.setState({
                design: false,
                research: false,
                madMobile: false,
                parkupp: false,
                moneyCalls: false,
                galxyBit: false,
                paradise: true,
                medyear: false,
                cactus: false,
            })
        }, 500)
    }
    medyear() {
        switchTo(this.workRightColContent)
        setTimeout(() => {
            this.setState({
                design: false,
                research: false,
                madMobile: false,
                parkupp: false,
                moneyCalls: false,
                galxyBit: false,
                paradise: false,
                medyear: true,
                cactus: false,
            })
        }, 500)
    }
    cactus() {
        switchTo(this.workRightColContent)
        setTimeout(() => {
            this.setState({
                design: false,
                research: false,
                madMobile: false,
                parkupp: false,
                moneyCalls: false,
                galxyBit: false,
                paradise: false,
                medyear: false,
                cactus: true,
            })
        }, 500)
    }

    design() {
        switchTo(this.workRightColContent)
        setTimeout(() => {
            this.setState({
                design: true,
                research: false,
                madMobile: false,
                parkupp: false,
                moneyCalls: false,
                galxyBit: false,
                paradise: false,
                medyear: false,
                cactus: false,
            })
        }, 500)
    }
    research() {
        switchTo(this.workRightColContent)
        setTimeout(() => {
            this.setState({
                design: false,
                research: true,
                madMobile: false,
                parkupp: false,
                moneyCalls: false,
                galxyBit: false,
                paradise: false,
                medyear: false,
                cactus: false,
            })
        }, 500)
    }
    madMobile() {
        switchTo(this.workRightColContent)
        setTimeout(() => {
            this.setState({
                design: false,
                research: false,
                madMobile: true,
                parkupp: false,
                moneyCalls: false,
                galxyBit: false,
                paradise: false,
                medyear: false,
                cactus: false,
            })
        }, 500)
    }
    parkupp() {
        switchTo(this.workRightColContent)
        setTimeout(() => {
            this.setState({
                design: false,
                research: false,
                parkupp: true,
                madMobile: false,
                moneyCalls: false,
                galxyBit: false,
                paradise: false,
                medyear: false,
                cactus: false,
            })
        }, 500)
    }
    moneyCalls() {
        switchTo(this.workRightColContent)
        setTimeout(() => {
            this.setState({
                design: false,
                research: false,
                moneyCalls: true,
                parkupp: false,
                madMobile: false,
                galxyBit: false,
                paradise: false,
                medyear: false,
                cactus: false,
            })
        }, 500)
    }
    galxyBit() {
        switchTo(this.workRightColContent)
        setTimeout(() => {
            this.setState({
                design: false,
                research: false,
                galxyBit: true,
                moneyCalls: false,
                parkupp: false,
                madMobile: false,
                paradise: false,
                medyear: false,
                cactus: false,
            })
        }, 500)
    }

    async homeTransition() {
        await this.setState({
            transition: true,
            txContent: true,
            home: true,
            about: false,
            contact: false
        })
        //homeEnter(this.home)
        Transition(
            this.transitionFirst, this.transitionMain,
            this.transitionSecond, this.FnameTx, this.LnameTx,
            this.state.width, this.learnTx
        )

        setTimeout(() => {
            this.setState({ work: false })
        }, 1000)
        setTimeout(() => {
            this.setState({ txContent: false })
        }, 2000)
        setTimeout(() => {
            this.setState({ transition: false })
        }, 3300)
    }
    async aboutTransition() {
        await this.setState({
            transition: true,
            txContent: true,
            home: false,
            about: true,
            contact: false
        })
        Transition(
            this.transitionFirst, this.transitionMain,
            this.transitionSecond, this.FnameTx, this.LnameTx,
            this.state.width, this.learnTx
        )
        aboutEnter(this.aboutHome)

        setTimeout(() => {
            this.setState({ work: false })
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
            about: false,
            contact: true
        })
        Transition(
            this.transitionFirst, this.transitionMain,
            this.transitionSecond, this.FnameTx, this.LnameTx,
            this.state.width, this.learnTx
        )
        contactEnter(this.contactHome)

        setTimeout(() => {
            this.setState({ work: false })
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
        const aboutHome = aboutHome => this.aboutHome = aboutHome
        const contactHome = contactHome => this.contactHome = contactHome

        const workLeftCol = workLeftCol => this.workLeftCol = workLeftCol
        const workRightColContent = workRightColContent => this.workRightColContent = workRightColContent
        const workStill = workStill => this.workStill = workStill

        const workLinkHome = workLinkHome => this.workLinkHome = workLinkHome
        const workLink = workLink => this.workLink = workLink
        const workLinkAbout = workLinkAbout => this.workLinkAbout = workLinkAbout
        const workLinkContact = workLinkContact => this.workLinkContact = workLinkContact

        const transitionFirst = transitionFirst => this.transitionFirst = transitionFirst
        const transitionMain = transitionMain => this.transitionMain = transitionMain
        const transitionSecond = transitionSecond => this.transitionSecond = transitionSecond
        const FnameTx = FnameTx => this.FnameTx = FnameTx
        const LnameTx = LnameTx => this.LnameTx = LnameTx
        const learnTx = learnTx => this.learnTx = learnTx

        const researchSlide = researchSlide => this.researchSlide = researchSlide
        const medyearSlide = medyearSlide => this.medyearSlide = medyearSlide
        const cactusSlide = cactusSlide => this.cactusSlide = cactusSlide
        const paradiseSlide = paradiseSlide => this.paradiseSlide = paradiseSlide

        const designSlide = designSlide => this.designSlide = designSlide

        const madMobileSlide = madMobileSlide => this.madMobileSlide = madMobileSlide
        const parkuppSlide = parkuppSlide => this.parkuppSlide = parkuppSlide
        const moneyCallsSlide = moneyCallsSlide => this.moneyCallsSlide = moneyCallsSlide
        const galxyBitSlide = galxyBitSlide => this.galxyBitSlide = galxyBitSlide

        return (
            <div>
                <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300" rel="stylesheet" />
                {this.state.work ?

                    <div style={{ fontFamily: "Josefin Sans" }}>

                        <div ref={workLeftCol} className="workLeftCol" style={{ display: this.state.columns ? null : "none" }}>
                            <div className="workLeftColContent">
                                <div ref={workStill}>
                                    <h2>EXPERIENCE</h2>

                                    <div className="work-intra-links">
                                        <div className="research-link">
                                            <p
                                                className={this.state.researchHover || this.state.research ? "workLinkHover" : "workLink"}
                                                ref={researchSlide}
                                                style={{ marginLeft: 0 }}
                                                onMouseEnter={() => this.setState({ researchHover: !this.state.researchHover })}
                                                onMouseLeave={() => this.setState({ researchHover: !this.state.researchHover })}
                                                onClick={this.research}>
                                                Honors Research Project
                                            </p>
                                        </div>
                                        <div className="medyear-link">
                                            <p
                                                className={this.state.medyearHover || this.state.medyear ? "workLinkHover" : "workLink"}
                                                ref={medyearSlide}
                                                style={{ marginLeft: 0 }}
                                                onMouseEnter={() => this.setState({ medyearHover: !this.state.medyearHover })}
                                                onMouseLeave={() => this.setState({ medyearHover: !this.state.medyearHover })}
                                                onClick={this.medyear}>
                                                Medyear
                                            </p>
                                        </div>
                                        <div className="cactus-link">
                                            <p
                                                className={this.state.cactusHover || this.state.cactus ? "workLinkHover" : "workLink"}
                                                ref={cactusSlide}
                                                style={{ marginLeft: 0 }}
                                                onMouseEnter={() => this.setState({ cactusHover: !this.state.cactusHover })}
                                                onMouseLeave={() => this.setState({ cactusHover: !this.state.cactusHover })}
                                                onClick={this.cactus}>
                                                Cactus
                                            </p>
                                        </div>
                                        <div className="paradise-link">
                                            <p
                                                className={this.state.paradiseHover || this.state.paradise ? "workLinkHover" : "workLink"}
                                                ref={paradiseSlide}
                                                style={{ marginLeft: 0 }}
                                                onMouseEnter={() => this.setState({ paradiseHover: !this.state.paradiseHover })}
                                                onMouseLeave={() => this.setState({ paradiseHover: !this.state.paradiseHover })}
                                                onClick={this.paradise}>
                                                Paradise Eats
                                            </p>
                                        </div>
                                        <div className="design-link">
                                            <p
                                                className={this.state.designHover || this.state.design ? "workLinkHover" : "workLink"}
                                                ref={designSlide}
                                                style={{ marginLeft: 0 }}
                                                onMouseEnter={() => this.setState({ designHover: !this.state.designHover })}
                                                onMouseLeave={() => this.setState({ designHover: !this.state.designHover })}
                                                onClick={this.design}>
                                                Honors Design Project
                                            </p>
                                        </div>


                                        <div className="bottom-links">
                                            <p
                                                className={this.state.parkuppHover || this.state.parkupp ? "workLinkHover" : "workLink"}
                                                ref={parkuppSlide}
                                                onMouseEnter={() => this.setState({ parkuppHover: !this.state.parkuppHover })}
                                                onMouseLeave={() => this.setState({ parkuppHover: !this.state.parkuppHover })}
                                                onClick={this.parkupp}>
                                                Parkupp
                                            </p>
                                            <p
                                                className={this.state.madMobileHover || this.state.madMobile ? "workLinkHover" : "workLink"}
                                                ref={madMobileSlide}
                                                onMouseEnter={() => this.setState({ madMobileHover: !this.state.madMobileHover })}
                                                onMouseLeave={() => this.setState({ madMobileHover: !this.state.madMobileHover })}
                                                onClick={this.madMobile}>
                                                MAD Mobile
                                        </p>
                                            <p
                                                className={this.state.moneyCallsHover || this.state.moneyCalls ? "workLinkHover" : "workLink"}
                                                ref={moneyCallsSlide}
                                                onMouseEnter={() => this.setState({ moneyCallsHover: !this.state.moneyCallsHover })}
                                                onMouseLeave={() => this.setState({ moneyCallsHover: !this.state.moneyCallsHover })}
                                                onClick={this.moneyCalls}>
                                                Money Calls
                                        </p>
                                            <p
                                                className={this.state.galxyBitHover || this.state.galxyBit ? "workLinkHover" : "workLink"}
                                                ref={galxyBitSlide}
                                                onMouseEnter={() => this.setState({ galxyBitHover: !this.state.galxyBitHover })}
                                                onMouseLeave={() => this.setState({ galxyBitHover: !this.state.galxyBitHover })}
                                                onClick={this.galxyBit}>
                                                GalxyBit
                                        </p>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="workLinks">
                                    <div className="work-link-content">
                                        <p
                                            className={this.state.homeHover ? "workLinkHover" : "workLink"}
                                            ref={workLinkHome}
                                            onClick={this.homeTransition}
                                            onMouseEnter={() => this.setState({ homeHover: !this.state.homeHover })}
                                            onMouseLeave={() => this.setState({ homeHover: !this.state.homeHover })}>
                                            Home
                                    </p>
                                        <p
                                            className={this.state.aboutHover || this.state.about ? "workLinkHover" : "workLink"}
                                            ref={workLinkAbout}
                                            onClick={this.aboutTransition}
                                            onMouseEnter={() => this.setState({ aboutHover: !this.state.aboutHover })}
                                            onMouseLeave={() => this.setState({ aboutHover: !this.state.aboutHover })}>
                                            About
                                    </p>
                                        <p
                                            className={this.state.workHover || this.state.work ? "workLinkHover" : "workLink"}
                                            ref={workLink}
                                            onMouseEnter={() => this.setState({ workHover: !this.state.workHover })}
                                            onMouseLeave={() => this.setState({ workHover: !this.state.workHover })}>
                                            Experience
                                    </p>
                                        <p
                                            className={this.state.contactHover || this.state.contact ? "workLinkHover" : "workLink"}
                                            ref={workLinkContact}
                                            onClick={this.contactTransition}
                                            onMouseEnter={() => this.setState({ contactHover: !this.state.contactHover })}
                                            onMouseLeave={() => this.setState({ contactHover: !this.state.contactHover })}>
                                            Contact
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="workRightCol">
                            <div
                                ref={workRightColContent}
                                className="workRightColContent"
                                style={{ "-webkit-overflow-scrolling": "touch", display: this.state.columns ? null : "none" }}>

                                <div className="scroller" style={{ display: this.state.paradise ? null : "none" }}>
                                    <Paradise />
                                </div>
                                <div className="scroller" style={{ display: this.state.medyear ? null : "none" }}>
                                    <Medyear />
                                </div>
                                <div className="scroller" style={{ display: this.state.cactus ? null : "none" }}>
                                    <Cactus />
                                </div>
                                <div className="scroller" style={{ display: this.state.design ? null : "none" }}>
                                    <Design />
                                </div>
                                <div className="scroller" style={{ display: this.state.research ? null : "none" }}>
                                    <Research />
                                </div>
                                <div className="scroller" style={{ display: this.state.madMobile ? null : "none" }}>
                                    <MadMobile />
                                </div>
                                <div className="scroller" style={{ display: this.state.parkupp ? null : "none" }}>
                                    <Parkupp />
                                </div>
                                <div className="scroller" style={{ display: this.state.moneyCalls ? null : "none" }}>
                                    <MoneyCalls />
                                </div>
                                <div className="scroller" style={{ display: this.state.galxyBit ? null : "none" }}>
                                    <GalxyBit />
                                </div>
                            </div>
                        </div>
                    </div> : null}

                <div className="transition-container" style={{ display: this.state.transition ? null : "none" }}>
                    <div
                        ref={transitionFirst}
                        className="transition-first"
                    >
                    </div>
                    <div ref={transitionMain} className="transition-main" >
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

                {this.state.home ?
                    <div ref={home} className="home">
                        <Landing />
                    </div>
                    : null}


                {this.state.about ?
                    <div ref={aboutHome} className="aboutHome">
                        <About />
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
