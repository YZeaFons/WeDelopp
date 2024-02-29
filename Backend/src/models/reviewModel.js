const { Schema, model } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');


const reviewSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  image: {
    type: String,
  },
  rating: {
    type: Number,
    default: 5
  },
  message: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
});

reviewSchema.plugin(mongoosePaginate)

const reviewModel = model("reviews", reviewSchema)

module.exports = reviewModel;