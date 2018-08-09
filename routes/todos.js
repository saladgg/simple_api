const { Todo } = require("../models/todo");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const todos = await Todo.find().sort("dayTask");
  res.send(todos);
});

router.post("/", async (req, res) => {
  /*   const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);
 */
  const todo = new Todo({
    dayTask: req.body.dayTask,
    taskTime: req.body.taskTime,
    isComplete: req.body.isComplete
  });
  await todo.save();

  res.send(todo);
});

router.put("/:id", async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(
    req.params.id,
    {
      dayTask: req.body.dayTask,
      taskTime: req.body.taskTime,
      isComplete: req.body.isComplete
    },
    { new: true }
  );

  if (!todo)
    return res.status(404).send("The task with the given ID was not found.");
  res.send(todo);
});

router.delete("/:id", async (req, res) => {
  const todo = await Todo.findByIdAndRemove(req.params.id);

  if (!todo)
    return res.status(404).send("The task with the given ID was not found.");

  res.send(todo);
});

router.get("/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo)
    return res.status(404).send("The task with the given ID was not found.");

  res.send(todo);
});

module.exports = router;
