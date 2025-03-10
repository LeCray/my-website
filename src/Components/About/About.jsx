import React, { Component } from "react";
import "react-activity/dist/react-activity.css";
import { aboutColumns } from "../../Animation/About";
import { contactEnter } from "../../Animation/Contact";
import { Transition } from "../../Animation/Transition";
import { workEnter } from "../../Animation/Work";
import Contact from "../Contact/Contact";
import Landing from "../Landing/Landing";
import Work from "../Work/Work";
import "./Styles/About.css";
import "./Styles/AboutMobile.css";

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
      width: window.innerWidth,
    };

    this.homeTransition = this.homeTransition.bind(this);
    this.workTransition = this.workTransition.bind(this);
    this.contactTransition = this.contactTransition.bind(this);
  }

  componentDidMount() {
    this.setState({ columns: true, transition: false });
    aboutColumns(
      this.aboutLeftCol,
      this.aboutRightColContent,
      this.state.width,
      this.aboutStill,
      this.aboutStill2,
      this.aboutLinkHome,
      this.aboutLink,
      this.aboutLinkWork,
      this.aboutLinkContact
    );
  }

  async homeTransition() {
    await this.setState({
      transition: true,
      txContent: true,
      home: true,
      work: false,
      contact: false,
    });
    //homeEnter(this.home)
    Transition(
      this.transitionFirst,
      this.transitionMain,
      this.transitionSecond,
      this.FnameTx,
      this.LnameTx,
      this.state.width,
      this.learnTx
    );

    setTimeout(() => {
      this.setState({ about: false });
    }, 2000);
    setTimeout(() => {
      this.setState({ txContent: false });
    }, 2700);
    setTimeout(() => {
      this.setState({ transition: false });
    }, 3300);
  }
  async workTransition() {
    await this.setState({
      transition: true,
      txContent: true,
      home: false,
      work: true,
      contact: false,
    });
    Transition(
      this.transitionFirst,
      this.transitionMain,
      this.transitionSecond,
      this.FnameTx,
      this.LnameTx,
      this.state.width,
      this.learnTx
    );
    workEnter(this.workHome);

    setTimeout(() => {
      this.setState({ about: false });
    }, 2000);
    setTimeout(() => {
      this.setState({ txContent: false });
    }, 3000);
    setTimeout(() => {
      this.setState({ transition: false });
    }, 3300);
  }
  async contactTransition() {
    await this.setState({
      transition: true,
      txContent: true,
      home: false,
      work: false,
      contact: true,
    });
    Transition(
      this.transitionFirst,
      this.transitionMain,
      this.transitionSecond,
      this.FnameTx,
      this.LnameTx,
      this.state.width,
      this.learnTx
    );
    contactEnter(this.contactHome);

    setTimeout(() => {
      this.setState({ about: false });
    }, 2000);
    setTimeout(() => {
      this.setState({ txContent: false });
    }, 3000);
    setTimeout(() => {
      this.setState({ transition: false });
    }, 3300);
  }

  render() {
    const home = (home) => (this.home = home);
    const workHome = (workHome) => (this.workHome = workHome);
    const contactHome = (contactHome) => (this.contactHome = contactHome);

    const aboutLeftCol = (aboutLeftCol) => (this.aboutLeftCol = aboutLeftCol);
    const aboutRightColContent = (aboutRightColContent) =>
      (this.aboutRightColContent = aboutRightColContent);
    const aboutStill = (aboutStill) => (this.aboutStill = aboutStill);
    const aboutStill2 = (aboutStill2) => (this.aboutStill2 = aboutStill2);

    const aboutLinkHome = (aboutLinkHome) =>
      (this.aboutLinkHome = aboutLinkHome);
    const aboutLink = (aboutLink) => (this.aboutLink = aboutLink);
    const aboutLinkWork = (aboutLinkWork) =>
      (this.aboutLinkWork = aboutLinkWork);
    const aboutLinkContact = (aboutLinkContact) =>
      (this.aboutLinkContact = aboutLinkContact);

    const transitionFirst = (transitionFirst) =>
      (this.transitionFirst = transitionFirst);
    const transitionMain = (transitionMain) =>
      (this.transitionMain = transitionMain);
    const transitionSecond = (transitionSecond) =>
      (this.transitionSecond = transitionSecond);
    const FnameTx = (FnameTx) => (this.FnameTx = FnameTx);
    const LnameTx = (LnameTx) => (this.LnameTx = LnameTx);
    const learnTx = (learnTx) => (this.learnTx = learnTx);

    return (
      <div>
        <link
          href="https://fonts.googleapis.com/css?family=Josefin+Sans:300"
          rel="stylesheet"
        />
        {this.state.about ? (
          <div style={{ fontFamily: "Josefin Sans" }}>
            <div
              ref={aboutLeftCol}
              className="aboutLeftCol"
              style={{ display: this.state.columns ? null : "none" }}
            >
              <div className="aboutWhite">
                <div className="about-still">
                  <h2 ref={aboutStill}>ABOUT</h2>
                  <p ref={aboutStill2} className="learn">
                    <b> - I LIVE TO LEARN - </b>
                  </p>
                </div>

                <div className="aboutLinks">
                  <div className="about-link-content">
                    <p
                      className={
                        this.state.homeHover ? "about-link-hover" : "aboutLink"
                      }
                      ref={aboutLinkHome}
                      onClick={this.homeTransition}
                      onMouseEnter={() =>
                        this.setState({ homeHover: !this.state.homeHover })
                      }
                      onMouseLeave={() =>
                        this.setState({ homeHover: !this.state.homeHover })
                      }
                    >
                      Home
                    </p>
                    <p
                      className={
                        this.state.aboutHover || this.state.about
                          ? "about-link-hover"
                          : "aboutLink"
                      }
                      ref={aboutLink}
                      onMouseEnter={() =>
                        this.setState({ aboutHover: !this.state.aboutHover })
                      }
                      onMouseLeave={() =>
                        this.setState({ aboutHover: !this.state.aboutHover })
                      }
                    >
                      About
                    </p>
                    <p
                      className={
                        this.state.workHover || this.state.work
                          ? "about-link-hover"
                          : "aboutLink"
                      }
                      ref={aboutLinkWork}
                      onClick={this.workTransition}
                      onMouseEnter={() =>
                        this.setState({ workHover: !this.state.workHover })
                      }
                      onMouseLeave={() =>
                        this.setState({ workHover: !this.state.workHover })
                      }
                    >
                      Experience
                    </p>
                    <p
                      className={
                        this.state.contactHover || this.state.contact
                          ? "about-link-hover"
                          : "aboutLink"
                      }
                      ref={aboutLinkContact}
                      onClick={this.contactTransition}
                      onMouseEnter={() =>
                        this.setState({
                          contactHover: !this.state.contactHover,
                        })
                      }
                      onMouseLeave={() =>
                        this.setState({
                          contactHover: !this.state.contactHover,
                        })
                      }
                    >
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
                style={{
                  "-webkit-overflow-scrolling": "touch",
                  display: this.state.columns ? null : "none",
                }}
              >
                <h2 className="heading">Jabulani Kunene</h2>
                <h4>
                  I am a Mechanical Engineer, and a self-taught full-stack
                  AI-first JavaScript Developer
                </h4>

                <br />
                <br />

                <h5 className="heading">Formal Education</h5>
                <div className="wits-logo-container">
                  <img
                    className="mad-mobile-logo"
                    src={require("../../Assets/Images/wits_logo.png")}
                  />
                </div>
                <p style={{ textAlign: "justify" }}>
                  I am a qualified Mechanical Engineer with an Honors degree
                  from the University of the Witwatersrand, South Africa (2024),
                  and a self-taught full-stack JavaScript Developer with over 7
                  years of experience.
                  <br />
                  <br />I am an AI-first full-stack developer, actively working
                  with the latest cutting-edge AI development tools including{" "}
                  <a href="https://www.cursor.com/" target="_blank">
                    Cursor
                  </a>
                  , ChatGPT, Claude,
                  <a href="https://bolt.new/" target="_blank">
                    {" "}
                    Bolt
                  </a>
                  ,
                  <a href="https://lovable.dev/" target="_blank">
                    {" "}
                    Lovable
                  </a>
                  , and
                  <a href="https://v0.dev/chat" target="_blank">
                    {" "}
                    V0
                  </a>
                  .
                  <br />
                  <br />
                  Mastering these new AI tools has rapidly boosted my
                  development productivity by more than 10x. What used to take
                  me a day to do, <i>I can now do in 10 min</i>.
                </p>

                <div>
                  <hr className="hrLine" />
                  <br />
                  <h5 className="heading">My Passions & Skills</h5>
                  <p style={{ textAlign: "justify" }}>
                    My passion for internet technology began alongside my
                    engineering studies, initially sparked by trading financial
                    markets and cryptocurrency. This led me to develop GalxyBit,
                    a cryptocurrency exchange platform, and co-found
                    <a href="https://parkupp.co.za/" target="_blank">
                      {" "}
                      Parkupp
                    </a>
                    , a decentralized parking app acquired by Docklands
                    Ventures.
                    <br />
                    <br />
                    I also created Mad-Mobile, a real-time vehicle diagnostics
                    app, and Money Calls, a foreign exchange web app. Later, I
                    founded Paradise Eats, a food delivery app tailored for
                    towns in South Africa's Garden Route, successfully launching
                    the Android applications in 2022.
                    <br />
                    <br />
                    My software development expertise includes proficiency in:
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>SQL</li>
                      <li>Python</li>
                      <li>MATLAB</li>
                      <li>MQL5</li>
                    </ul>
                    As well as frameworks and technologies like:
                    <ul>
                      <li>React.js</li>
                      <li>Next.js</li>
                      <li>React Native</li>
                      <li>Node.js</li>
                      <li>Android Studio</li>
                      <li>PostgreSQL</li>
                      <li>MongoDB</li>
                      <li>Docker</li>
                      <li>AWS</li>
                      <li>OpenSearch/ElasticSearch</li>
                    </ul>
                    <br />
                    <br />
                    My final engineering design project involved a low-cost
                    solar-powered refrigeration system for rural Africa,
                    blending my mechanical engineering skills with my commitment
                    to sustainability.
                    <br />
                    <br />
                    Previously, I worked on an orbital launch system for
                    deploying LEO cubesats aimed at providing affordable
                    high-speed internet connectivity for the Southern African
                    Development Community (SADC) region—a challenging but
                    enriching experience in aerospace technology.
                    <br />
                    <br />
                  </p>
                </div>

                <hr className="hrLine" />
                <br />
                <p className="heading">IT'S POSSIBLE TO LEARN ANYTHING</p>
              </div>
            </div>
          </div>
        ) : null}

        {this.state.transition ? (
          <div className="transition-container">
            <div ref={transitionFirst} className="transition-first"></div>
            <div ref={transitionMain} className="transition-main">
              <div
                className="transition-content"
                style={{ display: this.state.txContent ? null : "none" }}
              >
                <p ref={FnameTx} className="name-tx">
                  J
                </p>
                <p ref={LnameTx} className="name-tx" style={{ marginLeft: 5 }}>
                  K
                </p>
                <p ref={learnTx} className="learn-tx">
                  - LIVING TO LEARN -
                </p>
              </div>
            </div>
            <div ref={transitionSecond} className="transition-second"></div>
          </div>
        ) : null}

        {this.state.home ? (
          <div ref={home} className="home">
            <Landing />
          </div>
        ) : null}

        {this.state.work ? (
          <div ref={workHome} className="workHome">
            <Work />
          </div>
        ) : null}

        {this.state.contact ? (
          <div ref={contactHome} className="contactHome">
            <Contact />
          </div>
        ) : null}
      </div>
    );
  }
}
