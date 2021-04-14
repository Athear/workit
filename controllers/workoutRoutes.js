const router = require('express').Router();
const { Workout } = require('../models');
const db = require("../models");

//route for getLastWorkout
router.get('/', (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" }
            }
        }
    ])
    .sort({ "day": -1 }).limit(1)
    .then(latestWorkout => {
        res.json(latestWorkout)
    })
});

//route for addExercise
router.put('/:id', (req, res) => {
    db.Workout.findByIdAndUpdate(
        req.params.id,
        {
            $push:
            {
                exercises: req.body
            }
        },
        { new: true }
    )
        .then(workout => { res.status(200).json(workout) })
        .catch((err) => {
            console.log(err.message);
            res.status(400).json(err)
        });
});

//route for createWorkout
router.post('/', (req, res) => {
    db.Workout.create({})
        .then((workout) => { res.json(workout) })
        .catch((err) => {
            console.log(err.message);
            res.json(err)
        })
});

//route for getWorkoutsInRange
router.get('/range', (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" }
            }
        }
    ])
    .sort({ "day": -1 }).limit(7)
    .then(workoutRange => {
        res.json(workoutRange)
    })
});


module.exports = router;