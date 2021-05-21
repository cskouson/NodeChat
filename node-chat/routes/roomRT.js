/**
 * Primary chatroom endpoint - NO TEMPLATE
 */

const express = require('express');
const router = express.Router();
const User = require('../models/User');

/* GET home page. */
router.post('/', function (req, res, next) {
    console.log('sending user to db');
    console.log(req.body);
    
    let newuser = new User({
        username: req.body.uname,
        password: req.body.pword
    });
    newuser.save()
        .catch(err => {
            console.log('~~~~ DB SAVE ERROR ~~~~')
        });

    res.set('Cache-control', 'no-store')
    res.sendFile('node-chat/chatroom.html', { root: '../' });
});

module.exports = router;
