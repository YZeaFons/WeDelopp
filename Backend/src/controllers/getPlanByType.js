const { findPlanByType } = require("../services/planServices")

const getPlanByType = async (req, res) => {
    console.log(req.query)
try {
    const {type} = req.query
    const searchPlan = await findPlanByType(type)
    console.log('YEISON',searchPlan)
    res.status(200).json(searchPlan)
} catch (error) {
    res.status(500).json(error.message)
}
}

module.exports = getPlanByType