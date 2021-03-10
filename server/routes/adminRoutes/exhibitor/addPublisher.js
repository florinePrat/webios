const PublisherController = require('../../../controllers/exhibitorController');

module.exports = async (req, res) => {
    try{
        const game = await PublisherController.createExhibitor();
        return res.status(200).json(game);
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de modifier ce jeu"
        });
    }
};
