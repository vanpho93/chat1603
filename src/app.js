const $ = require('jquery');
const io = require('socket.io-client');
const xuLyDangKy = require('./xulydangky');
const xuLyNhanTin = require('./xulynhantin');

$('document').ready(() => {
    const socket = io();
    $('#divChat').hide();
    xuLyDangKy(socket);
    xuLyNhanTin(socket);    
});

//https://socket.io/docs/emit-cheatsheet/
