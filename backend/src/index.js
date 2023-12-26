const http = require('http')
const socketIo = require('socket.io')

const { logger } = require('./utils/index')
const Routes = require('./routes/index')

const PORT = 3030

const handler = function(request, response){

    const defaultRoute = (req, res) => res.end('Hello!')
    
    const routes = new Routes(io)
    const chosen = routes[request.method.toLowerCase()] || defaultRoute

    return chosen.apply(routes, [ request, response ])
}


const server = http.createServer(handler)
const io = socketIo(server, {
    cors: {
        origin: '*',
        credentials: false
    }
})

io.on('connection', socket => logger.info(`Someone connected: ${socket.id}`))

server.listen(PORT, ()=>{
    const { address, port} = server.address()
    logger.info(`App running at http://${address}:${port}`)
})