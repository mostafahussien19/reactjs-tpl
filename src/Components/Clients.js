import React, { Component } from 'react';
import { render } from 'react-dom';
import {Grid,Row,Col} from 'react-bootstrap';
import CountUp from 'react-countup';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
import {faUser , faTicketAlt,faCalendarCheck} from '@fortawesome/fontawesome-free-solid'
class Happy extends Component
{
    render()
    {
        return(
            <div className='hC'>
            <h2>Statistics</h2>
            <hr/>
            <Grid>
              <Row className="show-grid">
                <Col sm={12} md={4} >
                <div className='hCi'>
                <div className='hciicon'>
                    <FontAwesomeIcon icon={faUser}  />
                    </div>
                    <h2><span><CountUp start={0} end={160526} duration={10}/></span><br/>Happy Clients</h2>
                </div>
                 </Col>
                 <Col sm={12} md={4} >
                <div className='hCi'>
                <div className='hciicon'>
                    <FontAwesomeIcon icon={faTicketAlt}  />
                    </div>
                    <h2><span><CountUp start={0} end={200000} duration={10}/></span><br/>Tickets sold</h2>
                </div>
                 </Col>
                 <Col sm={12} md={4} >
                <div className='hCi'>
                <div className='hciicon'>
                    <FontAwesomeIcon icon={faCalendarCheck}  />
                    </div>
                    <h2><span><CountUp start={0} end={100000} duration={10}/></span><br/>Conserts</h2>
                </div>
                 </Col>
              </Row>
            </Grid>
            </div>
        )
    }
}   
export default Happy