const express = require('express')
const getAllLaunches = require('./launch.controler')

const launchRouter = express.Router()


launchRouter.get('/launches', getAllLaunches)



module.exports ={
    launchRouter
}