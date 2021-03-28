const ZoneController = require('../../../controllers/zoneController');

module.exports = async (req, res) => {
    try{
        const Zone = await ZoneController.getZoneById(req.query.zoneId);
        return res.status(200).json(Zone);
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de récupérer cette zone"
        });
    }
};
