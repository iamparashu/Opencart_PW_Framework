import { expect, test } from "@playwright/test";

let AUTH_TOKEN = {
    Authorization : 'Bearer 52a5e3fc3d65f23338e4e9969420875801d858bdf9e7d0a58b87e5c8d2a57a75'
};

test('1 : Getting user list', async({request})=>{
let response =  await request.get('https://gorest.co.in//public/v2/users/8518660', {
        headers : AUTH_TOKEN
    })

    // console.log(response);
    let jsonResponse = await response.json();
    console.log(jsonResponse);

    console.log(response.status());
    console.log(response.statusText());
})

test('2 : Creating user in tht list', async({request})=>{
    
    //JS Object to JSON called as serialization, In automation tool will have auto serialization
    let user = {
        name: 'Test_Parashu',
        email: `Testp1_${Date.now()}@open.example`,
        gender: 'male',
        status: 'active'
    }
let response =  await request.post('https://gorest.co.in//public/v2/users', {
        headers : AUTH_TOKEN,
        data:user
    })

    // console.log(response);
    let jsonResponse = await response.json();
    console.log(jsonResponse);

    console.log(response.status());
    console.log(response.statusText());
})

test('3 : Updating created user in tht list', async({request})=>{
    
    //JS Object to JSON called as serialization, In automation tool will have auto serialization
    let user = {
        name: 'Test_Parashu',
        email: `Testp1_${Date.now()}@open.example`,
        gender: 'male',
        status: 'inactive'
    }
let response =  await request.put('https://gorest.co.in//public/v2/users/8518660', {
        headers : AUTH_TOKEN,
        data:user
    })

    // console.log(response);
    let jsonResponse = await response.json();
    console.log(jsonResponse);

    console.log(response.status());
    console.log(response.statusText());
})

test('4 : Deleting created user in tht list', async ({ request }) => {
    let response = await request.delete('https://gorest.co.in//public/v2/users/8518660', {
        headers: AUTH_TOKEN,
    })

    console.log(response.status());
    console.log(response.statusText());
})




