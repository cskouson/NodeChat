const socket = io();

socket.on('message', message =>{
    console.log(message);
})


function doSomething(){
    console.log('hey');
}