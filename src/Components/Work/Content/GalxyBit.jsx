import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';




export class GalxyBit extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <div >
                <h2 ref={(section) => { this.gxb = section; }} className="heading" style={{ color: "#737373" }}>GalxyBit</h2>
                <h4>Founder & Owner (2017 - 2018)</h4>
                <h4>A cryptocurrency exchange</h4>

                <div className="gxb-logo-container">
                    <p style={{ display: "inline-block", fontSize: 40 }}>G</p>ALXY<p style={{ color: "#cc7a00", display: "inline-block" }}>BIT</p>
                </div>

                <p className="mad-content">
                    Being the first web app I attempted to build in 2017, I've been meaning to rebuild it
                    using a much more expressive tech stack. ReactJS with ExpressJS.
                    This would be with the help of my development team.
                <br /><br />
                People with South African rands will be able to exchange their zars
                for one of three major cryptocurrencies namely Bitcoin, Litecoin and Ethereum.
                Liquidity would be provided by Ice3X - a leading South African cryptocurrency exchange platform.
            </p>
                <img onClick={() => scrollToComponent(this.gxb, { offset: 0, align: 'top', duration: 1500 })} className="galxybit-img" src={require("../../../Assets/Images/galxybit.png")} />
            </div>
        )
    }
}
