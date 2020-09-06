import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectBlock from './ProjectBlock';
import BattleBotImage from './images/BattleBot_image.png';
import SpeakerImage from './images/Speaker.jpeg';
import Shaft from './images/FEA_Shaft.png';
import Airplane_Flow from './images/Plane_flow_simulation.png';
import Regression_Report_Photo from './images/Regression_Report.png';
import ANOVA_Report_Photo from './images/ANOVA_Report.png';

const Home = () => (
  <Container>
    <Row>
      <Col>
        <ProjectBlock imageSource={BattleBotImage} title="Battle Bot Competition" description="Fight to the death." />
        <ProjectBlock imageSource={SpeakerImage} title="Speaker Circuitry" description="For my mechanical engineering class, I did FEM for a shaft." />
        <ProjectBlock imageSource={ANOVA_Report_Photo} height={null} title="ANOVA report on rat diet" description= "Analysis on how certain protein diets affected a rat's weight" />
        

      
      </Col>
      <Col>
      
        <ProjectBlock imageSource={Shaft} title="Finite Element for Gear Shaft" description = "In my mechanical design systems class, I conducted finite element analysis on a twin shaft." />
        <ProjectBlock imageSource={Airplane_Flow} height={null} title="Design Build Fly" description = "Flow Simulation of Airplane." />
        <ProjectBlock imageSource={Regression_Report_Photo} height={null} title="Regression Report on Crime City Data" description = "Variables that correlate to high crime rates analysis"/> 
        
      </Col>
    </Row>
  </Container>
);

export default Home;
