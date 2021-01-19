import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Speaker1 from '../images/Speaker1.png';
import Speaker2 from '../images/Speaker2.png';
import Speaker3 from '../images/Speaker3.png';
import Speaker4 from '../images/Speaker4.png';
import Speaker5 from '../images/Speaker5.png';
import Speaker6 from '../images/Speaker6.png';
import Speaker7 from '../images/Speaker7.png';
import Speaker8 from '../images/Speaker8.png';
import Speaker9 from '../images/Speaker9.png';

const Speaker = () => (

  <Container>
    <Row>
      <Col>
        <h1>Speaker Project</h1> 
        In my circuit theory class, I was tasked with designing a treble and bass speaker circuitry with the following required frequency specifications: bass 150-4800 Hz and treble 3850-10,000 Hz. Along with specific frequency ranges, it required additional features such as a LED voltage indicator, a voltage control metter, and a 10-20 times amplification. The full project report can be found <a href="https://docs.google.com/document/d/1lIMEJsO-nYbNClUHa0lPTZmwZ9UpUC2bwKsLqNGP60M/edit?usp=sharing"> {"Here"}</a>.
        <h2> System Architect </h2>
        The basic system architect is centered around chaining a high pass and low pass fitler together to filter out the undesirable frequencies. Once the frequencies have been filtered, it is connected through an amplifier and lastly to the LED voltage indicator. Below is a photo of the system architect. 
        <div className ="d-flex flex-row justify-content-center w-100"> 
          <img style={{objectFit: "cover", width:"50%"}} src={Speaker1} alt={"System Architect"} />
        </div>

        <h2>Design Schematics for Treble and Bass Circuits</h2>
        In order to satisfy frequencies requirements, I had to solve for the resistor and capacitor values using the equation omega = 1/(R*C). The calculations and design are displayed below.

        <div className ="d-flex flex-row justify-content-center w-100"> 
          <img style={{objectFit: "cover", width:"100%"}} src={Speaker2} alt={"Hand Calculations"} />
        </div>
        The digital schematics of treble and bass circuits are outlined below.
        <div className ="d-flex flex-row justify-content-center w-100"> 
          <img style={{objectFit: "cover", width:"90%"}} src={Speaker3} alt={"Digital Circuit Concept"} />
        </div>
        To satisfy the 10-20 gain, an amplifier was added at the end of the circuit. By using an input resisor that is ten folds smaller than the final resistor, the sound will be amplified by a factor of 10. This was repeated for both circuits. 

        <div className ="d-flex flex-row justify-content-center w-100"> 
          <img style={{objectFit: "cover", width:"90%"}} src={Speaker4} alt={"NI Multisim Treble Circuit Sim."} />
        </div>
        
        <div className ="d-flex flex-row justify-content-center w-100"> 
          <img style={{objectFit: "cover", width:"90%"}} src={Speaker5} alt={"Treble Circuit Sim. Results"} />
        </div>

        

        <h2>Bass Circuitry Simulation</h2>

        <div className ="d-flex flex-row justify-content-center w-100"> 
          <img style={{objectFit: "cover", width:"80%"}} src={Speaker6} alt={"NI multisim Bass Circuit Sim."} />
        </div>

        <div className ="d-flex flex-row justify-content-center w-100"> 
          <img style={{objectFit: "cover", width:"80%"}} src={Speaker7} alt={"Bass Circuit Sim. Results"} />
        </div>

        The AC sweep provided a better understanding on how well my designed worked. The range of filtered frequency at the -3 dB did exceed a little outside of the desired frequency range, however, this is expected due to uncertainty and percentage error.
        <h2>LED Dispaly (Voltage Ladder) </h2>
          The design behind voltage ladder was to have the op amps act as voltage comparators. When the input voltage is larger than the reference voltage, the output voltage will be V_CC+ and if vice versa the output voltage will be V_CC-. This idea was further used to in the LED lights when the output voltage was V_CC+, an LED display would light up. The digital schematic of both the treble and bass voltage ladder circuit is featured below. The different between the treble and bass are the resistor values. The resistor values were obtained using the basic V = IR equation. 
        <h3> Treble Circuit</h3>

        <div className ="d-flex flex-row justify-content-center w-100"> 
          <img style={{objectFit: "cover", width:"80%"}} src={Speaker8} alt={"Treble Voltage Ladder Circuit Design"} />
        </div>

        <h3> Bass Circuit</h3>

        <div className ="d-flex flex-row justify-content-center w-100"> 
          <img style={{objectFit: "cover", width:"80%"}} src={Speaker9} alt={"Bass Voltage Ladder circuit Design"} />
        </div>
      </Col>
    </Row>
  </Container>
);

export default Speaker;
