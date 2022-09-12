import React, { Component } from 'react';





export class MadMobile extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div ref={(section) => { this.mad = section; }}>
                <h2 className="heading" style={{ color: "#737373" }}>Mahele Auto Doctor</h2>
                <h4>Lead Developer (2017 - 2018)</h4>
                <h4>Real time vehicle diagnostics</h4>

                <div className="mad-mobile-logo-container">
                    <img className="mad-mobile-logo" alt="mad mobile" src={require("../../../Assets/Images/mad_logo.png")} />
                </div>

                <p className="mad-content">
                    I single-handedly developed software for Mahele Auto Doctor (M.A.D) in Vereeneging, Gauteng.
                    M.A.D does vehicle repairs and maintenance, fleet management, construction, courier, towing and much more.
                <br /><br />
                The platform I built for the company allows their clients to manage their accounts in a new, convienent way.
                <br /><br />
                The systems biggest feature allows for streaming live vehicle data analytics from any vehicle,
                anywhere in real time via an On Board Diagnostics dongle (OBD2).
                Clients vehicles can be anywhere and their vehicle parameters such as engine speed, fuel consumption,
                air-fuel ratio, temperatures etc. can be directly accessed via an online dashboard.
                <br /><br />
                Other features for their clients include:
                <ul>
                        <li>Self vehicle <strong>diagnosis</strong></li>
                        <li>Make or cancel vehicle <strong>bookings</strong></li>
                        <li>Approve or disapprove proposed <strong>quotations</strong> </li>
                        <li>View <strong>Invoices</strong></li>
                    </ul>
                </p>
                <p>
                    The app was initially published to Google Play Store in January 2018, but has been discontinued.
            </p>
                <a href="https://play.google.com/store/apps/details?id=com.mad_mobile" target="_blank">
                    <img className="mad-mobile-img" src={require("../../../Assets/Images/mad-mobile.png")} />
                </a>
            </div>
        )
    }
}
