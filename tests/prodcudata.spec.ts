import { expect, test } from "../src/fixtures/pagefixtures";

test.beforeEach(async({loginPage})=>{
    await loginPage.gotoLoginPage();
    await loginPage.doLogin('iamparashurama@gmail.com', 'Test@1234');
})

test(`verifying product images count `, async({homePage, searchResultPage,prouctInfoPage})=>{
    await homePage.doSearch("macbook");
    await searchResultPage.selectProduct("MacBook Pro");
    expect(await prouctInfoPage.getproductImages()).toBe(4)
})

test('verifying product metadata Info', async({homePage, searchResultPage,prouctInfoPage})=>{
    await homePage.doSearch("macbook");
    await searchResultPage.selectProduct("MacBook Pro");
    let actualProductInfo = await prouctInfoPage.getProductDataInfo();
    console.log('actual prodcut info details',actualProductInfo );
    expect(actualProductInfo.get('ProductHeader')).toEqual('MacBook Pro');
})