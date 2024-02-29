const { findReviewsAll } = require("../services/reviewService");

const getReviewsAll = async (req, res) => {
    try {
        const { sortOrder, page } = req.query;
        const limit = 4;
        const reviews = await findReviewsAll(sortOrder, page, limit);
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

module.exports = getReviewsAll;