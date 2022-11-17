// import express and get router
const User = require('../../Models/UserModel');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose')
const { GridFSBucket } = require('mongoose').mongo
const mongodb = require('mongodb')
const jwt = require('jsonwebtoken');
const express = require("express");
const router = express.Router();
const multer = require('multer');
const Grid = require('gridfs-stream');
const { GridFsStorage } = require('multer-gridfs-storage');
const url = process.env.DATABASE



const db = mongoose.connect(process.env.MONGO_URI)

const storage = new GridFsStorage({
    db: db,
    file: (req, file) => {
        return {
            filename: file.originalname
        }
    }
});
const upload = multer({ storage: storage })

// POST
// /api/register/add
router.post("/add", (req, res) => {
    console.log("In /api/register/add post route")
    res.send("Register Route");
});

const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;


router.post('/getImage', (req, res) => {
    console.log("In profile picture route")

    const { email, imageID } = req.body
    console.table({ email, imageID })

    const o_id = mongodb.ObjectId(imageID)

    let gfs, gridfsBucket;

    gridfsBucket = new GridFSBucket(mongoose.connection.db, {
        bucketName: 'fs'
    });
    gfs = new Grid(mongoose.connection.db, mongodb)
    gfs.collection('fs');

    if (gfs) {
        console.log(`gfs stream created!`)
    } else {
        console.log(`gfs failed`)
        return
    }

    mongoose.connection.db.collection('fs.files').findOne({ _id: o_id }).then((data) => {

        if (!data) {
            console.log("No image found")
            return res.status(404).json({
                message: "Could not find file chunks"
            });
        }
        console.log("File found!")
        console.log(data.filename)
        console.log(data._id)

        mongoose.connection.db.collection('fs.chunks').find({ files_id: o_id }).toArray((err, files) => {
            if (!files || files.length === 0) {
                return res.status(404).json({
                    message: "Could not find file chunks"
                });
            }

            res.set('Content-Type', data.contentType);
            res.set('Content-Disposition', "attachment; filename=" + data.filename);

            var download_stream = gridfsBucket.openDownloadStream(o_id);
            download_stream.pipe(res);
        })

    });
})

router.post("/signUp", upload.single('image'), (req, res, next) => {
    // console.log(req.body)
    // console.log(req.file)
    const id = req.file.id.toString()
    console.log(id)
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
                    profileImage: req.file.filename,
                    imageID: id
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