import { json } from "stream/consumers";
import { expect, test } from "../src/fixtures/pagefixtures";
import { CsvHelper } from '../src/utils/csvhelper';
import { JsonHelper } from "../src/utils/JsonHelper";

test.beforeEach(async({loginPage})=>{
    await loginPage.gotoLoginPage();
})

test('login page logo test', async({loginPage})=>{
    let flag = await loginPage.loginpageLogoExist();
    // expect(flag).toBe(true);
    expect(flag).toBeTruthy();
})

test('login page title test', async({loginPage})=>{
    let loginTitle = await loginPage.loginpageTitle();
    expect(loginTitle).toBe('Account Login')
})

test('forgotten pwd link exist',async({loginPage})=>{
    expect (await loginPage.forgotpwdlinkExist()).toBeTruthy();
})

test('login page dologin test', async({loginPage,homePage})=>{
    console.log('username is ', process.env.APPUSERNAME );
    console.log('password is ', process.env.APPPASSWORD );
    await loginPage.doLogin(process.env.APPUSERNAME!, process.env.APPPASSWORD!);
    expect(await homePage.homepageTitle()).toBe('My Account');
})

//DD_1. sequence mode -- only 1 test is running with test data one by one using testData from fixture
// test('login to app using wrong credentials with Data driven test', async ({ loginPage, testData }) => {
//     for (let row of testData) {
//         await loginPage.doLogin(row.username, row.password);
//         expect(await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();
//     }
// });


// //DD_2: without fixtures, parallel mode. read csv data directly and loop the test method row wise...
// let testData = CsvHelper.readCsv('src/data/loginData.csv');
// for (let row of testData) {
//     test(`invalid login test with - ${row.username} - ${row.password}`, async ({ loginPage }) => {
//         await loginPage.doLogin(row.username, row.password);
//         expect(await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();
//     });
// };



// let testDataJson = JsonHelper.readJson('src/data/loginData.json');
// for (let row of testDataJson) {
//     test(`invalid login test with - ${row.username}`, async ({ loginPage }) => {
//         await loginPage.doLogin(row.username, row.password);
//         expect(await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();
//     });
// };