const mongoose = require("mongoose");
const {Schema} = mongoose;

const taskSchema = new Schema({

});

module.exports = mongoose.model('task', taskSchema);
