const { findReviews } = require("../services/reviewService");

const getReviews = async (req, res) => {
    try {
        const reviews = await findReviews();
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

module.exports = getReviews;