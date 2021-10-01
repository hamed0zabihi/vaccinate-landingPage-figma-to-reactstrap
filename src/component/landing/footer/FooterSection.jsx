import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import FooterSocialIcon from "./FooterSocialIcon";

const FooterSection = () => (
  <section className="footer-section mt-5">
    <Col className="footer-image-background">
      <Container className="py-5">
        <Row className="social-footer">
          <FooterSocialIcon />
        </Row>
        <Row className="main-footer">
          <Col md="4" xs="12" className="footer-widget-about">
            <Col className="margin-top">
              <Col>
                <img
                  src="./img/footer/footer-logo-white.svg"
                  alt="footer logo"
                />
              </Col>
              <Col className="py-3">
                <p className="footer-widget-discription">
                  Vaccinated provides you an easy-registration to vaccinate
                  yourself on the nearest vaccination service from your
                  location. Accessible on mobile and online for everyone.
                </p>
              </Col>
              <Col>
                <p className="footer-widget-discription">
                  ©Vaccinated 2021. All rights reserved. Designed by Rhenald
                  Karrel
                </p>
              </Col>
            </Col>
          </Col>
          <Col md="2" xs="12"></Col>
          <Col md="2" xs="12">
            <Col className="footer-widget-link">
              <h6 className="footer-widget-title">about</h6>
              <ListGroup className="justify-content-end">
                <ListGroupItem tag="a" href="/#">
                  About Vaccinated
                </ListGroupItem>
                <ListGroupItem tag="a" href="/#">
                  Blog
                </ListGroupItem>
                <ListGroupItem tag="a" href="/#">
                  Services
                </ListGroupItem>
                <ListGroupItem tag="a" href="/#">
                  Apps
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Col>
          <Col md="2" xs="12">
            <Col className="footer-widget-link">
              <h6 className="footer-widget-title">services</h6>
              <ListGroup className="justify-content-end">
                <ListGroupItem tag="a" href="/#">
                  Vaccine informations
                </ListGroupItem>
                <ListGroupItem tag="a" href="/#">
                  Vaccination locations
                </ListGroupItem>
                <ListGroupItem tag="a" href="/#">
                  Emergency calls
                </ListGroupItem>
                <ListGroupItem tag="a" href="/#">
                  QR Code Certificate
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Col>
          <Col md="2" xs="12">
            <Col className="footer-widget-link">
              <h6 className="footer-widget-title">help</h6>
              <ListGroup className="justify-content-end">
                <ListGroupItem tag="a" href="/#">
                  Help center
                </ListGroupItem>
                <ListGroupItem tag="a" href="/#">
                  Contact supports
                </ListGroupItem>
                <ListGroupItem tag="a" href="/#">
                  Instructions
                </ListGroupItem>
                <ListGroupItem tag="a" href="/#">
                  How it works
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Col>
        </Row>
      </Container>
    </Col>
  </section>
);

export default FooterSection;
