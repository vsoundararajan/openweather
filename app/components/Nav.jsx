/**
 * Created by soundararajanvenkatasubramanian on 11/4/16.
 */
var React = require('react');
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
var {Link, IndexLink} = require('react-router');

var Navigation = React.createClass({
   onSearch: function(e){
     e.preventDefault();
     alert('Not yet wired up');
   },
   render: function() {
       return (
           <div className="top-bar">
               <div className="top-bar-left">
                   <ul className="menu">
                       <li className="menu-text">
                           React Weather App
                       </li>
                       <li>
                           <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
                       </li>
                       <li>
                           <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                       </li>
                       <li>
                           <Link to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</Link>
                       </li>
                   </ul>
               </div>
               <div className="top-bar-right">
                   <form onSubmit={this.onSearch}>
                      <ul className="menu">
                          <li>
                              <input type="search" placeholder="Search weather"/>
                          </li>
                          <li>
                              <input type="submit" className="button" value="Get Weather"/>
                          </li>
                      </ul>
                   </form>
               </div>
           </div>
       );
   }
});


module.exports = Navigation;


/*
 <Navbar color="faded" light>
 <NavbarBrand href="/">reactstrap</NavbarBrand>
 <Nav className="float-xs-right" navbar>
 <NavItem>
 <NavLink href="/components/">Components</NavLink>
 </NavItem>
 <NavItem>
 <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
 </NavItem>
 </Nav>
 </Navbar>
 */