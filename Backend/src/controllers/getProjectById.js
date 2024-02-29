const { findProjectById } = require("../services/projectService")

const getProjectById = async(req, res) => {
  try {
    const {id} = req.params
    const proyectId = await findProjectById(id)
    res.status(200).json(proyectId)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = getProjectById