import React, { useState, useEffect, useRef } from 'react';
import 'react-activity/dist/react-activity.css';
import { switchTo, workColumns } from '../Animation/Work';
import { Cactus } from '../Components/Work/Content/Cactus';
import { Design } from '../Components/Work/Content/Design';
import { GalxyBit } from '../Components/Work/Content/GalxyBit';
import { MadMobile } from '../Components/Work/Content/MadMobile';
import { Medyear } from '../Components/Work/Content/Medyear';
import { XCapital } from '../Components/Work/Content/XCapital';
import { MoneyCalls } from '../Components/Work/Content/MoneyCalls';
import { Paradise } from '../Components/Work/Content/Paradise';
import { Parkupp } from '../Components/Work/Content/Parkupp';
import { Research } from '../Components/Work/Content/Research';
import { TransitionOverlay } from '../Components/TransitionOverlay';
import { usePageTransition } from '../hooks/usePageTransition';
import '../Components/Work/Styles/Work.css';
import '../Components/Work/Styles/WorkMobile.css';

export const Work = () => {
  const [columns, setColumns] = useState(false);
  const [width] = useState(window.innerWidth);

  // Project states
  const [paradise, setParadise] = useState(false);
  const [medyear, setMedyear] = useState(false);
  const [cactus, setCactus] = useState(false);
  const [design, setDesign] = useState(true);
  const [xcapital, setXcapital] = useState(false);
  const [research, setResearch] = useState(false);
  const [parkupp, setParkupp] = useState(false);
  const [madMobile, setMadMobile] = useState(false);
  const [moneyCalls, setMoneyCalls] = useState(false);
  const [galxyBit, setGalxyBit] = useState(false);

  // Hover states
  const [homeHover, setHomeHover] = useState(false);
  const [aboutHover, setAboutHover] = useState(false);
  const [workHover, setWorkHover] = useState(false);
  const [contactHover, setContactHover] = useState(false);
  const [paradiseHover, setParadiseHover] = useState(false);
  const [medyearHover, setMedyearHover] = useState(false);
  const [cactusHover, setCactusHover] = useState(false);
  const [designHover, setDesignHover] = useState(false);
  const [xcapitalHover, setXcapitalHover] = useState(false);
  const [researchHover, setResearchHover] = useState(false);
  const [parkuppHover, setParkuppHover] = useState(false);
  const [madMobileHover, setMadMobileHover] = useState(false);
  const [moneyCallsHover, setMoneyCallsHover] = useState(false);
  const [galxyBitHover, setGalxyBitHover] = useState(false);

  // Animation hook
  const { transition, txContent, transitionRefs, playTransition } = usePageTransition();

  // Refs for work page animations
  const workLeftColRef = useRef(null);
  const workRightColContentRef = useRef(null);
  const workStillRef = useRef(null);
  const workLinkHomeRef = useRef(null);
  const workLinkAboutRef = useRef(null);
  const workLinkRef = useRef(null);
  const workLinkContactRef = useRef(null);
  const paradiseSlideRef = useRef(null);
  const medyearSlideRef = useRef(null);
  const cactusSlideRef = useRef(null);
  const designSlideRef = useRef(null);
  const xcapitalSlideRef = useRef(null);
  const researchSlideRef = useRef(null);
  const madMobileSlideRef = useRef(null);
  const parkuppSlideRef = useRef(null);
  const moneyCallsSlideRef = useRef(null);
  const galxyBitSlideRef = useRef(null);

  useEffect(() => {
    setColumns(true);
    workColumns(
      workLeftColRef.current,
      workRightColContentRef.current,
      width,
      workStillRef.current,
      workLinkHomeRef.current,
      workLinkAboutRef.current,
      workLinkRef.current,
      workLinkContactRef.current,
      paradiseSlideRef.current,
      medyearSlideRef.current,
      cactusSlideRef.current,
      designSlideRef.current,
      researchSlideRef.current,
      madMobileSlideRef.current,
      parkuppSlideRef.current,
      moneyCallsSlideRef.current,
      galxyBitSlideRef.current
    );
  }, [width]);

  const showParadise = () => {
    switchTo(workRightColContentRef.current);
    setTimeout(() => {
      setDesign(false);
      setResearch(false);
      setXcapital(false);
      setMadMobile(false);
      setParkupp(false);
      setMoneyCalls(false);
      setGalxyBit(false);
      setParadise(true);
      setMedyear(false);
      setCactus(false);
    }, 500);
  };

  const showXcapital = () => {
    switchTo(workRightColContentRef.current);
    setTimeout(() => {
      setDesign(false);
      setXcapital(true);
      setResearch(false);
      setMadMobile(false);
      setParkupp(false);
      setMoneyCalls(false);
      setGalxyBit(false);
      setParadise(false);
      setMedyear(false);
      setCactus(false);
    }, 500);
  };

  const showMedyear = () => {
    switchTo(workRightColContentRef.current);
    setTimeout(() => {
      setDesign(false);
      setXcapital(false);
      setResearch(false);
      setMadMobile(false);
      setParkupp(false);
      setMoneyCalls(false);
      setGalxyBit(false);
      setParadise(false);
      setMedyear(true);
      setCactus(false);
    }, 500);
  };

  const showCactus = () => {
    switchTo(workRightColContentRef.current);
    setTimeout(() => {
      setDesign(false);
      setResearch(false);
      setXcapital(false);
      setMadMobile(false);
      setParkupp(false);
      setMoneyCalls(false);
      setGalxyBit(false);
      setParadise(false);
      setMedyear(false);
      setCactus(true);
    }, 500);
  };

  const showDesign = () => {
    switchTo(workRightColContentRef.current);
    setTimeout(() => {
      setDesign(true);
      setResearch(false);
      setXcapital(false);
      setMadMobile(false);
      setParkupp(false);
      setMoneyCalls(false);
      setGalxyBit(false);
      setParadise(false);
      setMedyear(false);
      setCactus(false);
    }, 500);
  };

  const showResearch = () => {
    switchTo(workRightColContentRef.current);
    setTimeout(() => {
      setDesign(false);
      setResearch(true);
      setXcapital(false);
      setMadMobile(false);
      setParkupp(false);
      setMoneyCalls(false);
      setGalxyBit(false);
      setParadise(false);
      setMedyear(false);
      setCactus(false);
    }, 500);
  };

  const showMadMobile = () => {
    switchTo(workRightColContentRef.current);
    setTimeout(() => {
      setDesign(false);
      setResearch(false);
      setXcapital(false);
      setMadMobile(true);
      setParkupp(false);
      setMoneyCalls(false);
      setGalxyBit(false);
      setParadise(false);
      setMedyear(false);
      setCactus(false);
    }, 500);
  };

  const showParkupp = () => {
    switchTo(workRightColContentRef.current);
    setTimeout(() => {
      setDesign(false);
      setResearch(false);
      setXcapital(false);
      setParkupp(true);
      setMadMobile(false);
      setMoneyCalls(false);
      setGalxyBit(false);
      setParadise(false);
      setMedyear(false);
      setCactus(false);
    }, 500);
  };

  const showMoneyCalls = () => {
    switchTo(workRightColContentRef.current);
    setTimeout(() => {
      setDesign(false);
      setResearch(false);
      setXcapital(false);
      setMoneyCalls(true);
      setParkupp(false);
      setMadMobile(false);
      setGalxyBit(false);
      setParadise(false);
      setMedyear(false);
      setCactus(false);
    }, 500);
  };

  const showGalxyBit = () => {
    switchTo(workRightColContentRef.current);
    setTimeout(() => {
      setDesign(false);
      setResearch(false);
      setXcapital(false);
      setGalxyBit(true);
      setMoneyCalls(false);
      setParkupp(false);
      setMadMobile(false);
      setParadise(false);
      setMedyear(false);
      setCactus(false);
    }, 500);
  };

  const homeTransition = async () => {
    playTransition('/');
  };

  const aboutTransition = async () => {
    playTransition('/about');
  };

  const contactTransition = async () => {
    playTransition('/contact');
  };

  return (
    <div>
      <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300" rel="stylesheet" />
      <div style={{ fontFamily: "Josefin Sans" }}>
        <div ref={workLeftColRef} className="workLeftCol" style={{ display: columns ? null : "none" }}>
          <div className="workLeftColContent">
            <div ref={workStillRef}>
              <h2>EXPERIENCE</h2>

              <div className="work-intra-links">
                <div className="design-link">
                  <p
                    className={designHover || design ? "workLinkHover" : "workLink"}
                    ref={designSlideRef}
                    style={{ marginLeft: 0 }}
                    onMouseEnter={() => setDesignHover(!designHover)}
                    onMouseLeave={() => setDesignHover(!designHover)}
                    onClick={showDesign}>
                    Athstat
                  </p>
                </div>
                <div className="medyear-link">
                  <p
                    className={medyearHover || medyear ? "workLinkHover" : "workLink"}
                    ref={medyearSlideRef}
                    style={{ marginLeft: 0 }}
                    onMouseEnter={() => setMedyearHover(!medyearHover)}
                    onMouseLeave={() => setMedyearHover(!medyearHover)}
                    onClick={showMedyear}>
                    Medyear
                  </p>
                </div>
                <div className="cactus-link">
                  <p
                    className={cactusHover || cactus ? "workLinkHover" : "workLink"}
                    ref={cactusSlideRef}
                    style={{ marginLeft: 0 }}
                    onMouseEnter={() => setCactusHover(!cactusHover)}
                    onMouseLeave={() => setCactusHover(!cactusHover)}
                    onClick={showCactus}>
                    Cactus
                  </p>
                </div>
                <div className="research-link">
                  <p
                    className={researchHover || research ? "workLinkHover" : "workLink"}
                    ref={researchSlideRef}
                    style={{ marginLeft: 0 }}
                    onMouseEnter={() => setResearchHover(!researchHover)}
                    onMouseLeave={() => setResearchHover(!researchHover)}
                    onClick={showResearch}>
                    Honors Research Project
                  </p>
                </div>
                <div className="paradise-link">
                  <p
                    className={paradiseHover || paradise ? "workLinkHover" : "workLink"}
                    ref={paradiseSlideRef}
                    style={{ marginLeft: 0 }}
                    onMouseEnter={() => setParadiseHover(!paradiseHover)}
                    onMouseLeave={() => setParadiseHover(!paradiseHover)}
                    onClick={showParadise}>
                    Paradise Eats
                  </p>
                </div>
                <div className="xcapital-link">
                  <p
                    className={xcapitalHover || xcapital ? "workLinkHover" : "workLink"}
                    ref={xcapitalSlideRef}
                    style={{ marginLeft: 0 }}
                    onMouseEnter={() => setXcapitalHover(!xcapitalHover)}
                    onMouseLeave={() => setXcapitalHover(!xcapitalHover)}
                    onClick={showXcapital}>
                    X Capital
                  </p>
                </div>

                <div className="bottom-links">
                  <p
                    className={parkuppHover || parkupp ? "workLinkHover" : "workLink"}
                    ref={parkuppSlideRef}
                    onMouseEnter={() => setParkuppHover(!parkuppHover)}
                    onMouseLeave={() => setParkuppHover(!parkuppHover)}
                    onClick={showParkupp}>
                    Parkupp
                  </p>
                  <p
                    className={madMobileHover || madMobile ? "workLinkHover" : "workLink"}
                    ref={madMobileSlideRef}
                    onMouseEnter={() => setMadMobileHover(!madMobileHover)}
                    onMouseLeave={() => setMadMobileHover(!madMobileHover)}
                    onClick={showMadMobile}>
                    MAD Mobile
                  </p>
                  <p
                    className={moneyCallsHover || moneyCalls ? "workLinkHover" : "workLink"}
                    ref={moneyCallsSlideRef}
                    onMouseEnter={() => setMoneyCallsHover(!moneyCallsHover)}
                    onMouseLeave={() => setMoneyCallsHover(!moneyCallsHover)}
                    onClick={showMoneyCalls}>
                    Money Calls
                  </p>
                  <p
                    className={galxyBitHover || galxyBit ? "workLinkHover" : "workLink"}
                    ref={galxyBitSlideRef}
                    onMouseEnter={() => setGalxyBitHover(!galxyBitHover)}
                    onMouseLeave={() => setGalxyBitHover(!galxyBitHover)}
                    onClick={showGalxyBit}>
                    GalxyBit
                  </p>
                </div>
              </div>
            </div>

            <div className="workLinks">
              <div className="work-link-content">
                <p
                  className={homeHover ? "workLinkHover" : "workLink"}
                  ref={workLinkHomeRef}
                  onClick={homeTransition}
                  onMouseEnter={() => setHomeHover(!homeHover)}
                  onMouseLeave={() => setHomeHover(!homeHover)}>
                  Home
                </p>
                <p
                  className={aboutHover ? "workLinkHover" : "workLink"}
                  ref={workLinkAboutRef}
                  onClick={aboutTransition}
                  onMouseEnter={() => setAboutHover(!aboutHover)}
                  onMouseLeave={() => setAboutHover(!aboutHover)}>
                  About
                </p>
                <p
                  className={workHover ? "workLinkHover" : "workLink"}
                  ref={workLinkRef}
                  onMouseEnter={() => setWorkHover(!workHover)}
                  onMouseLeave={() => setWorkHover(!workHover)}>
                  Experience
                </p>
                <p
                  className={contactHover ? "workLinkHover" : "workLink"}
                  ref={workLinkContactRef}
                  onClick={contactTransition}
                  onMouseEnter={() => setContactHover(!contactHover)}
                  onMouseLeave={() => setContactHover(!contactHover)}>
                  Contact
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="workRightCol">
          <div
            ref={workRightColContentRef}
            className="workRightColContent"
            style={{ WebkitOverflowScrolling: "touch", display: columns ? null : "none" }}>

            <div className="scroller" style={{ display: paradise ? null : "none" }}>
              <Paradise />
            </div>
            <div className="scroller" style={{ display: medyear ? null : "none" }}>
              <Medyear />
            </div>
            <div className="scroller" style={{ display: xcapital ? null : "none" }}>
              <XCapital />
            </div>
            <div className="scroller" style={{ display: cactus ? null : "none" }}>
              <Cactus />
            </div>
            <div className="scroller" style={{ display: design ? null : "none" }}>
              <Design />
            </div>
            <div className="scroller" style={{ display: research ? null : "none" }}>
              <Research />
            </div>
            <div className="scroller" style={{ display: madMobile ? null : "none" }}>
              <MadMobile />
            </div>
            <div className="scroller" style={{ display: parkupp ? null : "none" }}>
              <Parkupp />
            </div>
            <div className="scroller" style={{ display: moneyCalls ? null : "none" }}>
              <MoneyCalls />
            </div>
            <div className="scroller" style={{ display: galxyBit ? null : "none" }}>
              <GalxyBit />
            </div>
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
