import React, { Component } from 'react';
import Ionicon from 'react-ionicons'
import { Link } from 'react-router-dom'
import { Modal } from 'react-bootstrap';

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




export class Medyear extends Component {

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
                    <h2 className="heading" style={{ color: "#737373" }}>Medyear</h2>
                    <h4>Computational Genomics (2021 - 2022)</h4>

                    <div className="medyear-logo-container">
                        <img className="design-logo" src={require("../../../Assets/Images/medyear.png")} />
                    </div>

                    <p className="mad-content">
                        <a href="https://www.medyear.com/" target="_blank">Medyear</a> is an American healthcare technology company based in New York, USA. They bring
                        health records and people together in grounbreaking new ways, with records from over 10,000 hospitals and clinics.
                    <br /><br />

                    At the beginning of 2021, I had been brought on as an AI Engineer, whose task was to design and build a COVID-19 risk prediction tool.

                    <br /><br />

                    The solution I implemented consisted of sequencing people's DNA, and analysing their single-nucleotide polymorphisms (SNPs).
                    Their variants were then run through several industry standard bioinformatics tools&#8212;such as
                    <a href="https://sift.bii.a-star.edu.sg/" target="_blank"> SIFT</a>,
                    <a href="https://www.ensembl.org/info/docs/tools/vep/index.html" target="_blank"> Ensembl Variant Effect Predictor (VEP)</a>,
                    and <a href="https://els2.comotion.uw.edu/product/cadd-scores" target="_blank">CADD</a>&#8212;to generate one final risk prediction score.
                    <br /><br />
                    This score was then presented to users, with the intention of altering their behaviour to be more careful
                    if they knew they had a high risk of falling severly ill when diagnosed with COVID-19.
                    E.g., potentially ending up in ICU (high risk), compared to being completely asymptomatic (low risk).

                    <br /><br />
                    Unfortunately, even though the company has been operating successfully for over 10 years,
                    after a year and a couple of months of working with them, they filed for bankruptcy.

                    </p>
                </div>
            </div>
        )
    }
}
