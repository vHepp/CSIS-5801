// import express and get router
const express = require("express");
const router = express.Router();

// POST
// /api/register/add
router.post("/add", (req, res) => {
    console.log("In /api/register/add post route")
    res.send("Register Route");
});

// import the router
module.exports = router;