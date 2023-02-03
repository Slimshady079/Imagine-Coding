const { Schema, model } = require('mongoose');

const questionSchema = new Schema({
    question: {
        type: String,
    },
    answer: {
        type: String
    },

})

module.exports = { Question }