const GameController = require('../../../controllers/gameController');

module.exports = async (req, res) => {
    try{
        const game = await GameController.deleteGame(req.body.gameId);
        return res.status(200).json(game);
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de supprimer ce jeu"
        });
    }
};
