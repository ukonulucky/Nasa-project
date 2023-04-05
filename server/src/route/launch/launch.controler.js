const { launches, launch, addLaunch, existingLaunchWithId } = require("../../model/Launch.model");

function getAllLaunches(req, res) {
  // converting the javascript Map to Array
  const launchArray = Array.from(launches.values());
  res.status(200).json(launchArray);
}

function addNewLaunch(req, res) {
  const { launchDate, rocket, target, mission } = req.body;
  let newDate = new Date(launchDate).toDateString();
  console.log(newDate);
  if (!launchDate || !rocket || !target || !mission) {
    return res.status(400).json({
      errorMessage: "launch missing credentials is required",
    });
  }
  if (newDate === "Invalid Date") {
    return res.status(400).json({
      errorMessage: "Invalid Date Format",
    });
  }

let  launch = addLaunch();
const newLaunch = {...launch, "mission":mission,  "launchDate":newDate,   "rocket":rocket, "target":target}

   launches.set(launch.flightNumber, newLaunch )
   console.log(launches)
  res.status(201).json(launch)
}

function abortLaunch(req, res) {
    const launchId = req.params.id

    if(!existingLaunchWithId(launchId))
    {
    return  res.status(404).json({
        error:"Launch Not Found"
      })
     }
   const abortedLaunch =  launches.get(+launchId)
   abortedLaunch.success = false
   abortedLaunch.upcoming = false
   res.status(200).json(abortedLaunch)
}

module.exports = {
  getAllLaunches,
  addNewLaunch,
  abortLaunch
};
