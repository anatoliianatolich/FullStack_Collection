const express = require("express");
const handlerComment = express.Router();
const allComment = require('../method/comment/getComments');
const createComment = require('../method/comment/newComments');
const deleteComment = require('../method/comment/deleteComment');

handlerComment
    .get('/', allComment)
    .post('/', createComment)
    .delete('/:id', deleteComment)

module.exports = handlerComment;