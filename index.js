const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.post("/user/signup", function (req, res) {
    res.json({
        message: "Signup endpoint"
    })
})

app.post("/user/signin", function (req, res) {
    res.json({
        message: "Signin Endpoint"
    })
})

app.get("/user/purchases", function (req, res) {

})

app.post("/course/purchase", function(req, res){

})


app.get("/courses", function (req, res) {

})

app.listen(3000);

