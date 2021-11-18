const express = require('express')
const path = require('path')
const app = express()

// include and initialize the rollbar library with your access token


app.use('/css', express.static(path.join(__dirname, 'client/style.css')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
})
app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/style.css'))
})

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'a7d07b549daf4c7e8e85d2a91c535ee7',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

app.get('/morecats', (req, res) => {
    getAllTheCats()
})

const server = process.env.PORT || 4000
app.listen(server, () => console.log(`Server is running on ${server}`))