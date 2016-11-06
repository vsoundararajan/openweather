/**
 * Created by soundararajanvenkatasubramanian on 11/2/16.
 */
var express = require('express');
const PORT = process.env.PORT || 3000;
// create our app

var app = express();
app.use( function (req, res, next){
   if(req.headers['x-forwarded-proto'] === 'https'){
      res.redirect('http://' + req.hostname + req.url);
   }else{
      next();
   }
});
app.use(express.static('public'));

app.listen(PORT, function () {
   console.log(`Server is listening on port: ${PORT}`);
});

