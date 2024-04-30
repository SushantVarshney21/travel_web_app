const mongoose = require('mongoose');

require('dotenv').config()


const connectToMongo = ()=>{
    mongoose.connect("mongodb+srv://purvisharma09042002:purpra123098@cluster0.ssz7n1h.mongodb.net/")
    .then(success => console.log('Purvi Connect To Mongo Successfully'))
}


module.exports = connectToMongo;
