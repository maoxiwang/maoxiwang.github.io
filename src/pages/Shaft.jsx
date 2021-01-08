import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Shaft1 from '../images/Shaft1.png';
import Shaft2 from '../images/Shaft2.png';
import Shaft3 from '../images/Shaft3.png';
import Shaft4 from '../images/Shaft4.png';
import Shaft5 from '../images/Shaft5.png';
import Shaft6 from '../images/Shaft6.png';
const Shaft = () => (
  <Container>
    <Row>
      <Col>
      <h2>Mechanical Design Project: Shaft Design</h2>
      In my mechanical design project, I was tasked to design a twin shaft. The photo below outlines the design and analysis process for the shaft. 
      <div className ="d-flex flex-row justify-content-center w-100"> 
        <img style={{ objectFit: "cover", width:"50%"}} src={Shaft1} alt={"title"} />
        </div>
      There were two variables that I needed to determine in order to satisfy design requirements. The diameter of the small shaft (d) and the diameter of the large shaft (D). This was determined using the graph below and having to find what my Kr and Kt values were. 
      <div className ="d-flex flex-row justify-content-center w-100"> 
        <img style={{ objectFit: "cover", width:"50%"}} src={Shaft2} alt={"title"} />
      </div>
      Upon multiple iterations of D and d, and graphing the analytical solution in a graph. The results are below. 
      <div className ="d-flex flex-row justify-content-center w-100"> 
        <img style={{ objectFit: "cover", width:"50%"}} src={Shaft3} alt={"title"} />
      </div>
      Once the dimensions of the small and large diameter are defined, I conducted finite element analysis in FEMAP. The model was first made in Solid Edge and then imported to FEMAP for finite element analysis.
      <div className ="d-flex flex-row justify-content-center w-100"> 
        <img style={{ objectFit: "cover", width:"60%"}} src={Shaft4} alt={"title"} />
      </div>
      FEA is then conducted and the given results are given below. The mesh settings are defined below as well. The logic behind the mesh setting was to set the mesh as small as possible to provide the most accurate reading. However, due to limited computational power, I had to set mesh parameters realistic and to prevent the computer from crashing. 
      <div className ="d-flex flex-row justify-content-center w-100"> 
        <img style={{ objectFit: "cover", width:"60%"}} src={Shaft5} alt={"title"} />
      </div>
      There are four photos of shear stress in different planes. The largest being in the ZX direction with 85,000 ksi. However, these stress values do not tell us a precise way of determining whether this design satisfies the design requirements. As such, I had to examine the von misses stress. 

      <div className ="d-flex flex-row justify-content-center w-100"> 
        <img style={{ objectFit: "cover", width:"70%"}} src={Shaft6} alt={"title"} />
      </div>


      </Col>
    </Row>
  </Container>
);

export default Shaft;
