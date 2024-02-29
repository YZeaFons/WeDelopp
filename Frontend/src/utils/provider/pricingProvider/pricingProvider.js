import axios from "axios"

const pricingProvider = {
    async createPreference(project) {
        try {
            const response = await axios.post('/createpreference', project)
            const { id } = response.data
            return id
        } catch (error) {
            console.log(error.message)
        }
    },
    async getPreference() {
        try {
            const allPreferences = await axios.get(`/preference`)
            return allPreferences.data
        } catch (error) {
            return error.message
        }
    },
    async getPreferenceById(obj) {
        try {
            const { data } = await axios.get(`/getpreference`, { params: obj })
            return data
        } catch (error) {
            return error.message
        }
    },
    async refreshPayment(obj) {
        try {
            console.log(obj);
            const { data } = await axios.get(`/refreshpayment`, { params: obj })
            return data
        } catch (error) {
            return error.message
        }
    },
}

export default pricingProvider