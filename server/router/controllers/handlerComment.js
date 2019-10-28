const express = require("express");
const handlerComment = express.Router();
const allComment = require('../method/comment/getComments');
const createComment = require('../method/comment/newComments');

handlerComment
    .get('/', allComment)
    .post('/', createComment)

module.exports = handlerComment;