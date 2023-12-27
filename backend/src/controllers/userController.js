
module.exports = {

    post(req, res){

        res.end(JSON.stringify(req.url))

    }

}