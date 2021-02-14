module.exports = function (app) {
const db = require("../models");

app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

app.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch(err => {
        console.log(err);
    });
});

app.put("/api/workouts/:id", ({body, params}, res) => {
    console.log(params, body);

    //db.Workout.findOneAndUpdate(
        db.Workout.findByIdAndUpdate(
        { _id:  params.id },
        { exercises: body }
        /*{ push: { exercises: body}},
        {new: true, runValidators: true}*/
    )
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.json(err);
    });
});

app.post("/api/workouts/range", function (req, res){
    db.Workout.create({})
    .then(data => res.json(data))
    .catch(err => {
        res.json(err);
    })
});

app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.json(err);
    });
});
}
