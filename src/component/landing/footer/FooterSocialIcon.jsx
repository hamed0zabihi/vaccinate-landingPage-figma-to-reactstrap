import React from "react";
import { Col, ListGroup, ListGroupItem } from "reactstrap";

const FooterSocialIcon = () => {
  return (
    <Col className="footer-social-icon ml-auto">
      <ListGroup horizontal className="justify-content-end">
        <ListGroupItem tag="a" href="#">
          <i class="fa fa-instagram"></i>
        </ListGroupItem>
        <ListGroupItem tag="a" href="#">
          <i class="fa fa-facebook-f"></i>
        </ListGroupItem>
        <ListGroupItem tag="a" href="#">
          <i class="fa fa-linkedin"></i>
        </ListGroupItem>
        <ListGroupItem tag="a" href="#">
          <i class="fa fa-youtube-play"></i>
        </ListGroupItem>
      </ListGroup>
    </Col>
  );
};

export default FooterSocialIcon;
