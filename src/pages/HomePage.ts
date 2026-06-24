import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage{

    //private locators
    
    private readonly logoutLink : Locator;
    private readonly allHeaders : Locator;
    private readonly searchField : Locator;
    private readonly searchIcon : Locator;
    private readonly user1 : Locator;


    //locators initilization through customer

    constructor(page:Page){
        super(page);
        this.logoutLink = page.getByRole('link', { name: 'Logout' });
        this.allHeaders = page.getByRole('heading', { level: 2 });
        this.searchField = page.getByRole('textbox', { name: 'Search' });
        this.searchIcon = page.locator('.btn.btn-default.btn-lg');
        this.user1 = page.getByRole('link', { name: 'user1' });
    }

    //Public behaviours/actions to be defined

    async homepageTitle(): Promise<string>{
        return this.page.title()
    }

    async logoutLinkExist():Promise<Boolean>{
        return await this.logoutLink.isVisible();
    }

    async allHeadersData(){
        return  await this.allHeaders.allInnerTexts();
    }
    
    async doSearch(searchkey:string){
        console.log(`seacrh key is ${searchkey}`);
        await this.searchField.fill(searchkey);
        await this.searchIcon.click();
    }









} 