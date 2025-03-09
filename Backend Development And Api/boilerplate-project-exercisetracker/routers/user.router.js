const express = require("express");
const { createExercise, getExercises } = require("../controller/exercise.controller");
const { createEmail, getUsers } = require("../controller/user.controller");

const userRouter = express.Router();

userRouter.post('/:_id/exercises',createExercise);
userRouter.get('/:_id/logs',getExercises)
userRouter.post('/',createEmail)
userRouter.get('/',getUsers);


module.exports = userRouter;