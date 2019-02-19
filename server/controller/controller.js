var mysqlQuery = require('../modules/mysql');

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
};

const createNewGame = (req, res) => {
    if (req.body.userName !== '') {
        mysqlQuery.createNewUser(req.body.userName, function (err) {
            if (err) {
                returnError(res, 500, err.code);

            }
        });
    } else {
        console.log("null parameters");
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

const returnError = function(res, code, message) {
    res.json(
        {
            "status": "error",
            "code": code,
            "message": message
        }
    );
}


module.exports = {getGamesList, createNewGame}