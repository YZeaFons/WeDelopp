const { findAllProjects } = require("../services/projectService")


const getAllProjects = async (req, res) => {
    try {
        const form = await findAllProjects()
        res.status(200).json(form)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

module.exports = getAllProjects