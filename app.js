
const express = require('express');

const exphbs = require('express-handlebars");

const path = require('path');

const bodyParser = required('body-parser');

const methodOverride = require('method-override');

const redis = require('redis');


const port = 3000;

const app = express();

app.engine('handlebars', exphbs({defaultLayout :'main'}));

app.set('view engine' , 'handlebars');

app.use(bodyParser.json());

app.user(bodyParser.urlencoded({extended:false}));

app.use(methodOverride('_method'));

app.get('/', function(req, res, next){
   res.render('searchusers'); 

});


app.list(port, function() {
   console.log('Server started on port' + port);
});



/*
const http = require('http');

const hostname = '127.0.0.1';

const port = 3000;


const server = http.createServer((req,res) => {
     res.statusCode = 200;
     res.setHeader('Content-type' , 'text/plain');
     res.end('Hello World');
});



console.log("starting a server");


server.listen(port , hostname , () => {
       console.log('server strated on port');       
});
*/
