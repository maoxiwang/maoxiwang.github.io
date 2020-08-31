import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectBlock from './ProjectBlock';
import BattleBotImage from './images/BattleBot_image.png';
import SpeakerImage from './images/Speaker.jpeg';
import Shaft from './images/FEA_Shaft.png';

const Home = () => (
  <Container>
    <Row>
      <Col>
        <ProjectBlock imageSource={BattleBotImage} title="Battle Bot Competition" description="Fight to the death." />
        <ProjectBlock imageSource={SpeakerImage} title="Speaker Circuitry" description="For my mechanical engineering class, I did FEM for a shaft." />
        <ProjectBlock imageSource={Shaft} title="Finite Element for Gear Shaft" description = "In my mechanical design systems class, I conducted finite element analysis on a twin shaft." />
        <ProjectBlock title="Design Build Fly Project" description="For my circuits class, I built a functioning speaker." />
      </Col>
      <Col>
        <ProjectBlock title="Seas Hackathon" description="For my circuits class, I built a functioning speaker." />
        <ProjectBlock title="Battle Bot Robot Design" description="Destory and Conquer" />
        <ProjectBlock title="" description="For my circuits class, I built a functioning speaker." />
      </Col>
    </Row>
  </Container>
);

export default Home;
