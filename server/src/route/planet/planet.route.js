const express = require('express');
const { getAllPlanets } = require('./planet.controler');

const planetRouter = express.Router()

planetRouter.get("/getAllPlanets", getAllPlanets)


module.exports = {
    planetRouter
}