const router = require('express').Router();
const db = require("../models");

//route for getLastWorkout
router.get('/',(req,res)=>{
    
});

//route for addExercise
router.put('/',(req,res)=>{
    db.Exercise.create(req.body)
        .then({_id}) => db.Exercise.findOneAndUpdate({},//TODO: filter properly!
                {$push:{ exercises: _id }},
                {new:true}
            )
});

//route for createWorkout
router.post('/',(req,res)=>{
    
});

//route for getWorkoutsInRange
router.get('/range',(req,res)=>{
    
});