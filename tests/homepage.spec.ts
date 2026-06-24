import { expect, test } from "@playwright/test";
import { LoginPage } from "../src/pages/LoginPage";
import { HomePage } from "../src/pages/HomePage";


//global variable

let loginPage : LoginPage;
let homePage : HomePage;

test.beforeEach(async({page})=>{
    loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.doLogin('iamparashurama@gmail.com', 'Test@1234');
    homePage = new HomePage(page);
})


test('Home page Title Test', async()=>{
    let homeTitle = await homePage.homepageTitle();
    expect(homeTitle).toEqual('My Account');
})

test('Home page logout link Test', async()=>{
    expect (await homePage.logoutLinkExist()).toBeTruthy();
})

test('home page headers test', async()=>{
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

