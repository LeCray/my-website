import React, { Component } from 'react';





export class Cactus extends Component {

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
                    <h2 className="heading" style={{ color: "#737373" }}>Cactus Communications</h2>
                    <h4>Scientific Research Papers (2021 - present)</h4>

                    <div className="design-logo-container">
                        <img className="cactus-logo" alt="cactus-logo" src={require("../../../Assets/Images/cactus.png")} />
                    </div>

                    <p className="mad-content">
                        <a href="https://cactusglobal.com/" target=""><u>Cactus</u></a> is a global technology company accelerating
                        scientific advancement.
                        <br /><br />
                        Driven by its mission and strong culture, it aims to make research available
                        to the community around the world and accelerate research impact.
                        <br /><br />
                        As one of their senior editors, I review and edit the latest doctoral/postdoctoral research papers in the fields of
                        Computer Science, Mathematics, Engineering, and Physics. This is to help get the manuscripts ready for publishing to
                        major scientific journals&#8212;e.g., Springer, IEEE, ACM etc.
                        <br /><br />
                        Constantly engaging with ground-breaking new research on a daily basis has expanded my mind and knowledge base
                        in ways I could never imagine.
                    </p>
                    <div className="design-logo-container">
                        <img className="cactus-logo" src={require("../../../Assets/Images/ai.png")} />
                    </div>
                    <p className="mad-content" style={{ marginTop: 10 }}>
                        Every manuscript I work on always teaches me something new in the field (mostly centered around the use of
                        AI), and continuously deepens my curiosity to keep learning, expanding, and growing.
                    </p>

                </div>
            </div>
        )
    }
}
