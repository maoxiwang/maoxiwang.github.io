import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectBlock from './ProjectBlock';
import Headshot from './images/pro.jpg';

const About = () => (
  <Container>
    <Row>
      <Col>
        <img src={Headshot} height="300px" alt="Picture of Me"/>
      
      </Col>
      <Col>
        Hi! Im George, a senior studying mechanical engineering and minoring in systems engineering. Im from Portland, OR 
      
        
        
      </Col>
    </Row>
  </Container>
);

export default About;
