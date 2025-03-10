import React, { Component } from "react";
import "react-activity/dist/react-activity.css";
import { ArrowDown } from "react-feather";
import scrollToComponent from "react-scroll-to-component";
import "./Styles/About.css";
import "./Styles/AboutMobile.css";

export default class AboutMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: false,
      about: true,
      work: false,
      contact: false,
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
      contact: false,
    });
    //homeEnter(this.home)
  }
  async workTransition() {
    await this.setState({
      home: false,
      about: false,
      work: true,
      contact: false,
    });
    //workEnter(this.workHome)
  }
  async contactTransition() {
    await this.setState({
      home: false,
      about: false,
      work: false,
      contact: true,
    });
    //contactEnter(this.contactHome)
  }

  render() {
    const home = (home) => (this.home = home);
    const workHome = (workHome) => (this.workHome = workHome);
    const contactHome = (contactHome) => (this.contactHome = contactHome);

    return (
      <div>
        <link
          href="https://fonts.googleapis.com/css?family=Josefin+Sans:300"
          rel="stylesheet"
        />

        <div style={{ fontFamily: "Josefin Sans" }}>
          <div className="about-left-col">
            <div className="about-white">
              <div>
                <h2>ABOUT</h2>
                <p className="learn">
                  <b> - I LIVE TO LEARN - </b>
                </p>
              </div>
              <div className="arrow-container">
                <ArrowDown
                  color="#800033"
                  size={30}
                  onClick={() =>
                    scrollToComponent(this.about, {
                      offset: 10,
                      align: "top",
                      ease: "inOutCirc",
                      duration: 1500,
                    })
                  }
                />
              </div>
            </div>
          </div>

          <div className="about-right-col">
            <div
              className="about-right-col-content"
              style={{ "-webkit-overflow-scrolling": "touch" }}
              ref={(section) => {
                this.about = section;
              }}
            >
              <h2 className="heading" style={{ color: "#737373" }}>
                Jabulani Kunene
              </h2>
              <h4>
                I am a Mechanical Engineer, and a self-taught full-stack
                AI-first JavaScript Developer
              </h4>

              <br />
              <br />

              <h5 className="heading">Formal Education</h5>
              <div className="wits-mobile-logo-container">
                <img
                  className="mad-mobile-logo"
                  src={require("../../Assets/Images/wits_logo.png")}
                />
              </div>
              <p style={{ textAlign: "justify" }}>
                I am a qualified Mechanical Engineer with an Honors degree from
                the University of the Witwatersrand, South Africa (2024), and a
                self-taught full-stack JavaScript Developer with over 7 years of
                experience.
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
                Mastering these new AI tools has rapidly boosted my development
                productivity by more than 10x. What used to take me a day to do,{" "}
                <i>I can now do in 10 min</i>.
              </p>

              <hr className="hrLine" />
              <br />
              <h5 className="heading">My Passions & Skills</h5>
              <p style={{ textAlign: "justify" }}>
                My passion for internet technology began alongside my
                engineering studies, initially sparked by trading financial
                markets and cryptocurrency. This led me to develop GalxyBit, a
                cryptocurrency exchange platform, and co-found
                <a href="https://parkupp.co.za/" target="_blank">
                  {" "}
                  Parkupp
                </a>
                , a decentralized parking app acquired by Docklands Ventures.
                <br />
                <br />
                I also created Mad-Mobile, a real-time vehicle diagnostics app,
                and Money Calls, a foreign exchange web app. Later, I founded
                Paradise Eats, a food delivery app tailored for towns in South
                Africa's Garden Route, successfully launching the Android
                applications in 2022.
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
                solar-powered refrigeration system for rural Africa, blending my
                mechanical engineering skills with my commitment to
                sustainability.
                <br />
                <br />
                Previously, I worked on an orbital launch system for deploying
                LEO cubesats aimed at providing affordable high-speed internet
                connectivity for the Southern African Development Community
                (SADC) region—a challenging but enriching experience in
                aerospace technology.
                <br />
                <br />
              </p>

              <hr className="hrLine" />
              <br />
              <p className="heading">IT'S POSSIBLE TO LEARN ANYTHING</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
