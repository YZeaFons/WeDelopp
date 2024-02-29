const { createRevew } = require('../services/reviewService');

const postReviews = async (req, res) => {
  try {
    const { name, image, email, rating, message } = req.body;
    if (rating && message) {
      const form = await createRevew({
        name,
        email,
        image,
        rating,
        message,
      });

      res.status(200).json(form);
    } else {
      return res.status(403)
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

module.exports = postReviews;