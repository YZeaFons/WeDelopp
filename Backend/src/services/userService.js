const userModel = require('../models/userModel')

const findUsers = async () => {
    try {
        return await userModel.find();
    } catch (error) {
        throw new Error(error);
    }
}

const findUserById = async (id) => {
    try {
        return await userModel.findById(id);
    } catch (error) {
        throw new Error(error);
    }
}

const findUserByEmail = async (email) => {
    try {
        const user = await userModel.findOne({ email: { $regex: new RegExp('^' + email, 'i') } });
        return user
    } catch (error) {
        throw new Error(error);
    }
}

const createUser = async (user) => {
    try {
        const newUser = await userModel.create(user);
        return newUser;
    } catch (error) {
        throw new Error(error);
    }
}

const deleteUser = async (id) => {
    try {
        return await userModel.findByIdAndDelete(id);
    } catch (error) {
        throw new Error(error);
    }
}

const updateUser = async (id, info) => {
    try {
        return await userModel.findByIdAndUpdate(id, info);
    } catch (error) {
        throw new Error(error);
    }
}

const suspendUser = async (id) => {
    try {
        return await userModel.findByIdAndUpdate(id, { suspended: true });
    } catch (error) {
        throw new Error(error);
    }
}

const unsuspendUser = async (id) => {
    try {
        return await userModel.findByIdAndUpdate(id, { suspended: false });
    } catch (error) {
        throw new Error(error);
    }
}



module.exports = { findUsers, findUserById, findUserByEmail, createUser, deleteUser, updateUser, suspendUser, unsuspendUser };