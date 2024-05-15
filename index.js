const express = require ("express")
// const bodyParser = require("body-parser")
const route = require('./Routes/routes')


const app=express()
// app.use(bodyParser.json({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get('/display',(req,res)=>{
    res.send("server running ")
})


app.use('/users',route)

app.listen(process.env.PORT || 5000,()=>{
    console.log('server conected 5000');
})