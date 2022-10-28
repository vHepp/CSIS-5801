// import express and get router
const express = require("express");
const router = express.Router();

// GET
// /api/login/login
router.get("/login", (req, res) => {
    console.log("In /Login get route")
    res.send("Login get Route");
});

// POST
// /api/login/login
router.post("/login", (req, res) => {
    console.log("In /Login post route")
    res.send("Login post Route");
});

// import the router
module.exports = router;