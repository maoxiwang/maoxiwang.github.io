import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectBlock from './ProjectBlock';
import BattleBotImage from './images/BattleBot_image.png';
import SpeakerImage from './images/Speaker.jpeg';
import Shaft from './images/FEA_Shaft.png';
import Airplane_Flow from './images/Plane_flow_simulation.png';
import Regression_Report_Photo from './images/Regression_Report.png';
import ANOVA_Report_Photo from './images/ANOVA_Report.png';
import FEMA_Image from './images/FEMA.png';
import Spectrometer_Image from './images/Spectrometry.png';

const Home = () => (
  <Container>
    <Row>
      <Col>
        <ProjectBlock imageSource={BattleBotImage} height={null} title="Battle Bot Competition" description="Design and Protoptyping" />
        <ProjectBlock imageSource={SpeakerImage} title="Speaker Circuitry" description="Electrical Engineering and Design" />
        <ProjectBlock imageSource={ANOVA_Report_Photo} height={null} title="ANOVA report on rat diet" description="ANOVA analysis and model interpretation" />
        <ProjectBlock imageSource={FEMA_Image} height={null} title="FEMA Consultation" description= "Systems Engineering." /> 

      
      </Col>
      <Col>
      
        <ProjectBlock imageSource={Shaft} title="Finite Element for Gear Shaft" description = "In my mechanical design systems class, I conducted finite element analysis on a twin shaft." />
        <ProjectBlock imageSource={Airplane_Flow} height={null} title="Design Build Fly" description = "Flow Simulation of Airplane." />
        <ProjectBlock imageSource={Regression_Report_Photo} height={null} title="Regression Report on Crime City Data" description = "Variables that correlate to high crime rates analysis"/> 
        <ProjectBlock imageSource={Spectrometer_Image} height={null} title="Spectrometer Project" description = "Designing and Building a Spectrometer for my class"/>

        
      </Col>
    </Row>
  </Container>
);

export default Home;
