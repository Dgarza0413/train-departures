const express = require("express"); 
const fs = require("fs");
var moment = require("moment");
var PORT = process.env.PORT || 3000;
var app = express()

//sets into motion what kind of of data we expect
app.get("/api/getArrivals", (req, res) => {
    //server is providing to client
})

app.post("/api/postDepartures", (req, res) => {

})

app.listen(PORT, () => {
    console.log(`port is listening on ${PORT}`)
})

