import React, { Component } from 'react';
import Img from '../img/6.jpeg';
import Img2 from '../img/2.jpeg';
import Img3 from '../img/3.jpeg';
import {Button,Carousel} from 'react-bootstrap';
class Sec2 extends Component 
{
    render()
    {
        return(
            <div>
                <Carousel>
  <Carousel.Item>
    <img width={900} height={500}  src={Img} />
  </Carousel.Item>
  <Carousel.Item>
    <img width={900} height={500}  src={Img2} />
  </Carousel.Item>
  <Carousel.Item>
    <img width={900} height={500}  src={Img3} />
  </Carousel.Item>
</Carousel>
            </div>
        )
    }
}
export default Sec2;