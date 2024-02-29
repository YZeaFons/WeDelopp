const { findProjectByCategory } = require("../services/projectService")

const getProjectByCategory = async (req, res) => {
    try {
        const { categories, page } = req.query
        const limit = 10
        const proyectsCategory = await findProjectByCategory(categories, page, limit)
        res.status(200).json(proyectsCategory)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = getProjectByCategory