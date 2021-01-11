import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Battlebot2 from '../images/Battlebot2.png';
import Battlebot3 from '../images/Battlebot3.png';
import Battlebot4 from '../images/Battlebot4.png';
import Battlebot5 from '../images/Battlebot5.png';
import Battlebot6 from '../images/Battlebot6.png';
import Battlebot7 from '../images/Battlebot7.png';
import Battlebot8 from '../images/Battlebot8.png';
import Battlebot9 from '../images/Battlebot9.png';
import Battlebot10 from '../images/Battlebot10.png';


const BattleBots = () => (
  <Container>
    <Row>
      <Col>
        <h1>Battle Bot Design Class</h1>
        In a team of four other students, we designed a Battle Bot with the intention of competing against other teams. However, due to the semester being cut short, we were unable to build our design. The project improved my cadding ability and strengthened my designing ability. The full critical design review is located <a href="https://docs.google.com/presentation/d/1MmfoCpOykdv9uTQPRQjzalEkJGUiM0l5NCjsGhjkdRE/edit?usp=sharing"> {"here."}</a>
        
        <h2>Design Thinking </h2>
        We believed that to improve our chances of surviving, we wanted a battle bot that was designed specifcally for skirmishes and capable of dealing consistant damage over time. As such, our design focused mainly on maneuverability, speed, small size, durability, and weapons that dealt consistant damage.The primary weapon was the drum that would be consistently spinning throughout operation. The secondary weapons in the back were two circular saws that spun in the same direction to deflect enemies from sneaking behind. Our biggest risk of this design was the fear of getting flipped over. Our solution was to allow for clearance at both the top and bottom of the body. As such, this was what our initial model was like. 
        <div className ="d-flex flex-row justify-content-center w-100"> 
          <img style={{objectFit: "cover", width:"90%"}} src={Battlebot2} alt={"title"} />
        </div>
        
        <div className ="d-flex flex-row justify-content-center w-100"> 
          <img style={{objectFit: "cover", width:"90%"}} src={Battlebot3} alt={"title"} />
        </div>

        <h2>Preliminary Design Phase </h2>
        The preliminary design phase included more details in where the placement of the weapons and how they will be operating. Additionally, it contains the position of where the motors will be located. 
        
        
        <div className ="d-flex flex-row justify-content-center w-100"> 
          <img style={{objectFit: "cover", width:"90%"}} src={Battlebot4} alt={"title"} />
        </div>
        The internal structure of the cad is shown below.
        <div className ="d-flex flex-row justify-content-center w-100"> 
          <img style={{objectFit: "cover", width:"90%"}} src={Battlebot5} alt={"title"} />
        </div>
        <div className ="d-flex flex-row justify-content-center w-100"> 
          <img style={{objectFit: "cover", width:"80%"}} src={Battlebot6} alt={"title"} />
        </div>

        <h3>Critical Design Review</h3>
        <ul>The critical design review contains more details such as the mounts of the motor and the attachment mechanics for the drum. </ul>
        Isometric View
        <div className ="d-flex flex-row justify-content-center w-100"> 
          <img style={{objectFit: "cover", width: "80%"}} src={Battlebot7} alt={"title"} />
        </div>
        Internal Isometric View
        <div className ="d-flex flex-row justify-content-center w-100"> 
          <img style={{objectFit: "cover", width: "80%"}} src={Battlebot8} alt={"title"} />
        </div>
        Expanded Isometric View
        <div className ="d-flex flex-row justify-content-center w-100"> 
          <img style={{objectFit: "cover", width: "80%"}} src={Battlebot9} alt={"title"} />
        </div>

        CDR Model Drawing
        <div className ="d-flex flex-row justify-content-center w-100"> 
          <img style={{objectFit: "cover", width: "80%"}} src={Battlebot10} alt={"title"} />
        </div>

        Although we were not able to build the physical model, I learned a great deal in how to approach the design process and prototyping. 
      </Col>
    </Row>
  </Container>
);

export default BattleBots;
