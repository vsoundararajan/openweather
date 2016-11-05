/**
 * Created by soundararajanvenkatasubramanian on 11/4/16.
 */
var React = require('react');


var WeatherForm = React.createClass({
    render: function () {
        return (
            <div>
                <form>
                    <input type="text" ref="city"></input>
                    <button type="submit">Get Weather</button>
                </form>
            </div>
        );
    }
});


module.exports = WeatherForm;
