const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const WorkoutSchema = new Schema(
    {
        day: { 
            type: Date,
            default: Date.now 
        },
        exercises: [
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
    },
    {
    toJSON: {
        // include any virtual properties when data is requested
        virtuals: true
      }
    }
    );

    WorkoutSchema.virtual("totalDuration").get(function () {
        const duration = this.exercises.reduce((acc, cur) => {
          return acc + cur.duration;
        }, 0);
      
        return duration;
      });
      

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;