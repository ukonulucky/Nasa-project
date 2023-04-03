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
 return data.filter((a, b) => {
  return     a.flightNumber - b.flightNumber
 })
 
 
}

// Submit given launch data to launch system.
async function httpSubmitLaunch(launch) {
  // try {
  //   return await fetch(`${API_URL}/launches`, {
  //     method: "post",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(launch),
  //   });
  // } catch(err) {
  //   return {
  //     ok: false,
  //   };
  // }
}

// Delete launch with given ID.
async function httpAbortLaunch(id) {
  // try {
  //   return await fetch(`${API_URL}/launches/${id}`, {
  //     method: "delete",
  //   });
  // } catch(err) {
  //   console.log(err);
  //   return {
  //     ok: false,
  //   };
  // }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};