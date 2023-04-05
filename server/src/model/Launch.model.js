const launches = new Map()
let latestFlightNumber = 100
const launch = {
    upcoming: true,
    success:true,
    customer: ["ZTM","NASA"]
}


function addLaunch(){
    latestFlightNumber++
    console.log("this is the flight time", latestFlightNumber)
    return Object.assign(launch, {
        flightNumber: latestFlightNumber,
    })
   
    
  
}

function existingLaunchWithId(launchId){
    console.log("code ran in existing", launchId)
   const arrayFormed = Array.from(launches.values())
   console.log(arrayFormed)
 const data =  arrayFormed.find(i => i.flightNumber === +launchId)
console.log(data)
 return data
}


module.exports = {
    launches, 
    addLaunch,
    existingLaunchWithId
}