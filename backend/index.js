const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/config');
const {errorHandler} = require('./middleware/errorMiddleware');

const userRoute = require('./routes/userAuth');
const boardRoute = require('./routes/boardRoute');
const cardRoute = require('./routes/cardRoute');



//include to top .envconfig.... cumpulsary...
dotenv.config();

//connecting to MongoDB
connectDB();

const app = express();
app.use(express.json()); // middleware of body parser

const port = process.env.PORT;

app.use(cors());
app.get('/',(req,res)=>{
    res.send('<h2>Wellcome to Node Server</h2>')
});

//All Routes include here
app.use('/api/auth',userRoute);
app.use('/api/board',boardRoute);
app.use('/api/card',cardRoute);

// ..........end route.........

app.use(errorHandler);
app.listen(port,()=>{
    console.log(`Server Running on Port : ${port}`);
})