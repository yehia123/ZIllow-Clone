const User = require('../model/User');
const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const { deleteUser, deactivateUser, activateUser, deleteListing } = require('../utils/admin');
const Utils_Admin = require('../utils/admin');
const Utils_Listing = require('../utils/listing');

var admin = new Utils_Admin();
var listing = new Utils_Listing();


//Delete User by params
router.post('/deleteUser', async (req, res) => {
    await admin.deleteUser(req.body, res);
});


//deactivate a User by params
router.post('/deactivateUser', async (req, res) => {
    await admin.deactivateUser(req.body, res);
});


//deactivate a User by params
router.post('/activateUser', async (req, res) => {
    await admin.activateUser(req.body, res);
});


//Delete Listing by params
router.post('/deleteListing', async (req, res) => {
    await listing.deleteListing(req.body, res);
});


module.exports = router;
