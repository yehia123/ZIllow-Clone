const {Schema, model} = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const ListingSchema = Schema(
    {
    sellerId: {
        type: Schema.Types.ObjectId,
        required: false
    },
    addressLine: {
        type: String,
        required: false
    },
    addressCity: {
        type: String,
        required: false
    },
    addressState: {
        type: String,
        required: false
    },
    addressCountry: {
        type: String,
        required: false
    },
    addressZipcode: {
        type: String,
        required: true
    },
    photos: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    sqFT: {
        type: Number,
        required: true
    },
    homeType: {
        type: String,
        enum: ["Attached Single Family", "Detached Single Family", "Apartment", "Townhome"],
        required: true
    },
    bedrooms: {
        type: Number,
        required: true
    },
    bathrooms: {
        type: Number,
        required: true
    },
    pool: {
        type: String,
        enum: ["Yes", "No"],
        required: false
    },
    parkingType: {
        type: String,
        enum: ["Open", "Closed"],
        required: false
    },
    parkingSpaces: {
        type: Number,
        required: false
    },
    flooringType: {
        type: String,
        enum: ["Carpet", "Wooden Flooring"],
        required: false
    },
    listingType: {
        type: String,
        enum: ["Sale", "Rent"],
        required: true
    },
    isPurchaseComplete: {
        type: Boolean,
        default: false
    },
    yearBuilt: {
        type: Date,
        required: false
    },
    otherAmenities: {
        type: String,
        required: false
    },
    openHouseDate: {
        type: String,
        required: false
    },
    openHouseStartTime: {
        type: String,
        required: false
    },
    openHouseEndTime: {
        type: String,
        required: false
    },
    sessionID: {
        type: String
    }
});

module.exports = model("listing", ListingSchema);

//
