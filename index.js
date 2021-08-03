const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: '*'
    }
});
const path = require('path');
const parser = require('body-parser');
const db = require('./models/index');
const routeHandler = require('./routes/index');
const { config } = require('dotenv');
config();

const port = process.env.PORT;

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


app.use(express.static(path.join(__dirname, './ui/build')));
app.use(parser.json());
app.use(parser.urlencoded({
    extended: true
}));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE');
  
    next();
})
routeHandler(app);

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './ui/build', 'index.html'));
});

server.listen(port, () => console.log(`Server listening @ port: ${port}`));