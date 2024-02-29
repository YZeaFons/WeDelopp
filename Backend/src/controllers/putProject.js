const { updateProject } = require("../services/projectService")

const putProject = async (req, res) => {
    try {
        const { _id, name, category, images, description } = req.body
        const response = await updateProject(_id, {
            name,
            images,
            description,
            category
        })

        res.status(200).json(response)

    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

module.exports = putProject
