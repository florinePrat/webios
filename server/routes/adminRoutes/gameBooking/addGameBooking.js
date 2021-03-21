const GameBookingController = require('../../../controllers/gameBookingController');
const GameController = require('../../../controllers/gameController');
const ExhibitorController = require('../../../controllers/exhibitorController');
const SuiviController = require('../../../controllers/suiviController');
const FestivalController = require('../../../controllers/festivalController');
const ZoneController = require('../../../controllers/zoneController');

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

        const game = await GameController.createGame(req.body.name,req.body.ageMin,req.body.duration,req.body.category,req.body.prototype,req.body.nbPlayersMin,req.body.nbPlayersMax,req.body.description,req.body.publisherId);
        const gameAdded =  await ExhibitorController.addGame(game._id, req.body.publisherId);

        // Then create a bookingGame with the example of exhibitor because we to add
        
        // 1 - game id to booking game
        const gameBooking = await GameBookingController.createBookingGame(game._id,req.body.festivalId,req.body.exhibitorId,req.body.bookingId,req.body.zone,req.body.qtExhib,req.body.qtSend,req.body.tombola,req.body.dotation,req.body.dateAdd,req.body.comment,req.body.putOnPlan,req.body.bringByExhibitor,req.body.received,req.body.spaceId,req.body.isCallback,0,false);
        // 2 - change suivi
        // const suiviUpdate = await SuiviController.updateSuivi({suiviId : suivi._id}, exhibitor._id);
        // Changer quoi ??

        // 3 - add booking game to gameBookedList in exhibitor
        const gameBookingAddedExhibitor =  await ExhibitorController.addBookingGame(gameBooking._id, req.body.publisherId);

        // 4 - add booking game to festival
        const gameBookingAddedFestival =  await FestivalController.addBookingGameToFestival(gameBooking._id, req.body.festivalId);

        // 5 - add the spaceid corresponding to de location choosed
        // ?? on le fait dans la création du game booking

        // 6 - affect the gamebooked Id to a zone with req.body.zone
        const addZone =  await ZoneController.addGameZone(game._id,req.body.zoneId);

        // 7 - add the game Id to gameList in exhibitor
        const gameAddedExhibitor =  await ExhibitorController.addGame(gameBooking._id, req.body.publisherId);
        
        // const gameBooking = await GameBookingController.createBookingGame(req.body.gameId,req.body.festivalId,req.body.exhibitorId,req.body.bookingId,req.body.zone,req.body.qtExhib,req.body.qtSend,req.body.tombola,req.body.dotation,req.body.dateAdd,req.body.comment,req.body.putOnPlan,req.body.bringByExhibitor,req.body.received,req.body.spaceId,req.body.isCallback,0,false);
        return res.status(200).json(gameAddedExhibitor);
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de créer ce gameBooking"
        });
    }
};
