/**
 * Created by soundararajanvenkatasubramanian on 11/4/16.
 */
var React = require('react');
var Navigation = require('./Nav.jsx');

var Main = (props) =>{

    return (
        <div>
            <Navigation />
            <h2>Main Component</h2>
            {props.children}
        </div>
    );

};


module.exports = Main;
