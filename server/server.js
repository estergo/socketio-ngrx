const express = require('express');
const http = require('http');
const app = express();
const server = http.Server(app);
const io = require('socket.io')(server);

io.on('connection', (socketClient) => {
    console.log('SocketIo Is Connected');

    socketClient.on('join', (message) => {
        console.log('A New Client Is Connected', message);
    });

    socketClient.on('[App] GetData', (message) => {
        console.log('GetData', message);
        const data = require('./data.json');
        let returnData;
        setInterval(() => {
            returnData = data.map(item => {
                return {
                    id: item.id++,
                    name: item.name,
                    sum: Math.random() * 100,
                    date: Date.now()
                }
            });
            socketClient.emit('[App] InitData', returnData);
        }, 5000);
    });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`listening http://localhost:${port}`);
});
