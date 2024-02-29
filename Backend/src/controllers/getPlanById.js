const { findPlanById } = require("../services/planServices")

const getPlanById = async (req, res) => {
    try {
        console.log(req.query);
        const { id } = req.query
        const search = await findPlanById(id)
        console.log(search)
        res.status(200).json(search)
    } catch (error) {
        res.status(500).json(error.message)
    }

}

module.exports = getPlanById