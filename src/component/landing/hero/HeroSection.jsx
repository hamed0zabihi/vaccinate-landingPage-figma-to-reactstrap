import React from "react";
import { Jumbotron, Container, Row, Col, ButtonToggle } from "reactstrap";

const HeroSection = () => {
  return (
    <section className="pt-5">
      <div>
        <Jumbotron>
          <Container>
            <Row className="align-items-center">
              <Col sm="12" md="6" className="order-1 order-md-0  pt-5">
                <Col className="hero-content my-auto">
                  <h1 className="hero-title">
                    Easy registration &
                    <b className="hero-title-color"> vaccinated</b> yourself
                  </h1>

                  <Col sm="8" className="">
                    <p className="hero-paraghraph text-justify p-2 ps-0">
                      Vaccinated provides you an easy-registration to vaccinate
                      yourself on the nearest vaccination service from your
                      location. Accessible on mobile and online for everyone.
                    </p>
                  </Col>

                  <Col className="my-1" xs="12">
                    <a
                      href="/#"
                      role="button"
                      className="justify-content-center hero-button my-5"
                    >
                      register now
                    </a>
                  </Col>
                </Col>
              </Col>

              <Col sm="12" md="6" className="order-0 order-md-1">
                <img
                  src="./img/hero/hero.svg"
                  className="img-fluid "
                  alt="sliderImage"
                />
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    </section>
  );
};

export default HeroSection;
