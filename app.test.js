const supertest = require('supertest') // supertest is a framework that allows to easily test web APIs
const app = require('./app')
const request = supertest(app)

test('GET the root route and expects the 200 (ok) status code', async () => {
    await request.get('/').expect(200);
});

test('GET the root route and expects body of the response to contain "Hello world"', async () => {
    const response = await request.get('/')

    expect(response.text).toContain("Hello world")
});

test('GET the /about route and expect a non-empty text', async () => {
    const response = await request.get('/about').expect(200)

    expect(response.text.length).toBeGreaterThan(0)
    // or
    expect(response.text).toContain("about page...")
});

test('GET a route that does not exist and expect a 404 (Not Found) status code', async () => {
    await request.get('/route_that_does_not_exist').expect(404)
});

// Sum route tests
test('GET the sum api with the valid parameters and expect the correct 200 status code', async () => {
    await request.get('/api/operations/sum/3/5').expect(200)
});

test('GET the sum api with the valid parameters (3 and 5) and expect the correct result returned (8)', async () => {
    const response = await request.get('/api/operations/sum/3/5')
    console.log(`response.text = ${response.text}`);

    expect(Number(response.text)).toBe(8)
});

test('GET the sum api with the a valid first parameter and an invalid second parameter and expect the 400 (bad request) status code', async () => {
    await request.get('/api/operations/sum/3/second_parameter_is_not_a_number').expect(400)
});

test('GET the sum api with the a valid first parameter and a missing second parameter and expect the 404 (not found) status code, because that route does not exist', async () => {
    await request.get('/api/operations/sum/3/').expect(404)
    await request.get('/api/operations/sum/3').expect(404)
});

// Subtraction route tests
test('GET the subtract api with the valid parameters and expect the correct 200 status code', async () => {
    await request.get('/api/operations/subtract/5/3').expect(200)
});

test('GET the subtract api with the valid parameters (5,3) and expect the correct result returned (2)', async () => {
    const response = await request.get('/api/operations/subtract/5/3')
    console.log(`response.text = ${response.text}`);

    expect(Number(response.text)).toBe(2)
});

test('GET the subtract api with the a valid first parameter and an invalid second parameter and expect the 400 (bad request) status code', async () => {
    await request.get('/api/operations/subtract/3/second_parameter_is_not_a_number').expect(400)
});

test('GET the subtract api with the a valid first parameter and a missing second parameter and expect the 404 (not found) status code, because that route does not exist', async () => {
    await request.get('/api/operations/subtract/3/').expect(404)
    await request.get('/api/operations/subtract/3').expect(404)
});

test('should be listening', async () => {
    await request.get('/').expect(200);
});
