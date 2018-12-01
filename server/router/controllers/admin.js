const express = require("express");
const router = express.Router();


router
    .get("/", adminPage)
    .get("/all", allUsers)
    .post("/:id", user)
    .put("/:id", updateUser)
    .delete("/:id", deleteUser)

module.exports = router;