const BookingController = require('../../../controllers/bookingController');
const ExhibitorController = require('../../../controllers/exhibitorController');
const SuiviController = require('../../../controllers/suiviController');

module.exports = async (req, res) => {
    try{
        const booking = await BookingController.createBooking(req.body.nbTableSpace1, req.body.nbTableSpace2, req.body.nbTableSpace3, req.body.nbM2Space1, req.body.nbM2Space2, req.body.nbM2Space3, req.body.animatorNeeded,false,false,false,false,req.body.exhibitorId, req.body.festivalId);
        console.log({booking});
        const suivi = await SuiviController.getSuiviByFestivalAndexhibitorId(req.body.festivalId, req.body.exhibitorId);
        console.log({suivi});
        if(suivi){
            await SuiviController.updateSuivi({statusTraking : 'present'}, suivi._id);
            const exhibitor = await ExhibitorController.updateExhibitor({booking : booking._id}, req.body.exhibitorId);
            if(exhibitor){
                return res.status(200).json(exhibitor);
            }else {
                return res.status(400).json({
                    error : "Erreur dans addBooking : impossible d'update l'exhibitor"
                })
            }
        }else{
            return res.status(400).json({
                error : "Erreur : impossible dde mettre à jour le status"
            })
        }


    }
    catch(e){
        console.log(e);
        return res.status(500).json({
            error : "Impossible de créer le booking"
        });
    }
};
