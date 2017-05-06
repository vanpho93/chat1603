const { io } = require('./config');

const arrUsername = [];

io.on('connection', socket => {
    socket.on('DANG_KY_USERNAME', username => {
        require('./controller/dangKyUser')(username, socket, io);
    });

    socket.on('NGUOI_DUNG_GUI_TIN', message => {
        io.emit('TIN_NHAN_MOI', `${socket.username}: ${message}`);
    });

    socket.on('disconnect', () => {
        const index = arrUsername.indexOf(socket.username);
        if (index !== -1) {
            arrUsername.splice(index, 1);
            io.emit('NGUOI_DUNG_THOAT', socket.username);
        }
    });
});
