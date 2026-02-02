import React, { useState, useEffect, useRef } from 'react';
import 'react-activity/dist/react-activity.css';
import { Col, Row } from 'react-bootstrap';
import { contactColumns } from '../Animation/Contact';
import { TransitionOverlay } from '../Components/TransitionOverlay';
import { usePageTransition } from '../hooks/usePageTransition';
import '../Components/Contact/Styles/Contact.css';
import '../Components/Contact/Styles/ContactMobile.css';

export const Contact = () => {
  const [columns, setColumns] = useState(false);
  const [width] = useState(window.innerWidth);
  const [homeHover, setHomeHover] = useState(false);
  const [aboutHover, setAboutHover] = useState(false);
  const [workHover, setWorkHover] = useState(false);
  const [contactHover, setContactHover] = useState(false);

  // Animation hook
  const { transition, txContent, transitionRefs, playTransition } = usePageTransition();

  // Refs for contact page animations
  const contactLeftColRef = useRef(null);
  const contactRightColContentRef = useRef(null);
  const contactStillRef = useRef(null);
  const contactLinkHomeRef = useRef(null);
  const contactLinkAboutRef = useRef(null);
  const contactLinkWorkRef = useRef(null);
  const contactLinkRef = useRef(null);

  useEffect(() => {
    setColumns(true);
    contactColumns(
      contactLeftColRef.current,
      contactRightColContentRef.current,
      width,
      contactStillRef.current,
      contactLinkHomeRef.current,
      contactLinkAboutRef.current,
      contactLinkWorkRef.current,
      contactLinkRef.current
    );
  }, [width]);

  const homeTransition = async () => {
    playTransition('/');
  };

  const aboutTransition = async () => {
    playTransition('/about');
  };

  const workTransition = async () => {
    playTransition('/work');
  };

  return (
    <div>
      <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300" rel="stylesheet" />
      <div style={{ fontFamily: "Josefin Sans" }}>
        <div ref={contactLeftColRef} className="contactLeftCol">
          <div className="contactWhite">
            <h2 ref={contactStillRef}>CONTACT</h2>

            <div className="contactLinks">
              <div className="contact-link-content">
                <p
                  className={homeHover ? "contactLinkHover" : "contactLink"}
                  ref={contactLinkHomeRef}
                  onClick={homeTransition}
                  onMouseEnter={() => setHomeHover(!homeHover)}
                  onMouseLeave={() => setHomeHover(!homeHover)}>
                  Home
                </p>
                <p
                  className={aboutHover ? "contactLinkHover" : "contactLink"}
                  ref={contactLinkAboutRef}
                  onClick={aboutTransition}
                  onMouseEnter={() => setAboutHover(!aboutHover)}
                  onMouseLeave={() => setAboutHover(!aboutHover)}>
                  About
                </p>
                <p
                  className={workHover ? "contactLinkHover" : "contactLink"}
                  ref={contactLinkWorkRef}
                  onClick={workTransition}
                  onMouseEnter={() => setWorkHover(!workHover)}
                  onMouseLeave={() => setWorkHover(!workHover)}>
                  Experience
                </p>
                <p
                  className={contactHover ? "contactLinkHover" : "contactLink"}
                  ref={contactLinkRef}
                  onMouseEnter={() => setContactHover(!contactHover)}
                  onMouseLeave={() => setContactHover(!contactHover)}>
                  Contact
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="contactRightCol">
          <div
            ref={contactRightColContentRef}
            className="contactRightColContent"
            style={{ WebkitOverflowScrolling: "touch", display: columns ? null : "none" }}>

            <h4 className="contact-heading">Looking forward to hearing from you!</h4>
            <hr />
            <br />

            <h4 className="name-contact">Jabulani Kunene</h4>

            <Row>
              <Col className="contact-container" lg={6}>
                <h5 className="contact-details">Email:</h5>
                <h5 className="contact-details">Phone: </h5>
              </Col>
              <Col className="contact-container-2" lg={6}>
                <h5 className="contact-details-2">j.kunene123@gmail.com</h5>
                <h5 className="contact-details-2">+27 81 741 2792</h5>
              </Col>
            </Row>
            <img 
              className="me-contact" 
              src={require("../Assets/Images/me_updated.png")} 
              alt="Jabulani Kunene"
            />
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
