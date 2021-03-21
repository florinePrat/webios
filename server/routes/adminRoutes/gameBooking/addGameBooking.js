const GameBookingController = require('../../../controllers/gameBookingController');

module.exports = async (req, res) => {
    try{

        /*const exhibitor = await ExhibitorController.createExhibitor({name : req.body.exhibitorName, publisherOnly: req.body.publisherOnly});
        const suivi =  await SuiviController.createSuivi(req.body.festivalId, exhibitor._id, null, null, false, "pas de réponse");
        const addSuiviToExhibitor = await ExhibitorController.updateExhibitor({suiviId : suivi._id}, exhibitor._id);
        if (await FestivalController.addExhibitorToFestival(exhibitor._id, req.body.festivalId)){
            console.log({addSuiviToExhibitor});
            if(suivi && addSuiviToExhibitor){
                return res.status(200).json(addSuiviToExhibitor);
            }
        };*/

        // First create game with all information in req.body

        // Then create a bookingGame with the example of exhibitor because we to add
        // 1 - game id to booking game
        // 2 - change suivi
        // 3 - add booking game to gameBookedList in exhibitor
        // 4 - add booking game to festival
        // 5 - add the spaceid corresponding to de location choosed
        // 6 - affect the gamebooked Id to a zone with req.body.zone
        // 7 - add the game Id to gameList in exhibitor
        
        const gameBooking = await GameBookingController.createBookingGame(req.body.gameId,req.body.festivalId,req.body.exhibitorId,req.body.bookingId,req.body.zone,req.body.qtExhib,req.body.qtSend,req.body.tombola,req.body.dotation,req.body.dateAdd,req.body.comment,req.body.putOnPlan,req.body.bringByExhibitor,req.body.received,req.body.spaceId,req.body.isCallback,0,false);
        return res.status(200).json(gameBooking);
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de créer ce gameBooking"
        });
    }
};
