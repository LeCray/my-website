import React, { Component } from 'react';





export class Parkupp extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <h2 className="heading" style={{ color: "#737373" }}>Parkupp</h2>
                <h4>Decentralised parking (2018 - 2020)</h4>

                <div className="parkupp-logo-container">
                    <img className="parkupp-logo" src={require("../../../Assets/Images/parkupp_logo.png")} />
                </div>

                <p className="mad-content">
                    I was a co-founder and one of only two developers initially at
                    <a href="https://parkupp.co.za/" target="_blank"> Parkupp</a>&#8212;a proptech startup that focuses on helping
                    property owners utilise unoccupied space.
                <br /><br />
                Owners of parking space can list their parking on the platform and drivers that
                need parking can then easily get access to that parking and pay the owners directly through the platform.
                Very similar to Airbnb except instead of apartments&#8212;its parking space.
                <br /><br />
                One of the biggest partnerships we established was with Wework and Redefine Properties.
            </p>
                <div className="parkupp-partnership-container">
                    <img className="parkupp-partnership" src={require("../../../Assets/Images/parkupp_partnership.png")} />
                </div>
                <p className="mad-content">
                    Recently this year (2022), Parkupp got acquired by real estate investment company Docklands Ventures. Read more about the acquisition
                <a href="https://disrupt-africa.com/2022/02/09/sa-on-demand-startup-parkupp-acquired-by-docklands-ventures/" target="_blank"> here</a>.
            </p>
                <a href="https://parkupp.co.za" target="_blank">
                    <img className="parkupp-img" src={require("../../../Assets/Images/parkupp.png")} />
                </a>
            </div>
        )
    }
}
