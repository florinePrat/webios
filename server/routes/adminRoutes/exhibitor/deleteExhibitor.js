const ExhibitorController = require('../../../controllers/exhibitorController');

module.exports = async (req, res) => {
    try{
        const Exhibitor = await ExhibitorController.deleteExhibitor(req.body.ExhibitorId);
        return res.status(200).json(Exhibitor);
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de supprimer cet exhibitor"
        });
    }
};
