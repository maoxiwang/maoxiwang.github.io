import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Headshot from './images/pro.jpg';

const About = () => (
  <Container>
    <Row>
      <Col>
        <h1>Contact </h1>
        <div className="d-flex flex-row p-5">
          <div 
            className="p-2"><img src={Headshot} height="300px" alt="Picture of Me"/>
          </div>
          
          <div className="p-2">
            Email: maoxiwang@gwu.edu<br />
            Personal Email: maoxigeorgewang3@gmail.com<br />
            LinkedIn: <a href="https://www.linkedin.com/in/maoxigeorgewang/"> {"Here"}</a>

            <br /> 

            <br />
            
            If contacting via email, please title email as "Website: 'Purpose'"
          </div>
        
        </div> 
      
        
        
      </Col>
    </Row>
  </Container>
);

export default About;
