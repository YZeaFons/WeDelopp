import axios from "axios"

const planProvider = {
    async getPlans() {
        try {
            const response = await axios.get('/plans')
            console.log('esto es response', response);
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    },

    async putPlan(plan) {
        try {
            const response = await axios.put('/plans', plan)
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    },

    async getPlanByType(type) {
        try {
            const response = await axios.get('/planstype', { params: { type } })
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    },

    async getDolar() {
        try {
            const dolis = await axios('https://dolarapi.com/v1/dolares/oficial')
            return dolis.data.venta
        } catch (error) {
            console.log(error.message)
        }
    },
    async getPlanById(obj) {
        try {
            const { data } = await axios.get(`/getplanbyid`, { params: obj })
            return data
        } catch (error) {
            return error.message
        }
    },
}

export default planProvider