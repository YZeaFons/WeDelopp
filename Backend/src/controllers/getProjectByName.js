const { findProjectByName } = require("../services/projectService")

const getProjectByName = async (req, res) => {
    try {
        const { name } = req.query
        const projectName = await findProjectByName(name)
        res.status(200).json(projectName)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = getProjectByName