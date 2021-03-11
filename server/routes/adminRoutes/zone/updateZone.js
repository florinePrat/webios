const ZoneController = require('../../../controllers/zoneController');

module.exports = async (req, res) => {
    try{
        const informations = {...req.body};
        const zone = await ZoneController.updateZone(informations, informations.zoneId);
        return res.status(200).json(zone);
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de modifier cette zone"
        });
    }
};
