const reviewModel = require('../models/reviewModel');

const findReviews = async () => {
    try {
        return await reviewModel.find();
    } catch (error) {
        throw new Error(error);
    }
}

const findReviewsAll = async (sortOrder, page, limit) => {
    try {
        let options = {};
        if (sortOrder === "recent") {
            options = {
                page,
                limit,
                sort: { date: -1 }
            }
        } else {
            options = {
                page,
                limit,
                sort: { date: 1 }
            }
        }
        const response = await reviewModel.paginate({}, options);
        return response;
    } catch (error) {
        throw new Error(error);
    }
}

const findReviewByRating = async (rating, sortOrder, page, limit) => {
    try {
        let options = {};
        if (sortOrder === "recent") {
            options = {
                page,
                limit,
                sort: { date: -1 }
            }
        } else {
            options = {
                page,
                limit,
                sort: { date: 1 }
            }
        }
        const query = { rating };
        const response = await reviewModel.paginate(query, options);
        return response;
    } catch (error) {
        throw new Error(error);
    }
}

const createReview = async (form) => {
    try {
        const newUser = await reviewModel.create(form);
        return newUser;
    } catch (error) {
        throw new Error(error);
    }
}


module.exports = { findReviews, findReviewsAll, createReview, findReviewByRating };