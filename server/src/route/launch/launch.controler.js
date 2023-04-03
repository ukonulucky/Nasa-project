const launches = require("../../model/Launch.model");




function getAllLaunches(req,res) {
    // converting the javascript Map to Array
    const launchArray = Array.from(launches.values())
   res.status(200).json(launchArray) 
}


module.exports = getAllLaunches