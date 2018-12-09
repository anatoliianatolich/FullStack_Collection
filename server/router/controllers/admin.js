const express = require("express");
const router = express.Router();

const {adminPage, allUsers, User, updatePass, updateUser, deleteUser} = require("../method/admin/admin")


router
    .get("/", adminPage)
    .get("/allUser", allUsers)
    .get("/:user", User)
    .put("/rename", updateUser)
    .put("/:email", updatePass)
    .delete("/:email", deleteUser)

module.exports = router;