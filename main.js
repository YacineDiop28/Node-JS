// Écrivez un programme qui s'exécute sur le port 3000 et répond par « <h1>Bonjour Node !!!!</h1>\n » lorsque quelqu'un atteint http://localhost:3000
const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Bonjour Node !!!!</h1>\n');
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});