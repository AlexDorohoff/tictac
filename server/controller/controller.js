const getGamesList = (req, res) => {
    res.json(
        {ouner: 'Chack', opponent: 'Mark', status: 'end'},
    );
}


module.exports = {
    getGamesList,
}