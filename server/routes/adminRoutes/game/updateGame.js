const GameController = require('../../../controllers/gameController');

module.exports = async (req, res) => {
    try{
        const informations = {...req.body};

        /* Update package */
        const game = await GameController.updateGame(informations,req.token.id);
        return res.status(200).json(game);
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de modifier ce jeu"
        });
    }
};
