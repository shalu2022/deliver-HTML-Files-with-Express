const express = require('express')
const router = express.Router()
const rootPath = require('../utils/path')
const path = require('path')

router.get('/', (req,res, next)=>{    
  res.sendFile(path.join(rootPath, "views", "home.html"))
 })

module.exports = router