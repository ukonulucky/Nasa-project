const path = require("path")
const fs = require("fs")
const {parse} = require("csv-parse")
const habitablePlanet = []
function planetModel() {
    const checkHabitability = (planet) => {
        return planet["koi_disposition"] === "CONFIRMED" && parseFloat(planet["koi_insol"]) > parseFloat(0.36) && parseFloat(planet["koi_insol"]) < parseFloat(1.11) && parseFloat(planet["koi_prad"]) < parseFloat(1.6)
     }
   return new Promise((resolve, reject) => {
    const filePath = path.join(__dirname, "..", "..","data","kepler_data.csv")
    const fileRead =  fs.createReadStream(filePath).pipe(parse({
      comment: "#",
      columns: true
    }))
    fileRead.on("data", function(chunk){
    if(checkHabitability(chunk)){
        habitablePlanet.push(chunk)
    resolve()
    }
    })
    fileRead.on("error", function(err){
      console.log(err)
      reject(err)
    })
  
    fileRead.on("end", function(){
     console.log("file read complete")
    })
   })
}

module.exports = {
    habitablePlanet,
    planetModel
}