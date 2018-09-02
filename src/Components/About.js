import React, { Component } from 'react';
import Title from './About/Title';
import Images from './About/Images';
import Pro from './About/Pro';
class About extends Component
{
    render()
    {
        return(
          <div className='About'>
              <h2>About</h2>
              <hr/>
              <Title/>
              <Images />
              <Pro/>
          </div>
        )
    }
}
export default About;
