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
    res.json([{answer: 'yep'}]);
}


module.exports = {getGamesList, createNewGame}
