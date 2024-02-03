const express = require('express')
const rootPath = require('../utils/path')
const path = require('path')
const router = express.Router()

router.get('/users', (req,res, next)=>{    
    res.sendFile(path.join(rootPath, 'views', 'users.html'))
})

router.post('/users', (req,res, next)=>{    
    res.sendFile(path.join(rootPath, 'views', 'users.html'))
})

module.exports = router