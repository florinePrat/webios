const ZoneController = require('../../../controllers/zoneController');

module.exports = async (req, res) => {
    try{
        const zone = await ZoneController.createZone(req.body.name,req.body.festivalId,req.body.gamesId);
        return res.status(200).json(zone);
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de créer cet zone"
        });
    }
};
