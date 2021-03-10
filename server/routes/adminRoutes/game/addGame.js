const GameController = require('../../../controllers/gameController');

module.exports = async (req, res) => {
    try{
        const game = await GameController.createGame(req.body.name,req.body.ageMin,req.body.duration,req.body.category,req.body.prototypeGame,req.body.nbPlayers,req.body.description,req.body.publisherId);
        return res.status(200).json(game);
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de créer ce jeu"
        });
    }
};
