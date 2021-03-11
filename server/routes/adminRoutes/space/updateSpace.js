const SpaceController = require('../../../controllers/spaceController');

module.exports = async (req, res) => {
    try{
        const informations = {...req.body};
        const space = await SpaceController.updateSpace(informations, informations.spaceId);
        return res.status(200).json(space);
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de modifier cet espace"
        });
    }
};
