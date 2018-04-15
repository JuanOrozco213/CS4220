const
    express = require('express'),
    path = require('path')

const
    app = express()

app.use(express.static(path.join(__dirname, '..', '/client')))

app.listen(8080)
