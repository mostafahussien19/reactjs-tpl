import React, { Component } from 'react';
import {Grid,Row,Col,Thumbnail, Button} from 'react-bootstrap';
import ReactAudioPlayer from 'react-audio-player';
import S1 from './mp3/1.mp3'
import S2 from './mp3/2.mp3'
import S3 from './mp3/3.mp3'
import S4 from './mp3/4.mp3'
class Songs extends Component
{
    render()
    {
        return(
           <div className='hC'>
             <h2>Songs</h2>
            <hr/>
            <Grid>
              <Row className="show-grid">
                <Col sm={12} md={12} className='ap'>
                <Col sm={6} md={4} >
                      <h3>Cairokee</h3>
                      <p>Dinasour</p>
                </Col>
                   <Col sm={6} md={8} >
                   <div>
                   <ReactAudioPlayer className='audio'
                    src={S1}
                    controls
                     />
                     </div>
                   </Col>
               </Col>
               <Col sm={12} md={12} className='ap'>
                <Col sm={6} md={4} >
                      <h3>Twenty One Pilots</h3>
                      <p>Heavy Dirty soul</p>
                </Col>
                   <Col sm={6} md={8} >
                   <div>
                   <ReactAudioPlayer className='audio'
                    src={S2}
                    controls
                     />
                     </div>
                   </Col>
               </Col>
               <Col sm={12} md={12} className='ap'>
                <Col sm={6} md={4} >
                      <h3>Ahmed Kamel</h3>
                      <p>Canser</p>
                </Col>
                   <Col sm={6} md={8} >
                   <div>
                   <ReactAudioPlayer className='audio'
                    src={S3}
                    controls
                     />
                     </div>
                   </Col>
               </Col>
               <Col sm={12} md={12} className='ap'>
                <Col sm={6} md={4} >
                      <h3>Sharmoofers</h3>
                      <p>Easy Money</p>
                </Col>
                   <Col sm={6} md={8} >
                   <div>
                   <ReactAudioPlayer className='audio'
                    src={S4}
                    controls
                     />
                     </div>
                   </Col>
               </Col>
              </Row>
            </Grid>
           </div>
        )
    }
}
export default Songs
/**/