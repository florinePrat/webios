const SpaceController = require('../../../controllers/spaceController');

module.exports = async (req, res) => {
    try{

        const space = await SpaceController.createSpace(req.body.name,req.body.festivalId,req.body.numberOfTable1,req.body.unitPriceOfTable1,req.body.m2Price1,req.body.numberOfTable2,req.body.unitPriceOfTable2,req.body.m2Price2,req.body.numberOfTable3,req.body.unitPriceOfTable3,req.body.m2Price3);
        return res.status(200).json(space);
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de créer cet espace"
        });
    }
};
