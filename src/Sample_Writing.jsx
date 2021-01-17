import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sample1 from './images/Sample1.png';

const Sample_Writing = () => (
  <Container>
    <Row>
      <Col>

      <br />
      <br />
      <br />
        To view sample of my technical writing, please visit click <a href="https://docs.google.com/document/d/1FHK0k08cXa2j-mFL_KMmv-kDi5ZJZLB-0axIRY9kdKY/edit?usp=sharing"> {"here."}</a>
    <br /> 
    This sample writing was written my senior year first semester. It is a literary review of all the sources I'ved used to influence design decisions of my capstone project. 
    <br /> 
    The lenght is 1.5 pages with 1.5 spacing. The picture below is not the full sample, it is only a photo to make the title page more aesthetic. 
    <br /> 
    <br /> 
    

        <div className ="d-flex flex-row justify-content-center w-100"> 
          <img style={{objectFit: "cover", width:"50%"}} src={Sample1} alt={"Title Page of Sample Writing"} />
        </div>
      </Col>
    </Row>
  </Container>
);

export default Sample_Writing;