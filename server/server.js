const express = require('express')
const cors = require('cors')

const PORT = 8000;

const server = express();

server.use(cors())

server.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`)
})