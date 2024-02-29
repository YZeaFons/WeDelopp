const { findUsers } = require("../services/userService")

const getUsers = async (req, res) => {
    try {
        const users = await findUsers()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

module.exports = getUsers