const router = require('express').Router();
var path = require("path");

//route for index (for completeness)
router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, "../public/index.html"));
});


//route for exercise
//new workout
router.get('/exercise',(req,res)=>{
    res.sendFile(path.join(__dirname, "../public/exercise.html")); 
});

//route for exercise
//continue workout. May not need
router.get('/exercise?',(req,res)=>{
    res.sendFile(path.join(__dirname, "../public/exercise.html")); 
});

//route for stats
router.get('/stats',(req,res)=>{
    res.sendFile(path.join(__dirname, "../public/stats.html")); 
})

module.exports = router;