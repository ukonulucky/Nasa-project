const request = require("supertest")
const app = require("../../app")

describe("Test GET /launches", function () {
test("It should respond with 200 success", async() => {
    const response = await request(app).get("/api/launches").expect("Content-Type", /json/).expect(200)
})
})

describe("Test POST /launches", function () {
    const completeRequestWithDate = {
        launchDate: "Jan 12, 2018",
        rocket: "ddd",
        target:"sddf",
        mission:"mission 44"
    }

    const completeRequestWithOutDate = {
        rocket: "ddd",
        target:"sddf",
        mission:"mission 44"
    }
    test("it should respond with 201 success", async() => {
 const response = await request(app)
 .post("/api/launches")
 .send(completeRequestWithDate)
 .expect(201)
    })
    test("It should catch missing required properties", async() => {
const response = await request(app)
.post("/api/launches")
.send(completeRequestWithDate)

const dateOptained = new Date(response.body.launchDate).valueOf()
const datePassed = new Date(completeRequestWithDate.launchDate).valueOf()
expect(dateOptained).toBe(datePassed)
expect(completeRequestWithDate).toMatchObject(completeRequestWithOutDate)
 })
    test("it should catch invalid dates", () => {})
})