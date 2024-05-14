import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';

export const Banner = () => {

  const onButtonClick = () => {
    const pdfUrl = "Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

  return (
    <section id = "home">
    <div style={{backgroundColor:"#DCDCDC"}}>
        <Container>
            <Row>
            <Col xs = {11}>
                <p style={{fontFamily:"cursive", color:"#0C0F7D", marginTop:"40px", marginLeft:"50px", fontSize:"30px"}}> Hey! This is </p>
                <p style={{fontFamily:"serif", color:"#EF2E0A", marginLeft:"50px", fontSize:"50px"}}> <b> Gopi kumar </b> </p>
                <p  style={{fontFamily:"cursive", color:"#0C0F7D", marginLeft:"50px", fontSize:"30px"}}>Full Stack Website Developer</p>
                <p  style={{fontFamily:"serif", color:"black", marginLeft:"50px", fontSize:"19px", textAlign:"justify", }}> With a strong combination of technical and non-technical skills, I am an enthusiastic Full Stack Web Developer who is committed to building an interactive and user-friendly web application. </p>
                <Button style={{fontFamily:"serif", borderColor:"black", marginLeft:"50px", fontSize:"17px"}}  variant="outline-danger" onClick={onButtonClick} > Know More..</Button>
                <br/> <br/>
            </Col>
            <Col xs ={1}>
            </Col>
            </Row>
        </Container>
    </div>
    </section>
    
  )
}
