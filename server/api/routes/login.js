// import express and get router
const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../Models/UserModel');

// GET
// /api/login/login
router.get("/login", (req, res) => {
    console.log("In /api/login/login get route")
    res.send("Login get Route");
});

// POST
// /api/login/login
const {
    createJWT,
} = require("../../utils/auth");
const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
router.post('/login', (req, res) => {
    let { email, password } = req.body;
    console.log(req.body)
    let errors = [];
    if (!email) {
        errors.push({ email: "required" });
    }
    if (!emailRegexp.test(email)) {
        errors.push({ email: "invalid email" });
    }
    if (!password) {
        errors.push({ passowrd: "required" });
    }
    if (errors.length > 0) {
        return res.status(422).json({ erros: errors });
    }
    User.findOne({ email: email }).then(user => {
        if (!user) {
            return res.status(404).json({
                errors: [{ user: "not found" }],
            });
        } else {
            bcrypt.compare(password, user.password).then(isMatch => {
                if (!isMatch) {
                    return res.status(400).json({
                        errors: [{
                            password:
                                "incorrect"
                        }]
                    });
                }
                let access_token = createJWT(
                    user.email,
                    user._id,
                    3600
                );
                jwt.verify(access_token, process.env.TOKEN_SECRET, (err,
                    decoded) => {
                    if (err) {
                        res.status(500).json({ errors: err });
                    }
                    console.log('here')
                    if (decoded) {
                        return res.status(200).json({
                            success: true,
                            token: access_token,
                            message: user
                        });
                    }
                });
            }).catch(err => {
                res.status(500).json({ errrs: err });
            });
        }
    }).catch(err => {
        res.status(500).json({ erros: err });
    });
})

// import the router
module.exports = router;