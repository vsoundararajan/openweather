/**
 * Created by soundararajanvenkatasubramanian on 11/4/16.
 */
var React = require('react');
var {Link} = require('react-router');

var Example = (props)  => {
    return (
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Here are a few example locations to try out:</p>
            <ol>
                <li>
                  <Link to="/?location=Vallejo">Vallejo, CA</Link>
                </li>
                <li>
                    <Link to="/?location=Rio">Rio, Brazil</Link>
                </li>
                <li>
                    <Link to="/?location=Delhi">Delhi, India</Link>
                </li>
            </ol>
        </div>
    );
};

module.exports = Example;
