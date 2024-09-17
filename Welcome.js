// création du fichier welcome.txt
const fs = require('fs');
// lecture du fichier 
fs.writeFile('welcome.txt', 'hello Node' , (err) =>
{
    if (err) throw err;
    console.log(' Votre fichier est créé avec succés');
});
