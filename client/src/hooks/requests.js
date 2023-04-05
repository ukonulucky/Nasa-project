// const API_URL = 'v1';
const kepler_API = "http://localhost:5000/api"

// Load planets and return as JSON.
async function httpGetPlanets() {
  const response = await fetch(`${kepler_API}/plenet/getAllPlanets`)
  const data = await response.json()
  console.log(data)
  return await data
}

// Load launches, sort by flight number, and return as JSON.
async function httpGetLaunches() {
 const response = await fetch(`${kepler_API}/launches`)
 const data = await response.json()
 console.log("code ran and data gotten from httpGetLaunches", data)
 return data
//  .filter((a, b) => {
//   return  a.flightNumber - b.flightNumber
//  })
 
 
}

// Submit given launch data to launch system.
async function httpSubmitLaunch(launch) {
 try {
  console.log("this is the posted data", launch)
  return await fetch(`${kepler_API}/launches`, {
    method:"post",
    body: JSON.stringify(launch),
    headers: {
      'Content-Type': 'application/json'
    }
  })
 } catch (error) {
  return {
    ok:false
  }
 }
}

// Delete launch with given ID.
async function httpAbortLaunch(id) {
try {
  return await fetch(`${kepler_API}/launches/${id}`, {
    method:"delete"
  })
} catch (error) {
  return {
    ok:false
  }
}
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};