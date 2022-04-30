const express = require("express");
const dbConnection = require("./dbConfig/dbConfig");
const apiRoutes = require("./routes/apiRoutes");

//initialising the app
const app = express();
//body parser for our app
app.use(express.json())

app.use(express.static("public"));

//database connection
dbConnection
//app routes and middleware
app.use(apiRoutes)

//middleware for error handling
app.use(function (err, req, res, next) {
    //console.log(err);
    res.status(422).send({error: err.message})
})

app.listen(4444, function () {
    console.log("Server is listening on port:4444")
})