const { findAllPreference } = require("../services/preferenceService")

const getPreferences = async(req, res) => {
try {
    const preferences = await findAllPreference()

    res.status(200).json(preferences)

} catch (error) {
    res.status(500).json(error.message)
}
}

module.exports = getPreferences