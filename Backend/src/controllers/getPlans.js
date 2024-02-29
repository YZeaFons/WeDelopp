const { findAllPlans } = require("../services/planServices")

const getPlans = async (req, res) => {
    try {
        const plans = await findAllPlans()

        res.status(200).json(plans)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = getPlans