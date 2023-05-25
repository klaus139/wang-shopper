const express = require('express')
const dbConnect = require("./config/dbConnect")
const app = express()
const authRouter=require('./routes/authRoute')
const productRouter=require('./routes/productRoute')
const bodyParser = require('body-parser')
const { errorHandler, notFound } = require('./middlewares/errorHandler')
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const PORT = process.env.PORT || 4000;
dbConnect();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan("dev"))
app.use(cookieParser());
app.use('/api/user', authRouter);
app.use('/api/product', productRouter);

//middleware after the routes
app.use(notFound);
app.use(errorHandler)



app.listen(PORT, () => {
    console.log(`server is running at PORT ${PORT}`)
})