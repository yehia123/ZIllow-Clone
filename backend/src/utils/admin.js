const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const User = require('../model/User');
const Listing = require('../model/Listing');


class Utils_Admin {

    async deleteUser (params, res) {
        try {
            let user = await User.findOneAndDelete(params).exec();
            if (user) {
                return res.status(200).json({
                    message: "User Deleted!",
                    success: true
                });
            } else {
                return res.status(500).json({
                    message: "User not found",
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


    async deactivateUser (params, res) {
        try {
            let user = await User.findOneAndUpdate(params, { isActive: false }).exec();
            console.log(user);
            if(user){
                return res.status(200).json({
                    message: "User Deactivated!",
                    success: true
                });
            } else{
                return res.status(500).json({
                    message: "User not found",
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


    async activateUser (params, res) {
        try {
            let user = await User.findOneAndUpdate(params, { isActive: true }).exec();
            console.log(user);
            if (user) {
                return res.status(200).json({
                    message: "User Activated!",
                    success: true
                });
            } else {
                return res.status(500).json({
                    message: "User not found",
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

module.exports = Utils_Admin;
