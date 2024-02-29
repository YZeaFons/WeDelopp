const { findReviewByRating } = require("../services/reviewService");

const getReviewByRating = async (req, res) => {
    try {
        const { rating, sortOrder, page } = req.query;
        const limit = 4;
        const reviewsByRating = await findReviewByRating(rating,sortOrder,page,limit);
        res.status(200).json(reviewsByRating);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = getReviewByRating;