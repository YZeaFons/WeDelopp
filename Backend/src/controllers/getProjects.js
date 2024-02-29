const { findProject } = require("../services/projectService")


const getProjects = async(req, res) => {
try {
    let page = req.query.page
    const limit = 9
    const form = await findProject(page, limit)
    res.status(200).json(form)
} catch (error) {
    res.status(500).send({ error: error.message })
}
}

module.exports = getProjects