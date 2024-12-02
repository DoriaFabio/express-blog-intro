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

const posts = require("./data/post.js");

//rotta /
app.get("/", (req, res) => {
  res.send("<h1>Server del mio blog</h1>");
});

// rotta bacheca
app.get("/bacheca", (req, res) => {
    res.json({
        posts: posts,
        counter: posts.length,
      });
  });

// rotta immagini
app.get("/ciambellone", (req, res) => {
    res.send(`<img src="images/ciambellone.jpeg">`);
});
app.get("/cracker", (req, res) => {
    res.send(`<img src="images/cracker_barbabietola.jpeg">`);
});
app.get("/pane", (req, res) => {
    res.send(`<img src="images/pane_fritto_dolce.jpeg">`);
});
app.get("/pasta", (req, res) => {
    res.send(`<img src="images/pasta_barbabietola.jpeg">`);
});
app.get("/torta", (req, res) => {
    res.send(`<img src="images/torta_paesana.jpeg">`);
});

//rotta fallback
app.all("*", (req, res) => {
    res.status(404).send("<h1>Error 404 - Not Found !</h1>");
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}}`);
  });