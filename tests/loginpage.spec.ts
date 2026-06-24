import { expect, test } from "@playwright/test";
import { LoginPage } from "../src/pages/LoginPage";
import { HomePage } from "../src/pages/HomePage";

//global variable

let loginPage : LoginPage;
let homePage : HomePage;

test.beforeEach(async({page})=>{
    loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    homePage = new HomePage(page);
})


test('login page logo test', async()=>{
    let flag = await loginPage.loginpageLogoExist();
    // expect(flag).toBe(true);
    expect(flag).toBeTruthy();
})

test('login page title test', async()=>{
    let loginTitle = await loginPage.loginpageTitle();
    expect(loginTitle).toBe('Account Login')
})

test('forgotten pwd link exist',async()=>{
    expect (await loginPage.forgotpwdlinkExist()).toBeTruthy();
})

test('login page dologin test', async({page})=>{
    await loginPage.doLogin('iamparashurama@gmail.com', 'Test@1234');
    expect(await homePage.homepageTitle()).toBe('My Account');
})