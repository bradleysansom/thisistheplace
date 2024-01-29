const Student = require("../models/studentModel")
const mongoose = require('mongoose')

// get all students
const getStudents = async (req, res) => {
    const students = await Student.find({}).sort({ createdAt: -1 })

    res.status(200).json(students)
}


// get single student
const getStudent = async (req, res) => {
    const { id } = req.params


    if (!Number.isInteger(Number(id))) {
        return res.status(404).json({ error: "No such student - ID should be an eight digit number." })
    }

    const student = await Student.findById(id)

    if (!student) {
        return res.status(404).json({ error: "No such student." })
    }

    res.status(200).json(student)
}


// create new student
const createStudent = async (req, res) => {
    const { _id, firstName, lastName, studentEmail, personalEmail, password, instagramusername, twitterUsername, facebookUsername, behanceUsername, dribbleUsername, portfolioUrl, bio, personalSentenceText, personalSentenceImageUrl, personalPortraitUrl, personalIdentUrl } = req.body


    // add doc to db
    try {
        const student = await Student.create({ _id, firstName, lastName, studentEmail, personalEmail, password, instagramusername, twitterUsername, facebookUsername, behanceUsername, dribbleUsername, portfolioUrl, bio, personalSentenceText, personalSentenceImageUrl, personalPortraitUrl, personalIdentUrl })
        res.status(200).json(student)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


// delete a student
const deleteStudent = async (req, res) => {
    const { id } = req.params


    if (!Number.isInteger(Number(id))) {
        return res.status(404).json({ error: "No such student - ID should be an eight digit number." })
    }

    const student = await Student.findOneAndDelete({ _id: id })

    if (!student) {
        return res.status(404).json({ error: "No such student." })
    }

    res.status(200).json(student)

}

// update a student
const updateStudent = async (req, res) => {
    const { id } = req.params

    if (!Number.isInteger(Number(id))) {
        return res.status(404).json({ error: "No such student - ID should be an eight digit number." })
    }

    const student = await Student.findOneAndUpdate({ _id: id }, {
        ...req.body


    })
    if (!student) {
        return res.status(404).json({ error: "No such student." })
    }

    res.status(200).json(student)
}



module.exports = {
    getStudents,
    getStudent,
    createStudent,
    deleteStudent,
    updateStudent

}