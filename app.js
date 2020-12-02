// app.js
const express = require('express')
const app = express()
const port = 3000

//models
let timeReceive = 0
let timeRespond = 0
let date = {}

//generate output
function getCurrentDate(DateByMs) {
  return `${DateByMs.getFullYear()}-${DateByMs.getMonth() + 1}-${DateByMs.getDate()} ${DateByMs.getHours()}:${DateByMs.getMinutes()}:${DateByMs.getSeconds()}`
}

function getMethodAndUrl(req) {
  return `${req.method} from ${req.url}`
}

function getTotalTime() {
  return `total time: ${timeRespond - timeReceive}ms`
}

//get request time
app.use(function (req, res, next) {
  timeReceive = Date.now()
  date = new Date(timeReceive)
  next()
})

//get respond time and print output
app.get('/', (req, res) => {
  res.send('列出全部 Todo')
  timeRespond = Date.now()
  console.log(`${getCurrentDate(date)} | ${getMethodAndUrl(req)} | ${getTotalTime()}`)
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
  timeRespond = Date.now()
  console.log(`${getCurrentDate(date)} | ${getMethodAndUrl(req)} | ${getTotalTime()}`)
})
 
app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
  timeRespond = Date.now()
  console.log(`${getCurrentDate(date)} | ${getMethodAndUrl(req)} | ${getTotalTime()}`)
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
  timeRespond = Date.now()
  console.log(`${getCurrentDate(date)} | ${getMethodAndUrl(req)} | ${getTotalTime()}`)
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})