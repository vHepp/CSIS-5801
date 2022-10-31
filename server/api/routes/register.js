// import express and get router
const User = require('../../Models/UserModel');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');
const express = require("express");
const router = express.Router();
const multer = require('multer');
const Grid = require('gridfs-stream');
const { GridFsStorage } = require('multer-gridfs-storage');

const url = process.env.DATABASE
const db = mongoose
    .connect(process.env.MONGO_URI, {

    })

const storage = new GridFsStorage({
    db: db,
    file: (req, file) => {
        return {
            filename: file.originalname
        }
    } });
const upload = multer({ storage: storage })

// GET
// /api/register/add
router.get("/add", (req, res) => {
    res.send("Register Route");
});

const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

router.post("/signUp", upload.single('image'), (req, res, next) => {
        console.log(req.body)
        console.log(req.file)
        let { name, email, password, password_confirmation } = req.body;
        let errors = [];
        if (!name) {
            errors.push({ name: "required" });
        }
        if (!email) {
            errors.push({ email: "required" });
        }
        if (!emailRegexp.test(email)) {
            errors.push({ email: "invalid" });
        }
        if (!password) {
            errors.push({ password: "required" });
        }
        if (!password_confirmation) {
            errors.push({
                password_confirmation: "required",
            });
        }
        if (password != password_confirmation) {
            errors.push({ password: "mismatch" });
        }
        if (errors.length > 0) {
            return res.status(422).json({ errors: errors });
        }
        User.findOne({ email: email })
            .then(user => {
                if (user) {
                    return res.status(422).json({ errors: [{ user: "email already exists" }] });
                } else {
                    const user = new User({
                        displayName: name,
                        email: email,
                        password: password,
                        profileImage: req.file.filename
                    });
                    console.log(user)
                    bcrypt.genSalt(10, function (err, salt) {
                        bcrypt.hash(password, salt, function (err, hash) {
                            if (err) throw err;
                            user.password = hash;
                            
                            
                            user.save()
                                .then(response => {
                                    res.status(200).json({
                                        success: true,
                                        result: response
                                    })
                                })
                                .catch(err => {
                                    res.status(500).json({
                                        errors: [{ error: err }]
                                    });
                                });
                        });
                    });
                }
            }).catch(err => {
                res.status(500).json({
                    errors: [{ error: 'Something went wrong' }]
                });
            })
    

})

// import the router
module.exports = router;