import axios from 'axios'

const preferenceProvider = {

   async getPreferenceByEmail(email) {
        try {
            const getPreferenceByEmail = await axios(`/getpreference/email?email=${email}`)
            return getPreferenceByEmail.data
        } catch (error) {
            return error.message
        }
    },
}

export default preferenceProvider