const express =require("express");
const morgan=require("morgan");
const bodyparser=require("body-parser");
const mysql=require("mysql");
const db = mysql.createConnection({
      host:'trial.cpaoqpenaokn.us-east-2.rds.amazonaws.com',
	  user:'admin',
	  password:'savita92',
	  database:'shadowtrial'
});

db.connect((error)=>{
     if(error) throw error;
	 
	 console.log('Database connected');
}); 

var port=process.env.PORT||8080;
var app = express();
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.listen(port,function(){
     console.log('server started');
});