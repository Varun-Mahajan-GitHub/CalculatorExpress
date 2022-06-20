const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});
app.listen(3000,function(){
  console.log("server started on port 3000");
});
app.post("/",function(req,res){
  console.log(req.body.num1*req.body.num2);
  res.send("The answer is "+req.body.num1*req.body.num2);
})
app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname+"/bmiCalculator.html")
});
app.post("/bmicalculator",function(req,res){
  var bmi =(req.body.weight/(req.body.height*req.body.height))*10000;
  res.send("Your BMI is "+bmi.toFixed(1));
})
