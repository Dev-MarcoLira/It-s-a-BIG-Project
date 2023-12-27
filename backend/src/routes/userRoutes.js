const router = require('express').Router()
const UserController = require('../controllers/userController')

router.get('/users', (req, res)=>{

    res.end('Hello')

})

router.post('/users', UserController.post)

module.exports = router