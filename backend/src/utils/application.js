const mongoose = require('mongoose');
const Application = require('../model/Application');

class Utils_Application {
    async submitForBuy(params, res) {
        console.log(params);
        console.log(params.message);
        //applicationId: new mongoose.Types.ObjectId(), removed from below
        const newApplication = new Application({
            listingId: params.listingId,
            userId: params.userId,
            name: params.name,
            email: params.email,
            phone: params.phone,
            message: params.message, //message: include your price and timeline for purchase
            applicationType: "Buy",
            reviewStatus: "UnderReview"
        });

        try {
            await newApplication.save();
            return res.status(200).json({
                message: "Buy Application submitted!",
                success: true
            });
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                message: "something went wrong",
                success: false
            });
        }
        res.end();
    }

    //applicationId: new mongoose.Types.ObjectId(), removed from below
    async submitForRent(params, res) {
        console.log(params);
        const newApplication = new Application({
            listingId:  params.listingId,
            userId: params.userId,
            name: params.name,
            email: params.email,
            phone: params.phone,
            message: params.message,
            employmentInfo: params.employmentInfo,
            creditScore: params.creditScore,
            applicationType: "Rent",
            reviewStatus: "UnderReview"
        });

        try {
            await newApplication.save();
            return res.status(200).json({
                message: "Rent Application submitted!",
                success: true
            });
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                message: "something went wrong",
                success: false
            });
        }
        res.end();
    }

    //applicationId: new mongoose.Types.ObjectId(), removed from below
    async scheduleATour(params, res) {
        console.log(params);
        const newApplication = new Application({
            listingId: params.listingId,
            userId: params.userId,
            name: params.userId,
            email: params.email,
            phone: params.phone,
            scheduleDate: params.scheduleDate,
            applicationType: "Tour"
        });

        try {
            await newApplication.save();
            return res.status(200).json({
                message: "Schedule request submitted!",
                success: true
            });
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                message: "something went wrong",
                success: false
            });
        }
        res.end();
    }

    async approveApplication(params, res) {
        console.log(params);
        try {
            let application = await Application.findOneAndUpdate(params, { reviewStatus: "Approved" }).exec();
            console.log(application);
            if (application) {
                return res.status(200).json({
                    message: "Application Approved!",
                    success: true
                });
            } else {
                return res.status(500).json({
                    message: "Application not found",
                    success: false
                });
            }
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                message: "something went wrong",
                success: false
            });
        }
        res.end();
    }

    async rejectApplication(params, res) {
        console.log(params);
        try {
            let application = await Application.findOneAndUpdate(params, { reviewStatus: "Rejected" }).exec();
            console.log(application);
            if (application) {
                return res.status(200).json({
                    message: "Application Rejected!",
                    success: true
                });
            } else {
                return res.status(500).json({
                    message: "Application not found",
                    success: false
                });
            }
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                message: "something went wrong",
                success: false
            });
        }
        res.end();
    }

    async getApplications(params, res) {
        if (!(('listingId' in params) || ('userId' in params))) {
            return res.status(404).json({
                message: "Must provide either listingId or userId.",
                success: false
            });
        }
        try {
            let application = await Application.find(params).exec();
            if (application.length > 0) {
                return res.status(200).json({
                    message: "Application(s) found!",
                    success: true,
                    data: application
                });
            } else {
                return res.status(404).json({
                    message: "Application(s) not found!",
                    success: false
                });
            }
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                message: "something went wrong",
                success: false
            });
        }
        res.end();
    }
}


module.exports = Utils_Application;
