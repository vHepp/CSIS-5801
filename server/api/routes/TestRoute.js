const express = require("express");
const route = express.Router();

//localhost:{PORT}/api/test/*
route.get('/*', (req, res) => {
	res.send("TestRoute catch-all")
})

module.exports = route