import React from "react";
import { Container, Col, Row } from "reactstrap";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  return (
    <section className="blog-section py-5 my-5">
      <Container>
        <Row className="align-items-center">
          <Col className="text-center" xs="12">
            <h3 className="blog-title-section">
              Check out our <b className="title-color">latest article</b>
            </h3>
            <hr className="hr-line " />
          </Col>
        </Row>
        <Row className="align-items-center cards-section card-deck my-5 ">
          <BlogCard
            imgSrc="./img/blog/blog-image-01.svg"
            title="Disease detection, check 
            up in the laboratory"
            caption="In this case, the role of the health laboratory is very important to do
            a disease detection..."
          />
          <BlogCard
            imgSrc="./img/blog/blog-image-02.svg"
            title="Herbal medicines that are 
            relieving covid-19"
            caption="Herbal medicine is very widely used at this time because of its very good for your health..."
          />
          <BlogCard
            imgSrc="./img/blog/blog-image-03.svg"
            title="Covid-19 vaccine effects for 
            your skin health"
            caption="A healthy lifestyle should start from now and also for your skin health.
            There are some..."
          />
        </Row>
        <Row className="align-items-center ">
          <Col className="text-center my-3" xs="12">
            <a
              name=""
              id=""
              href="/#"
              role="button"
              className="justify-content-center blog-btn-view-all"
            >
              view all
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogSection;
