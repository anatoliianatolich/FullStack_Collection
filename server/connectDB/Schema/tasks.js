const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
    user: {
        type:Schema.Types.ObjectId,
        ref:'users',
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    deadline: {
        type: Date
    },
    reminder: {
        type: Date
    }
});
console.log(1);
const Tasks = mongoose.model('Tasks', TaskSchema);

const createTasks = new Tasks({});
