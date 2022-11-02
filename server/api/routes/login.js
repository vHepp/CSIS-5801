// import express and get router
const express = require("express");
const router = express.Router();

// GET
// /api/login/login
router.get("/login", (req, res) => {
    console.log("In /api/login/login get route")
    res.send("Login get Route");
});

// POST
// /api/login/login
router.post("/login", (req, res) => {
    console.log("In /api/login/login post route")

    const { username, password } = req.body

    console.log(`username: ${username}`)
    console.log(`password: ${password}`)

    let results = {
        username: username,
        password: password
    }

    res.json(results);
});

// import the router
module.exports = router;