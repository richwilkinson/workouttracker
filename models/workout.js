const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const WorkoutSchema = New.Schema(
    {
        day: { 
            type: Date,
            default: Date.now 
        },
        excercise: [
            {
            type: {
                type: String,
                trim: true,
                required: true
            },
            name: {
                type: String,
                trim: true,
                required: true
            },
            duration: {
                type: String,
                required: true
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }

        ]
    });

const Workout = mongoose.model("workout", WorkoutSchema);

module.exports = Workout;