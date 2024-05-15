import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'; 
import Row from 'react-bootstrap/Row';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'
import Achievement from './images/acheivement.jpg' 
import { Fa2 } from "react-icons/fa6";
import { Fa1 } from "react-icons/fa6";


export const Achievements = () => {
  return (
    <section id = "achievements">
        <Container>
            <Row>
              <Col sm = {6}>
                  
              <img src = {Achievement} alt = "achievement" style={{width: "85%"}} ></img>   
              </Col>
                <Col sm = {6}>
                  <br/>  <br/> 
                <VerticalTimeline  layout='2-column-right' >
                <VerticalTimelineElement 
                     iconStyle={{ background: "#4D8EE7", color: "white", borderRadius:"0%" }}
                     icon ={<Fa1/>}  
                     style={{borderStyle:"solid", borderColor:"white", boxShadow: "0 0px 0 green"}}
                >
                 <h3 className="vertical-timeline-element-title" style = {{marginTop : "-20px", color:"#0B56BF", fontFamily:"cursive"}}>Star Performer in TCS</h3>
                 
                 <p style={{textAlign:"justify"}} > I received an A+ Band on my most recent appraisal, having been nominated as a Star Performer by my manager. Additionally, I received positive and encouraging feedback from my client manager. </p>
                 </VerticalTimelineElement>

                 <VerticalTimelineElement 
                     iconStyle={{ background: "#E94295", color: "white", borderRadius:"0%" }}
                     icon ={<Fa2/>}  
                     style={{borderStyle:"solid", borderColor:"white", boxShadow: "0 0px 0 green"}}
                >
                 <h3 className="vertical-timeline-element-title" style = {{marginTop : "-20px", color:"#E11179", fontFamily:"cursive"}}>Website upgrade</h3>
                

                 <p style={{textAlign:"justify"}} > We updated the user interface (UI) of our company website, <b style ={{color:"#0B56BF"}}>www.Thaagamfoundation.in </b>, I implemented a 'Cash Free' payment gateway to facilitate customer transactions. </p>
                 </VerticalTimelineElement>
   
                </VerticalTimeline>
                </Col>

                <Col sm = {4}>

                </Col>
            </Row>
        </Container>
    </section>
  )
}
