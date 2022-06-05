const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 5000

const tea = {
    "chai" : {
        color: "black",
        additives: "spices",
        temp: "hot or cold"
    },
    'unknown': {

    }
}

app.use(cors)

app.get('/', (request,response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const teaName = request.params.name.toLowerCase()
    if (tea[teaName]) {
        response.jason(tea[teaName])
    } else {
        response.json(tea['unknown'])
    }
})



app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}. Betta catch it!`)
})