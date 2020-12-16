const bcrypt = require('bcryptjs');
const User = require('../model/User');
const Listing = require('../model/Listing');
const jwt = require('jsonwebtoken');

const SECRET = require('../helpers/settings').secretOrKey;


class Utils_Auth {
    // register users
    async userRegister(userRegister, res) {
        try {

        const email = userRegister.email;
        const name = userRegister.name;
        const role = userRegister.role;

        // let email = await validateEmail(emailTwo);
        // if(!email){
        //     return res.status(400).json({
        //         message: "Email is used",
        //         success: false
        //     });
        // }

        const password = await bcrypt.hash(userRegister.password, 12);

        const newUser = new User({
          name,
          email,
          password,
          role
        });

        newUser.save();

        return res.status(200).json({
            message: "User registered!",
            success: true
        });
        } catch(err) {
            console.log("error")
            console.log(err)
            return res.status(500).json({
                message: "something went wrong",
                success: false
            });
        }

    };

    async userLogin(userLogin, res) {
        let { name, email, password} = userLogin;
        const user = await User.findOne({ email });
        if(!user) {
            return res.status(404).json({
                message: "Email or password not correct, please check again",
                success: false
            });
        }
        // We can add here the role choices to where to direct etc
        let isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            let token = jwt.sign({
                user_email: user.email
            },
            SECRET,
            { expiresIn: "1 day"}
            );
            let result = {
                redirect: "/",
                user: user,
                email: user.email,
                token,
                expiresIn: 24
            };

            return res.status(200).json({
                ...result,
                message: "You are logged in!",
                success: true
            })

        } else {
            return res.status(404).json({
                redirect: "/login",
                message: "Email or password not correct, please check again",
                success: false
            });
        }
    }

    async validateEmail(email) {
        let user = await User.findOne({ email });
        return user ? false : true;
    }

    async favoriteListing(userId, listingId, res) {
        const user = await User.findById(userId);
        const listing = await Listing.findById(listingId);
        user.favorite.push(listing)
        await user.save();
        if (user !== undefined) {
            return res.status(200).json({
                message: "Listing Favorited!",
                status: "success"
            });
        } else {
            return res.status(500).json({
                message: "No record found",
                status: "error"
            });
        }
    }

// check for jwt authentication header
    async checkToken (req, res, next) {
        const header = req.headers['authorization'];
        console.log(header);
        if(typeof header !== 'undefined') {
            const bearer = header.split(' ');
            const token = bearer[1];

            req.token = token;
            next();
        } else {
            //If header is undefined return Forbidden (403)
            res.sendStatus(403)
        }
    }


};

module.exports = Utils_Auth;
