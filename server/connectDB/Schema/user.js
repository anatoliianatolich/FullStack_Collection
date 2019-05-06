const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcrypt');

//const UserSchema = new mongoose.Schema() - альтернативний варіант
const UserSchema = new Schema({
    email: {
        type: String,
        unique:true,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        select: false,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    signUpDate: {
        type: Date,
        default: Date.now()
    },
    update: {
      type: Date,
      default: Date.now()
    },
    role: {
        type: String,
        default: 'user'
    },
    avatar: {
        type: String,
        default: null
    },
    pictureProfile: Buffer,
    task: [{
        type: Schema.Types.ObjectId,
        ref: "Task"
    }]
});
UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', UserSchema, 'users');
