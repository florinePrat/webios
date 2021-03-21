const ContactController = require('../../../controllers/contactController');
const ExhibitorController = require('../../../controllers/exhibitorController');

module.exports = async (req, res) => {
    try{

        const contact = await ContactController.createContact(req.body.firstName,req.body.lastName,req.body.email,req.body.address,req.body.telFixe,req.body.telMobile,req.body.work,req.body.publisherId);

        let contactAdded;
        if(req.body.mainContact){
            contactAdded = await ExhibitorController.addContact(contact._id, req.body.publisherId, contact._id);
        }else{
            contactAdded = await ExhibitorController.addContact(contact._id, req.body.publisherId);
        }

        if(contactAdded){
            return res.status(200).json(contactAdded);
        }else {
            return res.status(500).json({
                error : "Erreur dans addContact : impossible d'update l'exhibitor"
            })
        }
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de créer le contact"
        });
    }
};
