const { spec, request } = require('pactum');
const baseUrl = "https://reqres.in"

describe("update users endpoint test suite", () =>{

    before(()=>{
        request.setDefaultTimeout(5000)
    })
    
    it('update existing user test', async () => {
        const requestBody = {
            "name": "morpheus",
            "job": "zion resident"
        };
        
        const postId = 2;

        await spec()
        .put(`${baseUrl}/api/users/${postId}`)
        .withHeaders('Content-Type', 'application/json')
        .withBody(requestBody)
        .expectStatus(200)
        .expectResponseTime(5000)
        .expectBodyContains('zion resident');
    });
});