import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Capstone1 from '../images/Capstone1.png'
import Capstone2 from '../images/Capstone2.png'
import Capstone3 from '../images/Capstone3.png'
import Capstone4 from '../images/Capstone4.png'
import Capstone5 from '../images/Capstone5.png'
import Capstone6 from '../images/Capstone6.png'
import Capstone7 from '../images/Capstone7.png'
import Capstone8 from '../images/Capstone8.png'
import Capstone9 from '../images/Capstone9.png'
import Capstone10 from '../images/Capstone10.png'
import Capstone11 from '../images/Capstone11.png'
import Capstone12 from '../images/Capstone12.png'
import Capstone13 from '../images/Capstone13.png'
import Capstone14 from '../images/Capstone14.png'
import Capstone15 from '../images/Capstone15.png'

const Capstone = () => (
  <Container>
    <Row>
      <Col>

  <h1> Capstone Project </h1>
    My capstone project involves designing a set of wings for the 2021 DBF aircraft.
  <h2>Concept Design Phase</h2>
  Concept design was mainly centered around on defining the parameters that the DBF aircraft needed to ensure aerodynamics. The project scope, wing functional requriements, functional decomposition, and airfoil generation was defined in this phase. The presentation can be accessed <a href = "hhttps://drive.google.com/file/d/1BJ-wz_hK_yHMIFSS5lKMrRiJvKYn2QD2/view?usp=sharing"> {"here."} </a> 

  <br /> 
  Below are the airfoil selections that were selected for further consideration. 
  <br />
      <div className ="d-flex flex-row justify-content-center w-100"> 
          <img style={{objectFit: "cover", width:"110%"}} src={Capstone2} alt={"Airfoil Concept"} />
      </div>
  These airfoil selections were advanced into further CFD analysis. 

  <br /> 
  <br /> 
      <div className ="d-flex flex-row justify-content-center w-100"> 
          <img style={{objectFit: "cover", width:"80%"}} src={Capstone3} alt={"GOE 288"} />
      </div>
  <br /> 
      <div className ="d-flex flex-row justify-content-center w-100"> 
          <img style={{objectFit: "cover", width:"80%"}} src={Capstone4} alt={"Clark"} />
      </div>
  <br /> 
      <div className ="d-flex flex-row justify-content-center w-100"> 
          <img style={{objectFit: "cover", width:"80%"}} src={Capstone5} alt={"Airfoil Wortmann"} />
      </div>
  <br /> 

  To move forward witht the design process, a system architecture was outlined to account for most aspects of the design. 

      <div className ="d-flex flex-row justify-content-center w-100"> 
          <img style={{objectFit: "cover", width:"120%"}} src={Capstone6} alt={"System Arch"} />
      </div>

  <br /> 
  <br /> 
  After further consideration, it was decided that the GOE 288 airfoil would be most suitable for the DBF 2021 aircraft. This was due to a few reasons, ease of manufacturing, strong structural integrity at the trailing edge, and proper aerodynamics parameters. 
  <br /> 
  <br /> 
  The aerodynamics data with respect velocity and angle of attack is pasted below. 
  
      <div className ="d-flex flex-row justify-content-center w-100"> 
          <img style={{objectFit: "cover", width:"80%"}} src={Capstone7} alt={"Lift vs Speed Curve"} />
      </div>
      <br /> 
      <div className ="d-flex flex-row justify-content-center w-100"> 
          <img style={{objectFit: "cover", width:"80%"}} src={Capstone8} alt={"Drag vs Speed Curve"} />
      </div>
  <br />
  From CFD analysis, it was decided that the wing design would be a span of 5 feet with a chord length of 12 inches. A basic design was developed and pasted below. 

      <div className ="d-flex flex-row justify-content-center w-100"> 
          <img style={{objectFit: "cover", width:"80%"}} src={Capstone9} alt={"First Internal Wing CAD"} />
      </div>

  The wing design was split into 4 subsystems: aerostructures, aerodynamics, integration, and electromechanical controls. Each subsystem was further analyzed through BOE analysis. The BOE analysis can be found <a href = "https://drive.google.com/file/d/1GgdykX7I_-h6XoOxIs1sQ6Q7a6hsimSt/view?usp=sharing">"{"here."}</a>

  <br /> 
  <br /> 
  
The CAD model was further updated with with the fuselage mounts of the aircraft and is pasted below. 
    <div className ="d-flex flex-row justify-content-center w-100"> 
          <img style={{objectFit: "cover", width:"80%"}} src={Capstone10} alt={"Mounts added First Internal Wing CAD"} />
    </div>
A second iteration of the design was conducted. The main improvements that went into this next iteration was to reduce the weight of the wing while not reducing the structural integrity of the wing. Thus, the amount of ribs were reduced and the ribs were cut to reduce weight. The rib cutouts were validated through FEA in SolidWorks.
    <div className ="d-flex flex-row justify-content-center w-100"> 
          <img style={{objectFit: "cover", width:"80%"}} src={Capstone11} alt={"2nd iteration"} />
    </div>
A few more minor iterations were made to finalize the aircraft wing design. Differet views of the results are pasted below. 
    <div className ="d-flex flex-row justify-content-center w-100"> 
          <img style={{objectFit: "cover", width:"80%"}} src={Capstone12} alt={"2nd it. updates"} />
    </div>
    <div className ="d-flex flex-row justify-content-center w-100"> 
          <img style={{objectFit: "cover", width:"80%"}} src={Capstone13} alt={"2nd it. updates"} />
    </div>
The rib cutouts were determined validated through FEA in Solidworks. Below are few initial designs that eventually evolved to the design we currently have. The first photo below is of FEA without any cut outs, and the second is of the initial design cut outs. 
    <div className ="d-flex flex-row justify-content-center w-100"> 
          <img style={{objectFit: "cover", width:"80%"}} src={Capstone15} alt={"Rib FEA no cutouts"} />
    </div>

    <div className ="d-flex flex-row justify-content-center w-100"> 
          <img style={{objectFit: "cover", width:"80%"}} src={Capstone14} alt={"Rib FEA initial cutouts"} />
    </div>

  
      </Col>
    </Row>
  </Container>
);

export default Capstone;
