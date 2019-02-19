var express = require('express');

const app = express();

app.use(express.json());

var controller = require('./controller/controller');

var path = require("path");

app.use(express.static(path.join(__dirname,"../")));

app.get("/", function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
    res.render('index.html');
})

app.get('/games/list', controller.getGamesList);

app.post('/games/new', controller.createNewGame)



const server = app.listen(8081, () => {
    console.log(`Server is up and running on port 8081`);
});
