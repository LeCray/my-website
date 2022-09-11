import React, { Component } from 'react';





export class MoneyCalls extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <h2 className="heading" style={{ color: "#737373" }}>Money Calls</h2>
                <h4>A foreign exchange web application (2017 - 2018)</h4>

                <div className="market-logo-container">
                    <img className="market-logo" src={require("../../../Assets/Images/market.png")} />
                </div>

                <p className="money-calls-content">
                    I built this application from the ground up for Market Trading Network SA.
                    It is a large online community platform for South African retail traders.
                    New aspiring traders can sign up and trade foreign currencies using an affiliated broker.
                <br /><br />
                Features of the app included:
                <ul>
                        <li>Real time group chat sessions</li>
                        <li>Tracking of who referred who to the system</li>
                        <li>User account statistics management</li>
                        <li>Performance tracking</li>
                        <li>Embedded cryptocurrency payment system for top trader rewards</li>
                    </ul>
                    <img className="money-calls-img" src={require("../../../Assets/Images/money-calls.png")} />
                </p>
            </div>
        )
    }
}