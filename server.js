//import packages
const express = require("express");
const admin = require("firebase-admin");
const bcrypt = require("bcrypt");
const path = require("path");

//initialize express.js
const app = express();

//routes

//home route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
})

app.listen(3000, () => {
    console.log("Listening to port 3000...");
})