require('dotenv').config()
const { createServer } = require('http')
const express = require('express')
const server = express()
const socketIo = require('socket.io')

const UploadRoutes = require('./routes/uploadRoutes')
const UserRoutes = require('./routes/userRoutes')
const url = require('url')

const io = socketIo(createServer(server), {
    cors: {
        origin: '*',
        credentials: false
    }
})

io.on('connection', socket => console.log(`Someone connected: ${socket.id}`))

server.use(UploadRoutes)
server.use(UserRoutes)

server.listen(process.env.PORT, ()=>{
    console.log(`App running at http://localhost:${process.env.PORT}`)
})

module.exports = server