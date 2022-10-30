// import express and get router
const express = require("express");
const router = express.Router();

// GET
// /server/api/signup/
router.post("/signup", (req, res) => {
    res.send("Signup Route");
});

// import the router
module.exports = router;