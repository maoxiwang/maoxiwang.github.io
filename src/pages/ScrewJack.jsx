import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import Screw_Jack from '../images/Screw_Jack.png';
import ScrewJack1 from '../images/ScrewJack.png';
import SJ_Top from '../images/SJ_Top.png';
import SJ_Top_d from'../images/SJ_Top_d.png';
import SJ_Top_manu from '../images/SJ_Top_manu.png'; 
import SJ_Top_9 from '../images/SJ_Top_9.png'; 


const ScrewJack = () => (


  <Container>
    <Row>
      <Col>
        <h1>Screw Jack Manufacturing Project </h1>
            In my manufacturing course, I designed and built a screw jack project using SolidWorks and the GWU machine shop. Due to the virtual nature of the semester, the physical manufacturing was done by GW faculty where they followed the processing plans that I developed. 
        
        <h2> Overall Design </h2> 
            <div className="w-100 d-flex flex-row justify-content-center">
                <img className="rounded-top" style={{ objectFit: "cover", width: "40%"}} src={ScrewJack1} alt= "Picture of Screw Jack" />
            
            </div>
            <div> There is a total of four parts in this screw jack, the top, base, the turning rod, and the threaded rod. Each individual part has its own processing plan and CAD piece. The photo above is after all the parts are assembled.</div>
        
        <h2>Top Piece</h2>
        
            <div className="w-100 d-flex flex-row justify-content-center">
                <img className="rounded-top" style={{ objectFit: "cover", width: "20%"}} src={SJ_Top} alt= "Picture of Top Piece" />
            </div>
        <h3>Top Piece Processing Plan</h3>
        <div> Aluminum was considered at first but aluminum to aluminum friction could create "Gall" and cause parts to stick together. To prevent this, brass was used.</div>
        <ul>1. Band saw: shorten cylindrical stock to 4” </ul>
        <ul>2. Turn the work piece at least 1 ½” of the rod down to 1” in diameter using a feed rate of .01 in/rev, a depth of cut 0.2 in/rev, cutting speed of 850 ft/min, and a speed of 300 rpm. 
        </ul> 
        <ul>3. Face the smaller diameter end of the rod to provide a clean finish.  </ul>
        <ul>4. Vice clamp the rod at 45 degrees on the vertical mill with the end facing upwards. Use a magnetic level to ensure 45 degrees. </ul>
        <ul>5. Mill out the triangular groove in the top by moving the mill along the 1" diameter face with cutting parameters of a feed rate of .005 in/tooth, surface speed of 1000 ft/min and speed of 1000 rpm.  </ul>
            <div className="w-100 d-flex flex-row justify-content-center">
                <img className="rounded-top" style={{ objectFit: "cover", width: "20%"}} src={SJ_Top_manu} alt= "Picture of Manufactured Top Piece" />
            </div>

        <ul>6. Place the rod back on the lathe with the grooved faced facing outwards. </ul>
        <ul>7. Use lathe to cut the work piece to a lenght of 1".</ul>
        <ul>8. Place the 1" top in the lathe with the grove facing inside of the chuck. </ul>
        <ul>9. On the face without the groove, drill a 3/8" hole in the face with a depth of 5/8".</ul>
            <div className="w-100 d-flex flex-row justify-content-center">
                <img className="rounded-top" style={{ objectFit: "cover", width: "20%"}} src={SJ_Top_9} alt= "Manufacturing Process 9" />
            </div>

        <ul>10. Use a reaming bit to increase the diameter of the hole to ensure a slipfit with the treaded rod. </ul> 
        <ul>11. Use CNC lathe to create the curved outer face as seen in the drawings. Use the cycle feature with parameters of feed rate of 0.010 in/rev, depth of cut of .2in/rev, cutting speed of 850 ft/min and speed of 300 rpm. </ul>
        <ul>12. Deburr to remove the sharp edges. </ul>
        


      </Col>
    </Row>
  </Container>
);

export default ScrewJack;