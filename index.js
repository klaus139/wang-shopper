const express = require('express')
const dbConnect = require("./config/dbConnect")
const app = express()
const authRouter=require('./routes/authRoute')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 4000;
dbConnect();


app.use('/', (req, res)=> {
    res.send("Hello from the server side")
})

app.use('/api/user', authRouter)


app.listen(PORT, () => {
    console.log(`server is running at PORT ${PORT}`)
})