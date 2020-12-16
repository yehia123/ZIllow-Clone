import React, { useState } from 'react';
import katy from './ka.jpg'
import aa from './1.jpg'
import bb from './2.jpg'
import cc from './3.jpg'


//import './landing.css';
import {
  Button,
  Container,
  Row,
  Col
} from 'reactstrap';

import "./landing.css";
import "./modal.css";
import NavBar from "./NavBar.js";
import LandingPageHeader from "./LandingHeader.js";
import TransparentFooter from "./footer.js";

function Landing() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

    return(
      <>
        <NavBar />
        <div className="wrapper">
          <LandingPageHeader />

            <div className="section section-team text-center">
                <Container>

                  <h2 className="title">Here is our team</h2>
                  <div className="team">
                    <Row>
                      <Col md="3">
                        <div className="team-player">
                          <img
                            alt="..."
                            className="rounded-circle img-fluid img-raised"
                            src={aa}
                          ></img>
                          <h4 className="title">Yehia Qtaish</h4>
                          <p className="category text-info">Backend</p>
                          <p className="description">
                            You can write here details about one of your team members.
                            You can give more details about what they do. Feel free to
                            add some{" "}
                            <a href="#pablo" onClick={(e) => e.preventDefault()}>
                              links
                            </a>{" "}
                            for people to be able to follow them outside the site.
                          </p>
                        </div>
                      </Col>
                      <Col md="3">
                        <div className="team-player">
                          <img
                            alt="..."
                            className="rounded-circle img-fluid img-raised"
                            src={bb}
                          ></img>
                          <h4 className="title">Kamal Kant</h4>
                          <p className="category text-info">Backend</p>
                          <p className="description">
                            You can write here details about one of your team members.
                            You can give more details about what they do. Feel free to
                            add some{" "}
                            <a href="#pablo" onClick={(e) => e.preventDefault()}>
                              links
                            </a>{" "}
                            for people to be able to follow them outside the site.
                          </p>
                        </div>
                      </Col>
                      <Col md="3">
                        <div className="team-player">
                          <img
                            alt="..."
                            className="rounded-circle img-fluid img-raised"
                            src={cc}
                          ></img>
                          <h4 className="title">Pranav </h4>
                          <p className="category text-info">Frontend</p>
                          <p className="description">
                            You can write here details about one of your team members.
                            You can give more details about what they do. Feel free to
                            add some{" "}
                            <a href="#pablo" onClick={(e) => e.preventDefault()}>
                              links
                            </a>{" "}
                            for people to be able to follow them outside the site.
                          </p>
                        </div>
                      </Col>
                      <Col md="3">
                        <div className="team-player">
                          <img
                            alt="..."
                            className="rounded-circle img-fluid img-raised"
                            src={katy}
                          ></img>
                          <h4 className="title">Xiaohan Jiang</h4>
                          <p className="category text-info">Frontend</p>
                          <p className="description">
                            You can write here details about one of your team members.
                            You can give more details about what they do. Feel free to
                            add some{" "}
                            <a href="#pablo" onClick={(e) => e.preventDefault()}>
                              links
                            </a>{" "}
                            for people to be able to follow them outside the site.
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Container>
              </div>
              <TransparentFooter />
        </div>
      </>

    )
  }

export default Landing;
