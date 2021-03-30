const ZoneController = require('../../../controllers/zoneController');
const festivalController = require('../../../controllers/festivalController');

module.exports = async (req, res) => {
    try{
        const Zone = await ZoneController.deleteZone(req.body.zoneId);
        console.log(req.body.festivalId)
        const Festival = await festivalController.deleteZoneToFestival(req.body.zoneId, req.body.festivalId)
        return res.status(200).json(Festival);
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de supprimer cette zone"
        });
    }
};
