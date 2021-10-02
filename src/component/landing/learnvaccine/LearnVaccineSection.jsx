import React from "react";
import { Container, Col, Row, ButtonToggle } from "reactstrap";

const LearnVaccineSection = () => {
  return (
    <section className="py-5 my-5 about-vaccinate-section">
      <Container>
        <Row className="align-items-center justify-content-md-between">
          <Col md="7" sm="12">
            <img
              src="./img/learnvaccine/learn-vaccine-01.svg"
              className="img-fluid"
              alt="learning vaccine"
            />
          </Col>
          <Col md="5" sm="12" className="pe-md-0 ps-md-5">
            <Col className="learning-vaccinate-content pe-md-0 ps-md-5">
              <h1 className="learning-vaccine-title">
                Learn more about the
                <b className="title-color"> vaccine</b>
              </h1>
              <hr className="hr-line mx-0" />
              <Col sm="10" className="py-3">
                <p className=" p-3 ps-0 learning-vaccine-paragraph">
                  Scare or still confuse about vaccination? Don’t worry,
                  Vaccinated is here to tell you informations about vaccination
                  and many kind of vaccine to you all-in-one place.
                </p>
              </Col>

              <Col className="my-1" xs="12">
                <a
                  href="/#"
                  role="button"
                  className="justify-content-center learning-vaccinate-btn my-5"
                >
                  Learn the Vaccine
                </a>
              </Col>
            </Col>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LearnVaccineSection;
