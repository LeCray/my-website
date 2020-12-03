import React, { Component } from 'react';
import Ionicon from 'react-ionicons'
import { Link } from 'react-router-dom'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'react-bootstrap';




export class Research extends Component {
  componentDidMount() {
      window.scrollTo(0, 0)
    }

    render() {
    return (
        <div ref={(section)=>{this.research = section;}}>
            <h2 className="heading" style={{color: "#737373"}}>Honors Research Project</h2>
            <h4>Artificial Intelligence</h4>

            <div className="design-logo-container">
                <img className="design-logo" src={require("../../../Assets/Images/research_pic.png")}/>
            </div>

            <p className='exec-summary'>Executive Summary:</p>
            <p className="mad-content">
                This  paper  describes  the  development  and  implementation  of  an  artificially  intelligent
                system  that  automatically trades in the financial markets to profit from price fluctuations.
                <br/><br/>
                The system proposed is a simple trend-following  system  that  uses  six  different  market
                indicators:  three  different  moving  averages  and  the MACD (moving average convergence divergence)
                which itself is made up of three different indicators.
                <br/><br/>
                The system uses a Genetic Algorithm for the optimisation of indicator settings and a Long Short Term Memory (LSTM) Recurrent
                Neural Network for intelligent trade filtering.  Enveloping this whole development is
                Metatrader 5 - a leading institutional multi-asset trading platform that enables the use of sophisticated automated
                trading systems (trading robots)
            </p>
        </div>
    )}
}
