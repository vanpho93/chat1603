const $ = require('jquery');
const io = require('socket.io-client');

$('document').ready(() => {
    const socket = io();
    $('#divChat').hide();

    $('#btnSignUp').click(() => {
        const username = $('#txtUsername').val();
        socket.emit('DANG_KY_USERNAME', username);
    });

    socket.on('XAC_NHAN_DANG_KY', arrUser => {
        if (arrUser) {
            arrUser.forEach(e => {
                $('#ulUser').append(`<li>${e}</li>`);
            });
            socket.on('NGUOI_DUNG_MOI', username => {
                $('#ulUser').append(`<li>${username}</li>`);
            });
            $('#divChat').show();
            return $('#divSignUp').hide();
        }
        alert('Username da ton tai!');
    });

    $('#btnSend').click(() => {
        const message = $('#txtMessage').val();
        socket.emit('NGUOI_DUNG_GUI_TIN', message);
    });

    socket.on('TIN_NHAN_MOI', message => {
        $('#ulMessage').append(`<li>${message}</li>`)
    })
});

//https://socket.io/docs/emit-cheatsheet/
