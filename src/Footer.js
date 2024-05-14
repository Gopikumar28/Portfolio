import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'; 
import Row from 'react-bootstrap/Row';
import { FaMobile } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";

export const Footer = () => {
  return (
    
    <footer  style={{backgroundColor:"#11A9FF"}}>
            
    <Container>
        <Row>
            <Col sm = {1}>
               
            </Col>
            
            <Col sm = {4}> 
                <br/> <br/><br/>
                <center> 
                <h2 style = {{color:"white"}} > Get in Touch</h2> 
                <br/>
                <hr style = {{color:"white"}}/>
                
                <footer style = {{color:"white"}}>&copy; Copyright 2024 Website Developer</footer>
                </center>

            </Col>
            <Col sm = {3}>
                <br/> <br/>
                <div style = {{width:"220px", height:"170px", padding:"15px", background:"#FFFFFF", borderRadius:"15px" , boxShadow: "15px 15px #EFEFEF", color:"#c9ccce", marginLeft:"80px"}}>
                    <br/>
                    <FaMobile style = {{marginLeft:"70px", height:"49px", width:"43px", color:"black"}} /> <br/> <br/>
                    <center>  <p style={{ color:"black", fontSize:"17px"}}> Mobile: +91 9551527356 </p></center> 
                </div>

                <br/>
                <br/>
            </Col>
            
            <Col sm = {3}>
            <br/> <br/>
                <div style = {{width:"220px", height:"170px", padding:"15px", background:"#FFFFFF", borderRadius:"15px" , boxShadow: "15px 15px #EFEFEF", color:"#c9ccce", marginLeft:"80px"}}>
                    <br/>
                    <TfiEmail  style = {{marginLeft:"70px",  width:"43px", color:"black", fontSize:"50px"}} /> <br/> <br/>
                    <center>  <p style={{fontSize:"17px",color:"black"}}>  gopikumar28@gamil.com </p></center> 
                </div>

                <br/>
                <br/>
            </Col>
            <Col sm = {1}>
                
            </Col>
        </Row>
    </Container>
    </footer>

  )
}
