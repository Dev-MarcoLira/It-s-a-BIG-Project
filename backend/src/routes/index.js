const url = require('url')
const UploadHandler = require('../utils/uploadHandler')
const { pipelineAsync, logger } = require('../utils/index')

class Routes{

    #io

    constructor(socket){
        this.#io = socket
    }

    async options(request, response){
        response.writeHead(204, {
            'Acess-Control-Allow-Origin': '*',
            'Acess-Control-Allow-Origin': 'OPTIONS, POST'
        })

        response.end()
    }

    async post(request, response){

        const { headers } = request

        const { query: { socketId } } = url.parse(request.url, true)
        const redirectTo = headers.origin

        const uploadHandler = new UploadHandler(this.#io, socketId)

        const onFinish = (response, redirectTo) => {
            response.writeHead(303, {
                Connection: 'close',
                Location: `${redirectTo}?msg=Files uploaded with success!`
            })

            response.end()
        }

        const busboyInstance = uploadHandler.registerEvents(headers, onFinish(response, redirectTo))

        await pipelineAsync(request, busboyInstance)

        logger.info('Request finished with success!')
    }
}

module.exports = Routes