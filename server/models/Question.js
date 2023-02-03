const { Schema, model } = require('mongoose');

const questionSchema = new Schema({
    question: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },

})

module.exports = { Question }