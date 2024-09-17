const nodemailer = require('nodemailer');

// Configuration du transporteur avec le service de messagerie Gmail
let transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: 'fghjklk@gmail.com',  
    pass: 'àoçiuylkjh'        
  }
});

// Configuration de l'email
let mailOptions = {
  from: 'tyuijuhg@gmail.com',          
  to: 'SDFGH@gmail.com',      
  subject: 'Bienvenue',       
  text: 'veillez verifier votre message',    
  html: '<h1>Bonjour</h1><p>Ceci est un email test envoyé via Node.js</p>'  
};

// Envoi de l'email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Erreur:', error);
  }
  console.log('Email envoyé: ' + info.response);
});
