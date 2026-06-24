import { expect, test } from "../src/fixtures/pagefixtures";

test.beforeEach(async({loginPage})=>{
    await loginPage.gotoLoginPage();
    await loginPage.doLogin('iamparashurama@gmail.com', 'Test@1234');
})


test('Home page Title Test', async({homePage})=>{
    let homeTitle = await homePage.homepageTitle();
    expect(homeTitle).toEqual('My Account');
})

test('Home page logout link Test', async({homePage})=>{
    expect (await homePage.logoutLinkExist()).toBeTruthy();
})

test('home page headers test', async({homePage})=>{
    let headersData = await homePage.allHeadersData();
    console.log('all headers from Home page', headersData);
    expect.soft(headersData).toHaveLength(4);
    expect.soft(headersData).toEqual([
        'My Account',
        'My Orders',
        'My Affiliate Account',
        'Newsletter'
    ])

})

