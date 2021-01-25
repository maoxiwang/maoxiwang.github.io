import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FEMA1 from '../images/FEMA1.png';
import FEMA2 from '../images/FEMA2.png';
import FEMA3 from '../images/FEMA3.png';
import FEMA4 from '../images/FEMA4.png';
import FEMA5 from '../images/FEMA5.png';
import FEMA6 from '../images/FEMA6.png';


const FEMA = () => (
  <Container>
    <Row>
      <Col>
      <h1>FEMA Consulting: Project Management </h1> 
        In my project management course, my team which consist of three other individuals were hired to do consulting for FEMA. We were tasked with recommending a set of prioritization rules/policies to enable the CRCs to meet their objectives, and justify our recommendations. The full report can be found <a href="https://drive.google.com/file/d/1byz0BN3YvFHsEM6Xw5YIl1vCNWRJAYdW/view?usp=sharing" > {"here."}</a>

      <h2>Goals and Constraints:</h2>
      <li>Make progress toward recovery quickly </li>
      <li>Ensure smaller disasters don't get lost in larger disasters </li>
      <li>Meet processing time goals, less than 30 days </li>
      <li>Reduce preception of CRC as a "black box"</li>

      <h2>Approach</h2>
      <li>
        My team wanted to understand what were the reasons that resulted in FEMA's inefficiency. As such, we conducted data analysis on their collected data to get a better understanding of their current model. 
      </li>
      
      <li>
        Secondly, from the data anlaysis gathered, we would simulate the current CRC system as a control model and develop different models with different sets of prioritization rules implemented.
      </li>
      
      <li>Thirdly, we would develop metrics to compare outcomes from different prioritization rules of each and develop a quantitative assessment. 
      </li>
      <li>
        Lastly, communicate our findings and recommendations. 
      </li>

      The main software package used for data analysis was Minitab and Excel. The simulation model were made with Excel macros. 
      <h2>Project Generation Data</h2>
      
      <div className ="d-flex flex-row justify-content-center w-100"> 
        <img style={{objectFit: "cover", width:"90%"}} src={FEMA1} alt={"title"} />
      </div>

      <div className ="d-flex flex-row justify-content-center w-100"> 
        <img style={{objectFit: "cover", width:"90%"}} src={FEMA2} alt={"title"} />
      </div>
      This data above is used when generating the frequency of each type of project's arrival for schemas 2 and 3. Each schema will be explained later. 
      <h4>Prioritization Scheme 1 </h4>
      <div className ="d-flex flex-row justify-content-center w-100"> 
        <img style={{objectFit: "cover", width:"90%"}} src={FEMA3} alt={"title"} />
      </div>
      
      <h4>Prioritization Scheme 2 </h4>
      <div className ="d-flex flex-row justify-content-center w-100"> 
        <img style={{objectFit: "cover", width:"90%"}} src={FEMA4} alt={"title"} />
      </div>

      <h4>Prioritization Scheme 3 </h4>
      <div className ="d-flex flex-row justify-content-center w-100"> 
        <img style={{objectFit: "cover", width:"90%"}} src={FEMA5} alt={"title"} />
      </div>
      
      <h4>Results </h4>
      <div className ="d-flex flex-row justify-content-center w-100"> 
        <img style={{objectFit: "cover", width:"90%"}} src={FEMA6} alt={"title"} />
      </div>
      </Col>
    </Row>
  </Container>
);

export default FEMA;
