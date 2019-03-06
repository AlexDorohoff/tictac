var mysqlQuery = require('../modules/mysql');

const getGamesList = (req, res) => {
    res.json(
        [
            {
                "id_game": 0,
                "owner": "Chack",
                "opponent": "Mark",
                "status": "playing",
                "time": "00:00:35"
            },
            {
                "id_game": 1,
                "owner": "Rachel",
                "opponent": "Ted",
                "status": "playing",
                "time": "00:01:35"
            },
            {
                "id_game": 2,
                "owner": "Marshal",
                "status": "ready"
            },
            {
                "id_game": 3,
                "owner": "Chack",
                "opponent": "Mark",
                "status": "playing",
                "time": "00:00:45"
            },
            {
                "id_game": 4,
                "owner": "Rachel",
                "status": "ready"
            },
            {
                "id_game": 5,
                "owner": "Marshal",
                "opponent": "lilly",
                "status": "done",
                "time": "00:01:05",
                "winner": "Marshal"
            },
            {
                "id_game": 6,
                "owner": "Kermit",
                "opponent": "Grover",
                "status": "done",
                "time": "00:01:05",
                "winner": "Grover"
            }
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
            "status": "r.jsx",
            "code": code,
            "message": message
        }
    );
}


module.exports = {getGamesList, createNewGame}