const { habitablePlanet } = require("../../model/planet.model")


function getAllPlanets(req, res) {
  return res.status(200).json(habitablePlanet)
}



module.exports = {
  getAllPlanets
}