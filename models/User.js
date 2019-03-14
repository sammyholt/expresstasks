const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        default: Date.now  
    },
    password: {
        type: String,
        required: true
    }
});

UserSchema.plugin(uniqueValidator);

mongoose.model('users', UserSchema);