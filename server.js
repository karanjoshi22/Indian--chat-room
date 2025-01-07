const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files from "public" directory
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // Listen for 'chat message' events
    socket.on('chat message', (msg) => {
        console.log('Message received:', msg);
        socket.emit('chat message', msg); // Broadcast the message to all clients
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected:', socket.id);
    });
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
app.use(express.static('public'));
