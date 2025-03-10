import React, { Component } from "react";

export class Design extends Component {
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
            Athstat
          </h2>
          <h4>Vice President, Product (2023 - present)</h4>
          <h4>Full Stack Developer</h4>

          <div className="medyear-logo-container">
            <img
              className="athstat-logo"
              alt="medyear logo"
              src={require("../../../Assets/Images/athstat.jpeg")}
            />
          </div>

          <p className="mad-content" style={{ marginTop: -10 }}>
            <a href="https://www.athstat.io" target="_blank">
              <u>Athstat</u>
            </a>{" "}
            is an American sports analytics technology company based in Boston,
            MA, USA. Athstat gamifies your sports experience. It brings data,
            AI, and gaming together allowing fans to get the most out of their
            sports experience. Moreover, it provides innovative solutions for
            athletes, coaches, and fans by analyzing sports data.
            <br />
            <br />
            As a team lead overseeing the development of the company's fantasy
            sports game, I currently manage a team of four software developers,
            delegating tasks, set project milestones, and ensure alignment with
            the company's overall goals and objectives. Additionally, I
            coordinate sprint planning sessions, facilitate communication within
            the team, and act as a bridge between the development team and upper
            management.
            <br />
            <br />I drive data-driven decision-making by employing a versatile
            toolkit. I work with the latest big data technologies such as
            OpenSearch/ElasticSearch, PostgreSQL, MongoDB, Docker, AWS,
            React.js, React-Native, and Node.js. Engaging in Agile development,
            I contribute to flexible project evolution.
          </p>
        </div>
      </div>
    );
  }
}
