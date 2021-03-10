const User = require('../models/user');
const passwordEncryption = require('../encryption/passwordEncryption');

const getUserById = async(_id) => {
    try {
        return await User.findById(_id).select('-password')
    } catch (error) {
        console.log(error)
        throw error;
    }
};

const getUserByEmail = async(email) => {
    try {
        return await User.findOne({email});
    } catch(error) {
        throw error;
    }
};


const createUser = async (email, password) => {
    const hashedPassword = await passwordEncryption.passwordEncryption(password);
    try {
        const user = new User({
            email,
            password: hashedPassword,
            admin : false
        });
        return await user.save();
    } catch (error) {
        throw error;
    }
};

const updatePassword = async (_id,password) => {
    try {
        const hashedPassword = await passwordEncryption.passwordEncryption(password);
        return await User.findOneAndUpdate({_id},{password:hashedPassword},{new:true});
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getUserById,
    createUser,
    getUserByEmail,
    updatePassword
};
