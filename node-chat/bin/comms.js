/**
 * comms.js
 * Description: this file will handle socket.io and mongodb communication
 */

//mongodb communications
const mongoose = require('mongoose');
require('dotenv').config({path: __dirname+'/../config.env'});

//db connect
const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.DB_CONNECT, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        
        console.log(`MongoDB Connected: ${conn.connection.host}`);

    } catch (err){
        console.log('what are you doing???');
        process.exit(1);
    }
}
connectDB();

//socket.io controller/handler
module.exports = function (io) {
    io.on('connection', socket => {
        console.log('<< New connection >>');
        //welcome msgs
        socket.emit('status', 'Welcome to the room!');
        socket.broadcast.emit('status', 'A new user has joined!');

        //user sent a msg
        socket.on('message', data => {
            console.log(data);
            socket.broadcast.emit('message', data);
        });

        //user disconnects
        socket.on('disconnect', () => {
            io.emit('status', 'Someone left the room!');
        });
    });
}//end socket.io controller ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

