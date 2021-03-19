const ExhibitorController = require('../../../controllers/exhibitorController');
const SuiviController = require('../../../controllers/suiviController');

module.exports = async (req, res) => {
    try{
        const exhibitor = await ExhibitorController.createExhibitor({name : req.body.exhibitorName, publisherOnly: req.body.publisherOnly});
        const suivi =  await SuiviController.createSuivi(req.body.festivalId, exhibitor._id, null, null, false, "pas de réponse");
        const addSuiviToExhibitor = await ExhibitorController.updateExhibitor({suiviId : suivi._id}, exhibitor._id);
        console.log({addSuiviToExhibitor});
        if(suivi && addSuiviToExhibitor){
            return res.status(200).json(addSuiviToExhibitor);
        }
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de modifier ce jeu"
        });
    }
};
