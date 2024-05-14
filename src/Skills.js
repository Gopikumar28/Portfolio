import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'; 
import Row from 'react-bootstrap/Row';
import { FaPaintBrush } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaEye } from "react-icons/fa";


export const Skills = () => {
  return (
    
        <section id = "skills">
         <Container>
            <br/> 
            <h2 style = {{textAlign:"center", fontFamily:"cursive", color:"#0C0F7D"}} > Skills </h2>
            <p style = {{textAlign:"center"}} >Continously improving my skills and knowledge in the field.</p>
            <Row>
            <Col  sm = {3}>
               <div style={{ border:"1px solid #EAEAEA", borderRadius:"5px" , height:"310px", backgroundImage: `url(${require("./images/line3.jpg")})`,
              backgroundRepeat: "no-repeat", backgroundSize:"cover" }} >
                <center>
                  <br/>
                  <div style = {{display:"flex", width:"100px", height:"100px", backgroundColor:"#D6F0FF", borderRadius:"50%"}} > 
                  
                  <FaPaintBrush  color="#0C0F7D" size = "55px" style = {{marginLeft:"22px", marginTop:"18px"}}  />
                  </div>
                  <br/>
                  <p style = {{fontFamily:"cursive", color:"#FE7D5B", fontSize:"20px"}}> <b> UI & UX </b> </p>
                </center>  
                <div class = "parenty">
                <ul>  
                  <li style = {{fontFamily:"serif"}}> Figma </li>
               </ul>
               </div>
               </div>
            </Col>
            

            <Col sm ={3}> 
             <div style={{ border:"1px solid #EAEAEA", borderRadius:"5px", height:"310px", backgroundImage: `url(${require("./images/line3.jpg")})`,
              backgroundRepeat: "no-repeat", backgroundSize:"cover" }} >
                <center>
                  <br/>
                  <div style = {{display:"flex", width:"100px", height:"100px", backgroundColor:"#D6F0FF", borderRadius:"50%"}} > 
                  
                  <FaLaptopCode  color="0C0F7D" size = "55px" style = {{marginLeft:"22px", marginTop:"18px"}}  />
                  </div>
                  <br/>
                  <p style = {{fontFamily:"cursive", color:"#FE7D5B", fontSize:"20px"}}> <b> Front-End </b> </p>
                </center>  
                <div class = "parenty">
                <ul>  
                  <li style = {{fontFamily:"serif"}}> React JS </li>
                  <li style = {{fontFamily:"serif"}}> Bootstrap </li>
                  <li style = {{fontFamily:"serif"}}> Javascript </li>
                  <li style = {{fontFamily:"serif"}}> Jquery </li>
               </ul>
               </div>
            
               </div>
            </Col>
    

            <Col sm ={3}> 
             <div style={{ border:"1px solid #EAEAEA", borderRadius:"5px", height:"310px", backgroundImage: `url(${require("./images/line3.jpg")})`,
              backgroundRepeat: "no-repeat", backgroundSize:"cover"}} >
                <center>
                  <br/>
                  <div style = {{display:"flex", width:"100px", height:"100px", backgroundColor:"#D6F0FF", borderRadius:"50%"}} > 
                  
                  <FaDatabase  color="#0C0F7D" size = "55px" style = {{marginLeft:"22px", marginTop:"18px"}}  />
                  </div>
                  <br/>
                  <p style = {{fontFamily:"cursive", color:"#FE7D5B", fontSize:"20px"}}> <b> Back-End </b> </p>                
                </center>  
                <div class = "parenty">
                <ul>  
                  <li style = {{fontFamily:"serif"}}> PHP </li>
                  <li style = {{fontFamily:"serif"}}> MySQL </li>
               </ul>
               </div>

               </div>
            </Col>

            <Col sm ={3}> 
             <div style={{ border:"1px solid #EAEAEA", borderRadius:"5px",height:"310px", backgroundImage: `url(${require("./images/line3.jpg")})`,
              backgroundRepeat: "no-repeat", backgroundSize:"cover" }} >
                <center>
                  <br/>
                  <div style = {{display:"flex", width:"100px", height:"100px", backgroundColor:"#D6F0FF", borderRadius:"50%"}} > 
                  
                  <FaEye  color="0C0F7D" size = "55px" style = {{marginLeft:"22px", marginTop:"18px"}}  />
                  </div>
                  <br/>
                  <p style = {{fontFamily:"cursive", color:"#FE7D5B", fontSize:"20px"}}> <b> Monitoring Tools </b> </p>
                </center>  
                
                <div class = "parenty">
                <ul>  
                  <li style = {{fontFamily:"serif"}}> Kibana </li>
                  <li style = {{fontFamily:"serif"}}> Dynatrace </li>
               </ul>
               </div>

               </div>
            </Col>

            </Row>
        </Container>
      </section>
    
  )
}
