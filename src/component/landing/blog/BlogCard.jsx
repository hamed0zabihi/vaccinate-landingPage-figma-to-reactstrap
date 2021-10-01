import React from "react";
import {
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardImg,
  CardLink,
} from "reactstrap";

const BlogCard = (props) => {
  const { imgSrc, title, caption } = props;
  return (
    <Col className="py-2 mx-auto" md="4" sm="12" xs="12">
      <Card className="text-center h-100 blog-feature-box  ">
        <CardImg
          top
          width="100%"
          src={imgSrc}
          alt={title}
          className="img-fluid"
        />
        <CardBody className="my-2 px-4">
          <CardTitle tag="h5" className="blog-card-title my-2 pt-2">
            {title}
          </CardTitle>
          <CardText className="my-1  py-1 blog-card-paragraph">
            {caption}
          </CardText>
          <CardText className="text-start py-3">
            <CardLink href="/#" className="blog-read-more py-3 mb-3">
              Read more
            </CardLink>
            <img
              src="./img/blog/blog-imgage-arrow-04.svg"
              alt="arrow for blog"
              className="ps-3"
            />
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BlogCard;
