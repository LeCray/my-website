import React, { Component, useState } from 'react';




export class XCapital extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            design_poster: false,
            isMobile: false
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)

    }

    componentWillMount() {
        if (window.innerWidth < 600) {
            this.setState({ isMobile: true });
        } else {
            this.setState({ isMobile: false });
        }
    }

    render() {
        return (
            <div>
                <div ref={(section) => { this.design = section; }}>
                    <h2 className="heading" style={{ color: "#737373" }}>X Capital</h2>
                    <h4>Sole Developer</h4>
                    <h4>Investments Platform</h4>

                    <div className="gxb-logo-container">
                        <p style={{
                                               fontFamily: 'Montserrat',
                                               fontWeight: 900,           
                                               fontSize: 40, 
                            backgroundImage: 'linear-gradient(to right,' + '#2193b0' + ',' + '#6dd5ed',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>
                            X CAPITAL
                        </p>
                    </div>


                    <p className="mad-content">
                        <a href="https://xcapital.netlify.app/" target="_blank"><u>X Capital</u></a> is a crypto investment company
                        that allows you to invest, earn interest, and grow your portfolio while ensuring maximum security for your digital assets.
                    <br /><br />

                    Being the latest web/mobile project I worked, as the sole developer for this platform, 
                    I was responsible for designing, developing, and deploying both the web and mobile app solutions.
                                        
                    My responsibilities encompassed every phase of the project:
                    
                    <ul>
                        <li>
                        Conceptualisation and Design: I worked closely with stakeholders to define the platform's objectives and features. This involved creating a comprehensive project roadmap, 
                        wireframing the user interface, and designing an intuitive user experience tailored to both web and mobile platforms.
                        </li>
                        <li>
                        Development: I executed the full-stack development of the platform using ExpressJs and NextJs with Typescript – cutting-edge technologies to ensure seamless functionality. 
                        From coding the backend to crafting fast responsive frontend interfaces, I am responsible for the full working solution.
                        </li>
                        <li>
                        Testing and Quality Assurance: Rigorous testing was a core part of my development process. I conducted extensive QA testing to identify and rectify any bugs or issues, 
                        ensuring that the platform operates flawlessly and provides a secure environment for cryptocurrency investors.
                        </li>
                        <li>
                        Deployment: I orchestrated the deployment of the web application, managing server configurations and database setup with MongoDB to guarantee optimal performance.                         
                        </li>
                    </ul>
                    
                    This project highlighted my ability to work independently and manage a complex development project from inception to execution. 
                    It also demonstrates my adaptability in navigating the rapidly evolving field of fast responsive web and mobile apps.                

                    </p>
                </div>
            </div>
        )
    }
}
