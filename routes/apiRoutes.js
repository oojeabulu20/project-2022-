const express = require("express");
const route = express.Router();
const Doctor = require("../models/doctorModel")


//get the list of all the doctors
route.get("/doctors", function(req, res,next){
   Doctor.aggregate().near({ 
  near: 
  {
   'type': 'Point',
    'coordinates': [parseFloat(req.query.lng), parseFloat(req.query.lat)] }, 
    maxDistance: 100000, 
    spherical: true, 
    distanceField: "dis" 
   }
   ).then(function(ninjas){
   res.send(ninjas);
    });
})

//adding another Doctor
route.post("/doctors", function(req, res,next){
    Doctor.create(req.body).then(function (doctor) {
        res.send(doctor);
    }).catch(next)
})

//update a Doctors details
route.put("/doctors/:id", function(req, res,next){
    Doctor.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
        Doctor.findOne({ _id: req.params.id }).then(function (doctor) {
            res.send(doctor)
        })
    });
})

//delete a doctor
route.delete("/doctors/:id", function(req, res, next){
    Doctor.findByIdAndRemove({ _id: req.params.id }).then(function (doctor) {
        res.send(doctor);
    })
})

module.exports = route;