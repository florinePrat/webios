const ZoneController = require('../../../controllers/zoneController');
const FestivalController = require('../../../controllers/festivalController');

module.exports = async (req, res) => {
    try{
        const zone = await ZoneController.createZone(req.body.name,req.body.festivalId,req.body.gamesId);
        const festival = FestivalController.addZoneToFestival(zone._id, req.body.festivalId);
        if(festival){
            return res.status(200).json(festival);
        }
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de créer cette zone"
        });
    }
};
