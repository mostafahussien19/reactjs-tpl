import React, { Component } from 'react';
import {Navbar ,Nav , NavItem} from 'react-bootstrap';
import {BrowserRouter as Router,browserHistory, Match, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import ReactRouterBootstrap, { LinkContainer } from 'react-router-bootstrap';
import Sec2 from '../Header/Carousel';
import About from '../About'
import Con from '../Conserts'
import Con2 from '../More'
import Lastes from '../Lastes'
import Happy from '../Clients'
import Contact from '../Contact'
import Footer from '../footer'
import Booking from '../Booking'
import Songs from '../Songs'
import Market from '../Market'
class Lol extends Component 
{
  componentDidUpdate() 
  {
      window.scrollTo(0,0);
  }
  render()
    {
        return(
             <Router onUpdate={() => window.scrollTo(0, 0)} >
         <div>
          <Navbar inverse collapseOnSelect fixedTop>
             <Navbar.Header>
                    <Navbar.Brand>
                      <a href="#brand">React <span>Temp</span></a>
                    </Navbar.Brand>
                  <Navbar.Toggle />
             </Navbar.Header>
        <Navbar.Collapse>
    <Nav pullRight>
    <LinkContainer to="/">
          <NavItem eventKey={1} href='#'>
          Home
         </NavItem> 
         </LinkContainer>
         <LinkContainer to='/Conserts'>
          <NavItem eventKey={2} href="#">
             Conserts
          </NavItem>
          </LinkContainer>
         <LinkContainer to='/Tickets'>
          <NavItem eventKey={2} href="#">
             Tickets
          </NavItem>
          </LinkContainer>
          <LinkContainer to='/Songs'>
          <NavItem eventKey={2} href="#">
             Songs
          </NavItem>
          </LinkContainer>
          <LinkContainer to='/Market'>
          <NavItem eventKey={2} href="#">
             Market
          </NavItem>
          </LinkContainer>
    </Nav>
  </Navbar.Collapse>
</Navbar> 
<Route path="/" exact render={()=>
        {
          return (
            <div>
            <Sec2/>
            <About/>
            <Con/>
            <Lastes/>
            <Happy/>
            <Contact/>
            <Footer/>
            </div>
          )
        }}/>
        <Route path="/Tickets" exact render={()=>
        {
          return (
          <div>
            <Booking/>
          <Contact/>
          <Footer/>
          </div>
          )
          }}/>
          <Route path="/Conserts" exact render={()=>
        {
          return (
          <div>
            <Con2/>
          <Contact/>
          <Footer/>
          </div>
          )
          }}/>
          <Route path="/Songs" exact render={()=>
        {
          return (
          <div>
          <Songs/>
          <Contact/>
          <Footer/>
          </div>
          )
          }}/>
          <Route path="/Market" exact render={()=>
        {
          return (
          <div>
            <Market/>
          <Contact/>
          <Footer/>
          </div>
          )
          }}/>
</div>
      </Router>
        );
    }
}
export default Lol;