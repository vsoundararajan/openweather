/**
 * Created by soundararajanvenkatasubramanian on 11/4/16.
 */
var React = require('react');


var WeatherForm = React.createClass({
    onFormSubmit: function(e){
      e.preventDefault();
      var location = this.refs.location.value;
      if(location.trim().length > 0){
        this.refs.location.value = "";
        this.props.onSearch(location);
      }

    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="location"></input>
                    <button type="submit">Get Weather</button>
                </form>
            </div>
        );
    }
});


module.exports = WeatherForm;
