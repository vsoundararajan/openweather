/**
 * Created by soundararajanvenkatasubramanian on 11/4/16.
 */
var React = require('react');
var WeatherForm = require('./WeatherForm.jsx');
var WeatherInfo = require('./WeatherInfo.jsx');

var Weather = React.createClass({
    render: function () {
        return (
            <div>
               <WeatherForm />
               <WeatherInfo />
            </div>
        );
    }
});


module.exports = Weather;
