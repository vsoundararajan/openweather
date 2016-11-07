/**
 * Created by soundararajanvenkatasubramanian on 11/4/16.
 */
var React = require('react');
var Navigation = require('./Nav.jsx');

var Main = (props) =>{

    return (
        <div>
            <Navigation />
            <div className="row">
                <div className="columns medium-6 large-4 small-centered">
                    {props.children}
                </div>
            </div>
        </div>
    );

};


module.exports = Main;
