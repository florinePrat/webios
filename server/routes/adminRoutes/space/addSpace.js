const SpaceController = require('../../../controllers/spaceController');
const FestivalController = require('../../../controllers/festivalController');

module.exports = async (req, res) => {
    try{

        const space = await SpaceController.createSpace(req.body.name,req.body.festivalId,req.body.numberOfTable1,req.body.unitPriceOfTable1,req.body.m2Price1,req.body.numberOfTable2,req.body.unitPriceOfTable2,req.body.m2Price2,req.body.numberOfTable3,req.body.unitPriceOfTable3,req.body.m2Price3);
        const festival = FestivalController.addSpaceToFestival(space._id, req.body.festivalId);
        if(festival){
            return res.status(200).json(space);
        }else {
            return res.status(500).json({
                error : "Erreur dans addSpace : impossible d'update le festival"
            })
        }
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de créer cet espace"
        });
    }
};
