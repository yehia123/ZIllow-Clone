const express = require('express');
const router = express.Router();
const Utils_Listing = require('../utils/listing');
var listing = new Utils_Listing();

//GET Listing by multiple parameters
router.post('/', async (req, res) => {
    //console.log(req);
    //console.log("serch req: " + req);
    const searchQuery = req.body;
    console.log("serch query: " + searchQuery);
    await listing.searchQuery(searchQuery, res);
});


module.exports = router;
