import React, { Component } from 'react';
import {Grid,Row,Col,Checkbox,Button,Radio,FieldGroup,FormGroup, FormControl,HelpBlock, ControlLabel
} from 'react-bootstrap';
class Contact extends Component
{
    render ()
    {
        function FieldGroup({ id, label, help, ...props }) {
            return (
              <FormGroup controlId={id}>
                <ControlLabel>{label}</ControlLabel>
                <FormControl {...props} />
                {help && <HelpBlock>{help}</HelpBlock>}
              </FormGroup>
            );
          }
        return(
           <div className='contact'>
           <h2>Contact us</h2>
           <hr/>
           <form className='c'>
        <FieldGroup
      id="formControlsText"
      type="text"
      label="Text"
      placeholder="Enter text"
    />
    <FieldGroup
      id="formControlsEmail"
      type="email"
      label="Email address"
      placeholder="Enter email"
    />
    <FieldGroup id="formControlsPassword" label="Password" type="password" />

    <FormGroup controlId="formControlsTextarea">
      <ControlLabel>Textarea</ControlLabel>
      <FormControl componentClass="textarea" placeholder="textarea" />
    </FormGroup>


    <Button className='cbtn'type="submit">Submit</Button>
  </form>
           </div>
        )
    }
}
export default Contact;