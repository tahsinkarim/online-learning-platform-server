const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors());

const Port = process.env.Port || 5000;

const courses = require('./Data/courses.json')
const course = require('./Data/courseData.json')


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id
    const selectedCourse = course.find(e => e.course_id === id)
    res.send(selectedCourse)
})


app.listen(Port, () => {
  console.log(`Example app listening on port ${Port}`)
})

module.exports = app;