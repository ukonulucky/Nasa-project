const express = require('express')
const {getAllLaunches,addNewLaunch, abortLaunch}= require('./launch.controler')

const launchRouter = express.Router()


launchRouter.get('/launches', getAllLaunches)

launchRouter.post("/launches",addNewLaunch)
launchRouter.delete("/launches/:id",abortLaunch)

module.exports ={
    launchRouter
}
