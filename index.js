const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: '*'
    }
});
const path = require('path');
const port = process.env.PORT || 8001;

io.on('connection', client => {
    client.emit('init', { data: 'Welcome to MintCard!'});
    client.on('message', message => {
        console.log('From client', message);
        io.emit('message', { message: 'From server', message });
    });
    client.on('gameState', state => {
        io.emit('state', {tag: 'State received from server', state});
    })
});


app.use(express.static(path.resolve(__dirname, './ui/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './ui/build', 'index.html'));
});

server.listen(port, () => console.log(`Server listening @ port: ${port}`));