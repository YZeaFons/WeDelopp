import axios from 'axios'

const userProvider = {

    async getUsers() {
        try {
            const getUser = await axios('/users')
            return getUser.data
        } catch (error) {
            return error.message
        }
    },
    async createUser(user) {
        try {
            const createUser = await axios.post('/login', user)
            return createUser.data
        } catch (error) {
            console.error(error)
            return error.message
        }
    },

    async getUserByEmail(email) {
        try {
            const getUserEmail = await axios(`/users/email?email=${email}`)
            return getUserEmail.data
        } catch (error) {
            return error.message
        }
    },

    async postUserAdmin(userAdmin) {
        try {
            const newUserAdmin = await axios.post(`/admin`, userAdmin)
            return newUserAdmin.data
        } catch (error) {
            return error.message
        }
    },
    async putUser(info) {
        try {
            const newUserAdmin = await axios.put(`/users`, info)
            return newUserAdmin.data
        } catch (error) {
            return error.message
        }
    },

    async putUserPreference(info) {
        try {
            const newPreferenceUser = await axios.put(`/userPreference`, info)
            return newPreferenceUser.data
        } catch (error) {
            return error.message
        }
    },

    async bannedUser(id) {
        try {
            const newUserAdmin = await axios.put(`/userbanned/${id}`)
            return newUserAdmin.data
        } catch (error) {
            return error.message
        }
    },

    async unbannedUser(id) {
        try {
            const newUserAdmin = await axios.put(`/userbanned/${id}`)
            return newUserAdmin.data
        } catch (error) {
            return error.message
        }
    }

}

export default userProvider