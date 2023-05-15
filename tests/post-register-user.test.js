const { spec, request } = require('pactum');
const baseUrl = "https://reqres.in"

describe("register users endpoint test suite", () =>{

    before(()=>{
        request.setDefaultTimeout(5000)
    })
    
    it('register new user test', async () => {
        const requestBody = {
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        };
        
        await spec()
        .post(`${baseUrl}/api/register`)
        .withHeaders('Content-Type', 'application/json')
        .withBody(requestBody)
        .expectStatus(200)
        .expectResponseTime(5000);
    });

    it('try register new user test', async () => {
        const requestBody = {
            "email": "sydney@fife"
        };
        
        await spec()
        .post(`${baseUrl}/api/register`)
        .withHeaders('Content-Type', 'application/json')
        .withBody(requestBody)
        .expectStatus(400)
        .expectResponseTime(5000);
    });

    it('try register new user test', async () => {
        const requestBody = {
            "password": "pistol"
        };
        
        await spec()
        .post(`${baseUrl}/api/register`)
        .withHeaders('Content-Type', 'application/json')
        .withBody(requestBody)
        .expectStatus(400)
        .expectResponseTime(5000);
    });

    it('try register new user test', async () => {
        const requestBody = {
            
        };
        
        await spec()
        .post(`${baseUrl}/api/register`)
        .withHeaders('Content-Type', 'application/json')
        .withBody(requestBody)
        .expectStatus(400)
        .expectResponseTime(5000);
    });
});