const { spec, request } = require('pactum');

const baseUrl = "https://reqres.in"

describe("get all users list test suite", () =>{

    before(()=>{
        request.setDefaultTimeout(5000)
    })
    
    it('get all users test', async () => {  
        await spec()
        .get(`${baseUrl}/api/users`)
        .expectStatus(200)
        .expectResponseTime(5000)
        .expectBodyContains('Bluth');
    });

    it('get a single user test', async () => {  
        const postId = 2;

        await spec()
        .get(`${baseUrl}/api/users/${postId}`)
        .expectStatus(200)
        .expectResponseTime(5000)
        .expectBodyContains('To keep ReqRes free, contributions towards server costs are appreciated!');
    });

    it('try get a single user that does not exist test', async () => {  
        const postId = 23;

        await spec()
        .get(`${baseUrl}/api/users/${postId}`)
        .expectStatus(404)
        .expectResponseTime(5000);
    });

    it('try listing resources test', async () => {  
        
        await spec()
        .get(`${baseUrl}/api/unknown`)
        .expectStatus(200)
        .expectResponseTime(5000);
    });

    it('try listing a resource test', async () => {  
        const postId = 2;

        await spec()
        .get(`${baseUrl}/api/unknown/${postId}`)
        .expectStatus(200)
        .expectResponseTime(5000);
    });

    it('try listing a resource that does not exist test', async () => {  
        const postId = 23;

        await spec()
        .get(`${baseUrl}/api/unknown/${postId}`)
        .expectStatus(404)
        .expectResponseTime(5000);
    });

    it('get a delayed response test', async () => {  

        await spec()
        .get(`${baseUrl}/api/users?delay=3`)
        .expectStatus(200)
        .expectResponseTime(5000);
    });
})
