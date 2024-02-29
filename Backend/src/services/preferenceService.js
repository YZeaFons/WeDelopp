const preferenceModel = require('../models/preferenceModel');

const findAllPreference = async () => {
    try {
        return await preferenceModel.find();
    } catch (error) {
        throw new Error(error);
    }
}

const createPreference = async (preference) => {
    try {
        
        const newPreference = await preferenceModel.create(preference);
        return newPreference;
    } catch (error) {
        throw new Error(error);
    }
}

const findPreferenceById = async (id) => {
    try {
        const order = await preferenceModel.findById(id);
        return order
    } catch (error) {
        throw new Error(error);
    }
}
const findPreferenceByEmail = async (email) => {
    try {
        const order = await preferenceModel.findOne({ email:  email  });
        return order
    } catch (error) {
        throw new Error(error);
    }
}
const findPreferenceByIdPreference = async (id) => {
    try {
        const order = await preferenceModel.findOne({ preferenceId:  id  });
        return order
    } catch (error) {
        throw new Error(error);
    }
}

const findOrderByStatus = async (prop) => {
    try {
        const order = await preferenceModel.findOne({ status: { prop } });
        return order
    } catch (error) {
        throw new Error(error);
    }
}

const PutPreference = async (id, info) => {
try {
return await preferenceModel.findByIdAndUpdate(id, info);
} catch (error) {
throw new Error(error);
}
};

module.exports = {findAllPreference, createPreference, findPreferenceById, findPreferenceByIdPreference, findOrderByStatus, PutPreference, findPreferenceByEmail}