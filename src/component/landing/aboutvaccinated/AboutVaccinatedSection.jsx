import React from "react";
import { Container, Col, Row, ButtonToggle } from "reactstrap";

const AboutVaccinatedSection = () => {
  return (
    <section className="py-5 my-5 about-vaccinate-section">
      <Container>
        <Row className="align-items-center">
          <Col md="5" sm="12" className="order-1 order-md-0">
            <Col className="about-vaccinate-content">
              <h1 className="about-vaccinate-title">
                Leading
                <b className="hero-title-color"> vaccination providers</b>
              </h1>
              <hr className="hr-line mx-0" />
              <Col sm="10" className="py-3">
                <p className=" p-2 ps-0 about-vaccinate-paragraph">
                  Vaccinated provides you an easy-registration to vaccinate
                  yourself on the nearest vaccination service from your
                  location. Accessible on mobile and online for everyone.
                </p>
              </Col>
              <ButtonToggle className=" about-vaccinate-btn py-2 px-3 mt-2">
                Learn More
              </ButtonToggle>
            </Col>
          </Col>
          <Col md="7" sm="12" className="order-0 order-md-1 my-2">
            <img
              src="./img/about/about-01.svg"
              className="img-fluid"
              alt="about vaccinated"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutVaccinatedSection;
