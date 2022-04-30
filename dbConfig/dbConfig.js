const mongoose = require("mongoose")

const mongodburl = `mongodb+srv://ojeabuluose123:gogoboy123@doctordata.pdmpe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const dbConnection = mongoose.connect(mongodburl)
    .then(db => {
        console.log("Connected to database")
        return db
    }).catch(err => {
    console.log("Couldn't connect")
    })

module.exports = dbConnection;