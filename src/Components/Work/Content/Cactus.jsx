import React, { Component } from 'react';

export class Cactus extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            design_poster: false,
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <div
                    ref={(section) => {
                        this.design = section;
                    }}
                >
                    <h2 className="heading" style={{ color: '#737373' }}>
                        TRAPPIST SYSTEMS
                    </h2>
                    <h4>Founder, Project Leader (2023 - present)</h4>
                    <h4>Software Consulting, Design & Development</h4>

                    <div className="design-logo-container trpst-logo-container">
                        <img
                            className="cactus-logo"
                            alt="trpst-logo"
                            src={require('../../../Assets/Images/trpst.png')}
                        />
                    </div>
                    <p className="mad-content">
                        <u>Trappist Systems</u> is a software consulting company
                        I founded where I manage a team of developer contractors
                        to create custom software solutions for clients.
                        <br />
                        <br />
                        The idea started back in university—once people realized
                        I could build apps, they kept asking me to build apps
                        for them. Even while I was focused on my own projects, I
                        saw a real opportunity: help the people approaching me
                        bring their ideas to life, while also creating
                        meaningful work for developers looking for extra income.
                        <br />
                        <br />
                        Today, we build across a wide range of projects—from AI
                        browser automation agents, voice and chat agents, to
                        custom web and mobile apps.
                        <br />
                        <br />
                        The two main client projects I’m focused on at the
                        moment are:
                        <br />
                        <br />
                        <strong>Auto Visa App</strong> — a fully automated,
                        human-in-the-loop browser AI agent that completes visa
                        application forms online. It notifies the user when
                        manual intervention is required (e.g., solving a
                        CAPTCHA) or when missing details are needed to continue
                        the application.
                        <br />
                        <br />
                        <strong>Airvoucher</strong> — a complex voucher
                        management system that enables admins to manage
                        retailers who sell a wide range of digital vouchers.
                        Retailers can sell anything from mobile airtime and data
                        bundles, prepaid electricity top-ups, and DStv payments,
                        to Ringa, Hollywoodbets, Easyload, and other major South
                        African voucher products.
                        <br />
                        <br />
                        Leading these projects has sharpened my ability to
                        deliver real-world production software — balancing
                        speed, reliability, and client deliverables.
                    </p>

                    <p className="mad-content" style={{ marginTop: 10 }}>
                        Every project we take on teaches me something
                        new—especially in automation and applied AI—and keeps
                        deepening my curiosity to keep learning, experimenting,
                        and improving.
                    </p>
                </div>
            </div>
        );
    }
}
