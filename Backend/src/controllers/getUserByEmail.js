const { findUserByEmail } = require("../services/userService")


const getUserByEmail = async (req, res) => {
    try {
        const { email } = req.query
        const user = await findUserByEmail(email)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = getUserByEmail