import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import Screw_Jack from '../images/Screw_Jack.png';
import ScrewJack1 from '../images/ScrewJack.png';
import SJ_Top from '../images/SJ_Top.png';
import SJ_Top_manu from '../images/SJ_Top_manu.png'; 
import SJ_Top_9 from '../images/SJ_Top_9.png'; 
import SJ_Top_11 from '../images/SJ_Top_11.png'; 
import SJ_Top_10 from '../images/SJ_Top_10.png'; 
import SJ_Base1 from '../images/SJ_Base1.png'; 
import SJ_Base4 from '../images/SJ_Base4.png'; 
import SJ_Base7 from '../images/SJ_Base7.png'; 
import SJ_Base9 from '../images/SJ_Base9.png'; 
import SJ_Base10 from '../images/SJ_Base10.png'; 
import SJ_Turning1 from '../images/SJ_Turning1.png'; 
import SJ_Threaded1 from '../images/SJ_Threaded1.png'; 
import SJ_Thread1 from '../images/SJ_Thread1.png'; 
import SJ_Thread3 from '../images/SJ_Thread3.png'; 
import SJ_Thread4 from '../images/SJ_Thread4.png'; 
import SJ_Thread5 from '../images/SJ_Thread5.png'; 
import SJ_Thread6 from '../images/SJ_Thread6.png'; 



const ScrewJack = () => (


  <Container>
    <Row>
      <Col>
<h1>Screw Jack Manufacturing Project </h1>
            In my manufacturing course, I designed and built a screw jack project using SolidWorks and the GWU machine shop. Due to the virtual nature of the semester, the physical manufacturing was done by GW faculty where they followed the processing plans that I developed. 
        
  <h2> Overall Design </h2> 
            <div className="w-100 d-flex flex-row justify-content-center">
                <img className="rounded-top" style={{ objectFit: "cover", width: "60%"}} src={ScrewJack1} alt= "Picture of Screw Jack" />
            </div>
            <div> There is a total of four parts in this screw jack, the top, base, the turning rod, and the threaded rod. Each individual part has its own processing plan and CAD piece. The photo above is after all the parts are assembled.</div>
        
  <h2>Top Piece</h2>
        
            <div className="w-100 d-flex flex-row justify-content-center">
                <img className="rounded-top" style={{ objectFit: "cover", width: "80%"}} src={SJ_Top} alt= "Picture of Top Piece" />
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
        <ul>8. Use CNC lathe to create the curved outer face as seen in the drawings. Use the cycle feature with parameters of feed rate of 0.010 in/rev, depth of cut of .2in/rev, cutting speed of 850 ft/min and speed of 300 rpm. </ul>
            <div className="w-100 d-flex flex-row justify-content-center">
                <img className="rounded-top" style={{ objectFit: "cover", width: "20%"}} src={SJ_Top_11} alt= "Manufacturing Process 8" />
            </div>
        <ul>8. Place the 1" top in the lathe with the grove facing inside of the chuck. </ul>
        <ul>9. On the face without the groove, drill a 3/8" hole in the face with a depth of 5/8".</ul>
            <div className="w-100 d-flex flex-row justify-content-center">
                <img className="rounded-top" style={{ objectFit: "cover", width: "20%"}} src={SJ_Top_9} alt= "Manufacturing Process 9" />
            </div>

        <ul>10. Use a reaming bit to increase the diameter of the hole to ensure a slipfit with the treaded rod. </ul> 
            <div className="w-100 d-flex flex-row justify-content-center">
                <img className="rounded-top" style={{ objectFit: "cover", width: "20%"}} src={SJ_Top_10} alt= "Manufacturing Process 10" />
            </div>
        <ul>11. Deburr to remove the sharp edges. </ul>
  <h2>Base</h2>

  <br />
  <br />
            <div className="w-100 d-flex flex-row justify-content-center">
                <img className="rounded-top" style={{ objectFit: "cover", width: "80%"}} src={SJ_Base1} alt= "Base" />
            </div>
        <ul>1. Start with 2.5" diameter aluminum cylindrical stock. </ul>
        <ul>2. Band Saw to lenght of 3 1/8th inches.</ul>
        <ul>3. Lathe and face off to 3 inch lenght. </ul>
        <ul>4. Drill a through hole using a 17/32 drill size in the middle.</ul>
            <div className="w-100 d-flex flex-row justify-content-center">
                <img className="rounded-top" style={{ objectFit: "cover", width: "20%"}} src={SJ_Base4} alt= "Base" />
            </div>
        <ul>5. Tap to create threads with thread size of 5/8-11.</ul>
        <ul>6. Bore a 1 inch diameter relief at the base .25 inches deep. </ul>
        <ul>7. Use a lathe to create countersinks at the end of each threaded section.  </ul>
            <div className="w-100 d-flex flex-row justify-content-center">
                <img className="rounded-top" style={{ objectFit: "cover", width: "20%"}} src={SJ_Base7} alt= "Base" />
            </div>

        <ul>8. Turn the pierce in a CNC Lathe to create shape at 400 RPM. </ul>
        <ul>9. Use "cycle" mode on the CNC and input the data.  </ul>
            <div className="w-100 d-flex flex-row justify-content-center">
                <img className="rounded-top" style={{ objectFit: "cover", width: "20%"}} src={SJ_Base9} alt= "Base" />
            </div>

        <ul>10. Create groove using shop made radius to form cutter. </ul>
            <div className="w-100 d-flex flex-row justify-content-center">
                <img className="rounded-top" style={{ objectFit: "cover", width: "20%"}} src={SJ_Base10} alt= "Base" />
            </div>

        <ul>11. Manually file t oround the top of the base.</ul>
        <ul>12. Finish pass at 450 RPM. </ul>
  <h2>Threaded Rod</h2>

  <br />
  <br />
            <div className="w-100 d-flex flex-row justify-content-center">
                <img className="rounded-top" style={{ objectFit: "cover", width: "80%"}} src={SJ_Threaded1} alt= "Base" />
            </div>
        <ul>1. Vertical band saw to Shorten (5”)</ul>
            <div className="w-100 d-flex flex-row justify-content-center">
                <img className="rounded-top" style={{ objectFit: "cover", width: "20%"}} src={SJ_Thread1} alt= "Base" />
            </div>
        <ul>2. Lathe to turn the rod to the desired diameter (⅝”), finish both ends (4 ⅜”), and cut 45 degree start chamfer. </ul>
        <ul>3. Drill press center, placed rod on side to drill start hole, then drilled ¼” </ul>
            <div className="w-100 d-flex flex-row justify-content-center">
                <img className="rounded-top" style={{ objectFit: "cover", width: "20%"}} src={SJ_Thread3} alt= "Base" />
            </div>
        <ul>4. Arbor Press hex broach (0.25”) to create hexagonal shape. </ul>
            <div className="w-100 d-flex flex-row justify-content-center">
                <img className="rounded-top" style={{ objectFit: "cover", width: "20%"}} src={SJ_Thread4} alt= "Base" />
            </div>
        <ul>5. CNC Lathe to turn threads (⅝-11” UNC tap). </ul>
            <div className="w-100 d-flex flex-row justify-content-center">
                <img className="rounded-top" style={{ objectFit: "cover", width: "20%"}} src={SJ_Thread5} alt= "Base" />
            </div>
        <ul>6. Lathe to create protrusion at top. </ul>
            <div className="w-100 d-flex flex-row justify-content-center">
                <img className="rounded-top" style={{ objectFit: "cover", width: "20%"}} src={SJ_Thread6} alt= "Base" />
            </div>
        <ul>7. Deburr to remove sharp edges. </ul>
  
  <h2>Turning Rod</h2>
            <div className="w-100 d-flex flex-row justify-content-center">
                <img className="rounded-top" style={{ objectFit: "cover", width: "80%"}} src={SJ_Turning1} alt= "Base" />
            </div>
  <br />
  <br />
        <ul>1. 1/4 inch brass hex rod is purchased. </ul>
        <ul>2. Use bandsaw to cut shorten length to 4 inches. </ul>
        <ul>3. Use a 3/8 inch round cutter to machine both ends, last end should be done when screwjack is assembled.  </ul>
        <ul>4. Ends were drilled with a #29 and tapped with a 8-32 tap. </ul>
        <ul>5. 3/8th inch spheres were purchased center and drilled with a #29 and tapped. </ul>
        There were no photos taken during the manufacturing process of this as it mostly involved purchasing parts. 

<h1> Final Produce </h1>

      <div className="w-100 d-flex flex-row justify-content-center">
          <img className="rounded-top" style={{ objectFit: "cover", width: "70%"}} src={Screw_Jack} alt= "Base" />        
      </div>
  <br />
  <br />
  <br />
  <br />

      </Col>
    </Row>
  </Container>
);

export default ScrewJack;
