import React, { Component } from 'react';





export class Paradise extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            design_poster: false,
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <div ref={(section) => { this.design = section; }}>
                    <h2 className="heading" style={{ color: "#737373" }}>Paradise Eats</h2>
                    <h4>A food delivery platform  (2021 - present)</h4>

                    <div className="design-logo-container">
                        <img className="paradise-logo" src={require("../../../Assets/Images/paradise_logo.png")} />
                    </div>

                    <p className="mad-content">
                        <a href="https://play.google.com/store/apps/details?id=io.instamobile.restaurant.rn.android" target="_blank">
                            Paradise Eats
                        </a> is my attempt at an Uber Eats clone for smaller towns that still don't have any
                        food delivery solutions, but still have several great restaurants.
                        <br /><br />
                        The entire solution consists of 3 completely seperate, standalone mobile applications that all
                        communicate with each other in real-time.
                    </p>
                    <div className="screenshot-container">
                        <img className="screenshot" src={require("../../../Assets/Images/consumer.png")} />
                        <img className="screenshot" src={require("../../../Assets/Images/vendor.png")} />
                        <img className="screenshot" src={require("../../../Assets/Images/driver.png")} />
                    </div>
                    <p className="mad-content">
                        The screenshots above show the 3 different mobile apps: the consumer app, vendor app, and driver app,
                        from left to right respectively. [You should see dark mode]
                        <br /><br />
                        I worked on all 3 apps by myself initially, and published the first versions of the apps
                        to Google Play Store on the 13th of July, 2022. This took me close to 7 months to complete.
                        From start to finish. Only after I published the apps to the store
                        was I then joined by my current developer colleague.
                    </p>
                </div>
            </div>
        )
    }
}
