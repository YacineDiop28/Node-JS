const http = require('http');


const server = http.createServer((req, res) => {
    // console.log("Server créé avac succés");

    res.setHeader('Content-Type', 'text/plain');
    if (req.url === "/"){
        res.write("<h1>Bonjour Node !!!!</h1> ");   
    }
    else 
        {
            res.write("vous avez fait une erreur");
        }
    res.end();
})

server.listen(3001, "localhost" , () => {
    console.log("Server Running on Port 3001");
    

})
