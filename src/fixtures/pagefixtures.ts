import { test as BaseTest, expect } from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { HomePage } from "../pages/HomePage"
import { SearchResultPage } from "../pages/SearchResultPage"
import { CsvHelper } from '../utils/csvhelper';
import { ProudctInfoPage } from "../pages/ProductInfoPage";

//define type for page fixtures

type pageFixture = {
    loginPage : LoginPage,
    homePage : HomePage,
    searchResultPage : SearchResultPage,
    prouctInfoPage : ProudctInfoPage,
    testData: Record<string, string>[]
}

//BaseTest can extend pageFixtures

export let test = BaseTest.extend<pageFixture>({
    loginPage : async({page},use)=>{
        let loginPage = new LoginPage(page);
        await use(loginPage);
    },

    homePage : async({page},use)=>{
        let homePage = new HomePage(page);
        await use(homePage);
    },

    searchResultPage : async({page},use)=>{
        let searchResultPage = new SearchResultPage(page);
        await use(searchResultPage);
    },

    prouctInfoPage: async({page},use)=>{
        let prouctInfoPage = new ProudctInfoPage(page);
        await use(prouctInfoPage);
    },

    

    testData: async ({ }, use) => {
        let testData = CsvHelper.readCsv('src/data/loginData.csv');
        await use(testData);
    },

});

export {expect} from '@playwright/test';


