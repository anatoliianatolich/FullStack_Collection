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

const createTasks = new Tasks({
    user: 'test',
    title: 'test',
    description: 'test',
    deadline: '2019-03-15T07:26:20.510Z',
    reminder: '2019-03-14T07:26:20.510Z'
});

createTasks.save((err)=> {
    if(err) throw err;
    console.log('success write task in DB');
});
