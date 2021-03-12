const ExhibitorController = require('../../../controllers/exhibitorController');

module.exports = async (req, res) => {
    try{
        const informations = {...req.body};
        const exhibitor = await ExhibitorController.updateExhibitor(informations, informations.exhibitorId);
        return res.status(200).json(exhibitor);
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de modifier cet eexhibitor"
        });
    }
};
