const express = require('express');
const Utils_Buyer = require('../utils/buyer');
const router = express.Router();
var buyer = new Utils_Buyer();


router.post('/send-email', async (req, res) =>{
    await buyer.sendEmail(req.body.listingId, req.body.userId, res);
});

module.exports = router;