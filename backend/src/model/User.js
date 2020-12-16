const {Schema, model} = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const UserSchema = Schema(
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
    role: {
        type: String,
        enum: ["Buyer", "Seller", "Landlord", "Renter", "Realtor", "Admin"],
        required: true
    },
    lastLoggedIn: {
        type: Date,
        default: Date.now(),
        required: true
    },
    registeredOn: {
        type: Date,
        default: Date.now(),
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    sessionID: {
        type: String
    },
    favorite: [{
        type: Schema.Types.ObjectId,
        ref: 'listing'
    }]
});

module.exports = model("users", UserSchema);


// userId: {
//     type: Schema.Types.ObjectId,
//     ref: 'listing',
//     required: true
// },
