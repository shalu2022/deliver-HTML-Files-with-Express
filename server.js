const express = require("express")
const path = require('path');
const authRoutes = require('./routes/auth')
const usersRoutes = require('./routes/users')
const rootPath = require('./utils/path')

const app = express()
app.use(express.static(path.join(__dirname, "public")))
app.use(authRoutes)
app.use('/users', usersRoutes)

app.use((req,res)=>{
    res.sendFile(path.join(rootPath, "views", "pageNotFind.html"))
})

app.listen(3000,()=>{
    console.log("app is listening>>>>")
})