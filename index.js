const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const bodyParser = require('body-parser');

const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

const { postConnection } = require('./public/traitementconnection');
const { postInscription } = require('./public/traitement');
const { postIndex } = require('./public/traitementmsg');




app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/inscription.html`)

})


app.post('/inscription', postInscription);

app.get('/index.html', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`)

})

app.get('/connection.html', (req, res) => {
    res.sendFile(`${__dirname}/public/connection.html`)

})

app.get('/traitement.php', (req, res) => {
    res.sendFile(`${__dirname}/public/traitement.js`)

})

// app.get('/traitementconnection.php', (req, res) => {
//     res.sendFile(`${__dirname}/public/traitementconnection.js`)
// });

app.get('/style3.css', (req, res) => {
    res.sendFile(`${__dirname}/public/style3.css`)

})

app.get('/style2.css', (req, res) => {
    res.sendFile(`${__dirname}/public/style2.css`)

})

app.get('/style.css', (req, res) => {
    res.sendFile(`${__dirname}/public/style.css`)

})

app.post('/connection', postConnection);

app.post('/index', postIndex);


server.listen(3000, () => {
    console.log('Ecoute sur le port 3000');
})
io.on('connection', (socket) => {
    console.log('Un utilisateur s\'est connecté')

    socket.on('message', (msg) => {
        io.emit('message', msg);
    });
});



