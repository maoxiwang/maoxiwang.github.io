import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Spectrometer1 from '../images/Spectrometer1.png';
import Spectrometer2 from '../images/Spectrometer2.png';
import Spectrometer3 from '../images/Spectrometer3.png';


const Spectrometer = () => (
  <Container>
    <Row>
      <Col>
      <h1> Spectrometry Project </h1>
      The goal of this project was to experience what first hand systems engineering entailed. The class size was around 20 students and was evenly split into five teams. I was on the integration team which focuses on building the mechanical hardware and syncing each subcomponent together. 

<br /> 
        My primary job was to CAD and 3D print the mounts holding the mechanical hardware to facilitate the integration and syncing process. The project was designed to be collaborative and thus it involved a lot of cross communication with each team. 

<br />
<br /> The final deliverable of the project can be found <a href="https://docs.google.com/presentation/d/1owGj--hm4fwZXIJ2XrjuZC4ZzKAE1XiqaT6f2VsT8Os/edit?usp=sharing"> {"here."} </a>
<br />
<br /> 
Below displays the set up of the prototype and it in-action.

<h3>Set up:</h3>
The box holding the lens is CADED and 3D printed by myself. 
<div className ="d-flex flex-row justify-content-center w-100"> 
          <img style={{objectFit: "cover", width:"90%"}} src={Spectrometer1} alt={"Spectrometer"} />
</div>

<br />
<br />
<h3>Prototype in Action </h3>
<div className ="d-flex flex-row justify-content-center w-100"> 
  <img style={{objectFit: "cover", width:"90%"}} src={Spectrometer2} alt={"Spectrometer"} />
</div>

<br /> 
<br /> 
        After setting up the prototype, my team had to measure the technical performance of the project and to assess whether or not it was within standards. 
<div className ="d-flex flex-row justify-content-center w-100"> 
  <img style={{objectFit: "cover", width:"90%"}} src={Spectrometer3} alt={"Technical Performance Measurement"} />
</div>
      </Col>
    </Row>
  </Container>
);

export default Spectrometer;  
