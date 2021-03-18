const SpaceController = require('../../../controllers/spaceController');

module.exports = async (req, res) => {
    try{
        const space = await SpaceController.getSpaceById(req.body.spaceId);
        return res.status(200).json(space);
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de récupérer cet espace"
        });
    }
};
