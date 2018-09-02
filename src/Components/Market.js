import React, { Component } from 'react';
import { render } from 'react-dom';
import {Grid,Row,Col,Button} from 'react-bootstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
import Img30 from './img/10.jpeg'
import Img31 from './img/11.jpeg'
import Img32 from './img/12.jpeg'
import Img33 from './img/13.jpeg'
import Img34 from './img/14.jpeg'
class Market extends Component
{
    render()
    {
        return(
            <div className='hC'>
            <h2>Market</h2>
           <hr/>
           <Grid>
             <Row className="show-grid">
               <Col sm={6} md={6} >
               <div className='mi'>
                  <img src={Img30}/>
                  </div>
               </Col>
               <Col sm={6} md={6} >
               <div className='mi'>
                  <h3>Guitar</h3>
                  <hr/>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                  <p><del>100$</del> 75$</p>
                  <Button>Buy Now</Button>
                </div>
               </Col>
               <div className='clear'></div>
               <Col sm={6} md={6} >
               <div className='mi'>
                  <img src={Img31}/>
                  </div>
               </Col>
               <Col sm={6} md={6} >
               <div className='mi'>
                  <h3>Drums</h3>
                  <hr/>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                  <p><del>100$</del> 75$</p>
                  <Button>Buy Now</Button>
                </div>
               </Col>
               <div className='clear'></div>
               <Col sm={6} md={6} >
               <div className='mi'>
                  <img src={Img32}/>
                  </div>
               </Col>
               <Col sm={6} md={6} >
               <div className='mi'>
                  <h3>Piano</h3>
                  <hr/>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                  <p><del>100$</del> 75$</p>
                  <Button>Buy Now</Button>
                </div>
               </Col>
               <div className='clear'></div>
               <Col sm={6} md={6} >
               <div className='mi'>
                  <img src={Img33}/>
                  </div>
               </Col>
               <Col sm={6} md={6} >
               <div className='mi'>
                  <h3>Trumpet</h3>
                  <hr/>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                  <p><del>100$</del> 75$</p>
                  <Button>Buy Now</Button>
                </div>
               </Col>
               <div className='clear'></div>
               <Col sm={6} md={6} >
               <div className='mi'>
                  <img src={Img34}/>
                  </div>
               </Col>
               <Col sm={6} md={6} >
               <div className='mi'>
                  <h3>Saxophone</h3>
                  <hr/>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                  <p><del>100$</del> 75$</p>
                  <Button>Buy Now</Button>
                </div>
               </Col>

             </Row>
           </Grid>
           </div>
        )
    }
}
export default Market;