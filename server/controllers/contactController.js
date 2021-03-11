const Contact = require('../models/contact');

const getContactById = async(_id) => {
    try {
        return await Contact.findById(_id);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const createContact = async (firstName,lastName,email,address,telFixe,telMobile,work,publisherId) => {
    try {
        const contact = new Contact({
            firstName,lastName,email,address,telFixe,telMobile,work,publisherId
        });
        console.log(contact);
        return await contact.save();
    } catch (error) {
        console.log(error);
        throw error;
    }
};

/*
const updateContact = async ({firstName,lastName,email,address,telFixe,telMobile,work,publisherId}) => {
    try{
        return await Contact.findOneAndUpdate({_id: idContact}, {email, $push : firstName,lastName,email,address,telFixe,telMobile,work,publisherId ,_id: idContact}, {new:true})
    }catch (error) {
        throw error;
    }
};*/
const updateContact = async (informations,idContact) => {
    try{
        return await Contact.findOneAndUpdate({_id: idContact}, {...informations, _id: idContact}, {new:true})
    }catch (error) {
        throw error;
    }
};



const deleteContact = async (_id) => {
    try{
        console.log(_id)
        return await Contact.deleteOne({_id})
    }catch (error) {
        throw error;
    }
};


module.exports = {
    getContactById,
    createContact,
    updateContact,
    deleteContact
};
