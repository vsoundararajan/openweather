/**
 * Created by soundararajanvenkatasubramanian on 11/4/16.
 */
var React = require('react');

var About = React.createClass({
   getImages: function(){
       var images = ["/images/Lilies.jpeg", "/images/pumpkin.jpeg", "/images/redRoses.jpeg", "/images/roses1.jpeg", "/images/vibrantRoses.jpeg", "/images/yellowroses.jpeg"];
       return images.map( (image) => {
           return (<div className="small-2 columns">
               <img src={image}/>
           </div>);
       });
   },
   render: function(){
       return (
           <div>
               <h1 className="text-center">About</h1>
               <div className="row">
                   {this.getImages()}
               </div>
           </div>
       );
   }
});

module.exports = About;


