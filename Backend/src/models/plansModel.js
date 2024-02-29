const { Schema, model } = require('mongoose')

const planSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});

const plansModel = model("plan", planSchema)

module.exports = plansModel