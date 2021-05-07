const socket = io();

//room status
socket.on('status', data => {
    console.log(data);
});

//incoming message listener
socket.on('message', data => {
    console.log(data);
});


//form listener
const sub = document.getElementById('send');
sub.onclick = function () {
    const msg = document.getElementById('newmsg').value;
    console.log('send debug');
    socket.emit('message', { 'username': 'tempusername', 'msg': msg });
}


