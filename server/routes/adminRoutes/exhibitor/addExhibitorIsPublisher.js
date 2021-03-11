const ExhibitorController = require('../../../controllers/exhibitorController');

module.exports = async (req, res) => {
    try{
        const publisher = await ExhibitorController.createExhibitor({name : req.body.exhibitorName, publisher:true, publisherName : req.body.publisherName});
        return res.status(200).json(publisher);
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de modifier ce jeu"
        });
    }
};
