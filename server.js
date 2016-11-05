/**
 * Created by soundararajanvenkatasubramanian on 11/2/16.
 */
var express = require('express');
var PORT = process.env.PORT || 3000;
// create our app

var app = express();
app.use(express.static('public'));

app.listen(PORT, function () {
   console.log(`Server is listening on port: ${PORT}`);
});
