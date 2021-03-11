const ExhibitorController = require('../../../controllers/exhibitorController');

module.exports = async (req, res) => {
    try{
        let exhibitor;
        if(req.body.mainContact){
            exhibitor = await ExhibitorController.updateExhibitor({contacts : req.body.contacts, idExhibitor: req.body.idExhibitor, mainContact : req.mainContact});
        }else{
            exhibitor = await ExhibitorController.updateExhibitor({contacts : req.body.contacts, idExhibitor: req.body.idExhibitor});
        }
        return res.status(200).json(exhibitor);
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible to update exhibitor"
        });
    }
};

