const ContactController = require('../../../controllers/contactController');

module.exports = async (req, res) => {
    try{
        const informations = {...req.body};
        const contact = await ContactController.updateContact(informations, informations.contactId);
        return res.status(200).json(contact);
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de modifier ce contact"
        });
    }
};
