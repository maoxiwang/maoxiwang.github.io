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
        Hi! Im George, a current senior studying mechanical engineering. Some of my hobbies include sking, playing tennis and playing baseketball. 
      
        
        
      </Col>
    </Row>
  </Container>
);

export default About;