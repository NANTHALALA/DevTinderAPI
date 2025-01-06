const express = require('express');
const {adminAuth, userAuth} = require('./middleware/auth');

const app = express();

app.use('/admin',adminAuth);

app.get('/admin/getAllUser', (req,res)=>{
    res.send('All User Data sent!');
  // throws.newError("XYZ");
});

app.get('/admin/getAllUsers', (req,res)=>{
    res.send('All Usersss Data sent!');
  // throws.newError("XYZ");
});

app.use('/', (err,req,res,next)=>{
    if(err){
    res.status(500).send("Something went wrong...");
    }
})

app.listen('8080',()=>{});