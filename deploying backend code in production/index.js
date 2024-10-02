require('dotenv').config()

// require module syntax 
const express = require('express')
// import express from "express" - same as above

//basic syntax, will be used at many places
const app = express()
const port = 3000

app.get('/', (req,res)=>{
    res.send('Hello World')
})

app.get('/twitter', (req,res) => {
    res.send("hi! im twitter")
})

app.get('/login',(req,res)=>{
    res.send('<h1>HI LOGIN PAGE</h1>')
})

app.get('/youtube', (req,res)=>{
    res.send("<h2>sneha guptaaaa </h2>")
})

app.listen(process.env.PORT,()=>{
    console.log(`example app listening on port ${port}`)
})