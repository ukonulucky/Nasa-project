const http = require('http');


const { planetModel } = require('./model/planet.model');
console.log("code ran 1")
const app = require('./app');




const server = http.createServer(app)

const PORT  = process.env.PORT || 8000


const readKeplerFileAndStartServrFunc = async () => {
    await planetModel()
    
    server.listen(PORT, () => {
        console.log(`server listening on port ${PORT}...`)
    })
}

readKeplerFileAndStartServrFunc()