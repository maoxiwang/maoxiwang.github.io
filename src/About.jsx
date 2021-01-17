import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Headshot from './images/pro.jpg';

const About = () => (
  <Container>
    <Row>
      <Col>
        
        <div className="d-flex flex-row p-5">
          <div 
            className="p-2"><img src={Headshot} height="300px" alt="Picture of Me"/>
          </div>
          
          <div className="p-2">
            Email: maoxiwang@gwu.edu<br />
            Personal Email: maoxigeorgewang3@gmail.com<br />
            LinkedIn: <a href="https://www.linkedin.com/in/maoxigeorgewang/"> {"Here"}</a>
          </div>
        
        </div> 
      
        
        
      </Col>
    </Row>
  </Container>
);

export default About;
