module.exports = function (app) {
const Workout = require("../models/workout.js");

app.get("/api/workouts", (req, res) => {
    Workout.find({})
    .then((dbWorkout) => {
        res.json(dbWorkout);
        console.log(data);
    })
    .catch((err) => {
        res.json(err);
    });
});

app.post("/api/workouts", ({ body }, res) => {
    Workout.create({})
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch(({ message }) => {
        console.log(message);
    });
});

app.put("/api/workouts:id", ({params, body}, res) => {
    console.log("PARAMS", params, body);

    Workout.findOneAndUpdate(
        { _id: params.id },
        { $push: {excercises: body }},
        { new: true }
    )
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.json(err);
    });
});
}
