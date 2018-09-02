import React, { Component } from 'react';
import {Grid,Row,Col,Media, Left, Right, Heading, List, ListItem} from 'react-bootstrap';
import Img12 from './img/2.jpg';
import Img13 from './img/3.jpg';
import Img14 from './img/4.jpg';
class Lastes extends Component
{
    render()
    {
        return(
          <div className='las'>
            <h2>Testimonial</h2>
            <hr/>
            <div className='test'>
  <Media>
    <Media.Left align="top">
      <img width={80} height={80} src={Img12}  alt="thumbnail" />
    </Media.Left>
    <Media.Body>
      <Media.Heading>Top aligned media</Media.Heading>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </p>

      <p>
        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
        leo. Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus.
      </p>
    </Media.Body>
  </Media>
  <Media>
    <Media.Left align="middle">
      <img width={80} height={80} src={Img13} alt="thumbnail" />
    </Media.Left>
    <Media.Body>
      <Media.Heading>Middle aligned media</Media.Heading>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </p>

      <p>
        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
        leo. Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus.
      </p>
    </Media.Body>
  </Media>
  <Media>
    <Media.Left align="bottom">
      <img width={80} height={80} src={Img14} alt="thumbnail" />
    </Media.Left>
    <Media.Body>
      <Media.Heading>Bottom aligned media</Media.Heading>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </p>

      <p>
        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
        leo. Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus.
      </p>
    </Media.Body>
  </Media>
</div>;
         </div>
        );
    }
}
export default Lastes;