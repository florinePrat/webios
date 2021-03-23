const ExhibitorController = require('../../../controllers/exhibitorController');
const SuiviController = require('../../../controllers/suiviController');
const FestivalController = require('../../../controllers/festivalController');

module.exports = async (req, res) => {
    try{
        const alreadyAdded = await SuiviController.getSuiviByFestivalAndexhibitorId(req.body.festivalId, req.body.exhibitorId);
        if(!alreadyAdded){
            const suivi =  await SuiviController.createSuivi(req.body.festivalId, req.body.exhibitorId, null, null, false, "pas de réponse");
            const addSuiviToExhibitor = await ExhibitorController.updateExhibitor({suiviId : suivi._id}, req.body.exhibitorId);
            if (await FestivalController.addExhibitorToFestival(req.body.exhibitorId, req.body.festivalId)){
                console.log({addSuiviToExhibitor});
                if(suivi && addSuiviToExhibitor){
                    return res.status(200).json(addSuiviToExhibitor);
                }else {
                    return res.status(400).json({
                        error : "Erreur dans addExhibitor lors de la gestion du Suivi"
                    })
                }
            }else {
                return res.status(400).json({
                    error : "Erreur dans addExhibitor : impossible d'update le festival"
                })
            };
        }else{
            return res.status(400).json({
                error : "Erreur dans addExhibitor : cet exhibitor est déjà dans le festival courant."
            })
        }


    }
    catch(e){
        return res.status(500).json({
            error : "Impossible d'ajouter cet exhibitor"
        });
    }
};
