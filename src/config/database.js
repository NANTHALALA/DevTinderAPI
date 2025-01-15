const mongoose = require('mongoose');
const connectDb = async()=>{
   await mongoose.connect('mongodb+srv://rnanthalala:wsuJgjHA9rwwYDLX@nodejsproject.jrvfs.mongodb.net/devTinder');
}

module.exports = {connectDb};