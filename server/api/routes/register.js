// import express and get router
const express = require("express");
const router = express.Router();

// GET
// /api/register/add
router.get("/add", (req, res) => {
    res.send("Register Route");
});

// import the router
module.exports = router;