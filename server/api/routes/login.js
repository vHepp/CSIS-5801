// import express and get router
const express = require("express");
const router = express.Router();

// handle requests for "/login"
router.get("/login", (req, res) => {
    res.send("Login Route");
});

// import the router
module.exports = router;