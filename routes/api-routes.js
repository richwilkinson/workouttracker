const Workout = require("../models/workout.js");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/api/workouts", (req, res) => {
    Workout.find()
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.json
    })
})