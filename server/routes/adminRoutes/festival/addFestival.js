const FestivalController = require('../../../controllers/festivalController');

module.exports = async (req, res) => {
    try{

        const currentFestival =  await FestivalController.getCurrentFestival();
        console.log({currentFestival});
        if(currentFestival){
            await FestivalController.updateCurrentFestival(false, currentFestival._id)
        }
        const festival = await FestivalController.createFestival(req.body.name, true);
        return res.status(200).json(festival);
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de créer ce festival"
        });
    }
};
