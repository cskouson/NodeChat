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
    
    //check current db - to be removed
    User.find({}, function(err, result){
        if(err){
            console.log('db fetch error');
        } else{
            console.log(result);
        }
    });

    //add new user - to be removed
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
