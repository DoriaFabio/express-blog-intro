/*
*Esercizio*
Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità sulla base di quello che impareremo.
- Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”
- Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
- Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post e il conteggio, partendo da un array.
- Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
- Testare su postman
*Bonus:
filtrare i dati sulla base di parametri in query string
*/

const express = require("express");
const app = express();
const PORT = 5500;

//definisco dove sono gli asset statici
app.use(express.static("public")); //http://localhost:5500/

const post = require("./data/post.js");

//rotte
app.get("/", (req, res) => {
  res.send("<h1>Server del mio blog</h1>");
});

app.get("/bacheca", (req, res) => {
    //console.log("request:", req);
    //console.log("response: ", res);
    // http://localhost:5500/pizzas?name=margherita&ingredients=sale
    //console.log(req.query);

  });

//rotta fallback
app.all("*", (req, res) => {
    res.status(404).send("<h1>Error 404 - Not Found !</h1>");
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}}`);
  });