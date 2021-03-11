const GameController = require('../../../controllers/gameController');
const ExhibitorController = require('../../../controllers/exhibitorController');

module.exports = async (req, res) => {
    try{
        const game = await GameController.deleteGame(req.body.gameId);
        const gameDeleted =  await ExhibitorController.deleteGame(game._id, req.body.publisherId);
        if(gameDeleted){
            return res.status(200).json(game);
        }
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de supprimer ce jeu"
        });
    }
};
