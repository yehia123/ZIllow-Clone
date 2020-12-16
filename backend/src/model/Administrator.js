const {Schema, model} = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const AdminSchema = Schema(
    {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    lastLoggedIn: {
        type: Date,
        default: Date.now(),
        required: true
    },
    sessionID: {
        type: String
    }
});

module.exports = model("admin", AdminSchema);
