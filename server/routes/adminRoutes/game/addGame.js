const GameController = require('../../../controllers/gameController');
const ExhibitorController = require('../../../controllers/exhibitorController');

module.exports = async (req, res) => {
    try{
        const game = await GameController.createGame(req.body.name,req.body.ageMin,req.body.duration,req.body.category,req.body.prototype,req.body.nbPlayersMin,req.body.nbPlayersMax,req.body.description,req.body.publisherId);
        const gameAdded =  await ExhibitorController.updateExhibitor({gameList : game._id});
        if(gameAdded){
            return res.status(200).json(game);
        }
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de créer ce jeu"
        });
    }
};
