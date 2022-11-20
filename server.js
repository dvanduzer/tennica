const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get(["/", "/:name"], (req, res) => {
  greeting = "<h1>dvd.tennica.net checking in</h1>";
  name = req.params["name"];
  if (name) {
    res.send(greeting + '</br>and hello to <a rel="me"' + 'href="https://tilde.zone/' + name + '">' + name + '</a>' );
  } else {
    res.send('<h1><a rel="me" href="https://tilde.zone/@dvd">dvd.tennica.net</a> is now verified</a>');
  }
});

app.listen(port, () => console.log(`HelloNode app listening on port ${port}!`))

