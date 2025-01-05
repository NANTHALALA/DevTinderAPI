const express = require('express');

const app = express();

app.use('/',(req,res)=>{
    res.end("Home Page is loaded...");
});

app.listen(8080, ()=>{
    console.log("Server started listening...");
});