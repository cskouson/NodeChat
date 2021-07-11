/**
 * 
 */

const socket = io();

//room status
socket.on('status', data => {
    console.log(data);
});

//incoming message listener
socket.on('message', data => {
    console.log(data);
    let obj = data;
    document.getElementById('main-board').value += '\n' + obj.username + ': ' + obj.msg;
    document.getElementById("main-board").scrollTop = document.getElementById("main-board").scrollHeight;
});


//form listener
const sub = document.getElementById('send');
sub.onclick = function () {
    let msg = document.getElementById('newmsg').value;
    //local display
    document.getElementById('main-board').value += '\nMe: '+ msg;
    document.getElementById("main-board").scrollTop = document.getElementById("main-board").scrollHeight;
    //emit to other chatters
    socket.emit('message', { 'username': 'tempusername', 'msg': msg });
    //clear input
    document.getElementById('newmsg').value = '';
}
//add additional listener for enter key
const ent = document.getElementById('newmsg');
ent.addEventListener('keyup', (event) => {
    if(event.keyCode === 13){
        event.preventDefault();
        document.getElementById('send').click();
    }
});

