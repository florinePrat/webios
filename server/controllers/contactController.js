const Contact = require('../models/contact');

const getContactById = async(_id) => {
    try {
        return await Contact.findById(_id);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const createContact = async (firstName,lastName,email,address,telFixe,telMobile,work) => {
    try {
        const contact = new Contact({
            firstName,lastName,email,address,telFixe,telMobile,work
        });
        console.log(contact);
        return await contact.save();
    } catch (error) {
        console.log(error);
        throw error;
    }
};

module.exports = {
    getContactById,
    createContact,
};
