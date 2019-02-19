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
    if(req.body.userName !== '')
    {
        var userName = req.body.userName;
        NewGame(userName, res)
    } else {
        console.log("null parameters");
    }

};


const NewGame = function(userName, res) {
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