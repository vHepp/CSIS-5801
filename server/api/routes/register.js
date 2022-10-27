// import express and get router
const express = require("express");
const router = express.Router();

// handle requests for "/register"
router.get("/register", (req, res) => {
    res.send("Register Route");
});

// import the router
module.exports = router;