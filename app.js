const express = require('express')
const connectDB = require('./config/db')
const apppRoute = require('./routes/app')
const urlRoute = require('./routes/url')
const connnectDB = require('./config/db')
const app = express()
// connect to database
connectDB()

app.use(express.json({ extended: false }))
const PORT = 5000

app.use('/', apppRoute)
app.use('/api/url', urlRoute)

const server = app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})

process.on('unhandledRejection', (err, promise) => {
    console.log(`Logged Error: ${err}`)
    server.close(() => process.exit(1))
})
