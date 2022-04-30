const mongoose = require("mongoose");



//geolocation schema 
const locationSchema = mongoose.Schema({
    type: {
        type:String,
        default:"Point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
        //[LONG,LAT]
    }
})

const doctorSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true,"Title is required"]
    },
    name: {
        type: String,
        required: [true,"Name is required"]
    },
    available: {
        type: Boolean,
        default:false
    },
    speciality: {
        type: String,
        default: "Urgent"
    },
    officehours: {
        type: String,
        default:"24 hours"
    },
    telephone: {
        type: String, 
        required:true
    },
    geometry:locationSchema
});

const Doctor = mongoose.model("doctor", doctorSchema);

module.exports = Doctor;