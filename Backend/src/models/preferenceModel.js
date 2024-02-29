const { Schema, model } = require('mongoose')

const preferenceSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    emailMp: {
        type: String
    },
    cardName: {
        type: String
    },
    preferenceId: {
        type: String
    },
    payId: {
        type: Number
    },
    title: {
        type: String
    },
    amount: {
        type: Number
    },
    quote: {
        type: Object,
        default: {}
    },
    date_approved: {
        type: String
    },
    date_created: {
        type: String
    },
    status: {
        type: String
    },
    payment_method_id: {
        type: String
    },
    payment_type_id: {
        type: String,
    },
    payment_method_id: {
        type: String
    }
});

const preferenceModel = model("preference", preferenceSchema)

module.exports = preferenceModel