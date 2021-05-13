/**
 * Primary chatroom endpoint - NO TEMPLATE
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log('sending room');
    res.set('Cache-control', 'no-store')
    res.sendFile('node-chat/chatroom.html', { root: '../' });
});

module.exports = router;
