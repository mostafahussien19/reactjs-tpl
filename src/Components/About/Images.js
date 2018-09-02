import React, { Component } from 'react';
import {Grid,Row,Col,Thumbnail} from 'react-bootstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
import { faMusic, faHeadphones ,faHeartbeat} from '@fortawesome/fontawesome-free-solid'
class Images extends Component
{
    render()
    {
        return(
          <div>
            <Grid>
              <Row className="show-grid">
                <Col sm={4} md={4}>
                <div className='about-icons'>
                    <div className='icon'>
                    <FontAwesomeIcon icon={faMusic}  />
                    </div>
                    <h2>conserts</h2>
                </div>
                 </Col>
                 <Col  sm={4} md={4} >
                 <div className='about-icons'>
                    <div className='icon'>
                    <FontAwesomeIcon icon={faHeadphones}  />
                    </div>
                    <h2>Music</h2>
                </div>
                 </Col>
                 <Col sm={4} md={4}>
                 <div className='about-icons'>
                    <div className='icon'>
                    <FontAwesomeIcon icon={faHeartbeat}  />
                    </div>
                    <h2>Happines</h2>
                </div>
                 </Col>
              </Row>
            </Grid>;
          </div>
        );
    }
}
export default Images;