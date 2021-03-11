const SpaceController = require('../../../controllers/spaceController');

module.exports = async (req, res) => {
    try{

        const space = await SpaceController.createSpace(req.body.name,req.body.numberOfTable,req.body.unitPriceOfTable,req.body.m2Price,req.body.festivalId);

        if(spaceAdded){
            return res.status(200).json(space);
        }
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de créer cet espace"
        });
    }
};
