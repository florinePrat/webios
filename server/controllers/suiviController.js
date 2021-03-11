const Suivi = require('../models/suivi');

const getSuiviById = async(_id) => {
    try {
        return await Suivi.findById(_id);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const createSuivi = async (festivalId,exhibitorId,datContact1,datContact2,present,statusTraking) => {
    try {
        const suivi = new Suivi({
            festivalId,exhibitorId,datContact1,datContact2,present,statusTraking
        });
        console.log(suivi);
        return await suivi.save();
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const updateSuivi = async (informations,idSuivi) => {
    try{
        return await Suivi.findOneAndUpdate({_id: idSuivi}, {...informations, _id: idSuivi}, {new:true})
    }catch (error) {
        throw error;
    }
};

const deleteSuivi = async (_id) => {
    try{
        console.log(_id)
        return await Suivi.deleteOne({_id})
    }catch (error) {
        throw error;
    }
};

module.exports = {
    getSuiviById,
    createSuivi,
    updateSuivi,
    deleteSuivi
};