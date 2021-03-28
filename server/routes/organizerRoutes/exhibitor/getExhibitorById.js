const ExhibitorController = require('../../../controllers/exhibitorController');

module.exports = async (req, res) => {
    try{
        const exhibitors =  await ExhibitorController.getExhibitorById(req.query.exhibitorId);
        console.log({exhibitors});
        return res.status(200).json(exhibitors);
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de récupérer les exhibitors de ce festival"
        });
    }
};
