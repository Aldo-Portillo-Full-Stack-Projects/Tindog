const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const app = express()

//Middleware

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(cors({
    origin: ["http://localhost:3000"], //Make sure to add url to active site here
    credentials: true
}))

app.get("/", (req, res) => {
    res.send("<h1>Homepage</h1>")
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
})