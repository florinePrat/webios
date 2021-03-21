const FestivalController = require('../../../controllers/festivalController');

module.exports = async (req, res) => {
    try{
        const festival =  await FestivalController.getFestivalById(req.query.festivalId);
        return res.status(200).json(festival);
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de récupérer les festivals"
        });
    }
};
