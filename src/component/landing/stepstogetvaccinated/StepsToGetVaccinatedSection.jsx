import React from "react";
import { Container, Row, Col } from "reactstrap";
import StepCard from "./StepCard";

const StepsToGetVaccinatedSection = () => {
  return (
    <section className="py-5 my-5">
      <Container>
        <Row className="align-items-center ">
          <Col className="justify-content-center text-center">
            <h2 className="steps-to-get-vaccine-title ">
              Steps to <b className="hero-title-color">Get Vaccinated</b>
            </h2>
          </Col>
        </Row>

        <Row className="align-items-center cards-section card-deck my-5 ">
          {/* 01 */}
          <StepCard
            imgSrc="./img/steptogetvaccine/learning-01.svg"
            title=" Learn the vaccine"
            caption="  There is many kind of vaccine and its side-effects"
          />
          {/* 02 */}
          <StepCard
            imgSrc="./img/steptogetvaccine/find-02.svg"
            title="Find the nearest service"
            caption="Find location and see the date for the vaccination service"
          />
          {/* 03 */}
          <StepCard
            imgSrc="./img/steptogetvaccine/register-03.svg"
            title="Register yourself"
            caption="Register yourself and complete the requirements needed"
          />
          <StepCard
            imgSrc="./img/steptogetvaccine/getvaccine.svg"
            title="Get vaccinated"
            caption="Come to the location of the vaccination service and get the vaccine!"
          />
          {/* 04 */}
        </Row>
      </Container>
    </section>
  );
};

export default StepsToGetVaccinatedSection;
