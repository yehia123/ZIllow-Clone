const express = require("express");
const router = express.Router();
const Utils_Application = require('../utils/application');
var application = new Utils_Application();

//Submit Buy application
router.post('/submitForBuy', async (req, res) => {
    await application.submitForBuy(req.body, res);
});


//Submit Rent application: LEASE APPPLICATION REQUIREMENT
router.post('/submitForRent', async (req, res) => {
    await application.submitForRent(req.body, res);
});


//Schedule a tour
router.post('/scheduleATour', async (req, res) => {
    await application.scheduleATour(req.body, res);
});


//Approve application
router.post('/approveApplication', async (req, res) => {
    await application.approveApplication(req.body, res);
});

//Reject application
router.post('/rejectApplication', async (req, res) => {
    await application.rejectApplication(req.body, res);
});

//List application by listing Id
router.get('/getApplications', async (req, res) => {
    await application.getApplications(req.body, res);
});

module.exports = router;
