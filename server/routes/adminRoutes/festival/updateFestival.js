const FestivalController = require('../../../controllers/festivalController');

module.exports = async (req, res) => {
    try{
        const informations = {...req.body};
        console.log(informations.current);
        const currentFestival =  await FestivalController.getCurrentFestival();
        console.log({currentFestival});
        if(currentFestival && req.body.festivalId !== currentFestival._id && informations.current){
            await FestivalController.updateCurrentFestival(false, currentFestival._id)
        }
        const newFestival = await FestivalController.updateFestival(informations, req.body.festivalId);
        return res.status(200).json(newFestival);
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de modifier ce festival"
        });
    }
};
