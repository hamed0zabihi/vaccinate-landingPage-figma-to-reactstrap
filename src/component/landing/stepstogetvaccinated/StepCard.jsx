import React from "react";
import { Col, Card, CardText, CardBody, CardTitle } from "reactstrap";

const StepCard = (props) => {
  const { imgSrc, title, caption } = props;
  return (
    <Col className="py-2 mx-auto steps-tringle" md="3" sm="12" xs="12">
      <Card className="text-center h-100 feature-box  ">
        <CardBody className="text-center my-4 ">
          <img src={imgSrc} alt={title} className="img-fluid" />
          <CardTitle
            tag="h5"
            className="steps-to-get-vaccine-caption my-2 pt-2"
          >
            {title}
          </CardTitle>
          <CardText className="my-1 py-1 steps-to-get-vaccine-paragraph">
            {caption}
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StepCard;
