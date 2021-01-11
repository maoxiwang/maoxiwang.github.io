import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Regression2 from '../images/Regression2.png';
import Regression3 from '../images/Regression3.png';
import Regression4 from '../images/Regression4.png';

const BattleBots = () => (
  <Container>
    <Row>
      <Col>
      <br />
        In this <a href ="https://docs.google.com/document/d/1LlVr_sS5cYbF3X2cHxXN607DExPdprTH3N0ngmhmL9Q/edit?usp=sharing"> {"project report"}</a>, I developed a linear regression model from the collected data, developed a diagnostic analysis of the fitted model, justfy the development of the linear regression model, and perform a detailed analysis of the uncertainty of this prediction. 
       <br /> 
       <br /> 
        The major findings suggested from the model shows that by minimizing the percentage of 16 to 29 year olds not in high school and increasing high school graduation rate would decrease overall crime rate. Although other factors did have a relationship with crime rate, they are considered to be negligible as they are mathematically considered to be insignificant. 
      
      <br />
      <br />
      
        The gathered data comes from 51 cities with the following explanatory variables: 
        <li>Reported Violent Crime Rate per 100,000 residents </li>
        <li>Annual Police Funding in $/Resident</li>
        <li>% of people 25 years + with 4 years of high school</li>
        <li>% of 16 to 19 year olds not in high school and not graduating high school </li>
        <li>% of 18 to 24 year-olds in college </li>
        <li>% of people 25 years + with at least 4 years of college </li>

        I used Minitab and Excel as the primary source of data analysis. The accuracy of the model was assessed based on its confidence intervals. During model development, multiple different models were created and compared with each other. The most accurate one was selected for further development and analysis. Below is the residual four in one plot. 
        <br /> 
        <br /> 
        <div className ="d-flex flex-row justify-content-center w-100"> 
          <img style={{objectFit: "cover", width:"80%"}} src={Regression2} alt={"Four in One Residual Plot "} />
        </div>
        <br /> 
        The probability plot of the residuals of the model is pasted below. The main takeaway is that majority of data points are within the bounds, thus ensuring 95 percent confidence. 
        <br /> 
        <br /> 
        <div className ="d-flex flex-row justify-content-center w-100"> 
          <img style={{objectFit: "cover", width:"80%"}} src={Regression3} alt={"Probability Plot of Residuals"} />
        </div>
        <br /> 
        
        The table summary of regression and anova staistics for the model is pasted below. The highlighted cells are the primary parameters used to determine the overall quality of the model. 
        <br />
        <br />
        <div className ="d-flex flex-row justify-content-center w-100"> 
          <img style={{objectFit: "cover", width:"80%"}} src={Regression4} alt={"Table Summary of Regression and ANOVA"} />
        </div>
        <br /> The overall structure of this report is conducted in the following manner: 
        <li>Exploratory analaysis: assessing normality within the data </li> 
        <li>Selecting the initial model </li>
        <li>Initial regression analysis</li>
        <li>Diagnostic analysis</li>
        <li>Adjusted regression analysis: observations, model results, and finding outliers and its influence on model</li>
        <li>Test for adding a second new independent variable</li>
        <li>Test for removing an independent variable</li>
        <li>Best regression model fit </li>
        <li>Forecasting dependent variable values</li>
        <li>Conclusion and recommendations</li>

        <br /> 

         
      </Col>
    </Row>
  </Container>
);

export default BattleBots;
