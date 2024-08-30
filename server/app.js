
const express=require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app=express();

app.use(express.json());

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true
}));

app.use(cookieParser());

app.use('/ping',(req,res)=>{
    res.send('Pong');
})

//3 routes config

app.all('*',()=>{
    res.status(404).send('OOPS!! 404 Page not Found');
})

module.exports = app;