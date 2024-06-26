import React, { Component } from "react";

export class Paradise extends Component {
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
          <h2 className="heading" style={{ color: "#737373" }}>
            Paradise Eats
          </h2>
          <h4>Founder & Owner (2021 - present)</h4>
          <h4>Food delivery platform</h4>
          <div className="design-logo-container">
            <img
              className="paradise-logo"
              alt="paradise eats logo"
              src={require("../../../Assets/Images/paradise_logo.png")}
            />
          </div>
          <p className="mad-content">
            <a
              href="https://play.google.com/store/apps/details?id=io.instamobile.restaurant.rn.android"
              target="_blank"
            >
              <u>Paradise Eats</u>
            </a>{" "}
            is my attempt at an Uber Eats clone for smaller towns that still
            don't have any food delivery solutions, despite having several great
            restaurants.
            <br />
            <br />
            The entire solution consists of 3 completely seperate, standalone
            mobile applications that all communicate with each other in
            real-time.
          </p>
          <div className="screenshot-container">
            <img
              className="screenshot"
              src={require("../../../Assets/Images/consumer.png")}
            />
            <img
              className="screenshot"
              src={require("../../../Assets/Images/vendor.png")}
            />
            <img
              className="screenshot"
              src={require("../../../Assets/Images/driver.png")}
            />
          </div>
          <p className="mad-content">
            The screenshots above show the 3 different mobile apps: the consumer
            app, vendor app, and driver app, from left to right respectively.
            <br />
            <br />I worked on all 3 apps by myself initially, and published the
            first versions of the apps to Google Play Store on the 13th of July,
            2022. This took me close to 7 months to complete. From start to
            finish. Only after I published the apps to the store was I then
            joined by my current developer colleague who continues working on
            this on a full-time basis.
          </p>
          (The app is also available{" "}
          <a
            href="https://apkpure.com/paradise-eats/io.instamobile.restaurant.rn.android"
            target="_blank"
          >
            here
          </a>
          )
        </div>
      </div>
    );
  }
}
