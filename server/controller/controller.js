var mysqlQuery = require('../modules/mysql');

const getGamesList = (req, res) => {
    res.json(
        [
            {id_game: 1, ouner: 'Chack', opponent: 'Mark', status: 'end'},
            {id_game: 2, ouner: 'Rachel', opponent: 'Ted', status: 'end'},
            {id_game: 3, ouner: 'Maeshal', opponent: 'lilly', status: 'ok'},
            {id_game: 4, ouner: 'Chack', opponent: 'Mark', status: 'end'},
            {id_game: 5, ouner: 'Rachel', opponent: 'Ted', status: 'end'},
            {id_game: 6, ouner: 'Maeshal', opponent: 'lilly', status: 'ok'}
        ]
    );
};

const createNewGame = (req, res) => {
    var name = req.body.userName
    if (!mysqlQuery.isUserExist(req.body.userName)) {
        mysqlQuery.createNewUser(req.body.userName, function (err) {
            if (err) {
                res.send(res, 500, err.code);
            }
        });
    } else {
        console.log("make a new game");
    }

};


const NewGame = function (userName, res) {
    res.json(
        {
            "status": "ok",
            code: 0,
            "name": userName,
            "test": "test",
        }
    );
};

const returnError = function (res, code, message) {
    res.json(
        {
            "status": "error",
            "code": code,
            "message": message
        }
    );
}


module.exports = {getGamesList, createNewGame}