const express = require('express')
const router = express.Router()

const ModelName = require('../models/modelName')

router.get('/', (req, res, next) => {
  res.render('home', null)
})

module.exports = router