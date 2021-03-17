const FestivalController = require('../../../controllers/festivalController');

module.exports = async (req, res) => {
    try{
        const festivals =  await FestivalController.getAllFestival();
        return res.status(200).json(festivals);
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de récupérer les festivals"
        });
    }
};
