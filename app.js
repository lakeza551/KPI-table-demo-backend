const express = require('express')
const cors = require('cors')
const fs = require('fs')
const bodyParser = require('body-parser')
const createSummaryData = require('./utils/createSummaryData')
const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.post('/user-form-template', (req, res) => {
    const formTemplate = req.body
    fs.writeFile('./templates/user_data_template_1.json', JSON.stringify(formTemplate), err => {
        console.log('Template has been written.')
    })
    res.status(201).send('success')
})

app.post('/user-data', (req, res) => {
    const data = req.body
    fs.writeFile('./templates/user_data_1.json', JSON.stringify(data), err => {
        console.log('Data has been written.')
    })
    createSummaryData({}, [])
    res.status(201).send('success')
})

app.post('/summary-form-template', (req, res) => {
    const data = req.body
    fs.writeFile('./templates/summary_template_1.json', JSON.stringify(data), err => {
        console.log('Data has been written.')
    })
    res.status(201).send('success')
})

app.get('/summary-form-template', (req, res) => {
    fs.readFile('./templates/summary_template_1.json', (err, data) => {
        res.json(JSON.parse(data))
    })
})

app.get('/user-data', (req, res) => {
    fs.readFile('./templates/user_data_1.json', (err, data) => {
        res.json(JSON.parse(data))
    })
})

app.get('/user-form-template', (req, res) => {
    fs.readFile('./templates/user_data_template_1.json', (err, data) => {
        res.json(JSON.parse(data))
    })
})

app.listen(3001, () => {
    console.log("app is running on port 3001")
})