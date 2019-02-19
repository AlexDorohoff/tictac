const getGamesList = (req, res) => {
    res.json(
        [
            {ouner: 'Chack', opponent: 'Mark', status: 'end'},
            {ouner: 'Rachel', opponent: 'Ted', status: 'end'},
            {ouner: 'Maeshal', opponent: 'lilly', status: 'ok'},
            {ouner: 'Chack', opponent: 'Mark', status: 'end'},
            {ouner: 'Rachel', opponent: 'Ted', status: 'end'},
            {ouner: 'Maeshal', opponent: 'lilly', status: 'ok'}
        ]
    );
}

const createNewGame = (req, res) => {
    if(req !== '')
    {
        console.log(req.body);
    } else {
        console.log("1234");
    }
    var userName = req.body;
    NewGame(userName, res)
};

const NewGame = function(userName, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.json(
        {
            "status": "ok",
            code: 0,
            "name": userName,
            "test": "test",
        }
    );
};


module.exports = {getGamesList, createNewGame}