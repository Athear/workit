const router = require('express').Router();
const { Workout } = require('../models');
const db = require("../models");

//route for getLastWorkout
router.get('/',(req,res)=>{
    db.Workout.findOne({}).sort({"date":-1})
    .then((workout)=>{res.json(workout)})
    .catch((err)=>{
        console.log(err.message);
        res.json(err)
    });
});

//route for addExercise
router.put('/',(req,res)=>{
    db.Exercise.create(req.body)
        .then(({_id}) => db.Exercise.findOneAndUpdate({},//TODO: filter properly!
                {$push:{ exercises: _id }},
                {new:true}
            ))
        .then(()=>{res.json("exercise added")})
        .catch((err)=>{
            console.log(err.message);
            res.json(err)
        });
});

//route for createWorkout
router.post('/',(req,res)=>{
    db.Workout.create({})
    .then((workout)=>{res.json(workout)})
    .catch((err)=>{
        console.log(err.message);
        res.json(err)
    })
});

//route for getWorkoutsInRange
router.get('/range',(req,res)=>{
    
});


module.exports = router;