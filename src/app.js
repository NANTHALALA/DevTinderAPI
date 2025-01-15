const express = require('express');
const {adminAuth, userAuth} = require('./middleware/auth');
const {connectDb} = require('./config/database');
const User = require('./models/user');

const app = express();

connectDb().then(()=>{
    console.log("Connection Established successfully...");
    app.listen('8080',()=>{
        console.log("Server is listening for requests...");
    }); // Should listen only after connection is established.
})
.catch(()=>{
    console.error("Error in the DB connection...");
});

app.post('/signup', async(req,res)=>{
    const userObj = new User({
        firstName: 'Nantha',
        lastName: 'Rengadurai',
        emailId: 'nantha@gmail.com',
        password: 'nantha@123'
    });

    try {
    await userObj.save();
    res.send("User data added successfully!!");
    } catch(err){
        res.status(400).send('Error saving the user...' + err.message);
    }
});

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
});