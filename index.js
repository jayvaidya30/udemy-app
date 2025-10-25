const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.post("/signup", function(req, res){

})

app.post("/signin", function(req, res){

})

app.post("/purchaseCourse", function(req,res){

})

app.get("/courses", function(req, res){

})

app.listen(3000);

