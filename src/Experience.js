import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'; 
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';
import TATA from './images/TATA.png'
import THAAGAM from './images/Thaagam.png'
import './App.css';

export const Experience = () => {

  return (
    <section id = "experience" > 
    <br/>
        <Container className='work'>
          <Row>
              <Col sm = {2}></Col>
              <Col sm = {8}> 
                  <br/>
                  <center>  <h2 style = {{textAlign:"center", fontFamily:"cursive", color:"black"}} > Experience </h2> </center> 
                  <br/>
              <Accordion>
                  <Accordion.Item eventKey="0" className="item">
                      <Accordion.Header>
                         <p style = {{fontSize:"17px", fontFamily:"cursive", color:"black"}}> Tata Consultancy Services
                      </p></Accordion.Header>
                      <Accordion.Body style = {{background:"#f7f7f7"}} >
                        <Container>
                          <Row>
                              <Col sm=  {1}> </Col> 

                              <Col sm = {4}>
                              <img src = {TATA} alt='TCS LOGO' style={{height:"100%", width:"100%"}} />
                              </Col>

                              <Col sm=  {1}> </Col> 

                              <Col sm = {6}>
                                  
                                  <p style = {{color:"#0C0F7D", fontSize:"17px"}} > <b style = {{color:"black"}}>From : </b>  02/12/2021 &nbsp; <b style = {{color:"black"}}> To : </b>PRESENT </p>
                                  <p style = {{color:"#0C0F7D", fontSize:"17px"}}> <b style = {{color:"black"}}>Role : </b> Debit ATM Gateway Application Support </p>
                                  <p style = {{color:"#0C0F7D", fontSize:"17px"}}> <b style = {{color:"black"}}>Tools : </b> Kibana, Dynatrace, Exceed Turbo </p>
                              </Col>
                          </Row>
                        </Container>
                      </Accordion.Body>
                  </Accordion.Item> <br/>
                  <Accordion.Item eventKey="1" className='item'>
                      <Accordion.Header><p style = {{fontSize:"17px", fontFamily:"cursive", color:"black"}}> Thaagam Foundation</p></Accordion.Header>
                      <Accordion.Body style = {{background:"#f7f7f7"}}>
                      <Container>
                          <Row>
                              <Col sm=  {1}> </Col> 

                              <Col sm = {4}>
                                
                              <img src = {THAAGAM} alt='Thaagam Foundation LOGO' style={{height:"100%", width:"100%"}} />
                              </Col>

                              <Col sm=  {1}> </Col> 

                              <Col sm = {6} >
                               
                                  <p style = {{color:"#0C0F7D", fontSize:"17px"}} >  <b style = {{color:"black"}}>From : </b> 10/08/2021 &nbsp; <b style = {{color:"black"}}> To : </b> 24/11/2021 </p>
                                  <p style = {{color:"#0C0F7D", fontSize:"17px"}} > <b style = {{color:"black"}}>Role : </b> PHP Developer </p>
                                  <p style = {{color:"#0C0F7D", fontSize:"17px"}} > <b style = {{color:"black"}}>Lanuage : </b> PHP, Bootstrap, MySql </p>
                              </Col>
                          </Row>
                        </Container>
                      </Accordion.Body>
                      </Accordion.Item>
                  </Accordion>
                  <br/>  <br/>
              </Col>
              <Col sm = {2}></Col>
          </Row>
        </Container>

        <br/> 
    </section>
  )
}
