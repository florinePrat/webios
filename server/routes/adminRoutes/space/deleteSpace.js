const SpaceController = require('../../../controllers/spaceController');

module.exports = async (req, res) => {
    try{
        const Space = await SpaceController.deleteSpace(req.body.spaceId);
        return res.status(200).json(Space);
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de supprimer cet espace"
        });
    }
};
