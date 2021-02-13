module.exports = function (app) {
const Workout = require("../models/workout.js");

app.get("/api/workouts", (req, res) => {
    Workout.find()
    .then(data => {
        res.json(data);
        console.log(data);
    })
    .catch(err => {
        res.json(err);
    });
});

app.post("/api/workouts", (req, res) => {
    Workout.create(req.body)
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch(err => {
        console.log(err);
    });
});

app.put("/api/workouts:id", ({body, params}, res) => {
    console.log("PARAMS", params, body);

    Workout.findOneAndUpdate(
        { _id: req.params.id },
        { push: { exercises: req.body}},
        {new: true, runValidators: true}
    )
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.json(err);
    });
});

app.post("/api/workout/range", function (req, res){
    Workout.create({})
    .then(data => res.json(data))
    .catch(err => {
        res.json(err);
    })
});

app.get("/api/workout/range", (req, res) => {
    Workout.find({})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.json(err);
    });
});
}
