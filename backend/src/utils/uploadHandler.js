function uploadHandler(req, res){

    res.writeHead(204)
    res.end(JSON.stringify({ status: 'File uploaded' }))

}

module.exports = uploadHandler