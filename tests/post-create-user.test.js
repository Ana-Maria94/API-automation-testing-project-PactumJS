const { spec, request } = require('pactum');
const baseUrl = "https://reqres.in"

describe("create users endpoint test suite", () =>{

    before(()=>{
        request.setDefaultTimeout(5000)
    })
    
    it('create new user test', async () => {
        const requestBody = {
            "name": "morpheus",
            "job": "leader"
        };
        
        await spec()
        .post(`${baseUrl}/api/users`)
        .withHeaders('Content-Type', 'application/json')
        .withBody(requestBody)
        .expectStatus(201)
        .expectResponseTime(5000)
        .expectBodyContains('leader');
    });

    it('try create new user test', async () => {
        const requestBody = {
            
        };
        
        await spec()
        .post(`${baseUrl}/api/users`)
        .withHeaders('Content-Type', 'application/json')
        .withBody(requestBody)
        .expectStatus(201) // 400 expected
        .expectResponseTime(5000);
    });
});