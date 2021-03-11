const PublisherController = require('../../../controllers/exhibitorController');

module.exports = async (req, res) => {
    try{
        const publisher = await PublisherController.createExhibitor({publisherName : req.body.publisherName, publisher:true});
        return res.status(200).json(publisher);
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de modifier ce jeu"
        });
    }
};
