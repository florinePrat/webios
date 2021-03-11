const ContactController = require('../../../controllers/contactController');

module.exports = async (req, res) => {
    try{
        const contact = await ContactController.deleteContact(req.body.contactId);
        return res.status(200).json(contact);
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de supprimer ce contact"
        });
    }
};
