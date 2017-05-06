const $ = require('jquery');

const xuLyTinNhan = (socket) => {
    $('#btnSend').click(() => {
        const message = $('#txtMessage').val();
        socket.emit('NGUOI_DUNG_GUI_TIN', message);
    });

    socket.on('TIN_NHAN_MOI', message => {
        $('#ulMessage').append(`<li>${message}</li>`)
    });
};

module.exports = xuLyTinNhan;
