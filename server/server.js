const express = require('express')
const cors = require('cors')

require("dotenv").config({ path: "./config.env" });

//importing routes
const TestRoute = require('./api/routes/TestRoute')
const LoginRoute = require("./api/routes/login.js")
const RegisterRoute = require ("./api/routes/register.js")

const PORT = process.env.PORT || 8001; // these will be set up with a .env file for everyone's unique dev environment
const MONGO_URI = process.env.MONGO_URI;

const server = express();

server.use(cors())
server.use(express.json());

//routes
server.use('/api/test/', TestRoute)
server.use('/api/login/', LoginRoute)
server.use('/api/register/', RegisterRoute)


//login
server.get('/login', (req, res) => {
	res.send('temporary text for login route')
})

//register
server.get('/register', (req, res) => {
	res.send('temporary text for register route')
})

//catch-all
server.get('/*', (req, res) => {
	res.send('catch-all, check intended route')
})

server.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`)
})