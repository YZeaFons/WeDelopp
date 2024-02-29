const { findPreferenceByEmail } = require("../services/preferenceService")


const getPreferenceByMail = async (req, res) => {
try {
    const {email} = req.query
    const search = await findPreferenceByEmail(email);
    res.status(200).json(search)
} catch (error) {
    res.status(500).json(error.message)
}
  
}

module.exports = getPreferenceByMail