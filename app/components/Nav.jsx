/**
 * Created by soundararajanvenkatasubramanian on 11/4/16.
 */
var React = require('react');
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
var {Link, IndexLink} = require('react-router');

var Navigation = React.createClass({
    render: function () {
      return (
          <div>
            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            <Link to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</Link>
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