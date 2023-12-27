const url = require('url')

const upload = require('../config/multer')
const uploadHandler = require('../utils/uploadHandler')
const router = require('express').Router()

router.post('/upload', upload.single('file'), uploadHandler)

module.exports = router