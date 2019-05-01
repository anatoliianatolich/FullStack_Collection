const express = require("express");
const RouterTask = express.Router();
const findAllTask = require("../method/task/findAllTask");
const addTask = require("../method/task/addTask");

RouterTask
    .get("/", findAllTask)
    .post("/", addTask)
    // .put("/", updateTask)
    // .delete("/", deleteTask);

module.exports = RouterTask;


