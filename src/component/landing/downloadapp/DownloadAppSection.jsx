import React from "react";
import { Container, Col, Row } from "reactstrap";

const DownloadAppSection = () => {
  return (
    <section className="py-5 my-5 app-vaccinate-section">
      <Container>
        <Row className="align-items-center">
          <Col md="5" sm="12" className="order-1 order-md-0">
            <Col>
              <h1 className="app-vaccinate-title">
                Download our
                <b className="title-color"> mobile apps</b>
              </h1>
              <hr className="hr-line mx-0" />
              <Col sm="10" className="py-3">
                <p className=" p-2 ps-0 app-vaccine-paragraph">
                  Install our mobile application to get all what you need about
                  vaccination. Whether about education, registration, and
                  vaccination information near your location.
                </p>
              </Col>

              <Col className="d-flex align-items-center justify-content-start py-2 mt-2 ">
                <img
                  src="./img/appdownload/app-appstore-btn-03.svg"
                  alt="appstore download app"
                  className="download-appstore-link"
                />
                <img
                  src="./img/appdownload/app-googleplay-img-04.svg"
                  alt="googleplay download app"
                  className="download-googleplay-link"
                />
              </Col>
            </Col>
          </Col>
          <Col md="7" sm="12" className="order-0 order-md-1 my-2">
            <img
              src="./img/appdownload/app-download-img-01.svg"
              className="img-fluid"
              alt="about vaccinated"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DownloadAppSection;
