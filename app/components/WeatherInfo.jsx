/**
 * Created by soundararajanvenkatasubramanian on 11/4/16.
 */
var React = require('react');

var WeatherInfo = ({temp, location}) => {
    //var {temp, location} = props;
    return (
        <div>
            <h3>It is {temp} in {location}.</h3>
        </div>
    );
};

module.exports = WeatherInfo;
