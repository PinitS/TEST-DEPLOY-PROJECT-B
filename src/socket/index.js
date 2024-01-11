const { Server } = require('socket.io');

const { SOCKET_PORT } = process.env;

const io = new Server(SOCKET_PORT, {
  cors: {
    origin: '*',
  },
});

// const emitMessageRestaurant1 = () => {
//   count++;
//   console.log('client-received-chat-message :>> ' + count);
//   io.emit('client-received-chat-message', {
//     message: `${dayjs().format('DD-MM-YYYY HH:mm:ss')}`,
//   });
// };
// // ใช้ setInterval สำหรับการส่งข้อความตัวอย่างทุกๆ 1 วินาที
// const intervalRestaurant_1_ID = setInterval(emitMessageRestaurant1, 1000);

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('client-send-chat-message', (data) => {
    io.emit('client-received-chat-message', data);
  });

  socket.on('disconnect', () => {
    console.log('a user disconnected');
  });
});

module.exports = io;
