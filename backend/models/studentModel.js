const mongoose = require('mongoose')

const Schema = mongoose.Schema

const studentSchema = new Schema({
    _id: {
        type: Number,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    studentEmail: {
        type: String,
        required: true
    },
    personalEmail: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    instagramUsername: {
        type: String
    },
    twitterUsername: {
        type: String
    },
    linkedinUsername: {
        type: String
    },
    facebookUsername: {
        type: String
    },
    behanceUsername: {
        type: String
    },
    dribbleUsername: {
        type: String
    },
    portfolioUrl: {
        type: String
    },
    bio: {
        type: String
    },
    personalSentenceText: {
        type: String
    },
    personalSentenceImageUrl: {
        type: String
    },
    personalPortraitUrl: {
        type: String
    },
    personalIdentUrl: {
        type: String
    }




}, { timestamps: true })

module.exports = mongoose.model('Student', studentSchema)
