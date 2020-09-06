import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const LeftRight = ({ children }) => <div className="d-flex flex-row justify-content-between">{children}</div>

const BoldColon = ({ children, bold }) => <div><span className="font-weight-bold">{bold}:</span> {children}</div>

const Home = () => (
  <Container>
    <Row>
      <Col>
        <h1>Resume</h1>
        <h2>Education</h2>∏
        <LeftRight>
          <div className="font-weight-bold">Senior | The George Washington University | Washington, DC</div>
          <div className="font-italic">Expected May 2021</div>
        </LeftRight>
        <div className="font-italic">Bachelor of Science candidate in Mechanical Engineering (BSME) and Minor in Systems/Industrial Engineering</div>
        <BoldColon bold="Honors"> 2019-2020 Dean’s List, 2018 Summer Undergraduate Program in Engineering Research Fellowship (S.U.P.E.R)</BoldColon>
        <BoldColon bold="Relevant Courses">Project Management, Data Analysis for Engineers & Scientists, Requirements Analysis and Elicitation</BoldColon>
        <h2>Skills</h2>
        <BoldColon bold="Software Packages">AutoCAD, Solid Edge, SolidWorks (Proficient), NI Multisim, FEMAP</BoldColon>
        <BoldColon bold="Programming & Data">Python, MATLAB, Minitab, Excel</BoldColon>
        <BoldColon bold="Languages">English, Mandarin (Proficient) </BoldColon>
        <h2>Technical Experience</h2>
        <LeftRight>
          <div className="font-weight-bold">Processing Engineering Intern | Lam Research | Portland, OR</div>
          <div className="font-italic">Deferred to 2021 Summer</div>
        </LeftRight>
        <ul>
          <li>Due to COVID 19, this internship position was deferred to summer 2021.</li>
        </ul>
        <LeftRight>
          <div className="font-weight-bold">Aerodynamics Team Lead | Design Build Fly | Washington, DC</div>
          <div className="font-italic">January 2020 – Present</div>
        </LeftRight>
        <ul>
          <li>Designed and built radio controlled commercial aircraft capable of carrying a ten-pound passenger load.</li>
          <li>Conducted flow simulation by using Solid Works to understand airplane pressure distribution.</li>
        </ul>

        <LeftRight>
          <div className="font-weight-bold">Team Lead | GWU SEAS Hackathon | Washington, DC</div>
          <div className="font-italic"> February 24, 2019</div>
        </LeftRight>
        <ul>
          <li>Led a team of four and protoyped Cloud Eater, a mesh system that condenses air water molecules to liquid water using the peltier effect.</li>
          <li>Placed 4th out of 30 teams in the competition </li>
        </ul>

        <LeftRight>
          <div className="font-weight-bold"> Undergraduate Research Fellow | Fluids Dynamics Lab | Washington, DC</div>
          <div className="font-italic">May 2018 - September 2018</div>
        </LeftRight>
        <ul>
          <li>Calibrated Pollson cells by finding the diffusivity coefficient of surcrose in calculating the diffusivity of polyvinyl alcohol (PVA)</li>
          <li>Examined the effect of water absorption rates of PVA and calculated Young's Modulus through MATLLAB and Excel to characterize size distribution bandwidth of different concentrations of polyvinyl alcohol and distillled water.</li>
        </ul>
        
        
        
        
          <LeftRight>
          <div className="font-weight-bold"> Team Member | GW BAJA SAE | Washington, DC</div>
          <div className="font-italic">August 2017 - May 2018</div>
        </LeftRight>
        <ul> 
          <li>Placed 26th in the suspension event at the BAJA SAE Maryland Competition.</li>
          <li>Assembled and digitally designed automotive parts using AutoCAD and SolidWorks for the gearbox cover, spllash shield, and frame of the competition automobiles.</li>
          <li>Built splash shild, and frame through manufacturing processes such as laser cutter, mill and weld.</li>
          <li>Pitched to investors and was responsible for the business aspect of the competition.</li>
        </ul>

        <h2>Leadership and Involvement</h2>
        <LeftRight>
          <div className="font-weight-bold">SEASSPAN Mentor | SEAS George Washington University | Washington, DC </div>
          <div className="font-italic">September 2019 - Present </div>
        </LeftRight>
        <ul>
          <li>A dean's mentorship program dedicated to assist incoming freshmen by taking them on the New Student Getaway (NSG), a three-day preorientation camping retreat.</li>
          <li>Organized events with the Dean's office, and assisted freshmen throughout the year.</li>
          <li>During the 2020 Covid season, SEASSPAN transitioned to a virtual online preorientation system to assist incoming freshmen.</li>
          </ul>

        <h2>Design Projects</h2>
        <LeftRight>
          <div className="font-weight-bold">Speaker Circuit Design Project | Electrical Engineering | Washington, DC </div>
          <div className="font-italic">January 2019 - May 2019 </div>
        </LeftRight>
        <ul>
          <li>Designed treble and bass speaker with cutoff frequencies of 150 Hz to 4800 Hz and used Multisim to analyze the design. Designed bandpass filters to obtain accurate frequency ranges by chaining 741 Op Amps. </li>
          <li>Built speaker by soldering, using the breadboard, and wiring. </li>
          </ul>
        
        <LeftRight>
          <div className="font-weight-bold">Shaft Machine Design Project | Mechanical Engineering | Washington, DC </div>
          <div className="font-italic">October 2019 - December 2019 </div>
        </LeftRight>

        <ul>
          <li>Built an E60 steel stepped shafted designed to withstand an alternating torque load of 4500 -7500 lb-in and a safety factor of 1.5. </li>
          <li>Conducted finite element analysis on the model using Solid Edge, and FEMAP to visualize stress distribution.</li>
          </ul>

    



      </Col>
    </Row>
  </Container>
);

export default Home;
