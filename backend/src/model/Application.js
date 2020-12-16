const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const ApplicationSchema = Schema(
    {
        listingId: {
            type: Schema.Types.ObjectId,
            required: true
        },
        userId: {
            type: Schema.Types.ObjectId,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        applicationType: {
            type: String,
            enum: ["Buy", "Rent", "Tour"],
            required: true
        },
        employmentInfo: {
            type: String,
            required: false
        },
        creditScore: {
            type: String,
            required: false
        },
        message: {
            type: String,
            required: false
        },
        scheduleDate: {
            type: Date,
            required: false
        },
        reviewStatus: {
            type: String,
            enum: ["Approved", "Rejected", "UnderReview"],
            required: false
        },
        createdOn: {
            type: Date,
            default: Date.now(),
            required: true
        },
        sessionID: {
            type: String
        }
    });

module.exports = model("application", ApplicationSchema);
