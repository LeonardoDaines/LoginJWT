require('dotenv').config();;
const express = require('express');
const app = express();
const userRouter = require('./routes/UserRouter')
const adminRouter = require('./routes/adminRouter')
const mongoose = require('mongoose');

mongoose.connect(process.env.MOGNO_CONNECTION_URL, 
    {useNewUrlParser: true,
     useUnifiedTopology: true}
)

app.use('/user', express.json(), userRouter);

app.use('/admin', express.json(), adminRouter)

app.listen(process.env.PORT, () => {console.log("server rodando")})

