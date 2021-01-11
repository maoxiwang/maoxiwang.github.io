import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectBlock from './ProjectBlock'; // Don't use this code for some reason
import BattleBotImage from './images/BattleBot_image.png';
import SpeakerImage from './images/Speaker.jpeg';
import Shaft from './images/FEA_Shaft.png';
import Airplane_Flow from './images/Plane_flow_simulation.png';
import Regression_Report_Photo from './images/Regression_Report.png';
import ANOVA_Report_Photo from './images/ANOVA_Report.png';
import FEMA_Image from './images/FEMA.png';
import Spectrometer_Image from './images/Spectrometry.png';
import DBF_Wing from './images/DBF_Wing.png';
import Screw_Jack from './images/Screw_Jack.png';
const Home = () => (

  <Container>
< br/>
Hi, thanks for stopping by! For the best user experience, I recommend using google chrome! 
    <Row>
      <Col>
        <ProjectBlock imageSource={BattleBotImage} height={null} title="Battle Bot Competition" description="Design and Protoptyping" link="/BattleBots" />
        <ProjectBlock imageSource={SpeakerImage} title="Speaker Circuitry" description="Electrical Engineering and Design" link ="/Speaker"/>
        <ProjectBlock imageSource={FEMA_Image} height={null} title="FEMA Consultation" description= "Systems Engineering." link ="FEMA"/> 
      </Col>

      <Col>
        <ProjectBlock imageSource={DBF_Wing} height={null} title="Capstone Project Design Build Fly" description = "Aerospace Design" link ="/Capstone"/>
        <ProjectBlock imageSource={Airplane_Flow} height={null} title="Design Build Fly" description = "Flow Simulation of Airplane" link ="/DBF"/>
        <ProjectBlock imageSource={ANOVA_Report_Photo} height={null} title="ANOVA Report on Rat Diet" description="ANOVA analysis and model interpretation" link = "/ANOVA"/>
        <ProjectBlock imageSource={Spectrometer_Image} height={null} title="Spectrometer Project" description = "Systems Engineering" link = "/Spectrometer"/>
      
      </Col>
      <Col>
        <ProjectBlock imageSource={Shaft} title="Mechanical Design: Twin Shaft" description = "Mechanical Design and Finite Element Analysis" link = "/Shaft"/>
        <ProjectBlock imageSource={Screw_Jack} title="Manufacturing Project" description = "Designed and Manufactured a Screw Jack" link = "/ScrewJack"/>
        <ProjectBlock imageSource={Regression_Report_Photo} height={null} title="Regression Report on Crime City Data" description = "Variables that correlate to high crime rates analysis" link = "/Regression"/> 
      </Col>
    </Row>
  </Container>
);

export default Home;
