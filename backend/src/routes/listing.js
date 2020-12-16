const express = require("express");
const router = express.Router();
const Utils_Listing = require('../utils/listing');
var listing = new Utils_Listing();

//Create new Listing
router.post('/', async (req, res) => {
    await listing.createNew(req.body, res);
});


//GET Listing by parameter
router.get('/', async (req, res) => {
    await listing.findByParams(req.body, res);
});


//Update Listing by listingId
router.post('/update', async (req, res) => {
    console.log(req.body._id);
    await listing.updateById(req.body._id, req.body, res);
    //await listing.updateById(req.query.listingId, req.body, res);
});


//GET Listing by _id
router.get('/:listingId', async (req, res) => {
    console.log("route find");
    console.log(req.params);
    await listing.findById(req.params.listingId, res);
});

module.exports = router;
