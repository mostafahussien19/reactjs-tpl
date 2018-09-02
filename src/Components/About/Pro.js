import React, { Component } from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import Img6 from '../img/1.jpg'
import Img7 from '../img/5.jpeg'
import Img8 from '../img/4.jpeg'
import Img9 from '../img/7.jpeg'
import Img10 from '../img/8.jpeg'
import Img11 from '../img/9.jpeg'
class Pro extends Component 
{
    render()
    {
        return(
          <div>
              <div className='pro'>
              <Grid>
              <Row className="show-grid">
                <Col sm={6} md={6} className='child'>
                   <img src={Img6}/>
                 </Col>
                 <Col  sm={6} md={6} className='child' >
                 <img src={Img7}/>
                 </Col>
                 <Col sm={6} md={6}className='child'> 
                 <img src={Img8}/>
                 </Col>
                 <Col sm={6} md={6} className='child'>
                 <img src={Img9}/>
                 </Col>
                 <Col sm={6} md={6} className='child'>
                 <img src={Img10}/>
                 </Col>
                 <Col sm={6} md={6} className='child'>
                 <img src={Img11}/>
                 </Col>
              </Row>
            </Grid>
             </div>
          </div>
        );
    }
}
export default Pro;