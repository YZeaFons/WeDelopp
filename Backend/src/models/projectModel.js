const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const projectSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    images: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

projectSchema.plugin(mongoosePaginate)

const projectModel = model("project", projectSchema)

module.exports = projectModel