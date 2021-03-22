const ZoneController = require('../../../controllers/zoneController');

module.exports = async (req, res) => {
    try{
        const Zone = await ZoneController.getZoneByName(req.body.name);
        return res.status(200).json(Zone);
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de récupérer cette zone"
        });
    }
};
