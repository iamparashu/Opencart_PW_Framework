import { expect, test } from "../src/fixtures/pagefixtures";
import { CsvHelper } from '../src/utils/csvhelper';

test.beforeEach(async({loginPage})=>{
    await loginPage.gotoLoginPage();
    await loginPage.doLogin('iamparashurama@gmail.com', 'Test@1234');
})



let testData = CsvHelper.readCsv('src/data/searchdata.csv');
for (let row of testData) {
    test(`Searching product count Test ${row.searchkey} - ${row.productkey}`, async ({ homePage, searchResultPage }) => {
        await homePage.doSearch(row.searchkey);
        expect(await searchResultPage.searckKeyCount()).toBe(Number(row.resultcount));
    })
}

for (let row of testData) {
    test(`verifying landing of product page Test ${row.searchkey} - ${row.productkey}`, async({homePage, searchResultPage, page})=>{
    await homePage.doSearch(row.searchkey);
    await searchResultPage.selectProduct(row.productkey);
    expect(await page.title()).toEqual(row.productkey);
})
}

