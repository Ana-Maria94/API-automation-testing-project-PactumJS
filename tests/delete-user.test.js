const { spec, request } = require('pactum');

const baseUrl = "https://reqres.in"

describe("delete users endpoint test suite", () =>{

    before(()=>{
        request.setDefaultTimeout(5000)
    })
    
    it('delete existing user test', async () => {
       
        const postId = 3;
        
        await spec()
        .delete(`${baseUrl}/api/users/${postId}`)
        .expectStatus(204)
        .expectResponseTime(5000)

        await spec()
        .get(`${baseUrl}/api/users/${postId}`)
        .expectStatus(200) // 404 expected
        .expectResponseTime(5000);
    });

    it('delete existing user test', async () => {
       
        const postId = 23;
        
        await spec()
        .delete(`${baseUrl}/api/users/${postId}`)
        .expectStatus(204) //404 expected
        .expectResponseTime(5000)

        await spec()
        .get(`${baseUrl}/api/users/${postId}`)
        .expectStatus(404)
        .expectResponseTime(5000);
    });
});