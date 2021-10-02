import React from "react";
import { Container, Row, Col } from "reactstrap";

const FinalInvitationSection = () => {
  return (
    <section className="final-invitation py-5 my-5">
      <Container>
        <Row className="align-items-center">
          <Col md="6" className="justify-content-center mx-auto text-center">
            <h3 className="invitation-title-section">
              Vaccinate <b className="title-color">Yourself</b> Now
            </h3>
            <p className=" my-3 invitation-caption">
              Find the nearest vaccination service from your location now and
              get vaccinate to protect yourself and the others
            </p>
            <a
              href="/#"
              role="button"
              className="justify-content-center invitation-btn my-5 pt-3 "
            >
              Find & Register
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FinalInvitationSection;
