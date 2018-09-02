import React, { Component } from 'react';
import {Button,Table} from 'react-bootstrap';
import {BrowserRouter as Router, Match, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import ReactRouterBootstrap, { LinkContainer } from 'react-router-bootstrap';

class Con2 extends Component
{
    render()
    {
        return(
            <div className='conp'>
                <h2> Conserts</h2>
                <hr/>
                <Table responsive className='con'>
  <thead>
    <tr>
      <th>#</th>
      <th>Band</th>
      <th>Place</th>
      <th>Date</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Twenty One Pilots</td>
      <td>Cairo Jazz club</td>
      <td>6/8/2018</td>
      <td>150</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Mashru lila</td>
      <td>Cairo Jazz club</td>
      <td>6/8/2018</td>
      <td>150</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Autostrad</td>
      <td>Cairo Jazz club</td>
      <td>6/8/2018</td>
      <td>150</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Fifth Harmony</td>
      <td>Cairo Jazz club</td>
      <td>6/8/2018</td>
      <td>150</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Shrmoofers</td>
      <td>Cairo Jazz club</td>
      <td>6/8/2018</td>
      <td>150</td>
    </tr>
    <tr>
    <td>7</td>
      <td>Dina EL-Wedidy</td>
      <td>Cairo Jazz club</td>
      <td>6/8/2018</td>
      <td>150</td>
    </tr>
    <tr>
    <td>8</td>
      <td>El-Far3i</td>
      <td>Cairo Jazz club</td>
      <td>6/8/2018</td>
      <td>150</td>
    </tr>
    <tr>
    <td>9</td>
      <td>El-Morabba3</td>
      <td>Cairo Jazz club</td>
      <td>6/8/2018</td>
      <td>150</td>
    </tr>
    <tr>
    <td>10</td>
      <td>Ahmed Kamel</td>
      <td>Cairo Jazz club</td>
      <td>6/8/2018</td>
      <td>150</td>
    </tr>
    <tr>
    <td>11</td>
      <td>Tiësto</td>
      <td>Cairo Jazz club</td>
      <td>6/8/2018</td>
      <td>150</td>
    </tr>
    <tr>
    <td>12</td>
      <td>Martin Garrix</td>
      <td>Cairo Jazz club</td>
      <td>6/8/2018</td>
      <td>150</td>
    </tr>
  </tbody>
</Table>
<LinkContainer to="/Tickets">
  <Button className='bttn'>Get Your Ticket Now :)</Button>
</LinkContainer>
            </div>
        )
    }
}
export default Con2; 