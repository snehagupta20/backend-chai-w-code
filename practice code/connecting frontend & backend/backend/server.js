// require('dotenv').config()
import 'dotenv'
import express from "express";

const app = express();

// app.get('/',(req,res)=>{
//     res.send("server is ready :)");
// })

app.get('/jokes', (req,res)=>{
    const jokes=[
        {
            id:1,
            title: 'my grief counselor',
            content:'My grief counselor died. He was so good, I don’t even care.'
        },
        {
            id2:2,
            title:'husband & wife',
            content:'A man wakes from a coma. His wife changes out of her black clothes and, irritated, remarks, “I really cannot depend on you in anything, can I!”'
        },
        {
            id:3,
            titile:'tour guide',
            content:'As I get older, I remember all the people I lost along the way. Maybe my budding career as a tour guide was not the right choice.'
        },
        {
            id:4,
            title:'dark asf',
            content:'I was digging in our garden and found a chest full of gold coins. I wanted to run straight home to tell my wife about it. Then I remembered why I was digging in our garden.'
        },
        {
            id:5,
            title:'last joke',
            content:'What does my dad have in common with Nemo? They both can’t be found.'
        }

    ];
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`serve at ${port}`)
})