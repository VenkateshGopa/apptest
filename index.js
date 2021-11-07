const express = require('express');
const app = express()

const port = process.env.port || 3000

app.get('/', (req, res) =>{
    try{
    res.send("welcome!")
    }
    catch{
        res.send()
    }
})
app.listen( port , ()=>{
    console.log('server is up on ' + port);
})