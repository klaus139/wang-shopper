const express = require('express')
const dbConnect = require("./config/dbConnect")
const app = express()
const authRouter=require('./routes/authRoute')
const productRouter=require('./routes/productRoute')
const blogRouter = require('./routes/blogRoute');
const categoryRouter = require('./routes/productcategoryRoute')
const blogCatRouter = require('./routes/blogCatRoute');
const brandRouter = require('./routes/brandRoute');
const couponRouter = require('./routes/couponRoute');
const colorRouter = require('./routes/colorRoute');
const enqRouter = require('./routes/enqRoute');
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
app.use('/api/blog', blogRouter);
app.use('/api/category', categoryRouter);
app.use('/api/blogcategory', blogCatRouter );
app.use('/api/brand', brandRouter);
app.use('/api/color', colorRouter);
app.use('/api/coupon', couponRouter );
app.use('/api/enquiry', enqRouter);

//middleware after the routes
app.use(notFound);
app.use(errorHandler)



app.listen(PORT, () => {
    console.log(`server is running at PORT ${PORT}`)
})