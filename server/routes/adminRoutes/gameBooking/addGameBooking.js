const GameBookingController = require('../../../controllers/gameBookingController');
const GameController = require('../../../controllers/gameController');
const ExhibitorController = require('../../../controllers/exhibitorController');
const SuiviController = require('../../../controllers/suiviController');
const FestivalController = require('../../../controllers/festivalController');
const ZoneController = require('../../../controllers/zoneController');

module.exports = async (req, res) => {
    try{
        // First create game with all information in req.body

        const game = await GameController.createGame(
            req.body.name,req.body.ageMin,req.body.duration,req.body.category, req.body.notice,
            req.body.prototype,req.body.nbPlayersMin,req.body.nbPlayersMax,req.body.description,req.body.exhibitorId);
        await ExhibitorController.addGame(game._id, req.body.exhibitorId);

        // Then create a bookingGame with the example of exhibitor because we to add
        
        // 1 - game id to booking game
        const gameBooking = await GameBookingController.createBookingGame(
            game._id,req.body.festivalId,req.body.exhibitorId,req.body.bookingId,req.body.zoneId,req.body.qtExhib,req.body.qtSend,
            req.body.tombola,req.body.dotation,Date.now(),req.body.comment,req.body.putOnPlan,req.body.bringByExhibitor,
            false,false,0,false);
        // 2 - change suivi

        //////////////// ATTENTION !!!! SI LE STATUSTRACKING EST SUP2RIEUR A LISTE DE JEUX DMAND2E (LISTE D JEUX RECU...) IL VA Y REVENIR....DONC IL faut faire une vérif à ce niveau là !

        const suivi = await SuiviController.getSuiviByFestivalAndexhibitorId(req.body.festivalId, req.body.exhibitorId);
        await SuiviController.updateSuivi({statusTraking : 'liste de jeux demandée'}, suivi._id);
        // 3 - add booking game to gameBookedList in exhibitor

        const addBookingGameToExhibitor = await ExhibitorController.addBookingGame(gameBooking._id, req.body.exhibitorId);

        // 4 - add booking game to festival
        await FestivalController.addBookingGameToFestival(gameBooking._id, req.body.festivalId);

        // 6 - affect the gamebooked Id to a zone with req.body.zone
        await ZoneController.addGameZone(game._id,req.body.zoneId);

        // 7 - add the game Id to gameList in exhibitor
        const gameAddedExhibitor =  await ExhibitorController.addGame(gameBooking._id, req.body.exhibitorId);

        if(addBookingGameToExhibitor){
            return res.status(200).json(gameAddedExhibitor);
        }else{
            return res.status(400).json({error : "error lors de l'ajour de la réservation"});
        }

    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de créer ce gameBooking"
        });
    }
};
