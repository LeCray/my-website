import React, { useState, useEffect, useRef } from "react";
import { Dots } from "react-activity";
import "react-activity/dist/react-activity.css";
import { Col, Row } from "react-bootstrap";
import { topSection } from "../Animation/Landing";
import LandingMobile from "../Components/Landing/LandingMobile";
import { TransitionOverlay } from "../Components/TransitionOverlay";
import { usePageTransition } from "../hooks/usePageTransition";

import "../Components/Landing/styles/Landing.css";
import "../Components/Landing/styles/LandingMobile.css";
import "../Components/Landing/Styles/LandingTransitions.css";

export const Home = () => {
  const [loading, setLoading] = useState(true);
  const [landingHome, setLandingHome] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [width] = useState(window.innerWidth);
  const [aboutHover, setAboutHover] = useState(false);
  const [workHover, setWorkHover] = useState(false);
  const [contactHover, setContactHover] = useState(false);

  // Animation hook
  const { transition, txContent, transitionRefs, playTransition } = usePageTransition();

  // All refs for animations - preserved exactly as before
  const landingHomeRef = useRef(null);
  const rocketRef = useRef(null);
  const FnameRef = useRef(null);
  const LnameRef = useRef(null);
  const whiteBoxRef = useRef(null);
  const meRef = useRef(null);
  const summaryRef = useRef(null);
  const hrRef = useRef(null);
  const aboutLinkRef = useRef(null);
  const workLinkRef = useRef(null);
  const contactLinkRef = useRef(null);

  useEffect(() => {
    if (width < 1025) {
      setMobile(true);
    }
  }, [width]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setLandingHome(true);
    }, 1000);

    setTimeout(() => {
      if (mobile) {
        return;
      } else {
        topSection(
          landingHomeRef.current,
          rocketRef.current,
          FnameRef.current,
          LnameRef.current,
          whiteBoxRef.current,
          meRef.current,
          hrRef.current,
          summaryRef.current,
          aboutLinkRef.current,
          workLinkRef.current,
          contactLinkRef.current
        );
      }
    }, 1000);
  }, [mobile]);

  const aboutTransition = async () => {
    playTransition('/about');
  };

  const workTransition = async () => {
    playTransition('/work');
  };

  const contactTransition = async () => {
    playTransition('/contact');
  };

  return (
    <div className="landingContainer">
      <link
        href="https://fonts.googleapis.com/css?family=Josefin+Sans:700"
        rel="stylesheet"
      />

      {loading ? (
        <div className="activity">
          <Dots size={25} animating={loading} color="#0066ff" />
        </div>
      ) : mobile ? (
        <LandingMobile />
      ) : (
        <div
          ref={landingHomeRef}
          className="landingHome"
          style={{
            fontFamily: "Josefin Sans",
            display: landingHome ? null : "none",
          }}
        >
          <Row>
            <Col lg={12} className="topSection">
              <img
                ref={rocketRef}
                className="rocket"
                src={require("../Assets/Images/thunder.svg")}
                alt="rocket"
              />
              <br />

              <div className="name-container">
                <h1 ref={FnameRef} className="name">
                  Jabulani
                </h1>
                <h1 ref={LnameRef} className="name" style={{ marginLeft: 5 }}>
                  Kunene
                </h1>
              </div>

              <div className="landing-right-col-container">
                <div ref={summaryRef} className="summary">
                  <div className="summary-details">
                    <hr ref={hrRef} className="hr" />
                    <p className="summary-details-text">
                      Mechanical Engineer (BSc Hons) (2024)
                    </p>
                    <p className="summary-details-text-wits">
                      University of the Witswatersrand
                    </p>
                    <p className="summary-details-text">
                      Self-taught AI-first JavaScript Developer <br />
                      7+ years of experience
                    </p>
                  </div>
                </div>

                <div
                  className={
                    aboutHover || workHover || contactHover
                      ? "links-correction"
                      : "links"
                  }
                >
                  <p
                    ref={aboutLinkRef}
                    className={aboutHover ? "link-hover" : "link"}
                    onClick={aboutTransition}
                    onMouseEnter={() => setAboutHover(!aboutHover)}
                    onMouseLeave={() => setAboutHover(!aboutHover)}
                  >
                    About
                  </p>
                  <p
                    ref={workLinkRef}
                    className={workHover ? "link-hover" : "link"}
                    onClick={workTransition}
                    onMouseEnter={() => setWorkHover(!workHover)}
                    onMouseLeave={() => setWorkHover(!workHover)}
                  >
                    Experience
                  </p>
                  <p
                    ref={contactLinkRef}
                    className={contactHover ? "link-hover" : "link"}
                    onClick={contactTransition}
                    onMouseEnter={() => setContactHover(!contactHover)}
                    onMouseLeave={() => setContactHover(!contactHover)}
                  >
                    Contact
                  </p>
                </div>
              </div>
            </Col>
            <div ref={whiteBoxRef} className="whiteBox">
              <img
                ref={meRef}
                className="me"
                src={require("../Assets/Images/me_updated.png")}
                alt="Jabulani Kunene"
              />
            </div>
          </Row>
        </div>
      )}

      <TransitionOverlay
        transition={transition}
        txContent={txContent}
        transitionRefs={transitionRefs}
      />
    </div>
  );
};
