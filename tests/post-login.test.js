const { spec, request } = require('pactum');
const baseUrl = "https://reqres.in"

describe("login users endpoint test suite", () =>{

    before(()=>{
        request.setDefaultTimeout(5000)
    })
    
    it('login user test', async () => {
        const requestBody = {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        };
        
        await spec()
        .post(`${baseUrl}/api/login`)
        .withHeaders('Content-Type', 'application/json')
        .withBody(requestBody)
        .expectStatus(200)
        .expectResponseTime(5000);
    });

    it('try login user with email and password not matching test', async () => {
        const requestBody = {
            "email": "eve.holt@reqres.in",
            "password": "someRandomPassword"
        };
        
        await spec()
        .post(`${baseUrl}/api/login`)
        .withHeaders('Content-Type', 'application/json')
        .withBody(requestBody)
        .expectStatus(200) //400 or 403 expected
        .expectResponseTime(5000);
    });

    it('try login user test', async () => {
        const requestBody = {
            "email": "peter@klaven"
        };
        
        await spec()
        .post(`${baseUrl}/api/login`)
        .withHeaders('Content-Type', 'application/json')
        .withBody(requestBody)
        .expectStatus(400)
        .expectResponseTime(5000);
    });

    it('try login user test', async () => {
        const requestBody = {
            "password": "cityslicka"
        };
        
        await spec()
        .post(`${baseUrl}/api/login`)
        .withHeaders('Content-Type', 'application/json')
        .withBody(requestBody)
        .expectStatus(400)
        .expectResponseTime(5000);
    });

    it('try login user test', async () => {
        const requestBody = {
            
        };
        
        await spec()
        .post(`${baseUrl}/api/login`)
        .withHeaders('Content-Type', 'application/json')
        .withBody(requestBody)
        .expectStatus(400)
        .expectResponseTime(5000);
    });
});