import React, { useState, useEffect, useRef } from "react";
import "react-activity/dist/react-activity.css";
import { aboutColumns } from "../Animation/About";
import { TransitionOverlay } from "../Components/TransitionOverlay";
import { usePageTransition } from "../hooks/usePageTransition";
import "../Components/About/Styles/About.css";
import "../Components/About/Styles/AboutMobile.css";

export const About = () => {
  const [columns, setColumns] = useState(false);
  const [width] = useState(window.innerWidth);
  const [homeHover, setHomeHover] = useState(false);
  const [aboutHover, setAboutHover] = useState(false);
  const [workHover, setWorkHover] = useState(false);
  const [contactHover, setContactHover] = useState(false);

  // Animation hook
  const { transition, txContent, transitionRefs, playTransition } = usePageTransition();

  // Refs for about page animations
  const aboutLeftColRef = useRef(null);
  const aboutRightColContentRef = useRef(null);
  const aboutStillRef = useRef(null);
  const aboutStill2Ref = useRef(null);
  const aboutLinkHomeRef = useRef(null);
  const aboutLinkRef = useRef(null);
  const aboutLinkWorkRef = useRef(null);
  const aboutLinkContactRef = useRef(null);

  useEffect(() => {
    setColumns(true);
    aboutColumns(
      aboutLeftColRef.current,
      aboutRightColContentRef.current,
      width,
      aboutStillRef.current,
      aboutStill2Ref.current,
      aboutLinkHomeRef.current,
      aboutLinkRef.current,
      aboutLinkWorkRef.current,
      aboutLinkContactRef.current
    );
  }, [width]);

  const homeTransition = async () => {
    playTransition('/');
  };

  const workTransition = async () => {
    playTransition('/work');
  };

  const contactTransition = async () => {
    playTransition('/contact');
  };

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Josefin+Sans:300"
        rel="stylesheet"
      />
      <div style={{ fontFamily: "Josefin Sans" }}>
        <div
          ref={aboutLeftColRef}
          className="aboutLeftCol"
          style={{ display: columns ? null : "none" }}
        >
          <div className="aboutWhite">
            <div className="about-still">
              <h2 ref={aboutStillRef}>ABOUT</h2>
              <p ref={aboutStill2Ref} className="learn">
                <b> - I LIVE TO LEARN - </b>
              </p>
            </div>

            <div className="aboutLinks">
              <div className="about-link-content">
                <p
                  className={homeHover ? "about-link-hover" : "aboutLink"}
                  ref={aboutLinkHomeRef}
                  onClick={homeTransition}
                  onMouseEnter={() => setHomeHover(!homeHover)}
                  onMouseLeave={() => setHomeHover(!homeHover)}
                >
                  Home
                </p>
                <p
                  className={aboutHover ? "about-link-hover" : "aboutLink"}
                  ref={aboutLinkRef}
                  onMouseEnter={() => setAboutHover(!aboutHover)}
                  onMouseLeave={() => setAboutHover(!aboutHover)}
                >
                  About
                </p>
                <p
                  className={workHover ? "about-link-hover" : "aboutLink"}
                  ref={aboutLinkWorkRef}
                  onClick={workTransition}
                  onMouseEnter={() => setWorkHover(!workHover)}
                  onMouseLeave={() => setWorkHover(!workHover)}
                >
                  Experience
                </p>
                <p
                  className={contactHover ? "about-link-hover" : "aboutLink"}
                  ref={aboutLinkContactRef}
                  onClick={contactTransition}
                  onMouseEnter={() => setContactHover(!contactHover)}
                  onMouseLeave={() => setContactHover(!contactHover)}
                >
                  Contact
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="aboutRightCol">
          <div
            ref={aboutRightColContentRef}
            className="aboutRightColContent"
            style={{
              WebkitOverflowScrolling: "touch",
              display: columns ? null : "none",
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
                src={require("../Assets/Images/wits_logo.png")}
                alt="Wits Logo"
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
              <a href="https://www.cursor.com/" target="_blank" rel="noreferrer">
                Cursor
              </a>
              , ChatGPT, Claude,
              <a href="https://bolt.new/" target="_blank" rel="noreferrer">
                {" "}
                Bolt
              </a>
              ,
              <a href="https://lovable.dev/" target="_blank" rel="noreferrer">
                {" "}
                Lovable
              </a>
              , and
              <a href="https://v0.dev/chat" target="_blank" rel="noreferrer">
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
                <a href="https://parkupp.co.za/" target="_blank" rel="noreferrer">
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

      <TransitionOverlay
        transition={transition}
        txContent={txContent}
        transitionRefs={transitionRefs}
      />
    </div>
  );
};
