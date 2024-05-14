import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './images/download.png'
import Button from 'react-bootstrap/Button';
// import NavDropdown from 'react-bootstrap/NavDropdown';



export const Navigation = () => {
  return (
   
    <Navbar fixed ="top" collapseOnSelect expand="lg"  style = {{backgroundColor:"white"}} >
      <Container>
        <img src = {Logo} alt='/Logo' style={{height:"60px", width:"70px"}} />
        <Navbar.Brand href="#home" style = {{fontFamily:"sans-serif", marginTop:"15px" }}  > <h3> <b>PORTFOLIO </b> </h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav>
            <Navbar.Brand href= "#home" style = {{fontFamily:"sans-serif", paddingRight:"30px", fontSize:"18px" }}> Home </Navbar.Brand>  
            <Navbar.Brand href="#skills" style = {{fontFamily:"sans-serif", paddingRight:"30px", fontSize:"18px" }}>Skills</Navbar.Brand> 
            <Navbar.Brand href="#experience" style = {{fontFamily:"sans-serif", paddingRight:"30px", fontSize:"18px" }}> Experience </Navbar.Brand>
            <Navbar.Brand href="#achievements" style = {{fontFamily:"sans-serif", paddingRight:"30px", fontSize:"18px" }}>Achievements</Navbar.Brand> 
            <Navbar.Brand href="#deets"><Button  variant="primary"  style = {{backgroundColor:"#FF4121", borderColor:"#FF4121", fontFamily:"sans-serif", marginTop:"-10px"}} size ="sm">Contact</Button></Navbar.Brand> 
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
