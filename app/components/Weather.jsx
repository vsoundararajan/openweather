/**
 * Created by soundararajanvenkatasubramanian on 11/4/16.
 */
var React = require('react');
var WeatherForm = require('./WeatherForm.jsx');
var WeatherInfo = require('./WeatherInfo.jsx');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function(){
        return {
            isLoading: false
        }
    },
    handleSearch: function (location){
        var that = this;


        this.setState({isLoading: true});
        openWeatherMap.getTemp(location).then( function(temp){
            that.setState({
               location:  location,
               temp: temp,
               isLoading: false
            });
        }, function(error){
           alert(error);
           that.setState({
              isLoading: false
            });
        });
    },
    render: function () {
        var {isLoading, temp, location} = this.state;
        function renderInfo(){
            if(isLoading){
              return <h3>Fetching weather...</h3>;
            }else if(temp && location){
              return <WeatherInfo location={location} temp={temp}/>;
            }
        }
        return (
            <div>
               <WeatherForm onSearch={this.handleSearch}/>
               {renderInfo()}
            </div>
        );
    }
});


module.exports = Weather;
